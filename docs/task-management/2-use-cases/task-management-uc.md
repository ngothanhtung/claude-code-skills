# Task Management - Đặc tả Use Case

> **Tham chiếu**: [task-management.md](./task-management.md)
> **Chuẩn**: Karl Wiegers / IIBA, Alistair Cockburn's "Writing Effective Use Cases"
> **Định dạng**: Template 13 trường, mức độ user-goal

---

## Danh sách Use Case

| Mã Use Case | Tên Use Case | Tác nhân chính | Mức ưu tiên |
|-------------|--------------|-----------------|--------------|
| UC-TM-01 | Tạo công việc | Thành viên nhóm dự án | Cao |
| UC-TM-02 | Xem danh sách công việc | Thành viên nhóm dự án | Cao |
| UC-TM-03 | Cập nhật công việc | Thành viên nhóm dự án | Cao |
| UC-TM-04 | Xóa công việc | Thành viên nhóm dự án | Cao |

---

## UC-TM-01: Tạo công việc

| Trường | Nội dung |
| --- | :--- |
| **Mã định danh Use Case** | UC-TM-01 |
| **Tên Use Case** | Tạo công việc |
| **Người tạo** | |
| **Người cập nhật gần nhất** | |
| **Ngày tạo** | |
| **Ngày cập nhật gần nhất** | |
| **Tác nhân chính** | Thành viên nhóm dự án |
| **Tác nhân phụ** | |
| **Mô tả** | Cho phép thành viên nhóm dự án tạo một công việc mới trong dự án bằng cách điền các trường bắt buộc và tùy chọn. Hệ thống kiểm tra dữ liệu đầu vào và lưu công việc với trạng thái mặc định "TO DO". Khi thành công, công việc xuất hiện trong danh sách công việc. |
| **Điều kiện tiên quyết** | 1. Actor đã xác thực và đăng nhập vào hệ thống; 2. Actor đã được phân công vào dự án; 3. Actor đang ở trang danh sách công việc của dự án. |
| **Điều kiện kết quả** | 1. Một bản ghi công việc mới được lưu trong hệ thống với tất cả giá trị đã cung cấp; 2. Công việc mới hiển thị trong danh sách công việc với trạng thái "TO DO"; 3. Thông báo xác nhận thành công được hiển thị cho actor. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Nhiều lần mỗi ngày mỗi người dùng |

### Quy trình chính

1. Actor nhấn nút "Tạo công việc mới".
2. Hệ thống hiển thị biểu mẫu tạo công việc với các trường: `title` (bắt buộc), `summary` (tùy chọn), `dueDate` (tùy chọn), `assignee` (tùy chọn, danh sách chọn), `status` (mặc định: "TO DO", chỉ đọc).
3. Actor điền `title` và tùy chọn `summary`, `dueDate`, `assignee`.
4. Actor nhấn nút "Lưu".
5. Hệ thống kiểm tra dữ liệu:
   - `title` không được để trống.
   - `dueDate`, nếu được cung cấp, không được là ngày trong quá khứ.
6. Hệ thống lưu công việc với trạng thái mặc định "TO DO".
7. Hệ thống thêm công việc mới vào danh sách công việc.
8. Hệ thống hiển thị thông báo thành công: "Công việc đã được tạo thành công."

### Các quy trình thay thế

**UC-TM-01.TT.1:** Actor hủy tạo công việc

- Tại bước 3, nếu actor nhấn nút "Hủy":
  - 3-a. Hệ thống đóng biểu mẫu và quay về danh sách công việc mà không lưu.
- Kết quả: quay lại bước 1 của Quy trình chính.

**UC-TM-01.TT.2:** Bỏ qua các trường tùy chọn

- Tại bước 3, nếu actor chỉ điền `title` (các trường khác để trống):
  - 3-a. Hệ thống chuyển sang bước 5 với các trường tùy chọn rỗng.
- Kết quả: quay lại bước 5 của Quy trình chính.

**UC-TM-01.TT.3:** Actor chỉ cung cấp trường bắt buộc

- Tại bước 3, nếu actor chỉ điền `title` và không điền gì khác:
  - 3-a. Hệ thống lưu công việc chỉ với `title` và giá trị mặc định cho các trường còn lại.
