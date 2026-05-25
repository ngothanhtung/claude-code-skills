# UC-AUTH-02: Đăng nhập bằng tài khoản Google

| Trường | Nội dung |
| --- | :--- |
| **Mã định danh Use Case** | UC-AUTH-02 |
| **Tên Use Case** | Đăng nhập bằng tài khoản Google |
| **Người tạo** |  |
| **Người cập nhất** |  |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhất** | 2026-05-25 |
| **Tác nhân chính** | Thành viên nhóm (tài khoản ProjectOS đã đăng ký qua Google, hoặc người dùng mới) |
| **Tác nhân phụ** | Google OAuth 2.0 Service, Authentication Service, Email Service |
| **Mô tả** | Khi một Thành viên nhóm muốn truy cập ProjectOS mà không cần tạo mật khẩu riêng, Thành viên nhóm khởi tạo đăng nhập qua Google OAuth 2.0. Hệ thống xác thực người dùng thông qua Google và tạo mới hoặc truy xuất tài khoản ProjectOS tương ứng. Use Case kết thúc khi phiên làm việc được tạo và Thành viên nhóm được chuyển hướng đến dashboard. |
| **Điều kiện tiên quyết** | 1. Google OAuth 2.0 Client ID và redirect URI đã được cấu hình trên Google Cloud Console và đăng ký với ProjectOS.\n2. Thành viên nhóm hiện không có phiên đăng nhập đang hoạt động (không có session). |
| **Điều kiện kết quả** | 1. Nếu email Google khớp với tài khoản ProjectOS đã tồn tại: thời điểm đăng nhập gần nhất của tài khoản đó được cập nhật.\n2. Nếu email Google không khớp với bất kỳ tài khoản nào hiện có: một tài khoản ProjectOS mới được tạo với dữ liệu hồ sơ từ Google (email, tên hiển thị, avatar URL) và được đánh dấu là đã xác thực.\n3. Bản ghi phiên làm việc của Thành viên nhóm được tạo với session token hợp lệ.\n4. Thông báo chào mừng được hiển thị kèm tên tài khoản Google. |
| **Mức ưu tiên** | Cao — tính năng xác thực cốt lõi; giảm rào cản đăng ký cho người dùng mới. |
| **Tần suất sử dụng** | Mỗi lần đăng nhập; ước tính ~800–1.200 sự kiện đăng nhập Google/ngày toàn nền tảng, đỉnh điểm: ~150–200 sự kiện/giờ vào đầu giờ làm việc (08:00–09:00). |

## Quy trình chính

1. Thành viên nhóm truy cập trang đăng nhập của ProjectOS.
2. Hệ thống hiển thị biểu mẫu đăng nhập gồm trường email, trường mật khẩu và nút "Đăng nhập bằng Google".
3. Thành viên nhóm nhấn nút **Đăng nhập bằng Google**.
4. Hệ thống chuyển hướng trình duyệt của Thành viên nhóm đến endpoint ủy quyền OAuth 2.0 của Google với yêu cầu authorization code (luồng PKCE).
5. Google hiển thị màn hình xin cấp quyền cho thấy các phạm vi được yêu cầu (email, profile).
6. Thành viên nhóm xem lại các quyền và nhấn **Cho phép**.
7. Google chuyển hướng Thành viên nhóm trở lại ProjectOS kèm authorization code.
8. Hệ thống trao đổi authorization code lấy access token sử dụng PKCE verifier.
9. Hệ thống yêu cầu thông tin hồ sơ của Thành viên nhóm (email, tên, avatar URL) từ endpoint userinfo của Google.
10. Hệ thống truy vấn cơ sở dữ liệu tài khoản để kiểm tra email Google đã tồn tại chưa.
11. Nếu tài khoản chưa tồn tại: Hệ thống tạo tài khoản ProjectOS mới với dữ liệu hồ sơ từ Google và đánh dấu là đã xác thực.
12. Nếu tài khoản đã tồn tại: Hệ thống xác thực trạng thái tài khoản là 'Hoạt động' và không bị vô hiệu hóa.
13. Hệ thống tạo bản ghi phiên làm việc và sinh một session token.
14. Hệ thống thiết lập session token dưới dạng HTTP-only secure cookie trên trình duyệt.
15. Hệ thống chuyển hướng Thành viên nhóm đến trang dashboard.
16. Hệ thống hiển thị dashboard với danh sách dự án và thông báo chào mừng kèm tên hiển thị từ tài khoản Google.

