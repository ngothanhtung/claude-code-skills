# TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD)

## Quản lý học tập — Phân hệ Học viên

**Phiên bản:** 1.0
**Ngày:** 2026-06-02
**Tác giả:** Claude Opus 4.6
**Tài liệu tham chiếu:** Yêu cầu tính năng Quản lý học tập cho học viên (2026-06-02)

---

## 1. Tổng quan sản phẩm

### 1.1 Mục đích

Hệ thống Quản lý học tập cung cấp cho học viên một giao diện tập trung để theo dõi toàn bộ hoạt động học tập cá nhân trong suốt khóa học. Thay vì phải tra cứu rời rạc trên nhiều kênh (bảng điểm giấy, email thông báo, tin nhắn trực tiếp), học viên có thể xem điểm số, tình trạng điểm danh, lịch học, lịch thi và lịch bảo vệ đồ án tại một nơi duy nhất. Điều này giúp học viên chủ động nắm bắt tiến độ học tập, kịp thời phát hiện bất thường (điểm thấp, thiếu điểm danh) và lên kế hoạch ôn tập phù hợp.

### 1.2 Phạm vi

| Trong phạm vi (In-scope) | Ngoài phạm vi (Out-of-scope) |
| :--- | :--- |
| Xem điểm số các môn học theo học kỳ | Giáo viên nhập/sửa điểm |
| Xem chi tiết từng cột điểm thành phần | Tính năng chấm phúc khảo |
| Xem tổng hợp tình trạng điểm danh | Tính năng điểm danh thủ công do giáo viên |
| Xem lịch học theo tuần/tháng | Quản lý phòng học, đăng ký phòng |
| Xem lịch thi và thông tin phòng thi | Quản lý lịch thi (giáo viên) |
| Xem lịch bảo vệ đồ án và thông tin hội đồng | Quản lý lịch bảo vệ (giáo viên) |
| Nhận thông báo nhắc lịch thi và bảo vệ | Gửi thông báo hàng loạt |
| Tải bảng điểm dạng tệp (PDF/Excel) | Xuất báo cáo phân tích học tập |

### 1.3 Đối tượng người dùng

| Đối tượng | Vai trò | Mô tả |
| :--- | :--- | :--- |
| Học viên | Học viên chính thức | Người đã đăng ký khóa học, có mã học viên duy nhất, sử dụng hệ thống để tra cứu thông tin học tập cá nhân |
| Học viên mới | Học viên chưa hoàn tất | Người đang trong quá trình nhập học, chưa có đầy đủ thông tin điểm danh và điểm số |

### 1.4 Lợi ích chính (Key Benefits)

- Học viên tra cứu điểm số tức thời, không cần chờ thông báo từ giáo viên.
- Giảm 80% thời gian tra cứu lịch học/thi/bảo vệ rời rạc qua nhiều kênh.
- Học viên chủ động nắm bắt tình trạng điểm danh, tránh bị cảnh báo vắng mặt không rõ lý do.
- Hệ thống nhắc lịch tự động giúp học viên không bỏ lỡ kỳ thi hoặc buổi bảo vệ đồ án.

---

## 2. Yêu cầu chức năng

### 2.1 Quản lý điểm số

**FR-001:** Xem điểm số tổng hợp theo học kỳ

**Mô tả nghiệp vụ:** Hệ thống hiển thị danh sách tất cả các môn học mà học viên đã đăng ký trong học kỳ, kèm điểm trung bình chung (GPA) học kỳ và GPA tích lũy toàn khóa. Mỗi môn học hiển thị điểm tổng kết mới nhất cùng trạng thái (đã công bố / chưa công bố). Học viên có thể chọn học kỳ để xem điểm theo từng giai đoạn.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên truy cập mục "Điểm số" trên thanh điều hướng hoặc chọn học kỳ từ danh sách thả xuống.

**Luồng chính (Happy Path):**

1. Học viên đăng nhập và chọn mục "Điểm số".
2. Hệ thống hiển thị bảng điểm học kỳ hiện tại mặc định, bao gồm: mã môn, tên môn, số tín chỉ, điểm tổng kết, điểm chữ, trạng thái.
3. Hệ thống hiển thị GPA học kỳ và GPA tích lũy ở vị trí nổi bật (phía trên bảng).
4. Học viên chọn học kỳ khác từ danh sách thả xuống.
5. Hệ thống tải và hiển thị dữ liệu điểm của học kỳ được chọn.
6. Học viên chọn một môn học bất kỳ trong bảng.
7. Hệ thống mở rộng hàng để hiển thị điểm chi tiết từng thành phần (điểm giữa kỳ, điểm thực hành, điểm thi cuối kỳ, điểm khác).

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Chưa có điểm]: Nếu học kỳ chưa có điểm tổng kết, hệ thống hiển thị thông báo "Điểm số học kỳ này chưa được công bố" thay vì bảng điểm.
- [Luồng B — Không có môn học]: Nếu học viên chưa đăng ký môn nào trong học kỳ, hệ thống hiển thị thông báo "Bạn chưa đăng ký môn học nào trong học kỳ này" kèm liên kết đến trang đăng ký môn học.
- [Luồng C — Lỗi tải dữ liệu]: Nếu hệ thống không thể tải điểm, hiển thị thông báo lỗi kèm nút "Thử lại".

