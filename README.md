# Authentication — Đăng nhập

## Mục lục

- [US-001: Đăng nhập bằng Email / Password](#us-001-đăng-nhập-bằng-email--password)
- [US-002: Đăng nhập bằng tài khoản Google](#us-002-đăng-nhập-bằng-tài-khoản-google)

---

## US-001: Đăng nhập bằng Email / Password

### Câu chuyện người dùng (User Story)

**Câu chuyện người dùng US-001**: Đăng nhập bằng Email và Mật khẩu

**As a** quản lý dự án đã hoàn tất đăng ký tài khoản và xác thực địa chỉ thư điện tử (email) trên ProjectOS
**I want to** nhập địa chỉ thư điện tử (email) và mật khẩu đã đăng ký để truy cập vào hệ thống
**So that** tôi có thể sử dụng các tính năng quản lý dự án, phân công công việc và theo dõi tiến độ

---

### Tự đánh giá theo chuẩn 06 tiêu chí INVEST (INVEST Self-check)

| Tiêu chí | Câu hỏi tự kiểm tra | Kết quả |
| :--- | :--- | :--- |
| **I**ndependent | Câu chuyện không phụ thuộc vào câu chuyện khác — chỉ cần tài khoản đã đăng ký | ✅ |
| **N**egotiable | Chi tiết kỹ thuật (số ký tự mật khẩu, thời gian khóa tài khoản) có thể thương lượng với đội ngũ phát triển | ✅ |
| **V**aluable | Người dùng có thể truy cập hệ thống; doanh nghiệp xác thực danh tính trước khi cấp quyền truy cập dự án | ✅ |
| **E**stimable | Đội ngũ phát triển ước lượng được — đây là chức năng xác thực chuẩn, không có yêu cầu phức tạp | ✅ |
| **S**mall | Hoàn thành trong 1 Sprint (3–5 ngày làm việc) | ✅ |
| **T**estable | Có đủ tiêu chí nghiệm thu bao quát đầy đủ kịch bản | ✅ |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

**Tiêu chí nghiệm thu 1** — Đăng nhập thành công với thông tin hợp lệ

- **Given** quản lý dự án đã có tài khoản với email `nguyen.van.a@company.com` và mật khẩu `MatKhau123!` đã được kích hoạt
- **When** quản lý dự án nhập email `nguyen.van.a@company.com` và mật khẩu `MatKhau123!` vào biểu mẫu đăng nhập và nhấn nút "Đăng nhập"
- **Then** hệ thống xác thực thông tin thành công, tạo phiên làm việc (session) và chuyển hướng đến trang chủ (dashboard) hiển thị danh sách dự án
- **And** hệ thống hiển thị thông báo chào mừng kèm tên hiển thị của quản lý dự án

---

**Tiêu chí nghiệm thu 2** — Đăng nhập thất bại khi nhập sai mật khẩu

- **Given** quản lý dự án đã có tài khoản với email `nguyen.van.a@company.com` và mật khẩu `MatKhau123!`
- **When** quản lý dự án nhập email `nguyen.van.a@company.com` và mật khẩu sai `SaiMatKhau456!` và nhấn nút "Đăng nhập"
- **Then** hệ thống từ chối đăng nhập, hiển thị thông báo lỗi "Email hoặc mật khẩu không chính xác"
- **And** phiên làm việc (session) không được tạo
- **And** quản lý dự án vẫn ở trang đăng nhập và mật khẩu đã nhập bị xóa khỏi biểu mẫu

---

**Tiêu chí nghiệm thu 3** — Đăng nhập thất bại khi tài khoản chưa xác thực email

- **Given** quản lý dự án đã tạo tài khoản với email `chua.xac.minh@company.com` và mật khẩu `MatKhau123!` nhưng chưa xác thực email
- **When** quản lý dự án nhập email `chua.xac.minh@company.com` và mật khẩu `MatKhau123!` và nhấn nút "Đăng nhập"
- **Then** hệ thống từ chối đăng nhập, hiển thị thông báo "Tài khoản chưa được kích hoạt. Vui lòng kiểm tra hộp thư để xác thực email."
- **And** phiên làm việc (session) không được tạo

---

**Tiêu chí nghiệm thu 4** — Đăng nhập thất bại khi tài khoản bị khóa do nhập sai nhiều lần

- **Given** quản lý dự án đã nhập sai mật khẩu 5 lần liên tiếp cho tài khoản `nguyen.van.a@company.com`
- **When** quản lý dự án nhập đúng mật khẩu `MatKhau123!` ở lần thứ 6
- **Then** hệ thống từ chối đăng nhập, hiển thị thông báo "Tài khoản tạm thời bị khóa do đăng nhập sai nhiều lần. Vui lòng thử lại sau 30 phút hoặc liên hệ hỗ trợ."
- **And** phiên làm việc (session) không được tạo
- **And** hệ thống gửi thông báo khóa tài khoản qua email cho quản lý dự án

---

**Tiêu chí nghiệm thu 5** — Đăng nhập thất bại khi định dạng email không hợp lệ

- **Given** người dùng đang ở trang đăng nhập với biểu mẫu trống
- **When** người dùng nhập email không đúng định dạng (ví dụ: `khonghople@` hoặc `@company.com`) và bất kỳ mật khẩu nào
- **Then** hệ thống hiển thị thông báo lỗi xác thực bên dưới trường email: "Địa chỉ email không hợp lệ"
- **And** nút "Đăng nhập" bị vô hiệu hóa hoặc hệ thống từ chối gửi biểu mẫu

---

### Ghi chú (Notes)

- **Phụ thuộc**: US-001 phụ thuộc vào chức năng Đăng ký tài khoản (Registration) và Xác thực email (Email Verification). Nên hoàn thành trước hoặc song song.
- **Bảo mật**: Mật khẩu phải được hash trước khi lưu vào cơ sở dữ liệu. Không lưu mật khẩu dạng plain text.
- **Giả định**: Thời gian khóa tài khoản là 30 phút, có thể điều chỉnh theo yêu cầu bảo mật của sản phẩm.
- **Câu hỏi làm rõ**: Cần xác định số lần đăng nhập sai tối đa trước khi khóa (hiện tại giả định là 5 lần).
- **Câu hỏi làm rõ**: Có cần ghi log địa chỉ IP khi đăng nhập thất bại không?

---

## US-002: Đăng nhập bằng tài khoản Google

### Câu chuyện người dùng (User Story)

**Câu chuyện người dùng US-002**: Đăng nhập bằng tài khoản Google

**As a** thành viên nhóm chưa có tài khoản hoặc đã có tài khoản đăng ký bằng email Google trên ProjectOS
**I want to** nhấn nút "Đăng nhập bằng Google" để xác thực thông tin qua hệ thống Google và truy cập hệ thống
**So that** tôi có thể đăng nhập nhanh chóng mà không cần nhớ thêm mật khẩu riêng cho ProjectOS

---

### Tự đánh giá theo chuẩn 06 tiêu chí INVEST (INVEST Self-check)

| Tiêu chí | Câu hỏi tự kiểm tra | Kết quả |
| :--- | :--- | :--- |
| **I**ndependent | Câu chuyện không phụ thuộc vào câu chuyện US-001 — có thể triển khai độc lập nếu đã có module OAuth tích hợp | ⚠️ Cần OAuth infrastructure sẵn sàng |
| **N**egotiable | Chi tiết kỹ thuật (Google OAuth Client ID, redirect URI) có thể thương lượng với đội ngũ phát triển | ✅ |
| **V**aluable | Người dùng đăng nhập nhanh hơn; giảm rào cản đăng ký; doanh nghiệp giảm chi phí quản lý mật khẩu | ✅ |
| **E**stimable | Đội ngũ phát triển ước lượng được — OAuth 2.0 là chuẩn có tài liệu đầy đủ, thời gian tích hợp ước tính 3–5 ngày | ✅ |
| **S**mall | Hoàn thành trong 1 Sprint | ✅ |
| **T**estable | Có đủ tiêu chí nghiệm thu bao quát các kịch bản chính | ✅ |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

**Tiêu chí nghiệm thu 1** — Đăng nhập Google: tài khoản đã tồn tại trong hệ thống

- **Given** thành viên nhóm đã có tài khoản đăng ký bằng Google với địa chỉ `user.google@gmail.com`
- **When** thành viên nhóm nhấn nút "Đăng nhập bằng Google", hoàn tất xác thực Google và đồng ý cấp quyền truy cập
- **Then** hệ thống nhận diện email `user.google@gmail.com` đã tồn tại, tạo phiên làm việc (session) và chuyển hướng đến trang chủ (dashboard) hiển thị danh sách dự án
- **And** hệ thống hiển thị thông báo chào mừng kèm tên tài khoản Google

---

**Tiêu chí nghiệm thu 2** — Đăng nhập Google: tài khoản mới (auto-registration)

- **Given** người dùng chưa có tài khoản trong hệ thống và đang đăng nhập lần đầu bằng Google
- **When** người dùng nhấn nút "Đăng nhập bằng Google", hoàn tất xác thực Google và đồng ý cấp quyền truy cập
- **Then** hệ thống tự động tạo tài khoản mới với thông tin từ Google (email, tên hiển thị, ảnh đại diện)
- **And** tài khoản được đánh dấu là đã xác thực (verified) mà không cần xác thực email riêng
- **And** hệ thống tạo phiên làm việc (session) và chuyển hướng đến trang chủ (dashboard)

---

**Tiêu chí nghiệm thu 3** — Đăng nhập Google: người dùng từ chối cấp quyền truy cập

- **Given** người dùng nhấn nút "Đăng nhập bằng Google" và được chuyển hướng đến trang xin cấp quyền Google
- **When** người dùng nhấn "Hủy" hoặc đóng cửa sổ xin cấp quyền
- **Then** hệ thống không tạo tài khoản hoặc phiên làm việc, giữ nguyên người dùng ở trang đăng nhập
- **And** hệ thống hiển thị thông báo "Đăng nhập Google đã bị hủy"

---

**Tiêu chí nghiệm thu 4** — Đăng nhập Google: tài khoản bị vô hiệu hóa (disabled)

- **Given** thành viên nhóm đã đăng ký bằng Google với email `disabled.user@gmail.com` nhưng tài khoản đã bị quản trị viên vô hiệu hóa
- **When** thành viên nhóm nhấn nút "Đăng nhập bằng Google" và hoàn tất xác thực Google
- **Then** hệ thống từ chối đăng nhập, hiển thị thông báo "Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên."
- **And** phiên làm việc (session) không được tạo

---

**Tiêu chí nghiệm thu 5** — Đăng nhập Google: email không được cấp quyền (domain restriction)

- **Given** hệ thống giới hạn đăng nhập Google chỉ cho phép email thuộc tên miền `@company.com`
- **When** người dùng có email Google cá nhân `user@gmail.com` nhấn "Đăng nhập bằng Google"
- **Then** hệ thống từ chối đăng nhập sau khi nhận token từ Google, hiển thị thông báo "Địa chỉ email không được phép truy cập. Vui lòng sử dụng email thuộc tổ chức."
- **And** tài khoản không được tạo trong hệ thống

---

### Ghi chú (Notes)

- **Phụ thuộc**: US-002 phụ thuộc vào việc đăng ký Google OAuth 2.0 Client ID và cấu hình redirect URI trên Google Cloud Console.
- **Bảo mật**: Hệ thống chỉ sử dụng authorization code flow (PKCE) của OAuth 2.0, không lưu trữ token Google của người dùng.
- **Auto-registration**: Tài khoản tạo tự động từ Google được gán vai trò (role) mặc định — cần xác định rõ vai trò mặc định là gì (thành viên nhóm?).
- **Whitelist/Domain restriction**: Nếu sản phẩm giới hạn email theo tên miền, cần cấu hình chính sách này trước khi triển khai.
- **Câu hỏi làm rõ**: Có cần liên kết tài khoản Google với tài khoản email/password đã tồn tại không? (ví dụ: cùng một người dùng có cả hai phương thức đăng nhập)
- **Câu hỏi làm rõ**: Có cần đăng nhập Google trên cả ứng dụng di động (native app) hay chỉ web?

---

## Xác nhận bàn giao

Vui lòng kiểm tra toàn bộ nội dung trên và phản hồi:

1. **Phạm vi (Scope)**: Có cần bổ sung luồng đăng nhập nào khác không (ví dụ: đăng nhập bằng số điện thoại, Apple ID)?
2. **Vai trò mặc định (Default role)**: Sau khi đăng nhập thành công lần đầu, người dùng được gán vai trò gì (Thành viên nhóm / Quản lý dự án / Người quan sát)?
3. **Whitelist/Domain restriction**: Có giới hạn email theo tên miền không? Nếu có, liệt kê các tên miền được phép.
4. **Số lần đăng nhập sai**: Có cần điều chỉnh số lần khóa tài khoản không (hiện tại: 5 lần)?
5. **Liên kết tài khoản (Account linking)**: Người dùng đã có tài khoản email/password có thể liên kết thêm đăng nhập Google không?