## Các quy trình thay thế

**UC-AUTH-02.TT.1:** Liên kết tài khoản Google với tài khoản email/password hiện có

- Tại bước 10, nếu hệ thống tìm thấy tài khoản ProjectOS đã tồn tại với cùng email Google nhưng đã đăng ký qua email/password (không phải qua Google):
  - 10-a. Hệ thống kiểm tra tài khoản này đã được liên kết với nhà cung cấp Google chưa.
  - 10-b. Nếu chưa liên kết: Hệ thống hiển thị: "Tài khoản với email này đã tồn tại. Bạn có muốn liên kết tài khoản Google với tài khoản này không?"
  - 10-c. Thành viên nhóm nhấn **Liên kết tài khoản Google**.
  - 10-d. Hệ thống liên kết nhà cung cấp Google vào bản ghi tài khoản hiện có.
- Kết quả: Tiếp tục từ bước 12 của Quy trình chính.

**UC-AUTH-02.TT.2:** Người dùng từ chối màn hình cấp quyền Google

- Tại bước 6, nếu Thành viên nhóm nhấn **Hủy** hoặc đóng cửa sổ cấp quyền Google:
  - 6-a. Google chuyển hướng Thành viên nhóm trở lại ProjectOS kèm tham số lỗi (access_denied).
  - 6-b. Hệ thống hiển thị: "Đăng nhập Google đã bị hủy."
- Kết quả: Use Case kết thúc. Không có tài khoản hoặc phiên làm việc nào được tạo. Thành viên nhóm vẫn ở trang đăng nhập.

## Ngoại lệ

**UC-AUTH-02.NL.1:** Google trả về lỗi trong quá trình OAuth

- **Kích hoạt:** Tại bước 7, Google chuyển hướng trở lại ProjectOS kèm phản hồi lỗi (ví dụ: error=access_denied, error=sub: value_invalid, hoặc error=server_error).
- **Phản hồi:** Hệ thống hiển thị: "Đăng nhập Google thất bại. Vui lòng thử lại." Lỗi được ghi log phục vụ mục đích audit bảo mật.
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Thành viên nhóm vẫn ở trang đăng nhập và có thể thử lại.

**UC-AUTH-02.NL.2:** Tên miền email không được phép (giới hạn theo tổ chức)

- **Kích hoạt:** Tại bước 9, hệ thống nhận được email Google và phát hiện tên miền email (ví dụ: @gmail.com) không nằm trong danh sách tên miền được phép (ví dụ: chỉ @company.com mới được phép).
- **Phản hồi:** Hệ thống hiển thị: "Địa chỉ email không được phép truy cập. Vui lòng sử dụng email thuộc tổ chức." Không có tài khoản nào được tạo trong hệ thống.
- **Trạng thái cuối:** Không có tài khoản hoặc phiên làm việc nào được tạo. Thành viên nhóm phải sử dụng tên miền email được phép.

**UC-AUTH-02.NL.3:** Tài khoản bị vô hiệu hóa bởi quản trị viên

- **Kích hoạt:** Tại bước 12, hệ thống xác thực rằng tài khoản đã liên kết Google có trạng thái='Đã vô hiệu hóa'.
- **Phản hồi:** Hệ thống hiển thị: "Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên."
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Thành viên nhóm phải liên hệ quản trị viên để khôi phục tài khoản.

