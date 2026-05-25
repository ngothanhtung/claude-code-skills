# UC-CL-01: Xem danh sách khách hàng

| Trường | Nội dung |
|---|:---|
| **Mã định danh Use Case** | UC-CL-01 |
| **Tên Use Case** | Xem danh sách khách hàng |
| **Người tạo** | BA |
| **Người cập nhật** | — |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhật** | — |
| **Tác nhân chính** | Nhân viên kinh doanh (đã đăng nhập, được phân quyền truy cập module CRM) |
| **Tác nhân phụ** | Không có |
| **Mô tả** | Nhân viên kinh doanh đã đăng nhập và được phân quyền truy cập module CRM muốn xem danh sách tất cả khách hàng với đầy đủ thông tin cơ bản (tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú) kèm phân trang. Mục tiêu là nắm được tổng quan danh sách khách hàng hiện có và tra cứu nhanh khi cần. Use Case kết thúc khi hệ thống hiển thị danh sách khách hàng đã được phân trang, mỗi trang tối đa 10 bản ghi. |
| **Điều kiện tiên quyết** | 1. Nhân viên kinh doanh đã đăng nhập thành công vào hệ thống CRM.<br>2. Nhân viên kinh doanh được phân quyền truy cập module Quản lý khách hàng.<br>3. Dữ liệu khách hàng đã tồn tại trong cơ sở dữ liệu (ít nhất 1 bản ghi). |
| **Điều kiện kết quả** | 1. Hệ thống hiển thị danh sách khách hàng với đầy đủ 6 trường thông tin trên mỗi bản ghi: tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú.<br>2. Danh sách được phân trang, mỗi trang tối đa 10 bản ghi.<br>3. Thông tin phân trang (tổng số trang, trang hiện tại) được hiển thị rõ ràng. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Nhiều lần mỗi ngày làm việc |

---

## Quy trình chính

1. Nhân viên kinh doanh chọn mục **Quản lý khách hàng** trên thanh điều hướng của hệ thống CRM.
2. Hệ thống hiển thị trang danh sách khách hàng mặc định (trang 1, bộ lọc "Tất cả", không có từ khóa tìm kiếm).
3. Hệ thống hiển thị tối đa 10 bản ghi khách hàng đầu tiên, mỗi bản ghi gồm 6 trường: tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú (tối đa 100 ký tự).
4. Hệ thống hiển thị thanh phân trang với thông tin: tổng số trang, số trang hiện tại, và các nút chuyển trang.
5. Nhân viên kinh doanh nhấn nút chuyển sang trang tiếp theo.
6. Hệ thống tải và hiển thị 10 bản ghi tiếp theo.
7. Hệ thống cập nhật thanh phân trang để phản ánh trang hiện tại.

---

## Các quy trình thay thế

**UC-CL-01.TT.1:** Chuyển về trang trước

- Tại bước 5, nếu nhân viên kinh doanh nhấn nút **"Trang trước"** thì hệ thống quay về trang trước đó và hiển thị đúng 10 bản ghi tương ứng → tiếp tục từ bước 7.

---

## Ngoại lệ

**UC-CL-01.NL.1:** Danh sách khách hàng trống

- **Kích hoạt:** Tại bước 3, nếu cơ sở dữ liệu không có bản ghi khách hàng nào.
- **Phản hồi:** Hệ thống hiển thị thông báo "Chưa có khách hàng nào trong hệ thống" thay vì bảng dữ liệu rỗng.
- **Trạng thái cuối:** Use Case kết thúc.

**UC-CL-01.NL.2:** Phân trang — trang cuối có ít hơn 10 bản ghi

- **Kích hoạt:** Tại bước 6, nếu trang cuối chỉ có 5 bản ghi.
- **Phản hồi:** Hệ thống hiển thị đúng 5 bản ghi đó.
- **Trạng thái cuối:** Phân trang hoạt động bình thường.

**UC-CL-01.NL.3:** Không có quyền truy cập

- **Kích hoạt:** Tại bước 1, nếu nhân viên kinh doanh không được phân quyền truy cập module CRM.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi quyền truy cập và chặn truy cập.
- **Trạng thái cuối:** Use Case kết thúc mà không hiển thị danh sách khách hàng.

---

## Bao gồm

Không có.

---

## Yêu cầu đặc biệt

- **Hiệu suất:** Thời gian phản hồi khi tải trang danh sách không quá 2 giây.
- **Phân trang:** Mỗi trang tối đa 10 bản ghi.
- **Hiển thị:** Ghi chú hiển thị tối đa 100 ký tự trong danh sách.

---

## Giả định

1. Bộ lọc trạng thái mặc định khi vào trang là "Tất cả".
2. Sắp xếp mặc định theo thứ tự thời gian tạo mới nhất.

---

## Ghi chú và vấn đề mở

- [TBD-1] Số bản ghi mặc định trên mỗi trang là 10 hay 20? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