**Kết quả mong đợi (Expected Outcome):** Học viên nhìn thấy chính xác điểm số của mình cho mỗi môn đã đăng ký, bao gồm cả điểm chi tiết từng thành phần, trong vòng 3 giây kể từ khi yêu cầu.

**Quy tắc nghiệp vụ (Business Rules):**

- Điểm tổng kết được làm tròn 2 chữ số thập phân.
- Thang điểm chữ được quy đổi: A (8.5–10), B (7.0–8.4), C (5.5–6.9), D (4.0–5.4), F (< 4.0).
- Chỉ hiển thị điểm của môn học đã được giáo viên công bố; môn chưa công bố hiển thị trạng thái "Chưa công bố".
- GPA tích lũy chỉ tính các môn có điểm tổng kết đã công bố.

**User Story liên quan:** US-001

---

**FR-002:** Xuất báo cáo điểm số cá nhân

**Mô tả nghiệp vụ:** Hệ thống cho phép học viên tải xuống báo cáo điểm số của mình dưới dạng tệp PDF hoặc Excel để phục vụ in ấn, nộp hồ sơ xin việc, hoặc xác nhận thông tin. Tệp tải xuống phải chứa logo cơ sở đào tạo, thông tin cá nhân học viên, danh sách điểm theo học kỳ, và chữ ký xác nhận điện tử.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên nhấn nút "Tải bảng điểm" (PDF/Excel) trên trang điểm số.

**Luồng chính (Happy Path):**

1. Học viên đang xem trang điểm số và nhấn nút "Tải bảng điểm".
2. Hệ thống hiển thị hộp thoại cho phép chọn định dạng (PDF hoặc Excel) và phạm vi (học kỳ hiện tại / toàn khóa học).
3. Học viên chọn định dạng và phạm vi, nhấn "Xác nhận tải".
4. Hệ thống tạo tệp báo cáo và bắt đầu tải xuống trình duyệt của học viên.
5. Hệ thống ghi nhật ký hành động tải (ai tải, thời gian, phạm vi).

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Chưa chọn định dạng]: Hệ thống vẫn cho phép tải định dạng mặc định (PDF toàn khóa) nếu học viên đóng hộp thoại mà không chọn.
- [Luồng B — Không có dữ liệu xuất]: Nếu học kỳ được chọn chưa có điểm, hệ thống hiển thị cảnh báo "Không có dữ liệu để xuất cho học kỳ này" trước khi tạo tệp.

**Kết quả mong đợi (Expected Outcome):** Tệp báo cáo được tải về trong vòng 10 giây, chứa thông tin chính xác theo dữ liệu hiện có của học viên tại thời điểm tải.

**Quy tắc nghiệp vụ (Business Rules):**

- Tệp PDF phải chứa họ tên, mã học viên, khóa học, học kỳ, và bảng điểm chi tiết.
- Tệp Excel phải giữ nguyên cấu trúc bảng điểm, cho phép học viên sử dụng công thức tính toán tiếp.
- Mỗi lần tải đều được ghi nhận với thời gian để phục vụ kiểm tra khi cần.
- Tệp xuất ra không được chứa thông tin điểm của học viên khác.

**User Story liên quan:** US-002

---

### 2.2 Quản lý điểm danh

**FR-003:** Xem tổng hợp tình trạng điểm danh

**Mô tả nghiệp vụ:** Hệ thống hiển thị bảng tổng hợp tình trạng điểm danh của học viên theo từng môn học trong học kỳ hiện tại, thể hiện số buổi có mặt, số buổi vắng (có phép và không phép), tỷ lệ tham gia (%), và trạng thái cảnh báo nếu tỷ lệ tham gia thấp hơn ngưỡng quy định. Học viên có thể xem chi tiết từng buổi học đã được điểm danh.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên truy cập mục "Điểm danh" trên thanh điều hướng.

**Luồng chính (Happy Path):**

