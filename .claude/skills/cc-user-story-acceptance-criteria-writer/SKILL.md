---
name: cc-user-story-acceptance-criteria-writer
description: |
  User Story và Acceptance Criteria: dùng khi cần viết từ mô tả tính năng hoặc PRD,
  rà soát story hiện có, tinh chỉnh/chia nhỏ story, hoặc bổ sung kịch bản Given-When-Then.
  Áp dụng INVEST và giữ liên kết với yêu cầu nguồn; dùng khi skill PRD cần bàn giao sang User Story.
---

# User Story & Acceptance Criteria Writer

## Mục đích và ranh giới

User Story (US) diễn đạt **ai cần làm gì và vì sao**. Acceptance Criteria (AC, tiêu chí nghiệm thu) mô tả hành vi để xác định yêu cầu đã được đáp ứng hay chưa. Dùng ngôn ngữ nghiệp vụ dễ hiểu cho học viên không biết lập trình; giữ các nhãn As a / I want to / So that và Given / When / Then.

Skill này soạn hoặc đánh giá yêu cầu, không thực hiện tính năng hay chứng nhận sản phẩm đã được kiểm thử. Giữ quyết định về cách xây dựng bên ngoài US và AC.

## Quy trình thực hiện

### Bước 1: Chọn nhánh theo yêu cầu

| Yêu cầu                        | Cách xử lý                                            |
| ------------------------------ | ----------------------------------------------------- |
| Viết mới từ tính năng hoặc PRD | Tạo US + AC theo phạm vi nguồn                        |
| Chỉ rà soát                    | Nêu phát hiện, căn cứ và đề xuất; giữ nguyên tài liệu |
| Tinh chỉnh hoặc chia nhỏ       | Sửa phần được yêu cầu; giữ mã và quy tắc đã xác nhận  |
| Bổ sung AC                     | Giữ US và AC hiện có; thêm các kịch bản còn thiếu     |

Khi yêu cầu đã rõ, tiếp tục ngay. Chỉ hỏi lại nếu chưa phân biệt được người dùng muốn nhận xét hay sửa tài liệu.

**Hoàn tất khi:** xác định nhánh, tài liệu nguồn và các US/tính năng trong phạm vi.

### Bước 2: Làm rõ đầu vào và nguồn

Đọc nội dung đã có; chỉ hỏi phần còn thiếu, tối đa ba câu mỗi lượt:

- **Đối tượng:** Ai sử dụng và trong hoàn cảnh nào?
- **Mục tiêu:** Họ muốn thực hiện hành động gì?
- **Giá trị:** Kết quả đó giúp ích gì?
- **Phạm vi:** Điều kiện áp dụng, quy tắc nghiệp vụ, phần bao gồm và không bao gồm?

Ghi mã yêu cầu chức năng (FR) nếu có PRD; nếu không, ghi nguồn là mô tả người dùng hoặc tài liệu đã cung cấp. Giữ nguyên mã nguồn, số liệu và quy tắc đã xác nhận. Với thông tin mâu thuẫn, nêu hai nguồn và câu hỏi cần quyết định.

- **Chỉ rà soát:** vẫn đánh giá phần đã có; liệt kê thông tin thiếu như phát hiện, không bắt người dùng bổ sung trước khi được nhận kết quả.
- **Soạn thảo:** nếu thiếu thông tin làm thay đổi hành vi, hỏi và dừng tại câu hỏi. Khi người dùng yêu cầu bản nháp, dùng `[CẦN XÁC NHẬN: ...]` và trạng thái Draft.
- Chỉ đề xuất giả định khi được cho phép; đánh dấu rõ. Không biến ví dụ thành quy tắc thật, tự đặt ngưỡng, ước lượng hoặc tên người phê duyệt.

**Hoàn tất khi:** mỗi đầu vào có nguồn hoặc được đánh dấu chưa rõ; kết quả là đủ thông tin để tiếp tục, bản nháp được yêu cầu, hoặc câu hỏi cần trả lời.

### Bước 3: Xác định phạm vi từng story

Với bản nháp mới hoặc cần chỉnh, đọc [biểu mẫu trống](./templates/user-story-template-blank.md). Đọc [hướng dẫn INVEST](./references/invest-criteria.md) khi đánh giá sáu tiêu chí hoặc cân nhắc phân rã; phần **S — Small** là nguồn quy tắc phân rã.

Giữ mã US và AC hiện có. Khi tạo mới, dùng quy ước dự án; nếu chưa có, dùng `US-[MÃ_TÍNH_NĂNG]-[SỐ]`, với AC dạng `US-.../AC-01`. Khi chia nhỏ, ghi ánh xạ US cũ → các US mới; không âm thầm xóa hoặc tái sử dụng mã cũ.

Với nhiều FR, lập bảng `Nguồn/FR | US | Tình trạng bao phủ | Câu hỏi`. Mọi yêu cầu trong phạm vi phải được ánh xạ hoặc nêu lý do chưa xử lý. Mã mới do AI đề xuất phải phân biệt với mã có sẵn trong nguồn.

