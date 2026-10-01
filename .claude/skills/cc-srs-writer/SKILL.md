---
name: cc-srs-writer
description: |
  SRS: viết đặc tả yêu cầu phần mềm từ PRD/FR, User Story/AC, Use Case hoặc mô tả tính năng;
  rà soát SRS hiện có; cập nhật đặc tả khi yêu cầu nguồn thay đổi.
  Dùng khi các skill yêu cầu nghiệp vụ hoặc Test Case cần bàn giao sang đặc tả hệ thống và contract kỹ thuật.
---

# Software Requirements Specification Writer

## Mục đích và ranh giới

SRS (Software Requirements Specification) xác định hành vi, dữ liệu, giao diện và ràng buộc mà phần mềm phải đáp ứng để đội phát triển và kiểm thử có thể đối chiếu. Giải thích thuật ngữ khi xuất hiện lần đầu; người cung cấp yêu cầu không cần tự chọn công nghệ.

**Nguyên tắc: đặc tả có nguồn, kiểm chứng được.** PRD xác định nhu cầu và phạm vi sản phẩm; SRS làm rõ yêu cầu hệ thống, gồm contract kỹ thuật khi cần; tài liệu thiết kế kiến trúc (ADD) giải thích cách tổ chức và xây dựng giải pháp. Giữ ràng buộc kỹ thuật đã xác nhận, nhưng dẫn quyết định thiết kế sang tài liệu riêng. SRS không triển khai tính năng hay chứng nhận kiểm thử.

Biểu mẫu tham khảo cấu trúc IEEE 830 và cách tiếp cận yêu cầu của ISO/IEC/IEEE 29148; dùng biểu mẫu không đồng nghĩa đã được chứng nhận tuân thủ một tiêu chuẩn.

## Quy trình thực hiện (Workflow)

### Bước 1: Xác định nhánh và phạm vi

| Yêu cầu               | Cách xử lý                                                                          |
| --------------------- | ----------------------------------------------------------------------------------- |
| Viết mới / chuyển đổi | Tạo SRS từ nguồn đã cung cấp; không bắt buộc PRD nếu nguồn khác đủ rõ               |
| Chỉ rà soát           | Đọc SRS và nguồn, báo phát hiện và đề xuất; giữ nguyên tệp và trạng thái nguồn      |
| Cập nhật / mở rộng    | Xác định phiên bản và phần được phép sửa, giữ mã cũ, đánh giá tác động của thay đổi |

Tiếp tục theo yêu cầu rõ ràng; chỉ hỏi khi chưa phân biệt được phạm vi nhận xét và chỉnh sửa.

**Hoàn tất khi:** xác định nhánh, nguồn/phiên bản, phần trong và ngoài phạm vi; thiếu tài liệu nào được ghi rõ.

### Bước 2: Làm rõ yêu cầu và bằng chứng

Đọc nguồn trước khi hỏi; chỉ hỏi phần thiếu có ảnh hưởng đến yêu cầu, tối đa ba câu mỗi lượt. Làm rõ vai trò, hành vi/kết quả, quy tắc và giới hạn, dữ liệu, hệ thống cần trao đổi, yêu cầu chất lượng và ràng buộc đã xác nhận. Công nghệ chưa được lựa chọn không tự động chặn đặc tả hành vi.

| Nguồn                                          | Nội dung cần giữ                                                       |
| ---------------------------------------------- | ---------------------------------------------------------------------- |
| PRD / FR / NFR                                 | Mã, phạm vi, quy tắc và mục tiêu chất lượng                            |
| User Story / AC                                | Mã US/AC, vai trò, mục tiêu, mọi kịch bản được yêu cầu                 |
| Use Case                                       | Mã UC, điều kiện trước/sau, luồng chính, thay thế, ngoại lệ và quy tắc |
| Mô tả trực tiếp / chính sách / contract có sẵn | Trích dẫn yêu cầu, tài liệu/mục/phiên bản và người xác nhận nếu có     |

