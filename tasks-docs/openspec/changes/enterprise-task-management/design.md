## Context

Đây là hệ thống mới, chưa có codebase triển khai. Tài liệu khám phá `tasks-docs/design.html` ghi lại các quyết định phạm vi (xem `proposal.md` cho lý do). Thiết kế này tập trung vào mô hình dữ liệu, phân quyền, và các quyết định kỹ thuật cần thống nhất trước khi chia task, không đi vào chọn framework/thư viện cụ thể.

## Goals / Non-Goals

**Goals:**
- Xác định data model đủ để 5 capability (org-management, task-assignment, approval-workflow, comments-notifications, department-dashboard) triển khai nhất quán với nhau.
- Xác định luật phân quyền (ai làm gì, trên phạm vi nào) một cách rõ ràng, tránh mỗi capability tự diễn giải khác nhau.
- Xác định cơ chế thông báo polling và ràng buộc kéo-thả Kanban để tránh phá vỡ workflow phê duyệt.

**Non-Goals:**
- Không chọn tech stack cụ thể (ngôn ngữ, framework, database engine) — để lại cho giai đoạn triển khai.
- Không thiết kế tích hợp HR/AD/SSO ngoài (đã loại khỏi phạm vi ở proposal).
- Không thiết kế kênh email/SMS hay hạ tầng realtime (ngoài phạm vi MVP).
- Không thiết kế báo cáo xuyên phòng ban / cấp trên trưởng phòng.

## Decisions

### 1. Data model

```
Department (id, name)
User (id, name, role: admin|manager|employee, department_id nullable cho admin)
Task (
  id, title, description,
  priority: cao|trung|thap,
  status: can_lam|dang_lam|cho_duyet|hoan_thanh,
  due_date,
  department_id,       -- suy ra từ assignee, dùng để lọc dashboard
  created_by,           -- = approver mặc định, không đổi được
  assignee_id
)
StatusHistory (id, task_id, from_status, to_status, actor_id, reason nullable, created_at)
Comment (id, task_id, author_id, body, mentions: User[], created_at)
Notification (id, recipient_id, type, task_id, message, read_at nullable, created_at)
```

Lý do: `created_by` đóng vai trò approver cố định (theo quyết định "người duyệt luôn là người giao việc"), nên không cần trường `approver_id` riêng — giảm một nguồn có thể lệch dữ liệu. `department_id` trên Task được set tại thời điểm tạo từ department của assignee, dùng trực tiếp để lọc dashboard mà không cần join qua User mỗi lần truy vấn.

**Thay thế đã cân nhắc**: thêm `approver_id` tách biệt để hỗ trợ "chỉ định người duyệt khác" — bị loại vì proposal đã chốt approver = creator, thêm trường này tạo ra khả năng không dùng, vi phạm nguyên tắc không thiết kế cho nhu cầu giả định.

### 2. Phân quyền theo vai trò và phạm vi

| Hành động | Admin | Trưởng phòng | Nhân viên |
|---|---|---|---|
| Tạo/sửa/xoá phòng ban, gán nhân viên | ✓ | ✗ | ✗ |
| Tạo/giao task trong phòng ban mình quản lý | ✗ | ✓ (chỉ phòng mình) | ✗ |
| Chuyển Cần làm → Đang làm, Đang làm → Chờ duyệt | ✗ | ✗ | ✓ (chỉ task được giao) |
| Duyệt / trả lại (Chờ duyệt → Hoàn thành / Đang làm) | ✗ | ✓ (chỉ task mình tạo) | ✗ |
| Xem dashboard phòng ban | ✗ | ✓ (chỉ phòng mình) | ✗ |
| Comment / @mention | ✓ | ✓ | ✓ |

Việc kiểm tra "phạm vi phòng ban mình quản lý" thực hiện bằng cách so `task.department_id` (hoặc `department.manager_id`) với người thực hiện thao tác — áp dụng thống nhất ở mọi capability liên quan đến task, không chỉ ở task-assignment.

### 3. Ràng buộc kéo-thả Kanban

View Kanban (tuỳ chọn bên cạnh List mặc định) chỉ cho phép kéo-thả tới cột hợp lệ theo đúng bảng phân quyền ở trên — ví dụ Nhân viên chỉ được kéo "Đang làm" → "Chờ duyệt", không được kéo thẳng sang "Hoàn thành". UI validate ở client để phản hồi tức thì, nhưng server-side vẫn phải chặn lại (không tin tưởng client) vì đây là ràng buộc nghiệp vụ, không phải chỉ là UX.

### 4. Thông báo qua polling

Client polling định kỳ (đề xuất: 30 giây, hoặc khi tab được focus lại) một endpoint trả về số thông báo chưa đọc + danh sách gần nhất. Không dùng WebSocket/SSE vì ngữ cảnh là công cụ quản lý công việc nội bộ, độ trễ vài chục giây không ảnh hưởng nghiệp vụ (đã xác nhận trong explore), và polling đơn giản hoá đáng kể hạ tầng cho MVP.

### 5. Tính "quá hạn" — computed, không lưu trữ như một status

`is_overdue` được tính tại thời điểm truy vấn (`due_date < now() AND status != hoan_thanh`), không lưu như một giá trị status riêng trong DB. Lý do: tránh job nền phải quét và cập nhật trạng thái theo thời gian thực; giữ status là nguồn sự thật duy nhất cho workflow chính, còn "quá hạn" là thuộc tính phái sinh hiển thị ở mọi nơi cần (List, Kanban, Dashboard).

## Risks / Trade-offs

- **[Risk]** Polling định kỳ có thể tạo tải không cần thiết khi số lượng người dùng tăng → **Mitigation**: endpoint polling trả về nhẹ (chỉ đếm + N thông báo gần nhất), có thể tăng chu kỳ polling nếu cần.
- **[Risk]** `created_by` = approver cố định có thể không đủ linh hoạt nếu sau này cần uỷ quyền duyệt (trưởng phòng nghỉ phép) → **Mitigation**: đã xác nhận ngoài phạm vi MVP; nếu phát sinh, thêm delta spec riêng cho approval-workflow thay vì mở rộng ngay bây giờ.
- **[Risk]** Kiểm tra phạm vi phòng ban lặp lại ở nhiều capability (task-assignment, approval-workflow, department-dashboard) có nguy cơ lệch logic nếu mỗi nơi tự implement → **Mitigation**: dùng chung một quy tắc kiểm tra quyền theo `department_id` như mô tả ở Decision 2, áp dụng nhất quán khi triển khai.

## Migration Plan

Hệ thống mới hoàn toàn — không có dữ liệu hoặc người dùng hiện hữu cần di trú. Triển khai lần đầu: seed một tài khoản Admin, sau đó Admin tạo phòng ban và gán nhân viên qua `org-management` trước khi các capability khác có dữ liệu để hoạt động.

## Open Questions

- Có cần gắn nhãn/loại công việc (tag/category), hay chỉ dùng priority là đủ phân loại cho MVP?
- @mention trong comment giới hạn trong cùng phòng ban, hay cho phép mention bất kỳ ai trong công ty?
- Có cần export báo cáo (CSV/Excel) từ dashboard phòng ban?
