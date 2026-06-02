# User Stories & Tiêu chí nghiệm thu

## Quản lý học tập — Phân hệ Học viên

**Phiên bản:** 1.0
**Ngày:** 2026-06-02
**Tài liệu tham chiếu:** PRD Quản lý học tập — [prd.md](./prd.md)

> Phần này tách riêng từ PRD để tiện quản lý, duy trì và tái sử dụng trong Sprint Planning. Mỗi User Story gắn với FR tương ứng trong ma trận truy xuất (Section 8 của prd.md).

---

## US-001: Tra cứu điểm số tổng hợp theo học kỳ

**As a** học viên đã đăng ký khóa học và có mã học viên hợp lệ
**I want to** xem điểm số tổng kết và GPA của tất cả các môn học theo từng học kỳ
**So that** tôi nắm được kết quả học tập của mình để tự đánh giá và lên kế hoạch cải thiện

**FR liên quan:** FR-001

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác |
| Negotiable | ✅ | Chi tiết hiển thị có thể thương lượng với stakeholder |
| Valuable | ✅ | Trực tiếp giúp học viên nắm bắt kết quả học tập |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Có thể kiểm thử với kịch bản rõ ràng |

### Tiêu chí nghiệm thu

**AC-001: Hiển thị điểm học kỳ mặc định**

- **Given** học viên đã đăng nhập thành công vào hệ thống
- **When** học viên nhấn mục "Điểm số"
- **Then** hệ thống hiển thị bảng điểm của học kỳ hiện tại gồm: mã môn, tên môn, số tín chỉ, điểm tổng kết, điểm chữ, và trạng thái
- **And** hệ thống hiển thị GPA học kỳ và GPA tích lũy ở vị trí nổi bật phía trên bảng

**AC-002: Chuyển học kỳ và xem điểm chi tiết**

- **Given** học viên đang xem bảng điểm học kỳ hiện tại
- **When** học viên chọn một học kỳ khác từ danh sách thả xuống và nhấn vào một môn học bất kỳ
- **Then** hệ thống hiển thị điểm chi tiết của môn đó, bao gồm: điểm giữa kỳ, điểm thực hành, điểm thi cuối kỳ, điểm khác (nếu có)
- **And** hệ thống hiển thị điểm tổng kết đã quy đổi sang thang điểm chữ

**AC-003: Trạng thái khi chưa có điểm**

- **Given** học viên đã đăng nhập và chọn một học kỳ mà giáo viên chưa công bố điểm
- **When** hệ thống tải dữ liệu điểm cho học kỳ đó
- **Then** hệ thống hiển thị thông báo "Điểm số học kỳ này chưa được công bố" thay vì bảng điểm
- **And** không hiển thị dữ liệu điểm rỗng hoặc giá trị mặc định nào khác

---

## US-002: Xuất báo cáo điểm số cá nhân

**As a** học viên cần xác nhận hoặc in bảng điểm để nộp hồ sơ
**I want to** tải bảng điểm của mình dưới dạng PDF hoặc Excel
**So that** tôi có tài liệu chính thức để sử dụng trong các thủ tục hành chính hoặc xác minh kết quả học tập

**FR liên quan:** FR-002

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác |
| Negotiable | ✅ | Định dạng tệp và phạm vi xuất có thể điều chỉnh |
| Valuable | ✅ | Giải quyết nhu cầu thực tế về xác nhận điểm |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Kiểm thử bằng việc xác nhận tệp tải về đúng nội dung |

### Tiêu chí nghiệm thu

**AC-001: Tải bảng điểm PDF toàn khóa**

- **Given** học viên đã đăng nhập và đang xem trang điểm số
- **When** học viên nhấn nút "Tải bảng điểm", chọn định dạng PDF và phạm vi "Toàn khóa học", rồi nhấn "Xác nhận tải"
- **Then** hệ thống tạo file PDF chứa họ tên, mã học viên, khóa học, danh sách điểm theo từng học kỳ, và bắt đầu tải về trình duyệt
- **And** file PDF không chứa thông tin điểm của bất kỳ học viên nào khác