- Kết quả: quay lại bước 6 của Quy trình chính.

### Ngoại lệ

**UC-TM-01.NL.1:** Thiếu trường bắt buộc `title`

- **Kích hoạt:** Bước 5 — `title` rỗng.
- **Phản hồi:** Hệ thống hiển thị lỗi "Trường tiêu đề (title) là bắt buộc."
- **Trạng thái cuối:** Công việc không được lưu; biểu mẫu vẫn mở cùng dữ liệu đã nhập trước đó.

**UC-TM-01.NL.2:** `dueDate` là ngày trong quá khứ

- **Kích hoạt:** Bước 5 — `dueDate` là ngày trong quá khứ.
- **Phản hồi:** Hệ thống hiển thị lỗi "Hạn hoàn thành (dueDate) phải là ngày hiện tại hoặc tương lai."
- **Trạng thái cuối:** Công việc không được lưu; biểu mẫu vẫn mở.

**UC-TM-01.NL.3:** Hệ thống lỗi khi lưu

- **Kích hoạt:** Bước 6 — lỗi cơ sở dữ liệu hoặc hệ thống.
- **Phản hồi:** Hệ thống hiển thị lỗi "Đã xảy ra lỗi khi lưu công việc. Vui lòng thử lại."
- **Trạng thái cuối:** Công việc không được lưu; biểu mẫu vẫn mở.

### Bao gồm

- _(Không có)_

### Yêu cầu đặc biệt

- Việc tạo công việc phải mang tính nguyên tử: nếu bất kỳ kiểm tra nào thất bại, không có dữ liệu nào được ghi.
- Thời gian phản hồi để hiển thị biểu mẫu sau khi nhấn "Tạo công việc mới" không được vượt quá 2 giây.
- Trường `dueDate` phải sử dụng bộ chọn ngày có khả năng vô hiệu hóa các ngày trong quá khứ.

### Giả định

1. Actor đã xác thực trước khi truy cập hệ thống.
2. Danh sách chọn `assignee` chỉ chứa các thành viên thuộc dự án.
3. Trường `status` mặc định là "TO DO" và không cho phép chỉnh sửa tại thời điểm tạo.

### Ghi chú và vấn đề mở

- [CĐ-1] Xác nhận có gửi thông báo đến assignee khi tạo công việc hay không | Người phụ trách: | Hạn: | Giải pháp:

---

## UC-TM-02: Xem danh sách công việc

| Trường | Nội dung |
| --- | :--- |
| **Mã định danh Use Case** | UC-TM-02 |
| **Tên Use Case** | Xem danh sách công việc |
| **Người tạo** | |
| **Người cập nhật gần nhất** | |
| **Ngày tạo** | |
| **Ngày cập nhật gần nhất** | |
| **Tác nhân chính** | Thành viên nhóm dự án |
| **Tác nhân phụ** | |
| **Mô tả** | Cho phép thành viên nhóm dự án xem tất cả công việc trong dự án. Mỗi công việc hiển thị các trường `title`, `status`, `assignee`, và `dueDate`. Nếu không có công việc nào, hệ thống hiển thị thông báo trạng thái trống. |
| **Điều kiện tiên quyết** | 1. Actor đã xác thực và đăng nhập vào hệ thống; 2. Actor đã được phân công vào dự án; 3. Actor đang ở trang danh sách công việc của dự án. |
| **Điều kiện kết quả** | 1. Danh sách công việc được hiển thị cùng tất cả công việc hiện có; 2. Mỗi dòng công việc hiển thị: `title`, `status`, `assignee`, `dueDate`. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Nhiều lần mỗi ngày mỗi người dùng |

### Quy trình chính

1. Actor điều hướng đến hoặc làm mới trang danh sách công việc của dự án.
2. Hệ thống truy xuất tất cả bản ghi công việc liên quan đến dự án.
3. Hệ thống hiển thị danh sách công việc, mỗi công việc hiển thị `title`, `status`, `assignee`, và `dueDate`.

### Các quy trình thay thế

**UC-TM-02.TT.1:** Không có công việc nào

- Tại bước 2, nếu không tìm thấy bản ghi công việc nào:
  - 2-a. Hệ thống hiển thị thông báo trạng thái trống "Chưa có công việc nào" thay vì bảng danh sách công việc.