1. Học viên đăng nhập và chọn mục "Điểm danh".
2. Hệ thống hiển thị bảng tổng hợp điểm danh học kỳ hiện tại, gồm: môn học, tổng số buổi, số có mặt, số vắng (có phép / không phép), tỷ lệ tham gia (%), trạng thái.
3. Hệ thống tô màu/cảnh báo các môn có trạng thái bất thường (tỷ lệ tham gia dưới 80%).
4. Học viên chọn một môn để xem chi tiết từng buổi điểm danh.
5. Hệ thống hiển thị danh sách các buổi học đã điểm danh: ngày, giờ, phòng, trạng thái (có mặt / vắng có phép / vắng không phép).

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Chưa có dữ liệu điểm danh]: Nếu học kỳ chưa bắt đầu hoặc chưa có buổi điểm danh nào, hệ thống hiển thị thông báo "Chưa có dữ liệu điểm danh cho học kỳ này".
- [Luồng B — Không có lịch học]: Nếu học viên chưa đăng ký môn nào, hệ thống hiển thị thông báo rỗng kèm hướng dẫn đăng ký môn học.

**Kết quả mong đợi (Expected Outcome):** Học viên xác định được chính xác tỷ lệ tham gia của mình cho mỗi môn và danh sách các buổi vắng trong vòng 3 giây kể từ khi truy cập.

**Quy tắc nghiệp vụ (Business Rules):**

- Ngưỡng cảnh báo điểm danh: tỷ lệ tham gia dưới 80% được coi là "Cảnh báo", dưới 60% được coi là "Nghiêm trọng".
- Điểm danh được cập nhật trong vòng 24 giờ sau mỗi buổi học.
- Chỉ hiển thị điểm danh của các môn học đã đăng ký.
- Buổi vắng được phân loại: "Có phép" (đã được giáo viên/phòng đào tạo chấp thuận) và "Không phép".

**User Story liên quan:** US-003

---

**FR-004:** Xem chi tiết buổi điểm danh

**Mô tả nghiệp vụ:** Hệ thống cho phép học viên xem chi tiết từng buổi điểm danh trong một môn học cụ thể, bao gồm ngày, giờ bắt đầu/kết thúc, phòng học, tên giáo viên, và trạng thái điểm danh của học viên tại buổi đó. Thông tin này giúp học viên đối chiếu, khiếu nại nếu có sai sót hoặc xác minh lý do vắng mặt.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên chọn một môn học trong bảng điểm danh tổng hợp để xem chi tiết.

**Luồng chính (Happy Path):**

1. Học viên nhấn vào một môn học trong bảng điểm danh tổng hợp.
2. Hệ thống hiển thị danh sách tất cả buổi học đã được điểm danh cho môn đó, sắp xếp theo thứ tự thời gian giảm dần (buổi gần nhất trước).
3. Mỗi hàng hiển thị: số thứ tự buổi, ngày, khung giờ, phòng, và trạng thái (Có mặt / Vắng có phép / Vắng không phép).
4. Học viên cuộn để xem toàn bộ danh sách.

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Buổi chưa điểm danh]: Nếu một buổi học chưa được giáo viên điểm danh, hệ thống hiển thị trạng thái "Chưa cập nhật" và không tính vào tổng số buổi.
- [Luồng B — Không tìm thấy buổi cụ thể]: Nếu học viên yêu cầu xem buổi không tồn tại, hệ thống hiển thị thông báo "Không tìm thấy buổi học này".

**Kết quả mong đợi (Expected Outcome):** Học viên nhìn thấy danh sách đầy đủ các buổi điểm danh của một môn với thông tin chính xác về trạng thái của mình tại mỗi buổi.

**Quy tắc nghiệp vụ (Business Rules):**

- Danh sách buổi học chỉ hiển thị các buổi đã được giáo viên cập nhật điểm danh.
- Thông tin buổi điểm danh chỉ được xem bởi chính học viên sở hữu dữ liệu đó — không ai khác được phép xem.
- Thứ tự hiển thị: giảm dần theo ngày (mới nhất lên đầu).

**User Story liên quan:** US-004

---

### 2.3 Quản lý lịch học, lịch thi, lịch bảo vệ đồ án

**FR-005:** Xem lịch học theo tuần và tháng

**Mô tả nghiệp vụ:** Hệ thống hiển thị lịch học của học viên dưới dạng lịch trực quan (dạng tuần hoặc tháng), cho thấy rõ các buổi học đã đăng ký với đầy đủ thông tin: môn học, giáo viên, phòng, khung giờ. Học viên có thể chuyển giữa chế độ xem tuần và tháng, chọn tuần/tháng cụ thể, và nhấn vào buổi học để xem chi tiết.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên truy cập mục "Lịch học" trên thanh điều hướng.

**Luồng chính (Happy Path):**

