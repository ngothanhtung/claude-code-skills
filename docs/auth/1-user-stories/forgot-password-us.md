# Quên mật khẩu — Khôi phục mật khẩu

## Mục lục

- [US-003: Khôi phục mật khẩu qua email](#us-003-khôi-phục-mật-khẩu-qua-email)

---

## US-003: Khôi phục mật khẩu qua email

### Câu chuyện người dùng (User Story)

**Câu chuyện người dùng US-003**: Khôi phục mật khẩu qua email

**As a** thành viên đã có tài khoản trên ProjectOS và không thể đăng nhập vì quên mật khẩu
**I want to** nhận liên kết khôi phục mật khẩu qua email để đặt lại mật khẩu mới
**So that** tôi có thể truy cập lại hệ thống mà không cần tạo tài khoản mới hoặc nhờ quản trị viên can thiệp

---

### Tự đánh giá theo chuẩn 06 tiêu chí INVEST (INVEST Self-check)

| Tiêu chí | Câu hỏi tự kiểm tra | Kết quả |
| :--- | :--- | :--- |
| **I**ndependent | Câu chuyện không phụ thuộc vào câu chuyện khác — chỉ cần tài khoản đã đăng ký | ✅ |
| **N**egotiable | Chi tiết kỹ thuật (thời gian hiệu lực token, số lần gửi lại email) có thể thương lượng với đội ngũ phát triển | ✅ |
| **V**aluable | Người dùng khôi phục quyền truy cập; doanh nghiệp giảm tải hỗ trợ; bảo mật bằng token có thời hạn | ✅ |
| **E**stimable | Đội ngũ phát triển ước lượng được — chức năng email reset password chuẩn, thời gian 2–4 ngày | ✅ |
| **S**mall | Hoàn thành trong 1 Sprint (2–4 ngày làm việc) | ✅ |
| **T**estable | Có đủ tiêu chí nghiệm thu bao quát đầy đủ kịch bản | ✅ |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

**Tiêu chí nghiệm thu 1** — Khôi phục mật khẩu thành công

- **Given** thành viên đã có tài khoản với email `nguyen.van.a@company.com` trên ProjectOS và đang ở trang đăng nhập
- **When** thành viên nhấn liên kết "Quên mật khẩu", nhập email `nguyen.van.a@company.com` và nhấn nút "Gửi liên kết khôi phục"
- **Then** hệ thống gửi email chứa liên kết khôi phục mật khẩu đến `nguyen.van.a@company.com`
- **And** hệ thống hiển thị thông báo "Đã gửi liên kết khôi phục mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư."
- **And** thành viên mở email, nhấn liên kết, nhập mật khẩu mới `MatKhauMoi456!`, xác nhận mật khẩu mới `MatKhauMoi456!`, và nhấn "Đặt lại mật khẩu"
- **And** hệ thống cập nhật mật khẩu mới, vô hiệu hóa token, và chuyển hướng đến trang đăng nhập kèm thông báo "Mật khẩu đã được đặt lại thành công"

---

**Tiêu chí nghiệm thu 2** — Khôi phục mật khẩu thất bại khi email không tồn tại trong hệ thống

- **Given** thành viên đang ở trang đăng nhập và nhấn liên kết "Quên mật khẩu"
- **When** thành viên nhập email `khongtontai@company.com` (không tồn tại trong hệ thống) và nhấn nút "Gửi liên kết khôi phẩu"
- **Then** hệ thống hiển thị thông báo lỗi "Email này không tồn tại trong hệ thống. Vui lòng kiểm tra lại hoặc liên hệ quản trị viên."
- **And** hệ thống không gửi email nào
- **And** hệ thống vẫn hiển thị trang yêu cầu khôi phục mật khẩu

---

**Tiêu chí nghiệm thu 3** — Liên kết khôi phục đã hết hạn

- **Given** thành viên đã nhận được email khôi phục mật khẩu cho tài khoản `nguyen.van.a@company.com` nhưng liên kết đã quá thời hạn hiệu lực (token hết hạn sau 15 phút)
- **When** thành viên nhấn liên kết hết hạn trong email
- **Then** hệ thống hiển thị thông báo "Liên kết khôi phục đã hết hạn. Vui lòng yêu cầu liên kết mới."
- **And** hệ thống cung cấp nút "Gửi lại liên kết" để thành viên có thể bắt đầu lại quy trình

---

**Tiêu chí nghiệm thu 4** — Token khôi phục đã được sử dụng

- **Given** thành viên đã sử dụng liên kết khôi phục để đặt lại mật khẩu thành công cho tài khoản `nguyen.van.a@company.com`
- **When** thành viên cố nhấn lại liên kết cũ đã qua sử dụng
- **Then** hệ thống hiển thị thông báo "Liên kết khôi phục không hợp lệ hoặc đã được sử dụng. Vui lòng yêu cầu liên kết mới."
- **And** hệ thống cung cấp nút "Gửi lại liên kết" để thành viên bắt đầu lại quy trình

---

**Tiêu chí nghiệm thu 5** — Mật khẩu mới không đáp ứng yêu cầu bảo mật

- **Given** thành viên nhấn liên kết khôi phục hợp lệ từ email của tài khoản `nguyen.van.a@company.com` và đang ở trang đặt lại mật khẩu
- **When** thành viên nhập mật khẩu mới `123456` (không đáp ứng yêu cầu: tối thiểu 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt) và xác nhận `123456`
- **Then** hệ thống hiển thị thông báo lỗi xác thực bên dưới trường mật khẩu: "Mật khẩu phải có tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt."
- **And** hệ thống không cho phép gửi biểu mẫu cho đến khi mật khẩu hợp lệ

---

**Tiêu chí nghiệm thu 6** — Mật khẩu mới trùng với mật khẩu cũ

- **Given** thành viên nhấn liên kết khôi phục hợp lệ từ email của tài khoản `nguyen.van.a@company.com` và đang ở trang đặt lại mật khẩu
- **When** thành viên nhập mật khẩu mới `MatKhau123!` trùng với mật khẩu cũ đang sử dụng
- **Then** hệ thống hiển thị thông báo lỗi: "Mật khẩu mới không được trùng với mật khẩu hiện tại. Vui lòng chọn mật khẩu khác."
- **And** hệ thống không cập nhật mật khẩu

---

**Tiêu chí nghiệm thu 7** — Xác nhận mật khẩu mới không khớp

- **Given** thành viên nhấn liên kết khôi phục hợp lệ từ email của tài khoản `nguyen.van.a@company.com` và đang ở trang đặt lại mật khẩu
- **When** thành viên nhập mật khẩu mới `MatKhauMoi789!` và xác nhận mật khẩu `MatKhauSai654!` (không khớp)
- **Then** hệ thống hiển thị thông báo lỗi bên dưới trường xác nhận: "Mật khẩu xác nhận không khớp với mật khẩu mới."
- **And** hệ thống không cho phép gửi biểu mẫu cho đến khi hai trường khớp nhau

---

**Tiêu chí nghiệm thu 8** — Tài khoản bị khóa không được khôi phục mật khẩu

- **Given** thành viên có tài khoản `nguyen.van.a@company.com` đã bị khóa do đăng nhập sai nhiều lần (theo US-001 AC4)
- **When** thành viên nhập email `nguyen.van.a@company.com` vào trang quên mật khẩu và nhấn "Gửi liên kết khôi phục"
- **Then** hệ thống hiển thị thông báo "Tài khoản đang bị khóa. Vui lòng thử lại sau 30 phút hoặc liên hệ quản trị viên."
- **And** hệ thống không gửi email khôi phục

---

### Ghi chú (Notes)

- **Phụ thuộc**: US-003 phụ thuộc vào US-001 (Đăng nhập bằng Email/Password) và chức năng gửi email hệ thống.
- **Bảo mật**: Token khôi phục phải là giá trị ngẫu nhiên không đoán được (cryptographically secure), có thời hạn hiệu lực (mặc định: 15 phút), chỉ sử dụng được một lần, và bị vô hiệu hóa ngay sau khi sử dụng.
- **Giả định**: Thời hạn hiệu lực token là 15 phút. Thời gian chờ gửi lại email là 60 giây (rate limit).
- **Giả định**: Quy tắc mật khẩu: tối thiểu 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt.
- **Rate limiting**: Giới hạn số lần yêu cầu khôi phục: tối đa 3 yêu cầu/giờ cho mỗi email để chống spam.
- **Câu hỏi làm rõ**: Có cần gửi thông báo qua email kèm cảnh báo bảo mật khi mật khẩu được đặt lại thành công không?
- **Câu hỏi làm rõ**: Sau khi đặt lại mật khẩu thành công, phiên làm việc (session) hiện tại của thành viên trên các thiết bị khác có cần bị hủy không?

---

## Xác nhận bàn giao

Vui lòng kiểm tra toàn bộ nội dung trên và phản hồi:

1. **Thời hạn hiệu lực token**: 15 phút có phù hợp hay cần điều chỉnh (5 phút / 30 phút / 1 giờ)?
2. **Quy tắc mật khẩu**: Yêu cầu tối thiểu (8 ký tự, có hoa/thường/số/ký tự đặc biệt) có phù hợp với chính sách bảo mật của tổ chức không?
3. **Rate limiting**: 3 yêu cầu/giờ có phù hợp hay cần điều chỉnh?
4. **Thông báo bảo mật**: Có cần gửi email cảnh báo khi mật khẩu được đặt lại thành công không?
5. **Hủy phiên đồng thời**: Sau khi đặt lại mật khẩu, có cần hủy tất cả phiên đang hoạt động trên các thiết bị khác không?
