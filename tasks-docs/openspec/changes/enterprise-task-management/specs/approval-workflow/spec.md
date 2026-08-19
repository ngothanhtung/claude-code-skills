## Purpose

Định nghĩa luồng trạng thái của công việc, bao gồm bước phê duyệt bắt buộc bởi người giao việc trước khi một task được coi là hoàn thành, và cách hệ thống đánh dấu công việc quá hạn.

## ADDED Requirements

### Requirement: Chuỗi trạng thái công việc
Hệ thống SHALL quản lý trạng thái công việc theo đúng thứ tự: Cần làm → Đang làm → Chờ duyệt → Hoàn thành, và chỉ cho phép chuyển trạng thái theo các bước hợp lệ được định nghĩa trong các requirement dưới đây.

#### Scenario: Nhân viên nhận việc
- **WHEN** Nhân viên được giao chuyển task từ "Cần làm" sang "Đang làm"
- **THEN** hệ thống cập nhật trạng thái và ghi vào lịch sử thay đổi (audit trail)

#### Scenario: Ngăn nhảy cóc trạng thái
- **WHEN** Nhân viên cố gắng chuyển task trực tiếp từ "Đang làm" sang "Hoàn thành"
- **THEN** hệ thống từ chối thao tác vì thiếu bước phê duyệt

### Requirement: Báo hoàn thành và chờ duyệt
Hệ thống SHALL cho phép Nhân viên được giao chuyển task từ "Đang làm" sang "Chờ duyệt" để báo đã hoàn thành công việc.

#### Scenario: Báo hoàn thành hợp lệ
- **WHEN** Nhân viên được giao chuyển task đang ở "Đang làm" sang "Chờ duyệt"
- **THEN** hệ thống cập nhật trạng thái và thông báo cho người giao việc (approver)

### Requirement: Phê duyệt bởi người giao việc
Hệ thống SHALL chỉ cho phép người đã giao việc (approver = người tạo task) phê duyệt hoặc trả lại một task đang ở trạng thái "Chờ duyệt".

#### Scenario: Người giao việc duyệt task
- **WHEN** approver duyệt một task đang ở "Chờ duyệt"
- **THEN** hệ thống chuyển task sang "Hoàn thành" và thông báo cho người được giao

#### Scenario: Người khác cố gắng duyệt
- **WHEN** một người dùng không phải approver của task cố gắng duyệt task đó
- **THEN** hệ thống từ chối thao tác với lỗi không đủ quyền

#### Scenario: Trả lại công việc không đạt
- **WHEN** approver trả lại một task đang ở "Chờ duyệt" kèm lý do
- **THEN** hệ thống chuyển task về "Đang làm", lưu lý do trả lại, và thông báo cho người được giao

#### Scenario: Trả lại thiếu lý do
- **WHEN** approver cố gắng trả lại một task mà không nhập lý do
- **THEN** hệ thống từ chối thao tác và yêu cầu nhập lý do

### Requirement: Đánh dấu công việc quá hạn
Hệ thống SHALL đánh dấu một task là "quá hạn" khi hạn hoàn thành (due date) đã qua và trạng thái task chưa phải "Hoàn thành", song song với trạng thái chính chứ không thay thế nó.

#### Scenario: Task quá hạn khi chưa hoàn thành
- **WHEN** ngày hiện tại vượt quá due date của một task đang ở "Đang làm" hoặc "Chờ duyệt"
- **THEN** hệ thống hiển thị task đó với cờ "quá hạn" trên mọi view liên quan

#### Scenario: Task hoàn thành không bị tính quá hạn
- **WHEN** ngày hiện tại vượt quá due date nhưng task đã ở trạng thái "Hoàn thành"
- **THEN** hệ thống không đánh dấu task đó là quá hạn
