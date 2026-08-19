## Why

Doanh nghiệp nhiều phòng ban hiện chưa có công cụ tập trung để giao việc, xác nhận hoàn thành, và theo dõi tiến độ theo từng phòng ban. Trưởng phòng không có cái nhìn tổng quan về khối lượng công việc và các việc quá hạn của nhân viên, còn nhân viên thiếu một nơi duy nhất để biết mình cần làm gì và trạng thái được duyệt ra sao.

## What Changes

- Thêm mô hình tổ chức tự quản lý trong app: phòng ban và nhân viên do Admin tạo/gán, không tích hợp hệ thống HR ngoài.
- Thêm 3 vai trò: Admin, Trưởng phòng, Nhân viên — Trưởng phòng chỉ giao việc và duyệt việc trong phạm vi phòng ban mình quản lý.
- Thêm luồng công việc có bước phê duyệt: Cần làm → Đang làm → Chờ duyệt → Hoàn thành, có thể trả lại (Chờ duyệt → Đang làm) kèm lý do bắt buộc. Người duyệt luôn là người đã giao việc.
- Thêm cờ "quá hạn" tính song song từ `due_date`, không phải một trạng thái riêng trong chuỗi chính.
- Thêm comment đầy đủ trên từng task, hỗ trợ @mention, tách biệt với audit trail (lịch sử đổi trạng thái tự sinh).
- Thêm thông báo in-app (chuông, badge chưa đọc), cập nhật bằng polling định kỳ — không có email/SMS ở MVP này.
- Thêm dashboard theo phòng ban cho Trưởng phòng: tổng số việc, đang làm, quá hạn, chờ duyệt, và khối lượng theo từng nhân viên.
- Thêm giao diện "Việc của tôi" cho Nhân viên: view List mặc định, có toggle sang Kanban (kéo-thả bị giới hạn theo quyền, không cho vượt qua bước duyệt).
- Thiết kế web responsive, tối ưu riêng thao tác duyệt/xem thông báo trên di động cho Trưởng phòng.

## Capabilities

### New Capabilities
- `org-management`: Admin tạo/sửa phòng ban, gán nhân viên và trưởng phòng vào từng phòng ban.
- `task-assignment`: Tạo, sửa, phân loại (priority, due date) và giao việc trong phạm vi một phòng ban.
- `approval-workflow`: Chuyển trạng thái công việc qua các bước Cần làm/Đang làm/Chờ duyệt/Hoàn thành, phê duyệt hoặc trả lại bởi người giao việc, và tính cờ quá hạn.
- `comments-notifications`: Comment có @mention trên task, và thông báo in-app theo bảng ánh xạ sự kiện → người nhận.
- `department-dashboard`: Dashboard tổng hợp theo phòng ban cho Trưởng phòng (số liệu tổng quan + khối lượng theo nhân viên).

### Modified Capabilities
(none — đây là hệ thống mới, chưa có capability nào tồn tại trước đó)

## Impact

- Hệ thống mới hoàn toàn: chưa có codebase triển khai (tài liệu khám phá tại `tasks-docs/design.html` là đầu vào cho proposal này).
- Cần thiết kế data model cho Department, User, Task, StatusHistory, Comment, Notification (xem `design.md`).
- Cần cơ chế phân quyền theo vai trò (Admin / Trưởng phòng / Nhân viên) và theo phạm vi phòng ban.
- Cần cơ chế polling định kỳ cho thông báo in-app (không cần hạ tầng realtime/email ở giai đoạn này).