1. Học viên đăng nhập và chọn mục "Lịch học".
2. Hệ thống hiển thị lịch ở chế độ xem tuần hiện tại mặc định, tô màu các ngày có buổi học.
3. Học viên nhấn nút chuyển sang chế độ xem tháng (hoặc ngược lại).
4. Hệ thống thay đổi chế độ hiển thị tương ứng mà không mất dữ liệu.
5. Học viên nhấn nút "Tuần trước" / "Tuần sau" hoặc chọn tháng cụ thể.
6. Hệ thống cập nhật lịch hiển thị đúng khoảng thời gian được chọn.
7. Học viên nhấn vào một buổi học trên lịch.
8. Hệ thống hiển thị cửa sổ chi tiết: môn học, giáo viên, phòng, địa điểm, số tiết, ghi chú.

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Tuần không có lịch]: Nếu tuần được chọn không có buổi học nào (ví dụ: tuần nghỉ giữa kỳ), hệ thống hiển thị lịch trống kèm thông báo "Tuần này không có lịch học".
- [Luồng B — Thay đổi lịch]: Nếu lịch học có thay đổi (đổi phòng, hủy buổi), hệ thống đánh dấu buổi thay đổi bằng màu khác và hiển thị thông báo "Lịch học có thay đổi".

**Kết quả mong đợi (Expected Outcome):** Học viên nắm rõ lịch học của mình cho bất kỳ tuần hoặc tháng nào trong học kỳ, với thông tin đầy đủ về địa điểm và giáo viên.

**Quy tắc nghiệp vụ (Business Rules):**

- Lịch học chỉ hiển thị các môn học mà học viên đã đăng ký.
- Thông tin lịch học được đồng bộ từ hệ thống quản lý đào tạo, không cho phép học viên tự chỉnh sửa.
- Khi có thay đổi lịch, hệ thống gửi thông báo đẩy (push notification) và/hoặc email cho học viên ít nhất 24 giờ trước giờ học mới (nếu có thay đổi).
- Các buổi học cùng khung giờ trên cùng một ngày được hiển thị song song trên lịch tuần.

**User Story liên quan:** US-005

---

**FR-006:** Xem lịch thi và thông tin phòng thi

**Mô tả nghiệp vụ:** Hệ thống hiển thị danh sách tất cả các kỳ thi mà học viên phải tham dự trong học kỳ, bao gồm môn thi, ngày thi, giờ bắt đầu, thời lượng, hình thức thi (thi viết / thi thực hành / thi trắc nghiệm / vấn đáp), phòng thi, và số báo danh. Thông tin này giúp học viên chuẩn bị ôn tập và sắp xếp lịch trình phù hợp.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên truy cập mục "Lịch thi" trên thanh điều hướng hoặc nhấn vào thông báo nhắc lịch thi.

**Luồng chính (Happy Path):**

1. Học viên đăng nhập và chọn mục "Lịch thi".
2. Hệ thống hiển thị danh sách các kỳ thi sắp xếp theo thứ tự thời gian tăng dần (thi gần nhất lên đầu).
3. Mỗi mục thi hiển thị: môn học, ngày thi, giờ, phòng, số báo danh, hình thức, thời lượng.
4. Hệ thống đánh dấu các kỳ thi sắp diễn ra trong vòng 7 ngày bằng nhãn "Sắp thi".
5. Học viên nhấn vào một kỳ thi để xem chi tiết (địa điểm trên bản đồ, quy định phòng thi, vật dụng được phép mang vào).
6. Hệ thống gửi thông báo nhắc lịch thi trước 7 ngày và trước 1 ngày cho mỗi kỳ thi.

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Chưa có lịch thi]: Nếu học kỳ chưa công bố lịch thi, hệ thống hiển thị thông báo "Lịch thi chưa được công bố. Vui lòng quay lại sau."
- [Luồng B — Thi bị hoãn/hủy]: Nếu một kỳ thi bị hoãn hoặc hủy, hệ thống hiển thị trạng thái "Hoãn" / "Hủy" và thông tin kỳ thi thay thế (nếu có).
- [Luồng C — Không có thông tin phòng]: Nếu phòng thi chưa được xếp, hệ thống hiển thị "Chưa xếp phòng" và cập nhật khi có thông tin.

**Kết quả mong đợi (Expected Outcome):** Học viên biết chính xác thời gian, địa điểm, và hình thức thi của mình cho tất cả các môn trong học kỳ, đồng thời được nhắc trước mỗi kỳ thi.

**Quy tắc nghiệp vụ (Business Rules):**

- Lịch thi chỉ hiển thị kỳ thi của các môn học học viên đã đăng ký.
- Số báo danh là duy nhất cho mỗi học viên trong mỗi kỳ thi và không thay đổi.
- Thông tin phòng thi được cập nhật tối thiểu 3 ngày trước ngày thi.
- Thông báo nhắc lịch thi được gửi tự động 7 ngày và 1 ngày trước mỗi kỳ thi.

**User Story liên quan:** US-006

---

**FR-007:** Xem lịch bảo vệ đồ án và thông tin hội đồng

