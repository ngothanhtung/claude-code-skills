# UC-AUTH-01: Đăng nhập bằng email và mật khẩu

| Trường | Nội dung |
| --- | :--- |
| **Mã định danh Use Case** | UC-AUTH-01 |
| **Tên Use Case** | Đăng nhập bằng email và mật khẩu |
| **Người tạo** |  |
| **Người cập nhất** |  |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhất** | 2026-05-25 |
| **Tác nhân chính** | Quản lý dự án (tài khoản ProjectOS đã đăng ký với email đã xác thực) |
| **Tác nhân phụ** | Authentication Service, Email Service |
| **Mô tả** | Khi một Quản lý dự án đã đăng ký và xác thực địa chỉ email trên ProjectOS, Quản lý dự án nhập địa chỉ email và mật khẩu vào trang đăng nhập. Hệ thống xác thực thông tin đăng nhập, tạo phiên làm việc và chuyển hướng đến dashboard. Use Case kết thúc khi Quản lý dự án nhìn thấy danh sách dự án trên dashboard. |
| **Điều kiện tiên quyết** | 1. Quản lý dự án có tài khoản ProjectOS đang hoạt động và địa chỉ email đã được xác thực.\n2. Quản lý dự án hiện không có phiên đăng nhập đang hoạt động (không có session). |
| **Điều kiện kết quả** | 1. Bản ghi phiên làm việc của Quản lý dự án được tạo với session token hợp lệ, lưu trữ phía server.\n2. Thời điểm đăng nhập của Quản lý dự án được ghi lại phục vụ mục đích audit.\n3. Thông báo chào mừng được hiển thị kèm tên hiển thị của Quản lý dự án.\n4. Bộ đếm số lần đăng nhập thất bại của tài khoản này được đặt lại về không. |
| **Mức ưu tiên** | Cao — tính năng xác thực cốt lõi; là điều kiện tiên quyết cho mọi hoạt động quản lý dự án phía sau. |
| **Tần suất sử dụng** | Mỗi lần đăng nhập; ước tính ~1.500–2.000 sự kiện đăng nhập/ngày toàn nền tảng, đỉnh điểm: ~250–350 sự kiện/giờ vào đầu giờ làm việc (08:00–09:00). |

## Quy trình chính

1. Quản lý dự án truy cập trang đăng nhập của ProjectOS.
2. Hệ thống hiển thị biểu mẫu đăng nhập gồm trường email, trường mật khẩu và nút "Đăng nhập".
3. Quản lý dự án nhập địa chỉ email và mật khẩu.
4. Quản lý dự án nhấn nút **Đăng nhập**.
5. Hệ thống kiểm tra định dạng email hợp lệ theo chuẩn RFC 5322.
6. Hệ thống truy vấn cơ sở dữ liệu tài khoản sử dụng địa chỉ email đã nhập.
7. Hệ thống xác thực rằng trạng thái tài khoản là 'Hoạt động' và email đã được xác thực.
8. Hệ thống so sánh mật khẩu đã nhập với bản hash được lưu trữ bằng phương pháp so sánh hằng số (constant-time comparison).
9. Hệ thống đặt lại bộ đếm số lần đăng nhập thất bại của tài khoản này về không.
10. Hệ thống tạo bản ghi phiên làm việc và sinh một session token.
11. Hệ thống thiết lập session token dưới dạng HTTP-only secure cookie trên trình duyệt.
12. Hệ thống chuyển hướng Quản lý dự án đến trang dashboard.
13. Hệ thống hiển thị dashboard với danh sách dự án và thông báo chào mừng kèm tên hiển thị của Quản lý dự án.

## Các quy trình thay thế

**UC-AUTH-01.TT.1:** Yêu cầu đặt lại mật khẩu từ trang đăng nhập

- Tại bước 2, nếu Quản lý dự án nhấn "Quên mật khẩu":
  - 2-a. Hệ thống hiển thị biểu mẫu "Quên mật khẩu" gồm trường nhập email.
  - 2-b. Quản lý dự án nhập địa chỉ email và nhấn **Gửi liên kết đặt lại mật khẩu**.
  - 2-c. Hệ thống kiểm tra định dạng email và truy vấn cơ sở dữ liệu tài khoản.
  - 2-d. Nếu tài khoản tồn tại: Hệ thống sinh token đặt lại mật khẩu, lưu kèm thời hạn (24 giờ), và gửi email đặt lại mật khẩu qua Email Service.
  - 2-e. Hệ thống hiển thị: "Liên kết đặt lại mật khẩu đã được gửi đến email của bạn."
  - 2-f. Nếu tài khoản không tồn tại: Hệ thống vẫn hiển thị cùng thông báo thành công (để ngăn chặn việc liệt kê email qua hệ thống).
- Kết quả: Use Case kết thúc. Quản lý dự án có thể đăng nhập sau khi đặt lại mật khẩu qua liên kết đã gửi.

## Ngoại lệ

**UC-AUTH-01.NL.1:** Định dạng email không hợp lệ

- **Kích hoạt:** Tại bước 5, hệ thống phát hiện định dạng email không hợp lệ (ví dụ: thiếu '@' hoặc thiếu tên miền).
- **Phản hồi:** Hệ thống hiển thị thông báo xác thực bên dưới trường email: "Địa chỉ email không hợp lệ."
- **Trạng thái cuối:** Không có lần thử đăng nhập nào được ghi nhận. Quản lý dự án có thể sửa định dạng email và gửi lại.

