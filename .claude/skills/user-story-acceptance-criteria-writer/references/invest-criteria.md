# Tiêu chí INVEST - Giải thích chi tiết và Hướng dẫn thực hành

---

## I - Independent (Độc lập)

### Định nghĩa

Câu chuyện người dùng (User Story) phải có thể được phát triển, kiểm thử, và triển khai (deploy) độc lập. Tránh sự phụ thuộc cứng nhắc giữa các câu chuyện người dùng.

### Tại sao quan trọng?

- Cho phép sắp xếp độ ưu tiên (Priority) linh hoạt trong danh sách sản phẩm tồn đọng (Backlog).
- Tránh tắc nghẽn (Blocker) khi một câu chuyện người dùng bị chậm trễ.
- Dễ dàng phân chia công việc trong đội ngũ phát triển.

### Dấu hiệu vi phạm

- Câu chuyện người dùng B chỉ có thể thực hiện sau khi câu chuyện người dùng A hoàn thành.
- Phải kết hợp và đưa lên (merge) đồng thời nhiều câu chuyện người dùng mới có thể triển khai.
- Kiểm thử một câu chuyện người dùng bắt buộc phải dùng dữ liệu của câu chuyện người dùng khác.

### Hướng xử lý

- Gộp các câu chuyện người dùng phụ thuộc thành một câu chuyện lớn hơn (nếu quy mô nhỏ).
- Tách biệt sự phụ thuộc thành một câu chuyện nghiên cứu kỹ thuật hoặc chuẩn bị trước và ưu tiên thực hiện sớm.
- Sử dụng dữ liệu giả lập (Mock data / Stub) để tiến hành kiểm thử độc lập.

### Ví dụ thực tế

- ❌ **Vi phạm**:
  - US-1: Tạo tài khoản quản lý dự án.
  - US-2: Tạo dự án mới (chỉ có thể kiểm thử sau khi US-1 hoàn thành).
- ✅ **Đạt chuẩn**:
  - US-1: Tạo tài khoản quản lý dự án (kiểm thử độc lập bằng cách khởi tạo dữ liệu mẫu trong cơ sở dữ liệu).
  - US-2: Tạo dự án mới (kiểm thử độc lập bằng tài khoản quản lý dự án đã được chuẩn bị sẵn trong môi trường kiểm thử).

---

## N - Negotiable (Thương lượng)

### Định nghĩa

Câu chuyện người dùng không phải là một bản hợp đồng cứng nhắc mà là "lời mời thảo luận". Chi tiết triển khai sẽ được làm rõ hơn trong các buổi tinh chỉnh (Refinement) và quá trình phát triển sản phẩm.

### Tại sao quan trọng?

- Tận dụng chuyên môn của lập trình viên (Developer) và kiểm thử viên (Tester) để tìm phương án tối ưu.
- Linh hoạt thay đổi cấu trúc khi xuất hiện các thông tin hoặc ràng buộc mới.
- Tránh việc đặc tả quá chi tiết (Over-specification) quá sớm khi chưa cần thiết.

### Dấu hiệu vi phạm

- Mô tả chi tiết từng tọa độ pixel trên giao diện người dùng (User Interface) ngay trong câu chuyện người dùng.
- Ràng buộc cứng nhắc công nghệ hoặc công cụ cụ thể (ví dụ: bắt buộc sử dụng Redis, React).
- Mô tả chi tiết các giải thuật và cấu trúc mã nguồn bên trong nội dung câu chuyện.

### Hướng xử lý

- Tập trung vào mục tiêu (What) và giá trị nghiệp vụ (Why), tránh can thiệp sâu vào cách làm (How).
- Đẩy các chi tiết kỹ thuật chuyên sâu sang tài liệu thiết kế hệ thống hoặc ghi nhận trong tiêu chí nghiệm thu (Acceptance Criteria).
- Sử dụng bản phác thảo thô (Wireframe) thay vì thiết kế chi tiết đồ họa ở giai đoạn ban đầu.

### Ví dụ thực tế

- ❌ **Vi phạm**:
  *"As a quản lý dự án, I want to tạo dự án với các trường dữ liệu lưu trong bảng MySQL với chỉ mục (index) trên cột project_code để tăng tốc độ truy vấn..."*
- ✅ **Đạt chuẩn**:
  *"As a quản lý dự án đã được phân quyền, I want to tạo dự án mới trên hệ thống so that tôi có thể bắt đầu lập kế hoạch và phân công công việc cho nhóm ngay lập tức."*  
  *(Các chi tiết về cấu trúc cơ sở dữ liệu, chỉ mục hay trường dữ liệu sẽ do đội ngũ phát triển thảo luận và thiết kế).*

---

## V - Valuable (Giá trị)

### Định nghĩa

Mỗi câu chuyện người dùng phải mang lại giá trị rõ ràng cho người dùng cuối, doanh nghiệp hoặc cả hai. Không tạo ra các câu chuyện thuần túy vì lý do kỹ thuật.