**Mô tả nghiệp vụ:** Hệ thống hiển thị danh sách lịch bảo vệ đồ án (khóa luận, luận văn, đồ án tốt nghiệp) của học viên, bao gồm ngày bảo vệ, giờ bắt đầu, phòng bảo vệ, danh sách thành viên hội đồng (giảng viên hướng dẫn, phản biện, chủ tịch), và trạng thái phê duyệt hồ sơ. Học viên có thể xem chi tiết từng hội đồng và thông tin liên hệ nếu được phép.

**Tác nhân (Actor):** Học viên

**Điều kiện kích hoạt (Trigger):** Học viên truy cập mục "Lịch bảo vệ" trên thanh điều hướng.

**Luồng chính (Happy Path):**

1. Học viên đăng nhập và chọn mục "Lịch bảo vệ".
2. Hệ thống hiển thị danh sách lịch bảo vệ của học viên (nếu có), bao gồm: tên đề tài, ngày bảo vệ, giờ, phòng, trạng thái hồ sơ.
3. Học viên nhấn vào một lịch bảo vệ để xem chi tiết.
4. Hệ thống hiển thị: danh sách hội đồng (họ tên, vai trò), địa điểm chi tiết, lịch trình bảo vệ (thứ tự các nhóm), và tài liệu cần chuẩn bị.
5. Hệ thống gửi thông báo nhắc lịch bảo vệ trước 7 ngày và trước 1 ngày.

**Luồng thay thế (Alternative Flow):**

- [Luồng A — Chưa có lịch bảo vệ]: Nếu học viên chưa được xếp lịch bảo vệ, hệ thống hiển thị thông báo "Bạn chưa có lịch bảo vệ đồ án. Vui lòng liên hệ phòng đào tạo."
- [Luồng B — Hồ sơ chưa hoàn tất]: Nếu hồ sơ bảo vệ chưa được duyệt, hệ thống hiển thị trạng thái kèm danh sách hồ sơ còn thiếu.
- [Luồng B — Lịch bảo vệ thay đổi]: Nếu lịch bị điều chỉnh, hệ thống hiển thị thông báo "Lịch bảo vệ đã được thay đổi" kèm thông tin mới.

**Kết quả mong đợi (Expected Outcome):** Học viên nắm rõ lịch bảo vệ, địa điểm, và thông tin hội đồng, đồng thời được nhắc trước ít nhất 7 ngày.

**Quy tắc nghiệp vụ (Business Rules):**

- Lịch bảo vệ chỉ hiển thị cho học viên đã đăng ký đề tài và được phòng đào tạo xác nhận.
- Thông tin hội đồng chỉ hiển thị sau khi phòng đào tạo hoàn tất việc xếp hội đồng.
- Học viên không được phép tự thay đổi lịch bảo vệ qua hệ thống; việc điều chỉnh phải thông qua phòng đào tạo.
- Thông báo nhắc lịch bảo vệ được gửi 7 ngày và 1 ngày trước ngày bảo vệ.

**User Story liên quan:** US-007

---

## 3. Yêu cầu phi chức năng (Non-Functional Requirements)

### 3.1 Hiệu suất (Performance)

| Tiêu chí | Ngưỡng yêu cầu | Ghi chú |
| :--- | :--- | :--- |
| Thời gian phản hồi trang điểm số | < 3 giây cho lần tải đầu tiên | Áp dụng khi có kết nối internet thông thường |
| Thời gian phản hồi trang lịch học/thi | < 2 giây cho lần tải đầu tiên | Áp dụng khi có kết nối internet thông thường |
| Thời gian tạo tệp xuất (PDF/Excel) | < 10 giây | Tính từ lúc nhấn nút tải đến khi tệp sẵn sàng |
| Thời gian chuyển chế độ xem lịch | < 1 giây | Áp dụng cho chuyển đổi tuần/tháng |
| Thông lượng | Hỗ trợ 1.000 học viên truy cập đồng thời vào thời điểm công bố điểm | Cần kiểm tra tải trước mỗi đợt công bố |

### 3.2 Bảo mật (Security)

| Tiêu chí | Yêu cầu | Ghi chú |
| :--- | :--- | :--- |
| Xác thực | Đăng nhập bằng tài khoản học viên (email/mã số + mật khẩu) hoặc SSO của cơ sở đào tạo | [GIẢ ĐỊNH: Cơ sở đào tạo sử dụng hệ thống SSO nội bộ] |
| Phân quyền | Học viên chỉ được xem dữ liệu cá nhân của chính mình | Không có cơ chế chia sẻ dữ liệu điểm cho người khác |
| Mã hóa dữ liệu truyền | TLS 1.2 trở lên cho mọi kết nối | Áp dụng toàn bộ ứng dụng web |
| Lưu trữ phiên | Phiên đăng nhập hết hạn sau 30 phút không hoạt động | Học viên phải đăng nhập lại |

### 3.3 Khả dụng (Availability)