**UC-AUTH-01.NL.2:** Email không tồn tại trong hệ thống

- **Kích hoạt:** Tại bước 6, hệ thống truy vấn cơ sở dữ liệu và không tìm thấy tài khoản nào khớp với địa chỉ email đã nhập.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi chung: "Email hoặc mật khẩu không chính xác." Địa chỉ email đã nhập được xóa khỏi biểu mẫu.
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Quản lý dự án có thể thử lại với thông tin đăng nhập đúng.

**UC-AUTH-01.NL.3:** Email chưa được xác thực

- **Kích hoạt:** Tại bước 7, hệ thống xác thực rằng tài khoản tồn tại nhưng địa chỉ email chưa được xác thực.
- **Phản hồi:** Hệ thống hiển thị: "Tài khoản chưa được kích hoạt. Vui lòng kiểm tra hộp thư để xác thực email."
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Quản lý dự án phải xác thực email trước khi đăng nhập.

**UC-AUTH-01.NL.4:** Mật khẩu không chính xác

- **Kích hoạt:** Tại bước 8, hệ thống phát hiện mật khẩu đã nhập không khớp với bản hash đã lưu trữ.
- **Phản hồi:** Hệ thống tăng bộ đếm số lần đăng nhập thất bại của tài khoản này. Hệ thống hiển thị: "Email hoặc mật khẩu không chính xác." Trường mật khẩu được xóa.
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Quản lý dự án có thể thử lại (trừ khi tài khoản đã bị khóa — xem NT.5).

**UC-AUTH-01.NL.5:** Tài khoản bị khóa do nhập sai quá nhiều lần

- **Kích hoạt:** Tại bước 4 (trước khi xác thực), hệ thống phát hiện bộ đếm số lần đăng nhập thất bại của tài khoản này đã đạt ngưỡng khóa (5 lần thất bại liên tiếp).
- **Phản hồi:** Hệ thống hiển thị: "Tài khoản tạm thời bị khóa do đăng nhập sai nhiều lần. Vui lòng thử lại sau 30 phút hoặc liên hệ hỗ trợ." Hệ thống gửi thông báo khóa tài khoản qua email cho chủ tài khoản.
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Tài khoản bị khóa trong 30 phút; việc khóa được tự động gỡ bỏ sau khi hết thời gian chờ.

**UC-AUTH-01.NL.6:** Authentication Service không khả dụng

- **Kích hoạt:** Tại bước 8, Authentication Service trả về lỗi hoặc hết thời gian chờ (ngưỡng: 5 giây).
- **Phản hồi:** Hệ thống hiển thị: "Dịch vụ xác thực tạm thời không khả dụng. Vui lòng thử lại sau vài phút." Hệ thống tự động gửi cảnh báo cho đội ngũ kỹ thuật trực.
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Quản lý dự án có thể thử lại sau khi dịch vụ phục hồi.

## Bao gồm

- (không có)

## Yêu cầu đặc biệt

- **Hiệu suất:** Quá trình đăng nhập (từ bước 4 đến bước 13) phải hoàn tất trong 2 giây trong điều kiện vận hành bình thường (p95 < 2 giây).
- **Bảo mật — Lưu trữ mật khẩu:** Mật khẩu phải được hash bằng bcrypt (cost factor ≥ 12) hoặc Argon2id trước khi lưu vào cơ sở dữ liệu. Mật khẩu dạng plain text tuyệt đối không được lưu trữ hoặc ghi log.
- **Bảo mật — So sánh mật khẩu:** Phải sử dụng phương pháp so sánh hằng số (constant-time comparison) để ngăn chặn tấn công timing attack.
- **Bảo mật — Giới hạn tốc độ:** Số lần đăng nhập thất bại phải được giới hạn tốc độ ở tầng ứng dụng: sau 5 lần thất bại liên tiếp cho cùng một tài khoản, tài khoản bị khóa trong 30 phút. Bộ đếm khóa được đặt lại khi đăng nhập thành công.
- **Bảo mật — Quản lý phiên làm việc:** Session token phải được sinh bằng bộ sinh số ngẫu nhiên bảo mật (CSPRNG), lưu trữ phía server, và truyền tải qua HTTP-only, Secure, SameSite=Strict cookie.
- **Độ tin cậy:** Nếu Email Service không khả dụng khi gửi thông báo khóa tài khoản, thông báo khóa vẫn được ghi log và retry queue được kích hoạt. Việc khóa tài khoản vẫn có hiệu lực mà không bị chặn bởi lỗi email.

## Giả định

1. Dịch vụ email (để gửi thông báo khóa tài khoản) hoạt động ổn định với SLA ≥ 99,5% uptime trong giờ làm việc.
2. Số lần đăng nhập thất bại tối đa trước khi khóa là 5 lần liên tiếp trong cửa sổ 30 phút cuộn.

## Ghi chú và vấn đề mở

- [CĐ-1] Thời gian khóa tài khoản có nên cấu hình được theo workspace không? Hiện tại mặc định: 30 phút. | Người phụ trách: Product Team | Hạn: 2026-06-01 | Giải pháp: TBD.
- [CĐ-2] Có cần ghi log địa chỉ IP khi đăng nhập thất bại phục vụ mục đích audit bảo mật không? | Người phụ trách: Security Team | Hạn: 2026-06-01 | Giải pháp: TBD.
