# UC-CL-02: Lọc danh sách khách hàng theo trạng thái

| Trường | Nội dung |
|---|:---|
| **Mã định danh Use Case** | UC-CL-02 |
| **Tên Use Case** | Lọc danh sách khách hàng theo trạng thái |
| **Người tạo** | BA |
| **Người cập nhật** | — |
| **Ngày tạo** | 2026-05-25 |
| **Ngày cập nhật** | — |
| **Tác nhân chính** | Nhân viên kinh doanh (đã đăng nhập, đang ở trang danh sách khách hàng) |
| **Tác nhân phụ** | Không có |
| **Mô tả** | Nhân viên kinh doanh đã đăng nhập và đang ở trang danh sách khách hàng muốn lọc danh sách theo trạng thái khách hàng (ví dụ: "Đang hoạt động", "Không hoạt động") để thu hẹp phạm vi hiển thị. Mục tiêu là xem nhanh nhóm khách hàng thuộc một trạng thái cụ thể. Use Case kết thúc khi hệ thống hiển thị đúng các bản ghi khách hàng có trạng thái tương ứng với bộ lọc đã chọn. |
| **Điều kiện tiên quyết** | 1. Nhân viên kinh doanh đã đăng nhập thành công vào hệ thống CRM.<br>2. Nhân viên kinh doanh đang ở trang danh sách khách hàng.<br>3. Hệ thống CRM có ít nhất 2 khách hàng thuộc 2 trạng thái khác nhau để thực hiện lọc. |
| **Điều kiện kết quả** | 1. Hệ thống hiển thị đúng các bản ghi khách hàng có trạng thái tương ứng với bộ lọc đã chọn.<br>2. Các bản ghi có trạng thái khác với bộ lọc không xuất hiện trong danh sách.<br>3. Thông tin phân trang được cập nhật theo số bản ghi sau lọc. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Nhiều lần mỗi ngày làm việc |

---

## Quy trình chính

1. Nhân viên kinh doanh đang ở trang danh sách khách hàng.
2. Hệ thống hiển thị danh sách khách hàng mặc định với bộ lọc "Tất cả".
3. Nhân viên kinh doanh chọn một trạng thái cụ thể từ danh sách bộ lọc trạng thái (ví dụ: "Đang hoạt động").
4. Hệ thống lọc danh sách và hiển thị chỉ các khách hàng có trạng thái đã chọn.
5. Hệ thống cập nhật thanh phân trang dựa trên số bản ghi sau lọc.
6. Hệ thống hiển thị nhãn bộ lọc đang áp dụng trên giao diện.

---

## Các quy trình thay thế

**UC-CL-02.TT.1:** Chuyển về bộ lọc "Tất cả"

- Tại bước 4, nếu nhân viên kinh doanh chọn lại bộ lọc "Tất cả" thì hệ thống hiển thị toàn bộ danh sách khách hàng không phân biệt trạng thái → tiếp tục từ bước 5.

---

## Ngoại lệ

**UC-CL-02.NL.1:** Không có khách hàng nào thuộc trạng thái được chọn

- **Kích hoạt:** Tại bước 4, nếu không có bản ghi nào thuộc trạng thái đã chọn.
- **Phản hồi:** Hệ thống hiển thị thông báo "Không có khách hàng nào thuộc trạng thái '[tên trạng thái]'" và thanh phân trang hiển thị tổng số trang là 0.
- **Trạng thái cuối:** Use Case kết thúc.

---

## Bao gồm

Không có.

---

## Yêu cầu đặc biệt

- **Hiệu suất:** Thời gian phản hồi khi lọc không quá 2 giây.
- **Tùy chọn bộ lọc:** Danh sách trạng thái có sẵn: "Tất cả", "Đang hoạt động", "Không hoạt động".

---

## Giả định

1. Trạng thái khách hàng chỉ gồm 2 giá trị: "Đang hoạt động" và "Không hoạt động".
2. Bộ lọc trạng thái được reset khi nhân viên tải lại trang.

---

## Ghi chú và vấn đề mở

- [TBD-1] Có cần thêm trạng thái khác ngoài "Đang hoạt động" và "Không hoạt động" (ví dụ: "Chờ xác nhận")? | Người phụ trách: PO | Hạn: — | Giải pháp: TBD.
