# UC-CL-04: Tạo mới khách hàng

| Trường | Nội dung |
|---|:---|
| **Mã định danh Use Case** | UC-CL-04 |
| **Tên Use Case** | Tạo mới khách hàng |
| **Người tạo** | BA |
| **Người cập nhật** | — |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhật** | — |
| **Tác nhân chính** | Nhân viên kinh doanh (đã đăng nhập, được phân quyền tạo mới khách hàng, đang ở trang danh sách khách hàng) |
| **Tác nhân phụ** | Không có |
| **Mô tả** | Nhân viên kinh doanh đã đăng nhập và đang ở trang danh sách khách hàng muốn tạo một bản ghi khách hàng mới với đầy đủ thông tin cơ bản (tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú). Mục tiêu là lưu trữ thông tin khách hàng mới vào hệ thống CRM để quản lý, theo dõi liên hệ. Use Case kết thúc khi hệ thống tạo bản ghi thành công, hiển thị thông báo xác nhận và cập nhật danh sách khách hàng. |
| **Điều kiện tiên quyết** | 1. Nhân viên kinh doanh đã đăng nhập thành công vào hệ thống CRM.<br>2. Nhân viên kinh doanh được phân quyền tạo mới khách hàng trong module CRM.<br>3. Nhân viên kinh doanh đang ở trang danh sách khách hàng. |
| **Điều kiện kết quả** | 1. Bản ghi khách hàng mới được tạo trong cơ sở dữ liệu với trạng thái mặc định "Đang hoạt động".<br>2. Hệ thống hiển thị thông báo "Tạo khách hàng thành công".<br>3. Khách hàng mới xuất hiện trong danh sách khách hàng.<br>4. Hệ thống chuyển hướng về trang danh sách khách hàng. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Vài lần mỗi ngày làm việc |

---

## Quy trình chính

1. Nhân viên kinh doanh đang ở trang danh sách khách hàng.
2. Nhân viên kinh doanh nhấn nút **"Thêm khách hàng"** trên trang danh sách.
3. Hệ thống hiển thị form tạo khách hàng mới với các trường: tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú.
4. Nhân viên kinh doanh điền thông tin khách hàng mới: tên ("Trần Thị Bình"), email (`binh.tran@company.com`), địa chỉ, số điện thoại, và ghi chú (nếu có).
5. Nhân viên kinh doanh nhấn nút **"Lưu"**.
6. Hệ thống kiểm tra dữ liệu đầu vào.
7. Hệ thống kiểm tra email không trùng lặp trong cơ sở dữ liệu.
8. Hệ thống tạo bản ghi khách hàng mới với trạng thái mặc định "Đang hoạt động".
9. Hệ thống hiển thị thông báo "Tạo khách hàng thành công".
10. Hệ thống chuyển hướng về trang danh sách khách hàng.
11. Hệ thống hiển thị khách hàng mới trong danh sách.

---

## Các quy trình thay thế

Không có.

---

## Ngoại lệ

**UC-CL-04.NL.1:** Email trùng lặp

- **Kích hoạt:** Tại bước 7, hệ thống phát hiện email đã tồn tại trong cơ sở dữ liệu.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Email đã tồn tại trong hệ thống". Hệ thống không tạo bản ghi mới. Hệ thống giữ nguyên giá trị các trường đã điền trong form (trừ trường email được highlight).
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 4 để sửa email.

**UC-CL-04.NL.2:** Thiếu trường bắt buộc

- **Kích hoạt:** Tại bước 6, nếu trường "Tên" bị bỏ trống.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Tên khách hàng là trường bắt buộc". Hệ thống không tạo bản ghi. Hệ thống giữ nguyên giá trị các trường đã điền.
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 4 để điền tên.

**UC-CL-04.NL.3:** Định dạng email không hợp lệ

- **Kích hoạt:** Tại bước 6, nếu email nhập không đúng định dạng chuẩn (ví dụ: `binh.tran@`).
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Email không đúng định dạng". Hệ thống không tạo bản ghi. Hệ thống giữ nguyên giá trị các trường đã điền.
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 4 để sửa email.

**UC-CL-04.NL.4:** Hủy tạo khách hàng

- **Kích hoạt:** Tại bước 4, nếu nhân viên kinh doanh nhấn nút **"Hủy"**.
- **Phản hồi:** Hệ thống đóng form và quay về trang danh sách khách hàng.
- **Trạng thái cuối:** Không có bản ghi nào được tạo. Use Case kết thúc.

---

## Bao gồm

Không có.

---

## Yêu cầu đặc biệt

- **Trường bắt buộc:** Tên và email.
- **Trường không bắt buộc:** Địa chỉ, số điện thoại, ghi chú.
- **Trạng thái mặc định:** "Đang hoạt động".
- **Validation email:** Hỗ trợ format chuẩn RFC 5322.
- **Hiệu suất:** Thời gian phản hồi khi tạo khách hàng không quá 2 giây.

---

## Giả định

1. Trường "ghi chú" không bắt buộc và giới hạn tối đa 500 ký tự.
2. Số điện thoại không bắt buộc và không có validation định dạng Việt Nam ở phiên bản hiện tại.
3. Địa chỉ không bắt buộc.

---

## Ghi chú và vấn đề mở

- [TBD-1] Số điện thoại có cần validation định dạng Việt Nam (+84) không? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
- [TBD-2] Có cần kiểm tra email thực hay chỉ kiểm tra format không? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
