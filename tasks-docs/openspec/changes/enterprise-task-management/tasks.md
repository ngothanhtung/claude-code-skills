## 1. Nền tảng dữ liệu & phân quyền

- [ ] 1.1 Khởi tạo project và cấu trúc module theo tech stack đã chọn
- [ ] 1.2 Tạo schema/migration cho Department, User, Task, StatusHistory, Comment, Notification theo `design.md` Decision 1
- [ ] 1.3 Cài đặt cơ chế xác thực và vai trò (Admin / Trưởng phòng / Nhân viên)
- [ ] 1.4 Cài đặt hàm kiểm tra quyền dùng chung theo `department_id` (dùng lại ở mọi capability liên quan đến task, theo `design.md` Decision 2)
- [ ] 1.5 Seed một tài khoản Admin khởi tạo (theo Migration Plan trong `design.md`)

## 2. Org Management

- [ ] 2.1 API/thao tác tạo, sửa, xoá phòng ban (chặn xoá khi còn nhân viên)
- [ ] 2.2 API/thao tác gán nhân viên vào phòng ban
- [ ] 2.3 API/thao tác chỉ định vai trò Trưởng phòng cho nhân viên trong phòng ban
- [ ] 2.4 Giới hạn toàn bộ thao tác ở mục 2 chỉ cho vai trò Admin
- [ ] 2.5 Màn hình quản trị tổ chức (danh sách phòng ban, danh sách nhân viên theo phòng ban) cho Admin

## 3. Task Assignment

- [ ] 3.1 API/thao tác tạo task (title bắt buộc, priority, due date, description tuỳ chọn)
- [ ] 3.2 API/thao tác giao task cho nhân viên trong cùng phòng ban Trưởng phòng quản lý, set `department_id` và `created_by`
- [ ] 3.3 Chặn giao việc xuyên phòng ban bằng hàm kiểm tra quyền dùng chung (mục 1.4)
- [ ] 3.4 API/thao tác chỉnh sửa task chưa hoàn thành (title, mô tả, priority, due date, đổi assignee trong cùng phòng ban)
- [ ] 3.5 Form tạo/sửa task cho Trưởng phòng

## 4. Approval Workflow

- [ ] 4.1 Cài đặt state machine trạng thái task: Cần làm → Đang làm → Chờ duyệt → Hoàn thành, và Chờ duyệt → Đang làm (trả lại)
- [ ] 4.2 Chặn mọi chuyển trạng thái không hợp lệ ở tầng server (không chỉ UI)
- [ ] 4.3 API/thao tác nhân viên chuyển Cần làm → Đang làm, Đang làm → Chờ duyệt
- [ ] 4.4 API/thao tác approver (= `created_by`) duyệt (→ Hoàn thành) hoặc trả lại (→ Đang làm, bắt buộc nhập lý do)
- [ ] 4.5 Ghi StatusHistory cho mọi lần chuyển trạng thái (actor, from/to, reason nếu có)
- [ ] 4.6 Cài đặt thuộc tính "quá hạn" dạng computed (`due_date < now() AND status != hoan_thanh`) theo `design.md` Decision 5
- [ ] 4.7 Hiển thị cờ quá hạn nhất quán trên List, Kanban, Dashboard

## 5. Comments & Notifications

- [ ] 5.1 API/thao tác thêm comment vào task, lưu tách biệt với StatusHistory
- [ ] 5.2 Cài đặt @mention trong comment (chọn người dùng, lưu danh sách mentions)
- [ ] 5.3 Cài đặt notification engine sinh Notification theo bảng sự kiện → người nhận trong `specs/comments-notifications/spec.md`
- [ ] 5.4 API endpoint trả về số thông báo chưa đọc + danh sách gần nhất, phục vụ polling
- [ ] 5.5 Client polling định kỳ (~30s / khi tab focus) cập nhật chuông thông báo, theo `design.md` Decision 4
- [ ] 5.6 UI chuông thông báo: badge chưa đọc, dropdown/list, đánh dấu đã đọc khi mở, điều hướng đến task khi click

## 6. Department Dashboard

- [ ] 6.1 API tổng hợp số liệu theo phòng ban: tổng, đang làm, quá hạn, chờ duyệt
- [ ] 6.2 API khối lượng công việc theo từng nhân viên trong phòng ban (tỷ lệ hoàn thành, cờ có việc quá hạn)
- [ ] 6.3 Giới hạn dashboard chỉ hiển thị dữ liệu phòng ban Trưởng phòng đang quản lý (dùng hàm kiểm tra quyền mục 1.4)
- [ ] 6.4 Màn hình dashboard: stat cards + bảng tiến độ theo nhân viên (theo mock trong `tasks-docs/design.html`)

## 7. Giao diện "Việc của tôi" & Kanban

- [ ] 7.1 View List mặc định cho Nhân viên: lọc/sort theo trạng thái, priority, due date
- [ ] 7.2 View Kanban tuỳ chọn (toggle từ List), cột theo trạng thái
- [ ] 7.3 Ràng buộc kéo-thả Kanban chỉ cho phép chuyển tới cột hợp lệ theo vai trò (theo `design.md` Decision 3), validate cả client lẫn server
- [ ] 7.4 Màn hình chi tiết task: hiển thị nút hành động khác nhau theo vai trò (Nhân viên: báo hoàn thành; Trưởng phòng: duyệt/trả lại), khu vực comment/@mention

## 8. Responsive & Mobile

- [ ] 8.1 Đảm bảo layout List/Kanban/Dashboard responsive trên di động
- [ ] 8.2 Thiết kế riêng luồng duyệt/trả lại trên mobile (nút lớn, thao tác một tay)
- [ ] 8.3 Màn hình danh sách thông báo tối ưu cho mobile, truy cập nhanh

## 9. Kiểm thử & Xác minh

- [ ] 9.1 Test các ràng buộc phân quyền theo phòng ban (không giao/xem xuyên phòng ban)
- [ ] 9.2 Test state machine: mọi chuyển trạng thái hợp lệ/không hợp lệ theo `specs/approval-workflow/spec.md`
- [ ] 9.3 Test tính toán cờ quá hạn ở các mốc thời gian biên (đúng hạn, quá hạn, đã hoàn thành)
- [ ] 9.4 Test notification sinh đúng người nhận cho từng loại sự kiện theo bảng trong `specs/comments-notifications/spec.md`
- [ ] 9.5 Kiểm tra thủ công toàn bộ luồng chính trên trình duyệt di động: giao việc → nhận việc → báo hoàn thành → duyệt