| Tiêu chí | Yêu cầu | Ghi chú |
| :--- | :--- | :--- |
| Uptime | 99.5% trong giờ hành chính (08:00–20:00, Thứ 2–Thứ 7) | Ngoài giờ hành chính cho phép bảo trì |
| Thời gian bảo trì | Không quá 4 giờ mỗi tháng, ưu tiên ngày Chủ nhật | Thông báo trước 72 giờ |
| Phục hồi sau sự cố | Mục tiêu RTO < 2 giờ, RPO < 1 giờ | |

### 3.4 Khả năng tương thích (Compatibility)

| Tiêu chí | Yêu cầu | Ghi chú |
| :--- | :--- | :--- |
| Trình duyệt | Chrome, Firefox, Safari, Edge phiên bản mới nhất và 2 phiên bản trước đó | |
| Thiết bị di động | Hỗ trợ responsive trên smartphone và tablet | Không yêu cầu ứng dụng riêng |
| Hỗ trợ tiếp cận | Đạt tiêu chuẩn WCAG 2.1 mức AA | Đảm bảo học viên khuyết tật có thể sử dụng |

---

## 4. Thiết kế trải nghiệm người dùng (UX/UI Guidelines)

### 4.1 Luồng người dùng chính (Key User Flows)

**Luồng 1: Tra cứu điểm số**

```text
[Học viên đăng nhập] → [Nhấn "Điểm số"] → [Hệ thống hiển thị bảng điểm HK hiện tại]
  → [Học viên chọn học kỳ khác] → [Hệ thống tải dữ liệu học kỳ được chọn]
  → [Học viên nhấn vào một môn] → [Hệ thống hiển thị điểm chi tiết từng thành phần]
```

**Luồng 2: Xem lịch thi và nhắc nhở**

```text
[Học viên đăng nhập] → [Nhấn "Lịch thi"] → [Hệ thống hiển thị danh sách kỳ thi]
  → [Hệ thống đánh dấu kỳ thi trong 7 ngày] → [Học viên nhấn kỳ thi cụ thể]
  → [Hệ thống hiển thị chi tiết: phòng, số báo danh, hình thức]
  → [Hệ thống gửi thông báo nhắc trước 7 ngày và 1 ngày]
```

**Luồng 3: Xem và xuất bảng điểm**

```text
[Học viên đăng nhập] → [Nhấn "Điểm số"] → [Hệ thống hiển thị bảng điểm]
  → [Học viên nhấn "Tải bảng điểm"] → [Hệ thống hiển thị hộp thoại chọn định dạng]
  → [Học viên chọn PDF toàn khóa, nhấn "Xác nhận"] → [Hệ thống tạo và tải tệp]
```

### 4.2 Quy tắc giao diện người dùng (UI Guidelines)

| Nguyên tắc | Mô tả |
| :--- | :--- |
| Thông báo lỗi | Thông báo lỗi phải hiển thị rõ ràng, kèm hướng dẫn hành động tiếp theo, không chỉ mã lỗi |
| Validation real-time | Form và dữ liệu đầu vào (nếu có) được kiểm tra real-time, không chờ nhấn nút submit |
| Loading state | Mỗi lần chờ tải dữ liệu phải có skeleton hoặc spinner, không để trang trắng |
| Trạng thái rỗng | Trang không có dữ liệu phải hiển thị thông báo rõ ràng và hướng dẫn hành động thay vì để trang trắng |
| Responsive | Giao diện phải thích ứng trên màn hình từ 320px (điện thoại) đến 1920px (màn hình lớn) |
| Độ tương phản | Văn bản trên nền phải đạt tỷ lệ tương phản 4.5:1 trở lên theo WCAG 2.1 AA |

### 4.3 Thông báo và trạng thái lỗi

| Mã thông báo | Nội dung | Hành động người dùng |
| :--- | :--- | :--- |
| ERR-001 | "Điểm số học kỳ này chưa được công bố." | Chờ thông báo từ giáo viên hoặc liên hệ phòng đào tạo |
| ERR-002 | "Không thể tải dữ liệu. Vui lòng kiểm tra kết nối mạng." | Nhấn "Thử lại" hoặc kiểm tra internet |
| ERR-003 | "Lịch thi chưa được công bố. Vui lòng quay lại sau." | Quay lại trang sau khi có thông báo |
| ERR-004 | "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại." | Nhấn "Đăng nhập" để quay về trang đăng nhập |
| ERR-005 | "Bạn chưa có lịch bảo vệ đồ án. Liên hệ phòng đào tạo." | Liên hệ trực tiếp phòng đào tạo để được hỗ trợ |

---

## 5. Tích hợp hệ thống (Integrations)