**AC-002: Tải bảng điểm Excel theo học kỳ**

- **Given** học viên đã đăng nhập và đang xem trang điểm số
- **When** học viên nhấn nút "Tải bảng điểm", chọn định dạng Excel và phạm vi "Học kỳ 1, 2025–2026", rồi nhấn "Xác nhận tải"
- **Then** hệ thống tạo file Excel chỉ chứa dữ liệu điểm của học kỳ được chọn
- **And** file Excel giữ nguyên cấu trúc bảng điểm, cho phép sử dụng công thức tính toán

**AC-003: Cảnh báo khi không có dữ liệu xuất**

- **Given** học viên chọn một học kỳ chưa có điểm để xuất
- **When** học viên nhấn "Xác nhận tải"
- **Then** hệ thống hiển thị cảnh báo "Không có dữ liệu để xuất cho học kỳ này" trước khi tạo file

---

## US-003: Xem tổng hợp tình trạng điểm danh

**As a** học viên muốn biết mình đã tham gia đầy đủ các buổi học chưa
**I want to** xem tỷ lệ tham gia và danh sách các buổi vắng theo từng môn học
**So that** tôi kịp thời phát hiện nếu tỷ lệ tham gia thấp và có biện pháp khắc phục

**FR liên quan:** FR-003

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác |
| Negotiable | ✅ | Chi tiết hiển thị có thể thương lượng |
| Valuable | ✅ | Trực tiếp giúp học viên quản lý tỷ lệ tham gia |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Có thể kiểm thử với dữ liệu mẫu |

### Tiêu chí nghiệm thu

**AC-001: Hiển thị bảng tổng hợp điểm danh**

- **Given** học viên đã đăng nhập và nhấn mục "Điểm danh"
- **When** hệ thống tải dữ liệu điểm danh học kỳ hiện tại
- **Then** hệ thống hiển thị bảng gồm: môn học, tổng buổi, có mặt, vắng (có phép / không phép), tỷ lệ tham gia (%), trạng thái
- **And** các môn có tỷ lệ tham gia dưới 80% được đánh dấu "Cảnh báo", dưới 60% đánh dấu "Nghiêm trọng"

**AC-002: Phân biệt vắng có phép và không phép**

- **Given** học viên đã đăng nhập và đang xem bảng điểm danh tổng hợp
- **When** hệ thống hiển thị thông tin vắng mặt
- **Then** hệ thống phân biệt rõ hai loại: "Vắng có phép" (đã được chấp thuận) và "Vắng không phép"
- **And** hệ thống không tính buổi vắng có phép vào ngưỡng cảnh báo

**AC-003: Trạng thái khi chưa có dữ liệu**

- **Given** học kỳ chưa bắt đầu hoặc chưa có buổi điểm danh nào
- **When** học viên truy cập mục "Điểm danh"
- **Then** hệ thống hiển thị thông báo "Chưa có dữ liệu điểm danh cho học kỳ này"

---

## US-004: Xem chi tiết buổi điểm danh

**As a** học viên muốn kiểm tra lại trạng thái điểm danh của mình tại một buổi học cụ thể
**I want to** xem ngày, giờ, phòng, giáo viên và trạng thái của mình tại mỗi buổi học
**So that** tôi có căn cứ để khiếu nại nếu có sai sót hoặc xác minh lý do vắng mặt

**FR liên quan:** FR-004

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác (chỉ phụ thuộc FR-003 về mặt dữ liệu) |
| Negotiable | ✅ | Mức độ chi tiết hiển thị có thể thương lượng |
| Valuable | ✅ | Hỗ trợ học viên khiếu nại và tự quản lý thời gian |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Có thể kiểm thử với danh sách buổi mẫu |

### Tiêu chí nghiệm thu

**AC-001: Hiển thị danh sách buổi học chi tiết**

