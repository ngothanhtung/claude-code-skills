# Tiêu chí INVEST — Giải thích chi tiết và Hướng dẫn thực hành

Đọc khi đánh giá INVEST hoặc quyết định có cần chia nhỏ story. Tài liệu này giải thích sáu tiêu chí và cách xử lý; [checklist chất lượng](../checklists/quality-checklist.md) quy định điều kiện bàn giao, còn [biểu mẫu trống](../templates/user-story-template-blank.md) quy định cách trình bày.

INVEST giúp xem story có giá trị, đủ rõ và đủ nhỏ để thảo luận, thực hiện và kiểm tra. Kết luận cần có căn cứ; **Cần xác nhận** là kết quả hợp lệ khi thiếu thông tin.

---

## Tra cứu nhanh

| Tiêu chí                              | Câu hỏi                                                              |
| ------------------------------------- | -------------------------------------------------------------------- |
| **I — Independent (Độc lập)**         | Có thể sắp xếp và kiểm tra riêng với các điều kiện đã nêu không?     |
| **N — Negotiable (Có thể thảo luận)** | Kết quả cần đạt rõ, còn cách thực hiện để đội cùng quyết định không? |
| **V — Valuable (Có giá trị)**         | Ai được lợi và được lợi gì?                                          |
| **E — Estimable (Ước lượng được)**    | Đội thực hiện đã có đủ thông tin để đánh giá công sức chưa?          |
| **S — Small (Nhỏ gọn)**               | Phạm vi có vừa một đợt làm việc theo đánh giá của đội không?         |
| **T — Testable (Kiểm tra được)**      | Có thể xác định đúng/sai từ kết quả của từng kịch bản không?         |

---

## I — Independent (Độc lập)

### Định nghĩa

Ưu tiên story có thể sắp xếp và kiểm tra riêng. Độc lập không có nghĩa là sản phẩm không được có quan hệ nghiệp vụ hoặc điều kiện có sẵn.

### Căn cứ và cách xử lý

- Phân biệt điều kiện đã tồn tại với công việc chưa hoàn thành đang chặn story.
- Ghi phụ thuộc có thật và ảnh hưởng; không ghi "Không có" chỉ vì chưa tìm hiểu.
- Khi hai story chỉ có giá trị nếu làm cùng nhau, cân nhắc gộp trong giới hạn phù hợp hoặc chia lại theo kết quả sử dụng được.

### Ví dụ (I)

"Tạo dự án" có thể được kiểm tra bằng tài khoản quản lý đã tồn tại; không cần kiểm tra lại việc tạo tài khoản trong cùng kịch bản. Nếu chức năng cấp quyền chưa có, ghi rõ phụ thuộc đó, không coi dữ liệu mẫu là cách xóa bỏ phụ thuộc triển khai.

---

## N — Negotiable (Thương lượng)

### Định nghĩa

Story mở ra thảo luận về giải pháp và phạm vi với người có trách nhiệm. Quy tắc đã xác nhận, quyền hạn và nghĩa vụ pháp lý vẫn phải được giữ; thay đổi chúng cần được chấp thuận.

### Căn cứ và cách xử lý

Viết kết quả cần đạt và lý do, để đội chọn cách thực hiện. Chuyển mô tả thiết kế sang tài liệu phù hợp thay vì biến nó thành AC.

### Ví dụ (N)

"Quản lý tạo dự án để nhóm có không gian làm việc chung" nêu nhu cầu. "Chỉ người có quyền tạo dự án được thực hiện" là ràng buộc nghiệp vụ hợp lệ, không phải chi tiết cần bỏ để story có thể thương lượng.

---

## V — Valuable (Giá trị)

### Định nghĩa

Mỗi story nêu lợi ích cho người dùng hoặc doanh nghiệp; So that trả lời vì sao hành động đó đáng làm.

### Căn cứ và cách xử lý

- Nếu So that chỉ lặp I want to, hỏi kết quả mà người dùng muốn đạt.
- Giá trị có thể kiểm chứng bằng lợi ích định tính; chỉ thêm tỷ lệ tiết kiệm hoặc thời gian mục tiêu khi nguồn đã xác nhận.
- Công việc nội bộ có thể cần thiết nhưng không nên được đổi thành một lợi ích người dùng không có căn cứ.

### Ví dụ (V)

"Tôi muốn xem các công việc quá hạn để ưu tiên hỗ trợ những việc đang làm chậm dự án" có giá trị rõ hơn "để tôi xem được công việc".

---

## E — Estimable (Ước lượng được)