**UC-AUTH-02.NL.4:** Google OAuth Service không khả dụng

- **Kích hoạt:** Tại bước 4, hệ thống không thể chuyển hướng đến endpoint ủy quyền của Google do lỗi mạng hoặc OAuth Service không khả dụng (thời gian chờ: 5 giây).
- **Phản hồi:** Hệ thống hiển thị: "Đăng nhập Google tạm thời không khả dụng. Vui lòng thử lại hoặc sử dụng đăng nhập bằng email và mật khẩu."
- **Trạng thái cuối:** Không có phiên làm việc nào được tạo. Thành viên nhóm có thể thử lại hoặc chuyển sang đăng nhập bằng email và mật khẩu (UC-AUTH-01).

## Bao gồm

- (không có)

## Yêu cầu đặc biệt

- **Hiệu suất:** Từ bước 7 (Google chuyển hướng trở lại) đến bước 16 (hiển thị dashboard) phải hoàn tất trong 3 giây trong điều kiện bình thường (p95 < 3 giây).
- **Bảo mật — Luồng OAuth 2.0:** Hệ thống phải sử dụng Authorization Code Flow với PKCE (Proof Key for Code Exchange) theo RFC 7636. Access token không được lưu trữ — chỉ sử dụng để truy xuất dữ liệu hồ sơ người dùng một lần duy nhất mỗi lần đăng nhập.
- **Bảo mật — Tham số state:** Để ngăn chặn tấn công CSRF, luồng OAuth phải bao gồm tham số state được sinh ngẫu nhiên bảo mật và được xác thực khi callback.
- **Bảo mật — Giới hạn theo tên miền:** Nếu chế độ giới hạn theo tên miền được bật, hệ thống phải xác thực tên miền email từ phản hồi userinfo của Google so với danh sách tên miền được phép trước khi tạo hoặc truy xuất tài khoản.
- **Bảo mật — Quản lý phiên làm việc:** Session token phải được sinh bằng CSPRNG, lưu trữ phía server, và truyền tải qua HTTP-only, Secure, SameSite=Strict cookie.
- **Độ tin cậy:** Nếu Email Service không khả dụng khi gửi thông báo cho tài khoản mới, tài khoản vẫn được tạo thành công. Thông báo email được đưa vào retry queue.
- **Tuân thủ:** Nút "Đăng nhập bằng Google" phải tuân thủ hướng dẫn về hình ảnh thương hiệu của Google (Google Brand Guidelines).

## Giả định

1. Google OAuth 2.0 Client ID và Client Secret được lưu trữ bảo mật trong biến môi trường hoặc secrets manager (không bao giờ lưu trong source code).
2. Ứng dụng OAuth của Google đã được xác minh và phê duyệt cho các phạm vi cần thiết (email, profile) trên Google Cloud Console.
3. Ứng dụng OAuth của Google được cấu hình với redirect URI chính xác phù hợp với tất cả môi trường triển khai (phát triển, staging, production).
4. Tài khoản mới được tạo tự động qua Google OAuth được gán vai trò mặc định là 'Thành viên nhóm'.

## Ghi chú và vấn đề mở

- [CĐ-1] Tài khoản đã đăng ký bằng email/password có thể liên kết thêm phương thức đăng nhập Google không? (UC-AUTH-02.TT.1 đề cập chiều Google → tài khoản hiện có, nhưng chiều ngược lại email/password → Google có thể cần bổ sung.) | Người phụ trách: Product Team | Hạn: 2026-06-01 | Giải pháp: TBD.
- [CĐ-2] Đăng nhập Google OAuth có được hỗ trợ trên ứng dụng di động native không? Nếu có, luồng PKCE phải được triển khai sử dụng redirect URI scheme dành riêng cho mobile. | Người phụ trách: Mobile Team | Hạn: 2026-06-01 | Giải pháp: TBD.