- **Given** học viên đã đăng nhập và nhấn vào một môn học trong bảng điểm danh tổng hợp
- **When** hệ thống tải dữ liệu chi tiết
- **Then** hệ thống hiển thị danh sách các buổi học đã điểm danh, mỗi hàng gồm: số thứ tự buổi, ngày, khung giờ, phòng, và trạng thái (Có mặt / Vắng có phép / Vắng không phép)
- **And** danh sách được sắp xếp giảm dần theo ngày (buổi gần nhất lên đầu)

**AC-002: Xử lý buổi chưa cập nhật**

- **Given** một buổi học trong danh sách chưa được giáo viên điểm danh
- **When** hệ thống hiển thị danh sách buổi học
- **Then** hệ thống hiển thị trạng thái "Chưa cập nhật" cho buổi đó
- **And** buổi này không được tính vào tổng số buổi để tính tỷ lệ tham gia

**AC-003: Bảo mật dữ liệu điểm danh**

- **Given** học viên A cố gắng xem dữ liệu điểm danh của học viên B (qua URL hoặc API)
- **When** hệ thống nhận yêu cầu truy xuất dữ liệu điểm danh
- **Then** hệ thống từ chối truy xuất và trả về thông báo lỗi quyền truy cập

---

## US-005: Xem lịch học theo tuần và tháng

**As a** học viên cần biết lịch học của mình để sắp xếp thời gian biểu
**I want to** xem lịch học dưới dạng tuần hoặc tháng với đầy đủ thông tin môn, giáo viên, phòng
**So that** tôi không bỏ lỡ buổi học nào và có thể lên kế hoạch cho các hoạt động khác

**FR liên quan:** FR-005

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác |
| Negotiable | ✅ | Chế độ hiển thị và thông tin kèm theo có thể điều chỉnh |
| Valuable | ✅ | Trực tiếp phục vụ nhu cầu sắp xếp thời gian biểu |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Kiểm thử bằng việc xác nhận dữ liệu hiển thị đúng |

### Tiêu chí nghiệm thu

**AC-001: Hiển thị lịch tuần với thông tin đầy đủ**

- **Given** học viên đã đăng nhập và nhấn mục "Lịch học"
- **When** hệ thống tải dữ liệu lịch
- **Then** hệ thống hiển thị chế độ xem tuần hiện tại, mỗi buổi học hiển thị: tên môn, khung giờ, phòng, giáo viên
- **And** các ngày có buổi học được tô màu để dễ nhận diện

**AC-002: Chuyển đổi giữa tuần và tháng**

- **Given** học viên đang xem lịch tuần
- **When** học viên nhấn nút chuyển sang chế độ xem tháng
- **Then** hệ thống hiển thị lịch tháng với các buổi học được ghim đúng ngày và giờ
- **And** thời gian chuyển đổi không quá 1 giây

**AC-003: Thông báo thay đổi lịch**

- **Given** một buổi học trong lịch có sự thay đổi (đổi phòng hoặc hủy)
- **When** hệ thống hiển thị lịch
- **Then** hệ thống đánh dấu buổi thay đổi bằng màu khác và hiển thị thông báo "Lịch học có thay đổi"

---

## US-006: Xem lịch thi và thông tin phòng thi

**As a** học viên cần biết lịch thi để chuẩn bị ôn tập
**I want to** xem ngày thi, giờ, phòng, số báo danh và hình thức thi của mình
**So that** tôi sắp xếp thời gian biểu ôn thi và đến đúng phòng thi đúng giờ

**FR liên quan:** FR-006

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác |
| Negotiable | ✅ | Thông tin kèm theo có thể thương lượng |
| Valuable | ✅ | Trực tiếp phục vụ kỳ thi, có giá trị cao |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Có thể kiểm thử với dữ liệu kỳ thi mẫu |

### Tiêu chí nghiệm thu

**AC-001: Hiển thị danh sách kỳ thi**