**Hoàn tất khi:** mọi US đã được xác định mục tiêu, mã và nguồn, hoặc ghi rõ phần thiếu/mâu thuẫn để rà soát hay bàn giao Draft; mọi yêu cầu nguồn đều có ánh xạ hoặc lý do chưa xử lý. Với nhánh chỉ rà soát, ghi nhận thiếu sót là đủ để chuyển bước, không sửa nguồn để đạt điều kiện này.

### Bước 4: Soạn hoặc đánh giá US + AC

Bản soạn dùng biểu mẫu ở Bước 3. Bản rà soát đối chiếu nội dung hiện có, không tự viết đè.

Áp dụng [checklist chất lượng](./checklists/quality-checklist.md) cho từng US; đây là nguồn duy nhất quy định điều kiện đạt, cấu trúc Gherkin và trạng thái bàn giao. Checklist yêu cầu tối thiểu ba kịch bản cùng story: thông thường, biên/xác thực nghiệp vụ và xử lý lỗi.

Khi cần học cách điền, đọc [ví dụ hoàn chỉnh](./templates/user-story-template-example.md). Khi cần tình huống nghiệp vụ khác, chọn mục phù hợp trong [bộ ví dụ](./references/examples.md); các ví dụ chỉ là dữ liệu minh họa.

Với nhánh bổ sung AC, đọc cả các AC cũ để tránh trùng hoặc mâu thuẫn; liệt kê phần cũ cần sửa riêng nếu ngoài phạm vi. Với thông tin chưa rõ, giữ dấu cần xác nhận thay vì viết một kịch bản có vẻ hoàn chỉnh nhưng không có căn cứ.

**Hoàn tất khi:** mọi US được yêu cầu đã có nội dung hoặc phát hiện tương ứng; từng kịch bản đã được kiểm tra kết quả quan sát được, và mọi kết quả chưa rõ được ghi thành vấn đề/câu hỏi.

### Bước 5: Kiểm tra và chọn trạng thái

Kiểm tra từng US theo toàn bộ checklist, ghi mã mục chưa đạt cùng bằng chứng và hướng xử lý. Đánh giá INVEST với ba trạng thái **Đạt / Cần cải thiện / Cần xác nhận**, có lý do; ước lượng và phê duyệt cần căn cứ từ người có trách nhiệm.

Trong nhánh cho phép chỉnh sửa, sửa lỗi có thể giải quyết từ nguồn hiện có rồi kiểm tra lại phần bị ảnh hưởng. Nếu còn thiếu quyết định hoặc bằng chứng, bàn giao Draft cùng câu hỏi và dừng; không lặp lại việc viết để ép đạt. Trong nhánh chỉ rà soát, giữ nguyên tài liệu và báo các mục chưa đạt.

**Hoàn tất khi:** toàn bộ US trong phạm vi đã được kiểm tra; mỗi vấn đề được sửa, được ghi nhận ngoài phạm vi, hoặc được chuyển thành câu hỏi có người cần xác nhận.

### Bước 6: Bàn giao theo nhánh

- **Chỉ rà soát:** kết luận ngắn, phát hiện theo mức ảnh hưởng, vị trí/US/AC liên quan, đề xuất và giới hạn kiểm tra.
- **Viết mới/tinh chỉnh:** US + AC theo biểu mẫu, kết quả checklist và câu hỏi còn mở. Với bản chỉnh, thêm tóm tắt thay đổi và ánh xạ mã nếu phân rã.
- **Bổ sung AC:** nêu mã US, AC mới, độ bao phủ sau bổ sung, kết quả kiểm tra, trạng thái đề xuất và câu hỏi; liệt kê mâu thuẫn của AC cũ nếu có.
- Với yêu cầu từ PRD, kèm bảng truy vết ở Bước 3 để cập nhật lại tài liệu nguồn khi được yêu cầu.

Dùng Markdown mặc định; tuân theo định dạng đã được người dùng yêu cầu thay vì hỏi lại. Chỉ sửa tệp hoặc xuất sang hệ thống khác trong phạm vi được cho phép.

**Hoàn tất khi:** người dùng phân biệt được phần đã hoàn thiện, phần chờ xác nhận và thay đổi thực tế; không tuyên bố đã phê duyệt hoặc đã triển khai chỉ vì tài liệu đạt checklist.

## Ranh giới bàn giao

Khi cần mở rộng ngoài US + AC, đề xuất tài liệu tương ứng thay vì tự mở rộng phạm vi:

- [PRD](../cc-prd-writer/references/prd-template.md): phạm vi tính năng và yêu cầu nguồn.
- [Use Case](../cc-use-case-writer/SKILL.md): tương tác nghiệp vụ chi tiết.
- [SRS](../cc-srs-writer/SKILL.md): đặc tả yêu cầu hệ thống.
- [Test Case](../cc-test-case-writer/SKILL.md): các ca kiểm thử dựa trên US/AC đã xác nhận.
