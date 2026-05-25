# UC-CL-05: Cập nhật thông tin khách hàng

| Trường | Nội dung |
|---|:---|
| **Mã định danh Use Case** | UC-CL-05 |
| **Tên Use Case** | Cập nhật thông tin khách hàng |
| **Người tạo** | BA |
| **Người cập nhật** | — |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhật** | — |
| **Tác nhân chính** | Nhân viên kinh doanh (đã đăng nhập, được phân quyền chỉnh sửa khách hàng) |
| **Tác nhân phụ** | Không có |
| **Mô tả** | Nhân viên kinh doanh đã đăng nhập và đang ở trang danh sách khách hàng muốn chỉnh sửa thông tin của một khách hàng cụ thể (tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú). Mục tiêu là đảm bảo thông tin khách hàng trong hệ thống CRM luôn chính xác và cập nhật kịp thời. Use Case kết thúc khi hệ thống cập nhật bản ghi thành công, hiển thị thông báo xác nhận và phản ánh thông tin mới trong danh sách. |
| **Điều kiện tiên quyết** | 1. Nhân viên kinh doanh đã đăng nhập thành công vào hệ thống CRM.<br>2. Nhân viên kinh doanh được phân quyền chỉnh sửa khách hàng trong module CRM.<br>3. Bản ghi khách hàng cần sửa đã tồn tại trong cơ sở dữ liệu. |
| **Điều kiện kết quả** | 1. Bản ghi khách hàng được cập nhật với thông tin mới trong cơ sở dữ liệu.<br>2. Hệ thống hiển thị thông báo "Cập nhật khách hàng thành công".<br>3. Thông tin khách hàng trong danh sách phản ánh đúng dữ liệu vừa sửa. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Vài lần mỗi ngày làm việc |

---

## Quy trình chính

1. Nhân viên kinh doanh đang ở trang danh sách khách hàng.
2. Nhân viên kinh doanh chọn khách hàng cần sửa từ danh sách (ví dụ: "Lê Văn Cường").
3. Nhân viên kinh doanh nhấn nút **"Sửa"** trên bản ghi khách hàng.
4. Hệ thống hiển thị form chỉnh sửa khách hàng với đầy đủ thông tin hiện tại của khách hàng đã chọn.
5. Nhân viên kinh doanh chỉnh sửa các trường cần thay đổi (ví dụ: cập nhật số điện thoại thành "0901234567" và trạng thái thành "Không hoạt động").
6. Nhân viên kinh doanh nhấn nút **"Lưu"**.
7. Hệ thống kiểm tra dữ liệu đầu vào.
8. Hệ thống kiểm tra email không trùng lặp với khách hàng khác.
9. Hệ thống cập nhật bản ghi khách hàng với thông tin mới.
10. Hệ thống hiển thị thông báo "Cập nhật khách hàng thành công".
11. Hệ thống chuyển hướng về trang danh sách khách hàng.
12. Hệ thống hiển thị thông tin khách hàng đã cập nhật trong danh sách.

---

## Các quy trình thay thế

Không có.

---

## Ngoại lệ

**UC-CL-05.NL.1:** Email trùng lặp khi sửa

- **Kích hoạt:** Tại bước 8, hệ thống phát hiện email mới trùng với email của khách hàng khác.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Email đã tồn tại trong hệ thống". Hệ thống không cập nhật bản ghi. Hệ thống giữ nguyên giá trị các trường đã sửa (ngoại trừ email).
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 5 để sửa email.

**UC-CL-05.NL.2:** Thiếu trường bắt buộc khi sửa

- **Kích hoạt:** Tại bước 7, nếu trường "Tên" bị xóa trắng.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Tên khách hàng là trường bắt buộc". Hệ thống không cập nhật bản ghi. Hệ thống giữ nguyên giá trị các trường đã sửa.
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 5 để điền lại tên.

**UC-CL-05.NL.3:** Email không hợp lệ khi sửa

- **Kích hoạt:** Tại bước 7, nếu email mới không đúng định dạng chuẩn.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Email không đúng định dạng". Hệ thống không cập nhật bản ghi. Hệ thống giữ nguyên giá trị các trường đã sửa.
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 5 để sửa email.

**UC-CL-05.NL.4:** Hủy chỉnh sửa

- **Kích hoạt:** Tại bước 5, nếu nhân viên kinh doanh nhấn nút **"Hủy"**.
- **Phản hồi:** Hệ thống đóng form và quay về trang danh sách khách hàng.
- **Trạng thái cuối:** Bản ghi khách hàng không bị thay đổi. Use Case kết thúc.

---

## Bao gồm

Không có.

---

## Yêu cầu đặc biệt

- **Trường bắt buộc khi sửa:** Tên và email (giống tạo mới).
- **Trường không được sửa:** Mã khách hàng (ID) không được phép thay đổi.
- **Hiệu suất:** Thời gian phản hồi khi cập nhật không quá 2 giây.

---

## Giả định

1. Chỉ cho phép sửa thông tin, không cho phép sửa mã khách hàng (ID).
2. Không có side effect trên các bản ghi khác khi cập nhật.

---

## Ghi chú và vấn đề mở

- [TBD-1] Có cần lưu lại lịch sử chỉnh sửa (audit log) không? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
- [TBD-2] Ai có quyền sửa — tất cả nhân viên hay chỉ quản lý? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