- **Given** học viên đã đăng nhập và nhấn mục "Lịch thi"
- **When** hệ thống tải dữ liệu lịch thi
- **Then** hệ thống hiển thị danh sách kỳ thi sắp xếp theo thời gian tăng dần, mỗi mục gồm: môn, ngày, giờ, phòng, số báo danh, hình thức, thời lượng
- **And** các kỳ thi trong vòng 7 ngày được đánh dấu nhãn "Sắp thi"

**AC-002: Chi tiết kỳ thi và thông tin phòng**

- **Given** học viên nhấn vào một kỳ thi trong danh sách
- **When** hệ thống tải thông tin chi tiết
- **Then** hệ thống hiển thị: địa chỉ phòng thi, quy định phòng thi, vật dụng được phép mang vào, và thông tin liên hệ hỗ trợ (nếu có)

**AC-003: Thông báo nhắc lịch thi**

- **Given** một kỳ thi đã được xếp lịch trong hệ thống
- **When** đến thời điểm 7 ngày trước và 1 ngày trước kỳ thi
- **Then** hệ thống gửi thông báo nhắc lịch thi cho học viên qua kênh được cấu hình (email và/hoặc push notification)

---

## US-007: Xem lịch bảo vệ đồ án và thông tin hội đồng

**As a** học viên đã hoàn thành đồ án và được xếp lịch bảo vệ
**I want to** xem ngày, giờ, phòng bảo vệ và danh sách hội đồng chấm điểm
**So that** tôi chuẩn bị đầy đủ và tự tin thuyết trình trước hội đồng

**FR liên quan:** FR-007

### INVEST Self-check

| Tiêu chí | Trạng thái | Ghi chú |
| :--- | :--- | :--- |
| Independent | ✅ | Không phụ thuộc User Story khác |
| Negotiable | ✅ | Mức độ chi tiết thông tin hội đồng có thể thương lượng |
| Valuable | ✅ | Trực tiếp phục vụ buổi bảo vệ đồ án — sự kiện quan trọng |
| Estimable | ✅ | Phạm vi rõ ràng, ước lượng được |
| Small | ✅ | Một hành vi nghiệp vụ duy nhất |
| Testable | ✅ | Kiểm thử bằng việc xác nhận dữ liệu hội đồng hiển thị đúng |

### Tiêu chí nghiệm thu

**AC-001: Hiển thị thông tin bảo vệ đồ án**

- **Given** học viên đã đăng nhập và nhấn mục "Lịch bảo vệ"
- **When** hệ thống tải dữ liệu bảo vệ
- **Then** hệ thống hiển thị: tên đề tài, ngày bảo vệ, giờ, phòng, trạng thái hồ sơ, và danh sách hội đồng (họ tên, vai trò)
- **And** thông tin chỉ hiển thị sau khi phòng đào tạo xác nhận hội đồng

**AC-002: Trạng thái hồ sơ chưa hoàn tất**

- **Given** hồ sơ bảo vệ của học viên chưa được duyệt hoàn tất
- **When** hệ thống hiển thị thông tin bảo vệ
- **Then** hệ thống hiển thị trạng thái kèm danh sách hồ sơ còn thiếu cần bổ sung
- **And** không hiển thị lịch bảo vệ chính thức cho đến khi hồ sơ được duyệt

**AC-003: Thông báo nhắc lịch bảo vệ**

- **Given** học viên đã có lịch bảo vệ đồ án trong hệ thống
- **When** đến thời điểm 7 ngày trước và 1 ngày trước ngày bảo vệ
- **Then** hệ thống gửi thông báo nhắc lịch bảo vệ cho học viên kèm thông tin chi tiết

---

## Phụ lục

### A. Thuật ngữ

