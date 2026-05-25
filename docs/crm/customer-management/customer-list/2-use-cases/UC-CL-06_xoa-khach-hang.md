# UC-CL-06: Xóa khách hàng

| Trường | Nội dung |
|---|:---|
| **Mã định danh Use Case** | UC-CL-06 |
| **Tên Use Case** | Xóa khách hàng |
| **Người tạo** | BA |
| **Người cập nhật** | — |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhật** | — |
| **Tác nhân chính** | Nhân viên kinh doanh (đã đăng nhập, được phân quyền xóa khách hàng) |
| **Tác nhân phụ** | Không có |
| **Mô tả** | Nhân viên kinh doanh đã đăng nhập và đang ở trang danh sách khách hàng muốn xóa một bản ghi khách hàng không còn cần thiết khỏi hệ thống CRM. Mục tiêu là loại bỏ khách hàng không còn hoạt động để giữ dữ liệu CRM luôn gọn gàng và chính xác. Use Case kết thúc khi hệ thống ẩn bản ghi khách hàng (xóa mềm), hiển thị thông báo xác nhận và khách hàng không còn xuất hiện trong danh sách, kết quả lọc hay tìm kiếm. |
| **Điều kiện tiên quyết** | 1. Nhân viên kinh doanh đã đăng nhập thành công vào hệ thống CRM.<br>2. Nhân viên kinh doanh được phân quyền xóa khách hàng trong module CRM.<br>3. Bản ghi khách hàng cần xóa đã tồn tại trong cơ sở dữ liệu. |
| **Điều kiện kết quả** | 1. Bản ghi khách hàng được đánh dấu là đã xóa (soft delete) trong cơ sở dữ liệu.<br>2. Hệ thống hiển thị thông báo "Xóa khách hàng thành công".<br>3. Khách hàng không còn xuất hiện trong danh sách khách hàng, kết quả lọc, hay kết quả tìm kiếm. |
| **Mức ưu tiên** | Trung bình |
| **Tần suất sử dụng** | Vài lần mỗi tuần |

---

## Quy trình chính

1. Nhân viên kinh doanh đang ở trang danh sách khách hàng.
2. Nhân viên kinh doanh chọn khách hàng cần xóa từ danh sách (ví dụ: "Vũ Thị G").
3. Nhân viên kinh doanh nhấn nút **"Xóa"** trên bản ghi khách hàng.
4. Hệ thống hiển thị hộp thoại xác nhận xóa với nội dung: "Bạn có chắc chắn muốn xóa khách hàng 'Vũ Thị G'? Hành động này không thể hoàn tác."
5. Hệ thống hiển thị 2 nút trong hộp thoại: **"Hủy"** và **"Xác nhận"**.
6. Nhân viên kinh doanh nhấn nút **"Xác nhận"**.
7. Hệ thống thực hiện xóa mềm bản ghi khách hàng.
8. Hệ thống đóng hộp thoại xác nhận.
9. Hệ thống hiển thị thông báo "Xóa khách hàng thành công".
10. Hệ thống ẩn bản ghi khách hàng khỏi danh sách.

---

## Các quy trình thay thế

Không có.

---

## Ngoại lệ

**UC-CL-06.NL.1:** Hủy xóa khi chưa xác nhận

- **Kích hoạt:** Tại bước 6, nếu nhân viên kinh doanh nhấn nút **"Hủy"**.
- **Phản hồi:** Hệ thống đóng hộp thoại xác nhận.
- **Trạng thái cuối:** Không có bản ghi nào bị xóa hoặc thay đổi. Bản ghi khách hàng vẫn tồn tại với đầy đủ thông tin trong danh sách. Use Case kết thúc.

**UC-CL-06.NL.2:** Khách hàng có đơn hàng hoặc hợp đồng liên quan

- **Kích hoạt:** Tại bước 7, hệ thống phát hiện khách hàng có đơn hàng hoặc hợp đồng liên quan trong hệ thống.
- **Phản hồi:** Hệ thống hiển thị cảnh báo: "Khách hàng này có đơn hàng/hợp đồng liên quan. Bạn có muốn tiếp tục xóa không?" Hệ thống hiển thị 3 nút: **"Hủy"**, **"Xóa và hủy dữ liệu liên quan"**, **"Chỉ xóa khách hàng"**.
- **Trạng thái cuối:** Nếu nhân viên chọn "Hủy" thì quay về bước 8 (không xóa gì). Nếu nhân viên chọn "Xóa và hủy dữ liệu liên quan" hoặc "Chỉ xóa khách hàng" thì hệ thống tiếp tục xóa mềm và quay về bước 8.

**UC-CL-06.NL.3:** Không có quyền xóa

- **Kích hoạt:** Tại bước 3, nếu nhân viên kinh doanh không được phân quyền xóa.
- **Phản hồi:** Hệ thống hiển thị thông báo lỗi "Bạn không có quyền thực hiện thao tác này".
- **Trạng thái cuối:** Hệ thống không hiển thị nút "Xóa". Use Case kết thúc.

---

## Bao gồm

Không có.

---

## Yêu cầu đặc biệt

- **Phương thức xóa:** Xóa mềm (soft delete) — bản ghi bị ẩn nhưng vẫn lưu trong cơ sở dữ liệu.
- **Xác nhận bắt buộc:** Hệ thống bắt buộc xác nhận trước khi xóa.
- **Hiệu suất:** Thời gian phản hồi khi xóa không quá 2 giây.
- **Toàn vẹn dữ liệu:** Không ảnh hưởng đến các bản ghi đơn hàng, hợp đồng liên quan khi chỉ xóa khách hàng.

---

## Giả định

1. Xóa mềm (soft delete) — khách hàng bị ẩn nhưng vẫn lưu trong database.
2. Khách hàng đã xóa không hiển thị trong danh sách chính, kết quả lọc, hay kết quả tìm kiếm.

---

## Ghi chú và vấn đề mở

- [TBD-1] Có cần khôi phục (undo) sau khi xóa không? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
- [TBD-2] Khách hàng có đơn hàng/hợp đồng thì có được xóa không? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
- [TBD-3] Có cần xóa vĩnh viễn (hard delete) sau một khoảng thời gian không? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
