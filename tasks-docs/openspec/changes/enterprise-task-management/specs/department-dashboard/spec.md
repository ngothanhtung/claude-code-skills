## Purpose

Cho Trưởng phòng cái nhìn tổng quan về tiến độ và khối lượng công việc của phòng ban mình quản lý, để phát hiện sớm việc quá hạn hoặc nhân sự quá tải.

## ADDED Requirements

### Requirement: Dashboard tổng quan theo phòng ban
Hệ thống SHALL hiển thị cho Trưởng phòng một dashboard tổng hợp các task thuộc phòng ban mình quản lý, gồm: tổng số task, số task đang làm, số task quá hạn, và số task đang chờ duyệt.

#### Scenario: Xem số liệu tổng quan
- **WHEN** Trưởng phòng mở dashboard phòng ban của mình
- **THEN** hệ thống hiển thị đúng 4 chỉ số: tổng, đang làm, quá hạn, chờ duyệt, tính từ các task thuộc phòng ban đó

#### Scenario: Chỉ thấy dữ liệu phòng ban mình quản lý
- **WHEN** Trưởng phòng A xem dashboard
- **THEN** hệ thống chỉ hiển thị số liệu của phòng ban A, không bao gồm task của phòng ban khác

### Requirement: Khối lượng công việc theo nhân viên
Hệ thống SHALL hiển thị trên dashboard danh sách nhân viên thuộc phòng ban kèm số task đã hoàn thành trên tổng số task được giao, và đánh dấu riêng nhân viên đang có task quá hạn.

#### Scenario: Xem tiến độ từng nhân viên
- **WHEN** Trưởng phòng xem phần khối lượng công việc trên dashboard
- **THEN** hệ thống hiển thị mỗi nhân viên trong phòng ban kèm tỷ lệ hoàn thành (vd: 8/10) dạng thanh tiến độ

#### Scenario: Cảnh báo nhân viên có việc quá hạn
- **WHEN** một nhân viên trong phòng ban đang có ít nhất một task ở trạng thái quá hạn
- **THEN** hệ thống hiển thị dấu cảnh báo bên cạnh tên nhân viên đó trên dashboard

### Requirement: Không hiển thị báo cáo toàn công ty
Hệ thống SHALL giới hạn dashboard trong phạm vi một phòng ban; không cung cấp báo cáo tổng hợp xuyên phòng ban ở phạm vi thay đổi này.

#### Scenario: Trưởng phòng không thấy dữ liệu phòng khác
- **WHEN** Trưởng phòng cố truy cập dashboard của một phòng ban mà mình không quản lý
- **THEN** hệ thống từ chối truy cập với lỗi không đủ quyền
