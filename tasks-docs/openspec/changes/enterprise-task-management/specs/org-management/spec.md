## Purpose

Cho phép Admin thiết lập và duy trì cơ cấu tổ chức nội bộ (phòng ban, nhân viên, trưởng phòng) làm nền tảng cho việc giao việc và phân quyền trong toàn hệ thống.

## ADDED Requirements

### Requirement: Admin quản lý phòng ban
Hệ thống SHALL cho phép người dùng có vai trò Admin tạo, sửa, và xoá phòng ban.

#### Scenario: Tạo phòng ban mới
- **WHEN** Admin tạo một phòng ban với tên hợp lệ
- **THEN** hệ thống lưu phòng ban mới và hiển thị trong danh sách phòng ban

#### Scenario: Xoá phòng ban còn nhân viên
- **WHEN** Admin xoá một phòng ban đang có nhân viên được gán
- **THEN** hệ thống từ chối xoá và yêu cầu chuyển/gỡ nhân viên khỏi phòng ban trước

### Requirement: Admin gán nhân viên và trưởng phòng
Hệ thống SHALL cho phép Admin gán mỗi nhân viên vào đúng một phòng ban, và chỉ định một hoặc nhiều người trong phòng ban giữ vai trò Trưởng phòng.

#### Scenario: Gán nhân viên vào phòng ban
- **WHEN** Admin gán một tài khoản nhân viên vào một phòng ban
- **THEN** tài khoản đó thuộc phòng ban đó và có thể được giao việc bởi trưởng phòng của phòng ban đó

#### Scenario: Chỉ định trưởng phòng
- **WHEN** Admin gán vai trò Trưởng phòng cho một nhân viên thuộc phòng ban
- **THEN** người đó có quyền giao việc và phê duyệt việc cho các nhân viên khác trong cùng phòng ban

### Requirement: Chỉ Admin quản lý cơ cấu tổ chức
Hệ thống SHALL giới hạn quyền tạo/sửa/xoá phòng ban và gán nhân viên chỉ cho vai trò Admin; Trưởng phòng và Nhân viên không có quyền này.

#### Scenario: Trưởng phòng cố gắng tạo phòng ban
- **WHEN** một người dùng có vai trò Trưởng phòng gọi chức năng tạo phòng ban
- **THEN** hệ thống từ chối thao tác với lỗi không đủ quyền