Thiếu nguồn để đối chiếu thì báo giới hạn kiểm tra. Khi hai nguồn mâu thuẫn, nêu cả hai và người cần quyết định, không tự chọn nguồn thắng. Mã nguồn chưa có có thể được gán nhãn tạm, ghi rõ đó không phải FR đã phê duyệt.

- **Chỉ rà soát:** thông tin thiếu là phát hiện; tiếp tục đánh giá phần đã có.
- **Soạn/cập nhật:** nếu thiếu quyết định làm đổi hành vi hoặc contract, hỏi và dừng; nếu người dùng muốn bản nháp, dùng `[CHƯA XÁC ĐỊNH: câu hỏi]` ở vị trí liên quan và ghi vào sổ câu hỏi.
- Đề xuất hoặc giả định chỉ khi được yêu cầu, tách khỏi yêu cầu đã xác nhận. Số liệu, nhà cung cấp và lựa chọn công nghệ cần nguồn, không lấy từ ví dụ làm mặc định.

**Hoàn tất khi:** có đủ căn cứ cho phần đang xử lý, hoặc đã trả câu hỏi/bản nháp đúng yêu cầu; không đánh giá độ sẵn sàng bằng số lượng trường đã điền.

### Bước 3: Lập bản đồ yêu cầu

Đọc [biểu mẫu SRS](./references/srs-template.md) khi soạn/cập nhật. Với rà soát, dùng cấu trúc hiện có để kiểm tra độ bao phủ, không ép đổi định dạng.

Giữ mã nguồn và mã SRS hiện có. Mã SRS mới dùng quy ước dự án; nếu chưa có, dùng `SRS-[SỐ]` và ghi là mã đề xuất. Các yêu cầu chức năng, dữ liệu, giao diện, chất lượng và ràng buộc cần mã để truy vết; tham chiếu chéo thay vì chép lại cùng một yêu cầu ở nhiều phần.

Lập ma trận truy xuất (RTM): `Nguồn + phiên bản/mục | SRS | Loại | Bao phủ | Câu hỏi`. Kiểm tra hai chiều: mỗi nguồn trong phạm vi có đặc tả hoặc lý do chưa xử lý; mỗi yêu cầu SRS có nguồn hợp lệ. Cho phép nhiều nguồn cho một SRS và một nguồn cho nhiều SRS. Yêu cầu suy ra cần lý do, nguồn gốc và xác nhận, không tự coi là đã được duyệt.

Khi cập nhật, đối chiếu phiên bản cũ/mới; liệt kê SRS, contract, dữ liệu, NFR và tham chiếu kiểm thử chịu ảnh hưởng. Giữ lịch sử mã tách/gộp/ngừng dùng; phần ngoài phạm vi chỉ báo tác động.

**Hoàn tất khi:** mọi nguồn và yêu cầu SRS trong phạm vi được ánh xạ, hoặc có phát hiện/câu hỏi rõ ràng; không cần sửa nguồn để hoàn tất nhánh rà soát.

### Bước 4: Soạn hoặc đối chiếu đặc tả

Dùng biểu mẫu làm nguồn cấu trúc; [checklist đầy đủ](./checklists/quality-checklist-srs.md) là nguồn duy nhất quy định chất lượng và trạng thái bàn giao.

- Đặc tả hành vi trước, sau đó contract, dữ liệu và NFR liên quan. Giữ các luồng, quy tắc, quyền hạn và kết quả lỗi từ nguồn.
- Với API, thông điệp, tệp hoặc giao tiếp thiết bị, mô tả contract đúng loại; tái sử dụng schema đã có. Không mặc định mọi chức năng là HTTP API hay cần bảng dữ liệu vật lý.
- Ghi dữ liệu và ràng buộc logic; tham chiếu thiết kế lưu trữ khi đã có. Chọn công nghệ, phân chia dịch vụ và cấu hình vận hành thuộc tài liệu thiết kế, không tự phát sinh từ mẫu.
- Làm NFR kiểm chứng được bằng điều kiện, kết quả và cách đánh giá; ngưỡng định lượng cần nguồn. Yêu cầu như từ chối truy cập trái phép có thể kiểm tra đúng/sai mà không thêm số tùy ý.
- Phần không áp dụng phải có lý do theo nguồn; phần chưa biết giữ câu hỏi. Yêu cầu vận hành, bảo mật hoặc môi trường có căn cứ vẫn thuộc SRS, khác với hướng dẫn cài đặt/cấu hình.