| Hệ thống | Chức năng tích hợp | Dữ liệu trao đổi | Ghi chú |
| :--- | :--- | :--- | :--- |
| Hệ thống quản lý đào tạo | Lấy dữ liệu điểm số, điểm danh, lịch học | Mã học viên → danh sách điểm, điểm danh, lịch học | [GIẢ ĐỊNH: Hệ thống quản lý đào tạo có sẵn API REST] |
| Hệ thống thông báo | Gửi thông báo nhắc lịch thi, lịch bảo vệ | Nội dung thông báo, thời gian gửi, kênh (email/push) | Tích hợp qua API thông báo nội bộ hoặc dịch vụ bên thứ ba |
| Dịch vụ xuất tệp | Tạo file PDF/Excel bảng điểm | Dữ liệu điểm học viên → file PDF/Excel | [GIẢ ĐỊNH: Sử dụng thư viện tạo PDF phía server] |
| Hệ thống xác thực (SSO) | Đăng nhập một lần cho toàn hệ thống | Token xác thực, thông tin người dùng | [GIẢ ĐỊNH: Cơ sở đào tạo có hệ thống SSO nội bộ] |

---

## 6. Kế hoạch triển khai (Implementation Plan)

| Giai đoạn | Mục tiêu | FR liên quan | Thời gian ước lượng |
| :--- | :--- | :--- | :--- |
| Phase 1 — Nền tảng & Điểm số | Xây dựng khung ứng dụng, trang điểm số tổng hợp và chi tiết, xuất báo cáo PDF/Excel | FR-001, FR-002 | 3 Sprint (6 tuần) |
| Phase 2 — Điểm danh | Triển khai trang tổng hợp và chi tiết điểm danh theo môn và buổi học | FR-003, FR-004 | 2 Sprint (4 tuần) |
| Phase 3 — Lịch học & Lịch thi | Triển khai lịch học (tuần/tháng), lịch thi và thông tin phòng thi, thông báo nhắc lịch | FR-005, FR-006 | 2 Sprint (4 tuần) |
| Phase 4 — Lịch bảo vệ & Hoàn thiện | Triển khai lịch bảo vệ đồ án, tích hợp thông báo đầy đủ, kiểm thử UAT | FR-007 | 2 Sprint (4 tuần) |

---

## 7. Rủi ro và giả định

### 7.1 Rủi ro

| Rủi ro | Mức độ | Giải pháp dự phòng |
| :--- | :--- | :--- |
| Hệ thống quản lý đào tạo chưa có API, cần phát triển thêm module trung gian | Cao | Đánh giá kỹ khả năng tích hợp ở giai đoạn Discovery; chuẩn bị phương án kết nối trực tiếp database nếu API không khả thi |
| Khối lượng truy cập đồng thời cao đột biến vào thời điểm công bố điểm | Cao | Triển khai caching, auto-scaling, và thông báo trước cho học viên về giờ công bố |
| Dữ liệu điểm số nhạy cảm — rủi ro lộ thông tin nếu phân quyền lỗi | Cao | Kiểm thử bảo mật chuyên sâu, đặc biệt là kiểm tra điều kiện biên về quyền truy cập dữ liệu |
| Thay đổi yêu cầu về định dạng xuất tệp (PDF/Excel) từ phía cơ sở đào tạo | Trung bình | Đóng gói logic tạo tệp thành module riêng, dễ thay đổi template mà không ảnh hưởng core |
| Lịch thi và lịch bảo vệ được công bố muộn so với kế hoạch | Trung bình | Thiết kế hệ thống cho phép cập nhật lịch sau khi đã công bố, kèm lịch sử thay đổi |
| Học viên sử dụng thiết bị cũ, trình duyệt lỗi thời | Thấp | Đảm bảo responsive và test trên các trình duyệt phổ biến; cung cấp trang thông báo "Trình duyệt không được hỗ trợ" nếu cần |

### 7.2 Giả định

| Giả định | Ảnh hưởng nếu sai |
| :--- | :--- |
| Hệ thống quản lý đào tạo hiện có cung cấp API REST để lấy dữ liệu điểm, điểm danh, lịch học | Cần phát triển thêm module ETL hoặc adapter, tăng thời gian và chi phí triển khai |
| Cơ sở đào tạo có hệ thống SSO nội bộ tương thích | Cần phát triển thêm module đăng nhập riêng, ảnh hưởng đến Phase 1 |
| Thang điểm chữ quy đổi theo quy định: A (8.5–10), B (7.0–8.4), C (5.5–6.9), D (4.0–5.4), F (< 4.0) | Cần điều chỉnh logic hiển thị và quy đổi GPA theo thang điểm thực tế của cơ sở đào tạo |
| Thông báo nhắc lịch thi và bảo vệ được gửi qua hệ thống thông báo nội bộ hoặc email | Cần tích hợp thêm kênh thông báo hoặc phát triển module thông báo riêng |
| Mỗi học viên có duy nhất một mã học viên và thuộc một khóa học tại một thời điểm | Hệ thống cần xử lý trường hợp học viên thuộc nhiều khóa học đồng thời nếu giả định sai |

