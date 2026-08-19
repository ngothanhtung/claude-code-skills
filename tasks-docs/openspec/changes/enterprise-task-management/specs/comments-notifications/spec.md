## Purpose

Cho phép người dùng thảo luận trực tiếp trên từng công việc qua comment kèm @mention, và giữ mọi người liên quan cập nhật kịp thời thông qua thông báo in-app.

## ADDED Requirements

### Requirement: Thêm comment trên công việc
Hệ thống SHALL cho phép người tạo task, người được giao, và người được @mention trong task thêm comment dạng văn bản tự do trên task đó.

#### Scenario: Thêm comment
- **WHEN** một người liên quan đến task nhập nội dung comment và gửi
- **THEN** hệ thống lưu comment gắn với task, kèm tác giả và thời gian, tách biệt với lịch sử thay đổi trạng thái (audit trail)

### Requirement: @mention trong comment
Hệ thống SHALL cho phép người viết comment gắn thẻ (@mention) một hoặc nhiều người dùng khác trong nội dung comment, kể cả người không liên quan trực tiếp đến task.

#### Scenario: Mention một người dùng
- **WHEN** người viết comment gõ @mention và chọn một người dùng hợp lệ
- **THEN** hệ thống lưu comment kèm danh sách người được mention và gửi thông báo cho (các) người đó

### Requirement: Thông báo theo sự kiện
Hệ thống SHALL tạo thông báo in-app cho đúng người nhận tương ứng với từng loại sự kiện sau: giao việc mới (người được giao), chuyển sang "Chờ duyệt" (approver), duyệt xong hoặc trả lại (người được giao), comment mới (người liên quan task trừ tác giả), @mention (người được mention), và task sắp/đã quá hạn (người được giao và trưởng phòng).

#### Scenario: Thông báo khi giao việc mới
- **WHEN** Trưởng phòng giao một task cho nhân viên
- **THEN** hệ thống tạo thông báo in-app cho nhân viên đó

#### Scenario: Thông báo khi task quá hạn
- **WHEN** một task chuyển sang trạng thái "quá hạn"
- **THEN** hệ thống tạo thông báo in-app cho cả người được giao và Trưởng phòng của phòng ban đó

### Requirement: Xem và đánh dấu đã đọc thông báo
Hệ thống SHALL hiển thị số lượng thông báo chưa đọc trên chuông thông báo, và đánh dấu thông báo là đã đọc khi người dùng mở nó; click vào một thông báo SHALL điều hướng người dùng đến task liên quan.

#### Scenario: Badge số thông báo chưa đọc
- **WHEN** người dùng có 3 thông báo chưa đọc
- **THEN** chuông thông báo hiển thị badge số "3"

#### Scenario: Mở thông báo điều hướng đến task
- **WHEN** người dùng click vào một thông báo trong danh sách
- **THEN** hệ thống đánh dấu thông báo đó đã đọc và mở màn hình chi tiết task tương ứng

### Requirement: Cập nhật thông báo qua polling định kỳ
Hệ thống SHALL cập nhật danh sách và số lượng thông báo chưa đọc bằng cách truy vấn định kỳ (polling), không yêu cầu kết nối realtime thường trực.

#### Scenario: Thông báo mới xuất hiện sau chu kỳ polling
- **WHEN** có một thông báo mới được tạo cho người dùng đang mở app
- **THEN** giao diện hiển thị thông báo đó trong lần truy vấn định kỳ kế tiếp, không cần tải lại trang thủ công