- Kết quả: quay lại bước 3 của Quy trình chính.

**UC-TM-02.TT.2:** Actor sắp xếp hoặc lọc danh sách

- Tại bước 3, nếu actor chọn tiêu chí sắp xếp hoặc lọc (theo `status`, `assignee`, hoặc `dueDate`):
  - 3-a. Hệ thống truy xuất lại và hiển thị danh sách theo tiêu chí đã chọn.
- Kết quả: quay lại bước 3 của Quy trình chính.

### Ngoại lệ

**UC-TM-02.NL.1:** Hệ thống lỗi khi truy xuất công việc

- **Kích hoạt:** Bước 2 — lỗi cơ sở dữ liệu hoặc kết nối.
- **Phản hồi:** Hệ thống hiển thị lỗi "Không thể tải danh sách công việc. Vui lòng thử lại."
- **Trạng thái cuối:** Trang hiển thị trạng thái lỗi; không có dữ liệu công việc nào được hiển thị.

### Bao gồm

- _(Không có)_

### Yêu cầu đặc biệt

- Danh sách công việc phải được hiển thị đầy đủ trong vòng 3 giây trên kết nối mạng tiêu chuẩn.
- Nếu có hơn 50 công việc, cần áp dụng phân trang hoặc cuộn ảo.
- Trường `status` phải hiển thị với badge màu sắc để nhận diện nhanh (TO DO: xám, DOING: xanh dương, DONE: xanh lục).

### Giả định

1. Danh sách công việc phản ánh dữ liệu cập nhật nhất tại thời điểm truy xuất.
2. Tất cả công việc thuộc dự án được trả về; công việc từ các dự án khác không được bao gồm.

### Ghi chú và vấn đề mở

- [CĐ-2] Xác nhận tính năng lọc và sắp xếp có trong phạm vi phát hành đầu tiên hay ở lần lặp tương lai | Người phụ trách: | Hạn: | Giải pháp:

---

## UC-TM-03: Cập nhật công việc

| Trường | Nội dung |
| --- | :--- |
| **Mã định danh Use Case** | UC-TM-03 |
| **Tên Use Case** | Cập nhật công việc |
| **Người tạo** | |
| **Người cập nhật gần nhất** | |
| **Ngày tạo** | |
| **Ngày cập nhật gần nhất** | |
| **Tác nhân chính** | Thành viên nhóm dự án |
| **Tác nhân phụ** | |
| **Mô tả** | Cho phép thành viên nhóm dự án cập nhật chi tiết và trạng thái của một công việc hiện có. Hệ thống thực thi chuyển trạng thái tuyến tính: TO DO → DOING → DONE. Các chuyển trạng thái ngược hoặc bỏ qua bước không được phép. |
| **Điều kiện tiên quyết** | 1. Actor đã xác thực và đăng nhập vào hệ thống; 2. Actor đã được phân công vào dự án; 3. Có ít nhất một công việc trong danh sách công việc. |
| **Điều kiện kết quả** | 1. Bản ghi công việc được cập nhật phản ánh các giá trị mới cho tất cả các trường đã thay đổi; 2. Danh sách công việc được làm mới để hiển thị công việc đã cập nhật; 3. Nếu `status` được thay đổi, trạng thái mới được phản ánh ngay lập tức trong danh sách công việc. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Nhiều lần mỗi ngày mỗi người dùng |

### Quy trình chính

1. Actor chọn một công việc từ danh sách công việc bằng cách nhấn vào công việc đó.
2. Hệ thống hiển thị biểu mẫu chi tiết hoặc chỉnh sửa công việc, đã điền sẵn các giá trị hiện tại của tất cả các trường.
3. Actor chỉnh sửa một hoặc nhiều trường (`title`, `summary`, `dueDate`, `assignee`, `status`).
4. Actor nhấn nút "Lưu".
5. Hệ thống kiểm tra dữ liệu:
   - Nếu `status` được thay đổi, trạng thái mới phải đúng một bước phía trước trạng thái hiện tại (TO DO → DOING, hoặc DOING → DONE).
   - `title`, nếu được thay đổi, không được để trống.
   - `dueDate`, nếu được thay đổi, không được là ngày trong quá khứ.
