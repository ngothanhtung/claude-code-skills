## Purpose

Cho phép Trưởng phòng tạo và giao công việc cho nhân viên trong phạm vi phòng ban mình quản lý, với đầy đủ thông tin ưu tiên và hạn hoàn thành.

## ADDED Requirements

### Requirement: Trưởng phòng tạo và giao việc trong phòng ban
Hệ thống SHALL cho phép Trưởng phòng tạo một công việc mới và giao (assign) cho một nhân viên thuộc cùng phòng ban mà Trưởng phòng đó quản lý.

#### Scenario: Giao việc cho nhân viên trong phòng ban
- **WHEN** Trưởng phòng tạo một task và chọn một nhân viên thuộc phòng ban mình làm assignee
- **THEN** hệ thống tạo task ở trạng thái "Cần làm", gán assignee, và ghi nhận Trưởng phòng đó là người tạo/người duyệt (approver) của task

#### Scenario: Từ chối giao việc xuyên phòng ban
- **WHEN** Trưởng phòng cố gắng giao việc cho một nhân viên không thuộc phòng ban mình quản lý
- **THEN** hệ thống từ chối thao tác với lỗi ngoài phạm vi phòng ban

### Requirement: Thông tin bắt buộc của công việc
Mỗi công việc SHALL có tiêu đề, mức độ ưu tiên (cao/trung bình/thấp), và hạn hoàn thành (due date); mô tả chi tiết là tuỳ chọn.

#### Scenario: Tạo task thiếu tiêu đề
- **WHEN** Trưởng phòng cố gắng tạo task không có tiêu đề
- **THEN** hệ thống từ chối lưu và báo lỗi thiếu trường bắt buộc

#### Scenario: Tạo task đầy đủ thông tin
- **WHEN** Trưởng phòng nhập tiêu đề, chọn mức ưu tiên, và chọn hạn hoàn thành hợp lệ (ngày trong tương lai hoặc hôm nay)
- **THEN** hệ thống lưu task với đầy đủ các trường đó

### Requirement: Chỉnh sửa công việc chưa hoàn thành
Hệ thống SHALL cho phép Trưởng phòng chỉnh sửa tiêu đề, mô tả, ưu tiên, hạn hoàn thành, hoặc đổi assignee (trong cùng phòng ban) của một task chưa ở trạng thái "Hoàn thành".

#### Scenario: Đổi hạn hoàn thành của task đang làm
- **WHEN** Trưởng phòng cập nhật due date của một task đang ở trạng thái "Đang làm"
- **THEN** hệ thống lưu hạn mới và tính lại cờ quá hạn dựa trên giá trị mới
