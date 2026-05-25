# Task Management (Simple) — User Story & Acceptance Criteria

## 1. Câu chuyện người dùng (User Story)

### Câu chuyện người dùng US-001: Quản lý công việc đơn giản

> **As a** thành viên nhóm dự án đã được phân công vào một dự án
> **I want to** tạo mới, xem, cập nhật và theo dõi trạng thái của các công việc
> **So that** tôi biết rõ mình và đồng nghiệp đang làm gì, tránh trùng lặp công việc và đảm bảo tiến độ đúng hạn

---

## 2. Tự đánh giá theo chuẩn 06 tiêu chí INVEST

| Tiêu chí | Câu hỏi tự kiểm tra | Trạng thái |
| :--- | :--- | :--- |
| **I**ndependent | Không phụ thuộc câu chuyện khác — CRUD tách rõ ràng, có thể chia nhỏ tiếp nếu cần | ✅ Đạt |
| **N**egotiable | Chỉ mô tả hành vi nghiệp vụ, không hard-code chi tiết kỹ thuật giao diện | ✅ Đạt |
| **V**aluable | Rõ ràng: theo dõi ai làm gì, trạng thái nào, hạn nào → giá trị cho cả cá nhân và nhóm | ✅ Đạt |
| **E**stimable | Đủ rõ ràng để ước lượng — 5 trường dữ liệu, 4 thao tác CRUD, 3 trạng thái cố định | ✅ Đạt |
| **S**mall | Có thể chia thành 4 US nhỏ hơn (tạo, xem, cập nhật, xóa) nếu Sprint ngắn | ⚠️ Có thể chia |
| **T**estable | Đủ 7 tiêu chí nghiệm thu với Given-When-Then rõ ràng, đo lường được | ✅ Đạt |

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

### Tiêu chí nghiệm thu 1: Tạo mới công việc (Happy Path)

- **Given** người dùng đã đăng nhập và ở trong trang danh sách công việc của dự án
- **When** người dùng nhấn nút "Tạo công việc mới" và điền đầy đủ các trường `title` (bắt buộc), `summary`, `dueDate`, `assignee`, `status` mặc định là "TO DO"
- **Then** hệ thống lưu công việc thành công và hiển thị công việc mới trong danh sách với trạng thái "TO DO"
- **And** thông báo xác nhận "Công việc đã được tạo thành công" xuất hiện

### Tiêu chí nghiệm thu 2: Cập nhật trạng thái công việc

- **Given** tồn tại ít nhất một công việc có `status` là "TO DO" trong danh sách
- **When** người dùng chọn công việc đó và thay đổi `status` sang "DOING"
- **Then** hệ thống cập nhật trạng thái thành "DOING" và phản ánh ngay trên giao diện danh sách
- **And** trường `status` chỉ chấp nhận một trong ba giá trị: "TO DO", "DOING", hoặc "DONE"

### Tiêu chí nghiệm thu 3: Xử lý lỗi khi tạo công việc thiếu trường bắt buộc

- **Given** người dùng đang ở trong form tạo công việc mới
- **When** người dùng bỏ trống trường `title` (trường bắt buộc) và nhấn nút "Lưu"
- **Then** hệ thống hiển thị thông báo lỗi "Trường tiêu đề (title) là bắt buộc" và không lưu công việc
- **And** công việc không xuất hiện trong danh sách

### Tiêu chí nghiệm thu 4: Xem danh sách công việc

- **Given** người dùng đã đăng nhập và ở trong trang danh sách công việc của dự án
- **When** người dùng chưa có công việc nào hoặc đã có công việc
- **Then** hệ thống hiển thị đúng danh sách công việc, mỗi công việc hiển thị đầy đủ các trường `title`, `status`, `assignee`, `dueDate`
- **And** nếu không có công việc nào, hệ thống hiển thị thông báo "Chưa có công việc nào"

### Tiêu chí nghiệm thu 5: Xóa công việc

- **Given** tồn tại ít nhất một công việc trong danh sách
- **When** người dùng chọn công việc đó và nhấn nút "Xóa"
- **Then** hệ thống hiển thị hộp thoại xác nhận "Bạn có chắc muốn xóa công việc này không?"
- **And** khi người dùng xác nhận, công việc được xóa khỏi danh sách và không còn xuất hiện
- **And** khi người dùng hủy, danh sách công việc giữ nguyên

### Tiêu chí nghiệm thu 6: Xử lý lỗi khi dueDate là ngày trong quá khứ

- **Given** người dùng đang ở trong form tạo công việc mới
- **When** người dùng nhập `dueDate` là một ngày trong quá khứ và nhấn nút "Lưu"
- **Then** hệ thống hiển thị thông báo lỗi "Hạn hoàn thành (dueDate) phải là ngày hiện tại hoặc tương lai"
- **And** công việc không được lưu và không xuất hiện trong danh sách

### Tiêu chí nghiệm thu 7: Ràng buộc thứ tự trạng thái tuyến tính

- **Given** tồn tại một công việc có `status` là "TO DO"
- **When** người dùng cố gắng thay đổi `status` trực tiếp thành "DONE" (bỏ qua "DOING")
- **Then** hệ thống hiển thị thông báo lỗi "Trạng thái phải được chuyển theo thứ tự: TO DO → DOING → DONE"
- **And** trường `status` vẫn giữ nguyên là "TO DO"
- **And** tương tự, không cho phép chuyển ngược: "DONE" → "DOING" hoặc "DONE" → "TO DO"

---

## 4. Phân rã khuyến nghị

Tùy theo độ dài Sprint, có thể chia US-001 thành 4 câu chuyện nhỏ hơn:

| Mã | Tiêu đề |
| :--- | :--- |
| US-001a | Tạo mới công việc |
| US-001b | Xem danh sách công việc |
| US-001c | Cập nhật thông tin và trạng thái công việc |
| US-001d | Xóa công việc |

---

## 5. Giả định & Câu hỏi làm rõ

### Giả định

- Người dùng đã xác thực (authenticated) trước khi thực hiện thao tác
- Trường `assignee` được chọn từ danh sách thành viên đã tham gia dự án
- Trường `dueDate` phải là ngày hiện tại hoặc tương lai (không chấp nhận ngày trong quá khứ)
- Chỉ có thể cập nhật trạng thái theo thứ tự tuyến tính: "TO DO" → "DOING" → "DONE"

### Câu hỏi cần xác nhận

1. Có cần chức năng **xóa** công việc không, hay chỉ cập nhật trạng thái?
2. Có cần **lọc** công việc theo `status`, `assignee`, hoặc `dueDate` không?
3. Trường `assignee` có cho phép gán **nhiều người** vào một công việc không?
4. Ai được phép tạo công việc — chỉ quản lý dự án hay bất kỳ thành viên nào?

---

## 6. Thông tin đầu vào (Input Summary)

| Trường | Loại | Bắt buộc | Mô tả |
| :--- | :--- | :--- | :--- |
| `title` | string | ✅ Có | Tiêu đề công việc |
| `summary` | string | ❌ Không | Mô tả chi tiết công việc |
| `dueDate` | date | ❌ Không | Hạn hoàn thành (≥ ngày hiện tại) |
| `assignee` | string | ❌ Không | Người được giao công việc |
| `status` | enum | ✅ Có | Một trong: TO DO, DOING, DONE (mặc định: TO DO) |