6. Hệ thống lưu bản ghi công việc đã cập nhật.
7. Hệ thống làm mới danh sách công việc để hiển thị các giá trị đã cập nhật.
8. Hệ thống hiển thị thông báo thành công: "Công việc đã được cập nhật thành công."

### Các quy trình thay thế

**UC-TM-03.TT.1:** Actor hủy cập nhật

- Tại bước 3, nếu actor nhấn nút "Hủy":
  - 3-a. Hệ thống đóng biểu mẫu và hủy bỏ tất cả thay đổi mà không lưu.
- Kết quả: quay lại bước 1 của Quy trình chính.

**UC-TM-03.TT.2:** Actor chỉ cập nhật các trường tùy chọn

- Tại bước 3, nếu actor chỉ thay đổi `summary`, `assignee`, hoặc `dueDate` (không thay đổi `title` hoặc `status`):
  - 3-a. Hệ thống chỉ kiểm tra các trường đã thay đổi và lưu.
- Kết quả: quay lại bước 5 của Quy trình chính.

**UC-TM-03.TT.3:** Actor cập nhật `dueDate` thành ngày tương lai

- Tại bước 3, nếu actor thay đổi `dueDate` thành một ngày trong tương lai:
  - 3-a. Hệ thống kiểm tra ngày hợp lệ và lưu giá trị mới.
- Kết quả: quay lại bước 5 của Quy trình chính.

### Ngoại lệ

**UC-TM-03.NL.1:** Chuyển trạng thái không đúng thứ tự

- **Kích hoạt:** Bước 5 — actor cố gắng thay đổi `status` thành giá trị không liền kề (ví dụ: TO DO → DONE, hoặc bất kỳ thay đổi ngược nào).
- **Phản hồi:** Hệ thống hiển thị lỗi "Trạng thái phải được chuyển theo thứ tự: TO DO → DOING → DONE."
- **Trạng thái cuối:** `status` quay về giá trị ban đầu; các thay đổi khác vẫn giữ trong biểu mẫu.

**UC-TM-03.NL.2:** `title` bị xóa trống

- **Kích hoạt:** Bước 5 — `title` rỗng sau khi chỉnh sửa.
- **Phản hồi:** Hệ thống hiển thị lỗi "Trường tiêu đề (title) là bắt buộc."
- **Trạng thái cuối:** Công việc không được lưu; biểu mẫu vẫn mở với tất cả thay đổi được bảo toàn.

**UC-TM-03.NL.3:** `dueDate` được cập nhật thành ngày trong quá khứ

- **Kích hoạt:** Bước 5 — `dueDate` được thay đổi thành ngày trong quá khứ.
- **Phản hồi:** Hệ thống hiển thị lỗi "Hạn hoàn thành (dueDate) phải là ngày hiện tại hoặc tương lai."
- **Trạng thái cuối:** Công việc không được lưu; biểu mẫu vẫn mở.

**UC-TM-03.NL.4:** Hệ thống lỗi khi lưu

- **Kích hoạt:** Bước 6 — lỗi cơ sở dữ liệu hoặc hệ thống.
- **Phản hồi:** Hệ thống hiển thị lỗi "Đã xảy ra lỗi khi cập nhật công việc. Vui lòng thử lại."
- **Trạng thái cuối:** Công việc giữ nguyên; biểu mẫu vẫn mở với các giá trị đã nhập.

### Bao gồm

- _(Không có)_

### Yêu cầu đặc biệt

- Quy tắc chuyển trạng thái tuyến tính (TO DO → DOING → DONE) phải được thực thi ở tầng hệ thống, không chỉ ở tầng giao diện.
- Tất cả các cập nhật trường phải mang tính nguyên tử.
- Nhật ký kiểm toán nên ghi lại ai đã thực hiện thay đổi và thời điểm.

### Giả định

1. Công việc đang được cập nhật vẫn tồn tại trong hệ thống (chưa bị xóa đồng thời).
2. Actor có quyền chỉnh sửa công việc trong dự án.

### Ghi chú và vấn đề mở

- [CĐ-3] Xác nhận có cần cảnh báo khóa lạc quan khi chỉnh sửa đồng thời hay không | Người phụ trách: | Hạn: | Giải pháp:

---

## UC-TM-04: Xóa công việc

| Trường | Nội dung |
| --- | :--- |
| **Mã định danh Use Case** | UC-TM-04 |
| **Tên Use Case** | Xóa công việc |
| **Người tạo** | |
| **Người cập nhật gần nhất** | |
| **Ngày tạo** | |
| **Ngày cập nhật gần nhất** | |
| **Tác nhân chính** | Thành viên nhóm dự án |
| **Tác nhân phụ** | |
| **Mô tả** | Cho phép thành viên nhóm dự án xóa vĩnh viễn một công việc hiện có khỏi dự án. Hệ thống yêu cầu xác nhận rõ ràng trước khi xóa để ngăn ngừa thao tác vô tình. |
| **Điều kiện tiên quyết** | 1. Actor đã xác thực và đăng nhập vào hệ thống; 2. Actor đã được phân công vào dự án; 3. Có ít nhất một công việc trong danh sách công việc. |
| **Điều kiện kết quả** | 1. Công việc đã xóa không còn tồn tại trong hệ thống; 2. Công việc không còn xuất hiện trong danh sách công việc. |
| **Mức ưu tiên** | Cao |
| **Tần suất sử dụng** | Không thường xuyên — vài lần mỗi tuần mỗi người dùng |

### Quy trình chính

1. Actor chọn một công việc từ danh sách công việc bằng cách nhấn vào công việc đó.
2. Hệ thống hiển thị chế độ xem chi tiết công việc kèm nút "Xóa".
3. Actor nhấn nút "Xóa".
4. Hệ thống hiển thị hộp thoại xác nhận: "Bạn có chắc muốn xóa công việc này không?"
5. Actor xác nhận xóa.
6. Hệ thống xóa vĩnh viễn bản ghi công việc khỏi cơ sở dữ liệu.
7. Hệ thống xóa công việc khỏi danh sách công việc.
8. Hệ thống hiển thị thông báo thành công: "Công việc đã được xóa thành công."

### Các quy trình thay thế

**UC-TM-04.TT.1:** Actor hủy xóa

- Tại bước 5, nếu actor nhấn "Hủy" hoặc đóng hộp thoại:
  - 5-a. Hệ thống đóng hộp thoại và không thực hiện hành động nào. Công việc vẫn giữ nguyên trong danh sách công việc.
- Kết quả: quay lại bước 2 của Quy trình chính.

### Ngoại lệ

**UC-TM-04.NL.1:** Công việc không còn tồn tại

- **Kích hoạt:** Bước 5 — hệ thống phát hiện công việc đã bị xóa bởi người dùng khác.
- **Phản hồi:** Hệ thống hiển thị lỗi "Công việc này không còn tồn tại."
- **Trạng thái cuối:** Hộp thoại đóng; danh sách công việc được làm mới; công việc không xuất hiện.

**UC-TM-04.NL.2:** Hệ thống lỗi khi xóa

- **Kích hoạt:** Bước 6 — lỗi cơ sở dữ liệu hoặc hệ thống.
- **Phản hồi:** Hệ thống hiển thị lỗi "Đã xảy ra lỗi khi xóa công việc. Vui lòng thử lại."
- **Trạng thái cuối:** Công việc vẫn còn trong hệ thống và danh sách công việc giữ nguyên.

### Bao gồm

- _(Không có)_

### Yêu cầu đặc biệt

- Hộp thoại xác nhận phải là cửa sổ bật lên (modal) và yêu cầu hành động rõ ràng từ người dùng để đóng (không cho phép đóng bằng cách nhấn ra ngoài).
- Xóa mềm (soft delete) không nằm trong phạm vi; việc xóa là vĩnh viễn.
- Nhật ký kiểm toán nên ghi lại sự kiện xóa kèm danh tính actor và dấu thời gian.

### Giả định

1. Actor hiểu rằng việc xóa là vĩnh viễn và không thể hoàn tác.
2. Actor có đủ quyền để xóa công việc trong dự án.

### Ghi chú và vấn đề mở

- [CĐ-4] Xác nhận có nên thêm tính năng xóa mềm hoặc thùng rác trong lần lặp tương lai hay không | Người phụ trách: | Hạn: | Giải pháp:

---

## Bảng kiểm tra chất lượng (20 điểm)

### Hướng dẫn từng tiêu chí

**C1 — Đặt tên theo dạng Động từ + Danh từ**
: Tên Use Case phải bắt đầu bằng động từ nguyên mẫu.
: - Đúng: "Tạo công việc", "Xem danh sách công việc"
: - Sai: "Danh sách công việc" (không có động từ đứng đầu)
: Câu hỏi gợi ý: Ai làm gì? Động từ chính là gì?

**C2 — Kiểm tra nghỉ giải lao (Coffee-break test)**
: Mỗi Use Case phải độc lập; actor có thể dừng sau khi hoàn thành mà không ảnh hưởng đến tính đúng đắn.
: - Không có phụ thuộc ngầm vào Use Case khác.
: - Mỗi Use Case có một mục tiêu duy nhất và rõ ràng.
: Câu hỏi gợi ý: Actor có thể dừng giữa chừng mà không gây ra trạng thái lỗi không?

**C3 — Mã định danh duy nhất**
: Dùng định dạng `UC-[Hệ thống con]-[Số thứ tự]`.
: - Quy trình thay thế: `.TT.[số]`. Ví dụ: `UC-TM-01.TT.1`
: - Ngoại lệ: `.NL.[số]`. Ví dụ: `UC-TM-01.NL.1`
: - Ghi chú mở: `CĐ-[số]`. Ví dụ: `CĐ-1`
: Câu hỏi gợi ý: Mã có thể uniquely xác định Use Case này trong toàn bộ hệ thống không?

**C4 — 1 Tác nhân chính, 1 Mục tiêu**
: Mỗi Use Case phải có đúng một tác nhân chính và một mục tiêu nghiệp vụ rõ ràng.
: - Không gộp nhiều mục tiêu vào một Use Case.
: - Tác nhân phụ có thể có hoặc không.
: Câu hỏi gợi ý: Nếu tác nhân chính đạt được mục tiêu này, Use Case có hoàn thành không?

**C5 — Ranh giới hệ thống rõ ràng**
: Các bước trong Quy trình chính phải xen kẽ rõ ràng giữa hành động của Actor và phản hồi của Hệ thống.
: - Actor thực hiện hành động.
: - Hệ thống phản hồi hoặc xử lý.
: - Lặp lại cho đến khi đạt mục tiêu.
: Câu hỏi gợi ý: Có bước nào không rõ ai là người thực hiện không?

**C6 — Tác nhân cụ thể**
: Tên tác nhân phải mô tả vai trò cụ thể, không dùng thuật ngữ chung chung.
: - Đúng: "Thành viên nhóm dự án", "Quản lý nhân sự"
: - Sai: "User", "Người dùng", "Khách hàng" (quá chung)
: Câu hỏi gợi ý: Tên này có phân biệt được vai trò này với các vai trò khác không?

**C7 — Mô tả bao gồm Tại sao + Làm gì + Kết quả**
: Mô tả phải trả lời ba câu hỏi:
: - **Tại sao:** Tại sao tác nhân cần thực hiện hành động này?
: - **Làm gì:** Hệ thống làm gì trong Use Case này?
: - **Kết quả:** Kết quả cuối cùng là gì?
: Câu hỏi gợi ý: Một người mới đọc có hiểu được giá trị của Use Case này không?

**C8 — Tần suất được lượng hóa**
: Trường Tần suất sử dụng phải có giá trị cụ thể, có thể đo lường được.
: - Đúng: "Nhiều lần mỗi ngày mỗi người dùng", "Vài lần mỗi tuần mỗi người dùng"
: - Sai: "Thường xuyên", "Đôi khi"
: Câu hỏi gợi ý: Con số này có giúp lập kế hoạch năng lực hệ thống không?

**C9 — Điều kiện tiên quyết có thể kiểm chứng**
: Mỗi điều kiện tiên quyết phải là điều kiện hệ thống có thể kiểm tra trước khi bắt đầu Use Case.
: - Không liệt kê suy đoán chủ quan.
: - Không nhầm lẫn với Giả định.
: Câu hỏi gợi ý: Hệ thống có thể tự kiểm tra điều kiện này trước khi bắt đầu không?

