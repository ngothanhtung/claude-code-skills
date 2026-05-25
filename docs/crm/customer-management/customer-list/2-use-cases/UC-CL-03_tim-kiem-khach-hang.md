# UC-CL-03: Tìm kiếm khách hàng

| Trường | Nội dung |
|---|:---|
| **Mã định danh Use Case** | UC-CL-03 |
| **Tên Use Case** | Tìm kiếm khách hàng |
| **Người tạo** | BA |
| **Người cập nhật** | — |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhật** | — |
| **Tác nhân chính** | Nhân viên kinh doanh (đã đăng nhập, đang ở trang danh sách khách hàng) |
| **Tác nhân phụ** | Không có |
| **Mô tả** | Nhân viên kinh doanh đã đăng nhập và đang ở trang danh sách khách hàng muốn tìm kiếm nhanh một khách hàng cụ thể bằng cách nhập tên hoặc email vào ô tìm kiếm. Mục tiêu là tra cứu nhanh thông tin khách hàng khi cần giao dịch hoặc liên hệ. Use Case kết thúc khi hệ thống hiển thị đúng bản ghi khách hàng chứa từ khóa tìm kiếm trong trường tên hoặc email. |
| **Điều kiện tiên quyết** | 1. Nhân viên kinh doanh đã đăng nhập thành công vào hệ thống CRM.<br>2. Nhân viên kinh doanh đang ở trang danh sách khách hàng.<br>3. Dữ liệu khách hàng đã tồn tại trong cơ sở dữ liệu. |
| **Điều kiện kết quả** | 1. Hệ thống hiển thị đúng bản ghi khách hàng có tên hoặc email chứa từ khóa tìm kiếm.<br>2. Kết quả tìm kiếm có thể gồm 1 hoặc nhiều bản ghi.<br>3. Thông tin phân trang được cập nhật theo số kết quả tìm kiếm. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Nhiều lần mỗi ngày làm việc |

---

## Quy trình chính

1. Nhân viên kinh doanh đang ở trang danh sách khách hàng.
2. Nhân viên kinh doanh nhấp chuột vào ô tìm kiếm.
3. Nhân viên kinh doanh nhập từ khóa tìm kiếm (ví dụ: "Nguyễn Văn An") vào ô tìm kiếm.
4. Nhân viên kinh doanh nhấn nút **"Tìm kiếm"** hoặc nhấn phím Enter.
5. Hệ thống thực hiện tìm kiếm trên trường tên và email của tất cả bản ghi khách hàng.
6. Hệ thống hiển thị danh sách kết quả chứa từ khóa trong trường tên hoặc email.
7. Hệ thống cập nhật thanh phân trang theo số kết quả tìm kiếm.

---

## Các quy trình thay thế

**UC-CL-03.TT.1:** Tìm kiếm bằng email

- Tại bước 3, nếu nhân viên kinh doanh nhập email đầy đủ (ví dụ: `an.nguyen@company.com`) thì hệ thống tìm kiếm chính xác trên trường email và hiển thị bản ghi khớp → tiếp tục từ bước 5.

---

## Ngoại lệ

**UC-CL-03.NL.1:** Không tìm thấy kết quả

- **Kích hoạt:** Tại bước 6, nếu không có bản ghi nào chứa từ khóa.
- **Phản hồi:** Hệ thống hiển thị thông báo "Không tìm thấy khách hàng nào phù hợp với '[từ khóa]'" và thanh phân trang hiển thị tổng số trang là 0.
- **Trạng thái cuối:** Use Case kết thúc.

**UC-CL-03.NL.2:** Từ khóa tìm kiếm trống

- **Kích hoạt:** Tại bước 4, nếu nhân viên kinh doanh nhấn tìm kiếm mà không nhập từ khóa.
- **Phản hồi:** Hệ thống hiển thị thông báo "Vui lòng nhập từ khóa tìm kiếm" và giữ nguyên danh sách khách hàng hiện tại.
- **Trạng thái cuối:** Nhân viên kinh doanh quay về bước 2 để nhập từ khóa.

---

## Bao gồm

Không có.

---

## Yêu cầu đặc biệt

- **Hiệu suất:** Thời gian phản hồi khi tìm kiếm không quá 2 giây.
- **Tìm kiếm:** Không phân biệt hoa thường.
- **Ràng buộc:** Từ khóa tìm kiếm phải có ít nhất 2 ký tự.

---

## Giả định

1. Tìm kiếm áp dụng cho cả trường tên và email.
2. Tìm kiếm là tìm kiếm từng phần (partial match), không yêu cầu khớp chính xác toàn bộ.
3. Kết quả tìm kiếm không ảnh hưởng đến bộ lọc trạng thái đang áp dụng.

---

## Ghi chú và vấn đề mở

Không có.