### Tại sao quan trọng?

- Đảm bảo mọi nỗ lực phát triển đều mang lại hiệu quả thực tế và lợi nhuận (ROI).
- Giúp chủ sở hữu sản phẩm (Product Owner) đánh giá và sắp xếp thứ tự ưu tiên chính xác.
- Giúp các bên liên quan (Stakeholders) hiểu rõ lý do tại sao cần thực hiện tính năng này.

### Dấu hiệu vi phạm

- Phần giá trị nghiệp vụ (**So that**) bị bỏ trống hoặc lặp lại nội dung của mục tiêu (**I want to**).
- Câu chuyện chỉ có giá trị đối với lập trình viên (ví dụ: nâng cấp thư viện, viết lại mã nguồn) mà không mang lại thay đổi nào cho người dùng.

### Hướng xử lý

- Viết phần **So that** theo kết quả thực tế đo lường được.
- Chuyển hóa các nhiệm vụ kỹ thuật thành các câu chuyện người dùng mang lại giá trị nghiệp vụ (ví dụ: tối ưu hiệu năng giúp giảm tỷ lệ tải trang chậm, giảm thiểu lỗi).

### Ví dụ thực tế

- ❌ **Vi phạm**:
  *"As a developer, I want to nâng cấp thư viện biểu đồ từ phiên bản 2 lên phiên bản 4 so that chúng tôi sử dụng phiên bản mới nhất."*
- ✅ **Đạt chuẩn**:
  *"As a quản lý dự án, I want to xem biểu đồ Gantt của dự án trong vòng 2 giây so that tôi có thể đánh giá tình trạng tiến độ mà không phải chờ đợi khi kết nối chậm."*  
  *(Việc nâng cấp thư viện biểu đồ chỉ là phương án giải quyết, mục tiêu thực sự là tốc độ tải biểu đồ cho quản lý dự án).*

---

## E - Estimable (Ước lượng được)

### Định nghĩa

Đội ngũ phát triển phải có đủ thông tin để đưa ra ước lượng tương đối về nỗ lực và thời gian hoàn thành câu chuyện người dùng.

### Tại sao quan trọng?

- Hỗ trợ lập kế hoạch cho chu kỳ phát triển (Sprint Planning).
- Phát hiện sớm các câu chuyện quá lớn hoặc còn quá mơ hồ để làm rõ kịp thời.

### Dấu hiệu vi phạm

- Lập trình viên phản hồi "không biết bao giờ xong, phải nghiên cứu thêm".
- Ước lượng độ khó chênh lệch quá lớn giữa các thành viên trong đội ngũ (vượt quá 3 lần).
- Chứa đựng quá nhiều rủi ro kỹ thuật chưa xác định.

### Hướng xử lý

- Tạo câu chuyện nghiên cứu kỹ thuật (Spike story) độc lập để tìm giải pháp trước, sau đó mới ước lượng câu chuyện nghiệp vụ chính.
- Bổ sung đầy đủ ngữ cảnh nghiệp vụ, các tài liệu tham khảo và ràng buộc kỹ thuật rõ ràng.

### Ví dụ thực tế

- ❌ **Vi phạm**:
  *"As a quản lý dự án, I want to AI phân tích rủi ro dự án và gợi ý phương án xử lý."*  
  *(Yêu cầu quá mơ hồ: không rõ công nghệ AI sử dụng, nguồn dữ liệu đầu vào và độ chính xác mong muốn).*
- ✅ **Đạt chuẩn** (Phân rã thành hai phần):
  - Spike US-1: *"Nghiên cứu giải pháp phân tích rủi ro tự động cho dự án quy mô 50 thành viên, đầu ra là tài liệu đề xuất kỹ thuật (Technical proposal) trong vòng 3 ngày."*
  - US-2: *"Triển khai hệ thống phân tích rủi ro dựa trên đề xuất kỹ thuật đã được phê duyệt ở bước trước."*

---

## S - Small (Nhỏ gọn)

### Định nghĩa

Câu chuyện người dùng phải đủ nhỏ để hoàn thành trong một chu kỳ phát triển (Sprint), thông thường dao động từ 1 đến 3 ngày làm việc của một lập trình viên.

### Tại sao quan trọng?

- Giảm thiểu rủi ro khi lập kế hoạch.
- Tăng tốc độ phản hồi từ phía khách hàng hoặc người dùng (Feedback loop).
- Dễ dàng tiến hành kiểm thử, tích hợp và khôi phục khi xảy ra lỗi (Rollback).

### Dấu hiệu vi phạm

- Ước lượng nỗ lực (Effort) triển khai vượt quá 5 ngày làm việc.
- Số lượng tiêu chí nghiệm thu vượt quá 7-8 kịch bản (Scenario).
- Câu chuyện bao gồm toàn bộ các thao tác Tạo, Đọc, Cập nhật, Xóa (CRUD).
- Tiêu đề câu chuyện chứa liên từ kết hợp "VÀ (AND)".