**C10 — Điều kiện kết quả bao quát thành công**
: Điều kiện kết quả phải mô tả trạng thái hệ thống quan sát được sau khi Use Case hoàn thành thành công.
: - Bao gồm thay đổi dữ liệu.
: - Bao gồm thay đổi trạng thái hiển thị.
: Câu hỏi gợi ý: Làm thế nào để biết Use Case đã thành công?

**C11 — Điều kiện tiên quyết khác Giả định**
: Điều kiện tiên quyết là điều kiện hệ thống có thể kiểm chứng. Giả định là niềm tin hoặc ngữ cảnh bên ngoài mà Use Case dựa vào nhưng không nằm trong tầm kiểm soát của hệ thống.
: Câu hỏi gợi ý: Điều kiện này hệ thống có thể tự kiểm tra không? Hay là niềm tin cần được xác nhận?

**C12 — Một hành động mỗi bước**
: Mỗi bước trong Quy trình chính chỉ mô tả một hành động duy nhất.
: - Không gộp nhiều hành động vào một bước.
: - Không nhúng rẽ nhánh hoặc lặp trong luồng chính.
: Câu hỏi gợi ý: Có bước nào mô tả nhiều hơn một hành động không?

**C13 — Xen kẽ Actor và Hệ thống**
: Các bước phải ghi rõ thực thể thực hiện hành động là Actor hay Hệ thống.
: - Bước lẻ: hành động của Actor.
: - Bước chẵn: phản hồi của Hệ thống.
: Câu hỏi gợi ý: Đọc từ đầu đến cuối, có bước nào không rõ ai là người thực hiện không?

**C14 — Không nhúng rẽ nhánh hoặc lặp trong luồng chính**
: Mọi rẽ nhánh (thay thế) phải được xử lý trong mục Các quy trình thay thế. Mọi tình huống lỗi phải được xử lý trong mục Ngoại lệ.
: Câu hỏi gợi ý: Nếu nhìn vào Quy trình chính, nó có mô tả một con đường duy nhất từ đầu đến cuối không?

**C15 — Luồng hoàn chỉnh**
: Mỗi luồng (chính, thay thế, ngoại lệ) phải có điều kiện kích hoạt rõ ràng và kết thúc tại một trạng thái xác định.
: - Quy trình chính kết thúc tại Điều kiện kết quả.
: - Quy trình thay thế quay về một bước trong Quy trình chính.
: - Ngoại lệ kết thúc tại Trạng thái cuối.
: Câu hỏi gợi ý: Mỗi luồng có kết thúc rõ ràng không?

**C16 — Quy trình thay thế chỉ rõ số bước**
: Mỗi Quy trình thay thế phải ghi rõ tại bước nào của Quy trình chính nó rẽ nhánh, và quay về bước nào.
: Câu hỏi gợi ý: Có thể truy ngược từ mã quy trình thay thế đến bước kích hoạt trong Quy trình chính không?

**C17 — Ngoại lệ có đủ 3 phần**
: Mỗi Ngoại lệ phải bao gồm đủ ba phần:
: - **Kích hoạt:** Tại bước nào và điều kiện gì kích hoạt ngoại lệ.
: - **Phản hồi:** Hệ thống phản hồi như thế nào.
: - **Trạng thái cuối:** Trạng thái hệ thống và dữ liệu sau khi ngoại lệ được xử lý.
: Câu hỏi gợi ý: Người đọc có biết chính xác điều gì xảy ra khi ngoại lệ này được kích hoạt không?

**C18 — Các lỗi phổ biến được bao phủ**
: Các lỗi thường gặp trong nghiệp vụ phải được xử lý rõ ràng:
: - Thiếu trường bắt buộc.
: - Dữ liệu không hợp lệ (ngày trong quá khứ, giá trị ngoài phạm vi).
: - Lỗi hệ thống (cơ sở dữ liệu, kết nối).
: - Xung đột đồng thời.
: Câu hỏi gợi ý: Có lỗi nghiệp vụ nào thường gặp mà chưa được xử lý không?