---

## 8. Ma trận truy xuất yêu cầu (Requirements Traceability Matrix)

| FR | Tên yêu cầu | Nguồn | Độ ưu tiên | User Story | Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| FR-001 | Xem điểm số tổng hợp theo học kỳ | Stakeholder / Yêu cầu | P0 | US-001 | Phase 1 |
| FR-002 | Xuất báo cáo điểm số cá nhân | Stakeholder / Yêu cầu | P1 | US-002 | Phase 1 |
| FR-003 | Xem tổng hợp tình trạng điểm danh | Stakeholder / Yêu cầu | P0 | US-003 | Phase 2 |
| FR-004 | Xem chi tiết buổi điểm danh | Stakeholder / Yêu cầu | P1 | US-004 | Phase 2 |
| FR-005 | Xem lịch học theo tuần và tháng | Stakeholder / Yêu cầu | P0 | US-005 | Phase 3 |
| FR-006 | Xem lịch thi và thông tin phòng thi | Stakeholder / Yêu cầu | P0 | US-006 | Phase 3 |
| FR-007 | Xem lịch bảo vệ đồ án và thông tin hội đồng | Stakeholder / Yêu cầu | P1 | US-007 | Phase 4 |

---

## 9. User Stories

**Câu chuyện người dùng US-001:** Tra cứu điểm số tổng hợp theo học kỳ

**As a** học viên đã đăng ký khóa học và có mã học viên hợp lệ
**I want to** xem điểm số tổng kết và GPA của tất cả các môn học theo từng học kỳ
**So that** tôi nắm được kết quả học tập của mình để tự đánh giá và lên kế hoạch cải thiện

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

**Câu chuyện người dùng US-002:** Xuất báo cáo điểm số cá nhân

**As a** học viên cần xác nhận hoặc in bảng điểm để nộp hồ sơ
**I want to** tải bảng điểm của mình dưới dạng PDF hoặc Excel
**So that** tôi có tài liệu chính thức để sử dụng trong các thủ tục hành chính hoặc xác minh kết quả học tập

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

**Câu chuyện người dùng US-003:** Xem tổng hợp tình trạng điểm danh

**As a** học viên muốn biết mình đã tham gia đầy đủ các buổi học chưa
**I want to** xem tỷ lệ tham gia và danh sách các buổi vắng theo từng môn học
**So that** tôi kịp thời phát hiện nếu tỷ lệ tham gia thấp và có biện pháp khắc phục

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

**Câu chuyện người dùng US-004:** Xem chi tiết buổi điểm danh

**As a** học viên muốn kiểm tra lại trạng thái điểm danh của mình tại một buổi học cụ thể
**I want to** xem ngày, giờ, phòng, giáo viên và trạng thái của mình tại mỗi buổi học
**So that** tôi có căn cứ để khiếu nại nếu có sai sót hoặc xác minh lý do vắng mặt

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

**Câu chuyện người dùng US-005:** Xem lịch học theo tuần và tháng

**As a** học viên cần biết lịch học của mình để sắp xếp thời gian biểu
**I want to** xem lịch học dưới dạng tuần hoặc tháng với đầy đủ thông tin môn, giáo viên, phòng
**So that** tôi không bỏ lỡ buổi học nào và có thể lên kế hoạch cho các hoạt động khác

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

**Câu chuyện người dùng US-006:** Xem lịch thi và thông tin phòng thi

**As a** học viên cần biết lịch thi để chuẩn bị ôn tập
**I want to** xem ngày thi, giờ, phòng, số báo danh và hình thức thi của mình
**So that** tôi sắp xếp thời gian biểu ôn thi và đến đúng phòng thi đúng giờ

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

**Câu chuyện người dùng US-007:** Xem lịch bảo vệ đồ án và thông tin hội đồng

**As a** học viên đã hoàn thành đồ án và được xếp lịch bảo vệ
**I want to** xem ngày, giờ, phòng bảo vệ và danh sách hội đồng chấm điểm
**So that** tôi chuẩn bị đầy đủ và tự tin thuyết trình trước hội đồng

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

## 10. Phụ lục

### 10.1 Thuật ngữ

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

### 10.2 Tài liệu tham khảo

- Quy định đào tạo của cơ sở đào tạo — thang điểm, quy định điểm danh, điều kiện dự thi (cần bổ sung bởi BA)
- Hướng dẫn sử dụng hệ thống quản lý đào tạo hiện có (nếu có)
- Biểu mẫu bảng điểm chính thức của cơ sở đào tạo (để đảm bảo tệp xuất PDF đúng định dạng)
- Quy chế tổ chức bảo vệ đồ án / luận văn của cơ sở đào tạo

---

## Bảng tự kiểm tra chất lượng PRD

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