### Quy tắc phân rã (Split) phổ biến

1. **Theo CRUD**: Tách riêng các câu chuyện Tạo mới / Hiển thị / Cập nhật / Xóa.
2. **Theo đối tượng sử dụng (Persona)**: Tách riêng luồng nghiệp vụ của Quản lý dự án / Thành viên nhóm / Khách hàng / Quản trị viên.
3. **Theo cấu trúc dữ liệu**: Xử lý dữ liệu văn bản trước, sau đó bổ sung tệp đính kèm, bình luận, biểu đồ.
4. **Theo quy tắc nghiệp vụ**: Triển khai luồng thành công (Happy path) trước, các luồng kiểm tra (Validation) và phân quyền (Permission) triển khai sau.
5. **Theo các bước trong quy trình (Workflow)**: Tạo dự án -> Phân công thành viên -> Tạo công việc -> Cập nhật tiến độ -> Báo cáo.

### Ví dụ thực tế

- ❌ **Vi phạm**:
  *"As a quản lý dự án, I want to quản lý thông tin dự án của tôi (bao gồm xem, sửa tên, thay đổi ngày bắt đầu, phân công thành viên và yêu cầu đóng dự án)."*
- ✅ **Đạt chuẩn** (Phân rã thành các câu chuyện nhỏ):
  - US-1: Xem thông tin dự án.
  - US-2: Cập nhật tên dự án.
  - US-3: Thay đổi ngày bắt đầu/kết thúc.
  - US-4: Phân công thành viên vào dự án.
  - US-5: Yêu cầu đóng dự án.

---

## T - Testable (Kiểm thử được)

### Định nghĩa

Câu chuyện người dùng phải có các tiêu chí nghiệm thu rõ ràng, cụ thể và đo lường được để kiểm thử viên viết kịch bản kiểm thử (Test case) và nghiệm thu tính năng.

### Tại sao quan trọng?

- Tránh tranh cãi về định nghĩa hoàn thành (Definition of Done) giữa các bộ phận.
- Tạo điều kiện thuận lợi cho việc thiết lập kiểm thử tự động (Automation test).

### Dấu hiệu vi phạm

- Tiêu chí nghiệm thu sử dụng các từ ngữ định tính, mơ hồ như "nhanh", "đẹp", "dễ sử dụng".
- Hoàn toàn không có tiêu chí nghiệm thu, chỉ có phần mô tả chung chung.

### Hướng xử lý

- Soạn thảo các tiêu chí nghiệm thu theo đúng cấu trúc Given-When-Then.
- Xác định rõ các thông số kỹ thuật, thông điệp phản hồi và trạng thái cụ thể của hệ thống.

### Ví dụ thực tế

- ❌ **Vi phạm**:
  *"Tiêu chí nghiệm thu: Hệ thống phải phản hồi nhanh và hiển thị thông báo lỗi thân thiện khi thành viên nhóm vượt quá deadline."*
- ✅ **Đạt chuẩn**:
  *"Given thành viên nhóm giao công việc có deadline là 15/06 và hệ thống phát hiện công việc chưa hoàn thành sau 23:59 ngày 15/06.  
  When thành viên nhóm nhấn nút 'Cập nhật trạng thái'.  
  Then hệ thống tự động gửi thông báo nhắc nhở đến thành viên và quản lý dự án trong vòng 5 phút.  
  And ghi nhận trạng thái công việc là 'Quá hạn' trên biểu đồ Gantt của dự án."*

---

## Bảng tra cứu nhanh INVEST (INVEST Quick Reference Card)

| Tiêu chí | Câu hỏi tự kiểm tra nhanh |
| :--- | :--- |
| **I**ndependent (Độc lập) | Câu chuyện này có thể phát triển và kiểm thử độc lập được không? |
| **N**egotiable (Thương lượng) | Có không gian để thảo luận giải pháp kỹ thuật, hay mô tả đã quá chi tiết? |
| **V**aluable (Giá trị) | Quản lý dự án hoặc doanh nghiệp nhận được giá trị thực tế nào khi hoàn thành? |
| **E**stimable (Ước lượng được) | Lập trình viên có đủ thông tin để ước lượng nỗ lực thực hiện không? |
| **S**mall (Nhỏ gọn) | Có thể hoàn thành trọn vẹn và kiểm thử xong trong 1 Sprint không? |
| **T**estable (Kiểm thử được) | Tiêu chí nghiệm thu đã đủ rõ ràng để kiểm thử viên viết kịch bản kiểm thử chưa? |

---

## Tài liệu tham khảo

- Bill Wake (2003) - *"INVEST in Good Stories, and SMART Tasks"*
- Mike Cohn - *"User Stories Applied"*
- Atlassian Agile Coach - *User Story Best Practices*