**C19 — Sử dụng chung tồn tại**
: Nếu Use Case có tham chiếu đến Use Case khác trong mục Bao gồm, Use Case được tham chiếu phải tồn tại trong hệ thống.
: Câu hỏi gợi ý: Có Use Case nào tham chiếu đến Use Case sử dụng chung không tồn tại không?

**C20 — Yêu cầu phi chức năng khác yêu cầu chức năng**
: Mục Yêu cầu đặc biệt chỉ chứa các yêu cầu phi chức năng (hiệu suất, bảo mật, độ tin cậy, tuân thủ). Không chứa yêu cầu chức năng.
: - Đúng: "Thời gian phản hồi không quá 2 giây", "Mã hóa dữ liệu nhạy cảm"
: - Sai: "Hệ thống gửi email xác nhận" (đây là yêu cầu chức năng)
: Câu hỏi gợi ý: Các yêu cầu trong mục này có thể đo lường được không?

### Tổng kết kiểm tra

| # | Tiêu chí | Trạng thái | Ghi chú |
|---|----------|------------|---------|
| C1 | Đặt tên theo dạng Động từ + Danh từ | ✅ | Cả 4 Use Case tuân theo định dạng "Verb + Object" |
| C2 | Kiểm tra nghỉ giải lao (Coffee-break test) | ✅ | Mỗi Use Case độc lập; actor có thể dừng sau khi hoàn thành |
| C3 | Mã định danh duy nhất | ✅ | Use Case từ UC-TM-01 đến UC-TM-04; quy trình thay thế dùng mã .TT.[số]; ngoại lệ dùng mã .NL.[số] |
| C4 | 1 Tác nhân chính, 1 Mục tiêu | ✅ | Mỗi Use Case có một tác nhân chính và một mục tiêu nghiệp vụ |
| C5 | Ranh giới hệ thống rõ ràng | ✅ | Các bước xen kẽ giữa Actor và Hệ thống xuyên suốt |
| C6 | Tác nhân cụ thể | ✅ | "Thành viên nhóm dự án" — không dùng "User" chung chung |
| C7 | Mô tả bao gồm Tại sao + Làm gì + Kết quả | ✅ | Tất cả Mô tả bao gồm đủ ba thành phần |
| C8 | Tần suất được lượng hóa | ✅ | Tất cả Use Case có tần suất được xác định rõ |
| C9 | Điều kiện tiên quyết có thể kiểm chứng | ✅ | Tất cả điều kiện tiên quyết là điều kiện có thể kiểm tra |
| C10 | Điều kiện kết quả bao quát thành công | ✅ | Điều kiện kết quả mô tả trạng thái hệ thống quan sát được sau thành công |
| C11 | Điều kiện tiên quyết khác Giả định | ✅ | Điều kiện tiên quyết là yêu cầu có thể kiểm chứng; Giả định là niềm tin chưa xác minh |
| C12 | Một hành động mỗi bước | ✅ | Các bước trong Quy trình chính chứa một hành động mỗi bước |
| C13 | Xen kẽ Actor và Hệ thống | ✅ | Các bước ghi rõ thực thể thực hiện hành động |
| C14 | Không nhúng rẽ nhánh hoặc lặp trong luồng chính | ✅ | Tất cả rẽ nhánh được xử lý trong Các quy trình thay thế và Ngoại lệ |
| C15 | Luồng hoàn chỉnh | ✅ | Mỗi luồng có điều kiện kích hoạt rõ ràng và kết thúc tại điều kiện kết quả |
| C16 | Quy trình thay thế chỉ rõ số bước | ✅ | Tất cả Quy trình thay thế tham chiếu bước kích hoạt |
| C17 | Ngoại lệ có đủ 3 phần | ✅ | Tất cả Ngoại lệ bao gồm kích hoạt, phản hồi và trạng thái cuối |
| C18 | Các lỗi phổ biến được bao phủ | ✅ | Thiếu trường bắt buộc, ngày trong quá khứ, lỗi hệ thống, xóa đồng thời |
| C19 | Sử dụng chung tồn tại | ✅ | Không Use Case nào tham chiếu Use Case sử dụng chung không tồn tại |
| C20 | Yêu cầu phi chức năng khác yêu cầu chức năng | ✅ | Yêu cầu đặc biệt chỉ mô tả các yêu cầu phi chức năng |

**Tổng kết: 20/20 ✅**