| Thuật ngữ | Định nghĩa |
| :--- | :--- |
| GPA (Grade Point Average) | Điểm trung bình tích lũy của học viên, tính theo thang 10 hoặc thang 4 |
| Điểm tổng kết | Điểm cuối cùng của một môn học, được tính từ các điểm thành phần theo trọng số quy định |
| Điểm thành phần | Các cột điểm riêng lẻ như điểm giữa kỳ, điểm thực hành, điểm thi cuối kỳ |
| Điểm danh | Việc ghi nhận sự có mặt/vắng mặt của học viên tại mỗi buổi học |
| Số báo danh | Mã số duy nhất của học viên trong mỗi kỳ thi, dùng để xác định vị trí phòng thi |
| Hội đồng bảo vệ | Nhóm giảng viên tham gia chấm điểm bảo vệ đồ án của học viên |
| SSO (Single Sign-On) | Cơ chế đăng nhập một lần cho phép sử dụng chung tài khoản trên nhiều hệ thống |
| RTO (Recovery Time Objective) | Thời gian tối đa để hệ thống phục hồi sau sự cố |
| RPO (Recovery Point Objective) | Thời gian tối đa chấp nhận mất dữ liệu sau sự cố |

### B. Tài liệu tham khảo

- Quy định đào tạo của cơ sở đào tạo — thang điểm, quy định điểm danh, điều kiện dự thi (cần bổ sung bởi BA)
- Hướng dẫn sử dụng hệ thống quản lý đào tạo hiện có (nếu có)
- Biểu mẫu bảng điểm chính thức của cơ sở đào tạo (để đảm bảo tệp xuất PDF đúng định dạng)
- Quy chế tổ chức bảo vệ đồ án / luận văn của cơ sở đào tạo

### C. Bảng tự kiểm tra chất lượng PRD

| Phần | Tiêu chí | Trạng thái |
| :--- | :--- | :--- |
| **1. Thông tin tổng quan** | 1.1 Tên sản phẩm rõ ràng | ✅ Đạt |
| | 1.2 Bảng In/Out scope đầy đủ | ✅ Đạt |
| **2. Yêu cầu chức năng** | 2.1 Mỗi FR có mã duy nhất | ✅ Đạt |
| | 2.2 Mô tả nghiệp vụ không chứa thuật ngữ kỹ thuật | ✅ Đạt |
| | 2.3 Mỗi FR đủ 6 thành phần | ✅ Đạt |
| | 2.4 Mỗi FR có tối thiểu 1 Business Rule | ✅ Đạt |
| | 2.5 FR nhóm theo module logic | ✅ Đạt |
| | 2.6 Không FR quá lớn | ✅ Đạt |
| **3. Yêu cầu phi chức năng** | 3.1 Có đủ NFR: Hiệu suất, Bảo mật, Khả dụng, Tương thích | ✅ Đạt |
| | 3.2 NFR có ngưỡng cụ thể, đo lường được | ✅ Đạt |
| **4. UX/UI Guidelines** | 4.1 Có mô tả luồng người dùng chính | ✅ Đạt |
| | 4.2 Không wireframe, chỉ mô tả luồng | ✅ Đạt |
| **5. Tích hợp** | 5.1 Chỉ ghi tên hệ thống, không chỉ định kỹ thuật | ✅ Đạt |
| **6. User Stories & RTM** | 6.1 Mỗi FR có User Story trong RTM | ✅ Đạt |
| | 6.2 Mỗi User Story đạt 06 tiêu chí INVEST | ✅ Đạt |
| | 6.3 Mỗi User Story có tối thiểu 2 AC Given-When-Then | ✅ Đạt (3 AC mỗi US) |
| | 6.4 RTM đủ cột: FR, Tên, Nguồn, Độ ưu tiên, US, Phase | ✅ Đạt |
| **7. Rủi ro và Giả định** | 7.1 Rủi ro có mức độ và giải pháp dự phòng | ✅ Đạt |
| | 7.2 Giả định có ảnh hưởng nếu sai | ✅ Đạt |
| **8. Chất lượng tổng thể** | 8.1 Không giả định tự suy diễn không đánh dấu | ✅ Đạt |
| **Tổng cộng** | | **20/20 ✅** |

**Ngưỡng bàn giao:** 18/20 (90%) — PRD đạt **20/20**, sẵn sàng bàn giao cho đội ngũ phát triển.