**Hoàn tất khi:** mọi yêu cầu trong phạm vi đã được đặc tả hoặc đánh giá, mọi khoảng trống và xung đột được ghi nhận, không có lựa chọn từ biểu mẫu bị coi là quyết định đã xác nhận.

### Bước 5: Kiểm tra và xác định trạng thái

Áp dụng toàn bộ checklist cho mọi yêu cầu và phần trong phạm vi. Ghi mã mục, vị trí/SRS, kết quả, căn cứ và hướng xử lý; dùng trạng thái và quy tắc không áp dụng trong checklist. [Phiếu rà soát nhanh](./checklists/quick-checklist-srs-1page.md) chỉ hỗ trợ ghi nhận, không thay thế kiểm tra đầy đủ.

Trong nhánh chỉnh sửa, sửa vấn đề giải quyết được từ nguồn rồi kiểm tra lại các phần bị ảnh hưởng. Nếu còn thiếu quyết định/bằng chứng về nội dung yêu cầu, dừng với Draft và câu hỏi; nếu chỉ chờ phê duyệt, dùng trạng thái theo checklist. Rà soát chỉ đề xuất sửa và trạng thái.

**Hoàn tất khi:** mọi mục checklist đã có kết quả có căn cứ; mỗi vấn đề được xử lý, chuyển thành câu hỏi hoặc ghi ngoài phạm vi; trạng thái không hàm ý đã kiểm thử hay được duyệt.

### Bước 6: Bàn giao theo nhánh

- **Viết mới:** SRS, RTM, kết quả kiểm tra và câu hỏi/người cần xác nhận.
- **Cập nhật:** các nội dung trên cùng tóm tắt thay đổi, mã giữ/thêm/ngừng dùng và tác động chưa được xử lý ngoài phạm vi.
- **Chỉ rà soát:** kết luận ngắn, phát hiện theo ảnh hưởng, vị trí/bằng chứng, đề xuất và giới hạn kiểm tra; trạng thái chỉ là khuyến nghị.

Mặc định Markdown, theo định dạng người dùng đã yêu cầu nếu khác. Chỉ sửa tệp hoặc xuất sang hệ thống khác trong phạm vi cho phép. Nếu chỉ xử lý một phần SRS, nêu rõ phần đã kiểm tra; không kết luận toàn bộ tài liệu đã đạt.

**Hoàn tất khi:** người dùng phân biệt được phần đã xác nhận, phần còn mở, thay đổi thực tế và bước bàn giao tiếp theo.

## Bàn giao sang tài liệu liên quan

Chỉ đề xuất mở rộng khi cần; không tự chạy thêm quy trình:

- [PRD](../cc-prd-writer/references/prd-template.md): làm rõ phạm vi/ưu tiên sản phẩm còn thiếu.
- [User Story + AC](../cc-user-story-acceptance-criteria-writer/SKILL.md): làm rõ mục tiêu người dùng và kịch bản nghiệm thu.
- [Use Case](../cc-use-case-writer/references/template-guide.md): làm rõ tương tác và các luồng còn thiếu.
- [Test Case](../cc-test-case-writer/SKILL.md): tạo ca kiểm thử từ mã SRS, contract và kết quả đã xác nhận; không coi việc soạn ca kiểm thử là đã thực thi.
- ADD / nhật ký quyết định kiến trúc (ADR): nơi phân tích lựa chọn triển khai; trong SRS chỉ dẫn ràng buộc hoặc quyết định đã xác nhận có ảnh hưởng đến yêu cầu.