### Định nghĩa

Đội thực hiện có đủ thông tin về phạm vi, quy tắc và phụ thuộc để ước lượng công sức. Người viết làm rõ yêu cầu, không tự ấn định thời gian thay đội.

### Căn cứ và cách xử lý

- Có đánh giá của đội hoặc căn cứ được cung cấp thì ghi lại nguồn.
- Nếu chưa rõ cách tính kết quả, điều kiện lỗi hoặc phụ thuộc, nêu câu hỏi cụ thể và đánh dấu Cần xác nhận.
- Nếu cần tìm hiểu thêm, đề xuất việc cần làm rõ và người phụ trách; thời hạn do đội thống nhất. Không tự tạo một story kỹ thuật để thay thế yêu cầu còn thiếu.

### Ví dụ (E)

Với "báo cáo rủi ro dự án", cần làm rõ loại rủi ro, thông tin đầu vào và người dùng sẽ quyết định gì từ báo cáo. Khi chưa có các dữ kiện đó, ghi câu hỏi thay vì đoán số ngày thực hiện.

---

## S — Small (Nhỏ gọn)

### Định nghĩa

Story đủ nhỏ cho một đợt làm việc theo năng lực và đánh giá của đội. Không có số ngày, số AC hoặc từ khóa trong tiêu đề tự động quyết định phải chia nhỏ.

### Khi nào cân nhắc phân rã?

- Story chứa nhiều kết quả có thể sử dụng riêng.
- Đội xác nhận phạm vi vượt khả năng hoàn thành trong một đợt.
- Có nhóm người dùng hoặc tình huống với giá trị và quy tắc khác nhau.

### Cách phân rã

Chia theo mục tiêu nghiệp vụ, nhóm người dùng hoặc loại tình huống có thể bàn giao độc lập. Mỗi phần giữ đủ hành vi hợp lệ, quyền hạn và xử lý lỗi của chính nó theo Q04 và Q12 trong checklist. Không trì hoãn kiểm tra quyền hoặc dữ liệu bắt buộc để có một story chỉ chứa đường thành công.

Giữ ánh xạ nguồn → các story mới và các phụ thuộc thật. Liên từ "và" có thể mô tả một mục tiêu thống nhất; nhiều AC có thể chỉ phản ánh nhiều quy tắc cần kiểm tra, không nhất thiết là story quá lớn.

### Ví dụ (S)

"Quản lý dự án từ lúc tạo đến lúc đóng" có thể chia thành tạo dự án, phân công thành viên và yêu cầu đóng dự án nếu từng phần có giá trị riêng. Mỗi story mới vẫn cần AC về điều kiện hợp lệ và xử lý lỗi; không tạo riêng story "kiểm tra quyền" chỉ để làm story tạo dự án ngắn hơn.

---

## T — Testable (Kiểm thử được)

### Định nghĩa

AC đủ rõ để người đọc xác định kết quả đúng/sai. Kiểm tra được không đồng nghĩa phải thêm con số vào mọi kết quả hoặc đã thực hiện kiểm thử.

### Căn cứ và cách xử lý

Đối chiếu Q04–Q10 trong checklist. Nếu không xác định được kết quả mong đợi, hỏi quy tắc còn thiếu. Thông tin cần chuẩn bị để kiểm tra có thể ghi trong ghi chú, tách khỏi việc đánh giá chất lượng câu chữ.

### Ví dụ (T)

- **Given** thành viên không có quyền thay đổi ngày kết thúc dự án.
- **When** thành viên yêu cầu đổi ngày kết thúc.
- **Then** yêu cầu bị từ chối vì thiếu quyền.
- **And** ngày kết thúc dự án được giữ nguyên.

Kịch bản có thể kiểm tra bằng trạng thái nghiệp vụ; không cần tự thêm một giới hạn thời gian. Đây là minh họa một AC, không phải bộ AC đầy đủ của story.

---

## Ai xác nhận điều gì?

Người phụ trách sản phẩm xác nhận giá trị, ưu tiên và quy tắc; đội thực hiện xác nhận khả năng ước lượng và quy mô; người kiểm tra xác nhận có thể đối chiếu kết quả với AC. AI tổng hợp căn cứ và câu hỏi, không thay các vai trò này phê duyệt hoặc xác nhận đã kiểm thử.

---

## Tài liệu tham khảo

- Bill Wake (2003) — _"INVEST in Good Stories, and SMART Tasks"_
- Mike Cohn — _"User Stories Applied"_
- Atlassian Agile Coach — _User Story Best Practices_
