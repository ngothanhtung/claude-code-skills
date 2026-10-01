# Bảng kiểm tra chất lượng User Story và Acceptance Criteria

Đây là **nguồn duy nhất của điều kiện đạt và trạng thái bàn giao**. Áp dụng cho từng US khi viết mới, bổ sung AC, tinh chỉnh hoặc chỉ rà soát. Dùng [biểu mẫu trống](../templates/user-story-template-blank.md) để trình bày; dùng [INVEST](../references/invest-criteria.md) để giải thích và xử lý vấn đề.

Ghi kết quả **Đạt / Cần cải thiện / Cần xác nhận** với căn cứ. Mục có điều kiện không áp dụng được ghi **Không áp dụng** cùng lý do; không dùng trạng thái này để bỏ qua US, INVEST hoặc ba nhóm AC bắt buộc.

---

## Cách xử lý kết quả

| Tình trạng                                     | Hành động                                                  |
| ---------------------------------------------- | ---------------------------------------------------------- |
| Lỗi có thể sửa từ nguồn đã có                  | Sửa khi được cho phép; nếu chỉ rà soát, nêu đề xuất        |
| Thiếu quyết định, bằng chứng hoặc quy tắc      | Nêu câu hỏi và người cần xác nhận; cho phép bàn giao Draft |
| Mâu thuẫn với nội dung ngoài phạm vi chỉnh sửa | Giữ nguyên phần đó, chỉ rõ tác động và đề xuất xử lý       |

Không tạo dữ liệu, phê duyệt hay kết quả kiểm thử để làm checklist đạt. Dừng ở câu hỏi hoặc bản nháp khi không còn thông tin để xử lý.

---

## A. Phạm vi và nguồn

- [ ] **Q01 — Story rõ nghĩa:** As a xác định vai trò, I want to nêu một mục tiêu, So that nêu giá trị khác với việc lặp lại hành động.
- [ ] **Q02 — Phạm vi có căn cứ:** Điều kiện áp dụng và quy tắc nghiệp vụ khớp nguồn; giả định, dữ liệu minh họa và thông tin chưa xác nhận được phân biệt.
- [ ] **Q03 — Mã truy vết:** US/AC có mã duy nhất, giữ mã cũ khi sửa; mọi US liên kết FR hoặc mô tả nguồn. Khi phân rã có ánh xạ mã cũ → mã mới.

---

## B. Độ bao phủ và cấu trúc AC

- [ ] **Q04 — Đủ ba nhóm:** Mỗi US có ít nhất **3 kịch bản riêng biệt**: thông thường (Happy path), biên hoặc xác thực nghiệp vụ (Edge/Validation), và xử lý lỗi (Error/Negative). Chỗ trống chờ xác nhận chưa được tính là kịch bản hoàn chỉnh.
- [ ] **Q05 — Cùng mục tiêu:** Tất cả AC thuộc đúng US; các trường hợp bắt buộc từ nguồn đều được bao phủ. Không lấy AC của tính năng khác để đủ số lượng.
- [ ] **Q06 — Gherkin rõ ràng:** Mỗi AC có Given (bối cảnh ban đầu), When (một sự kiện kích hoạt), Then (kết quả mong đợi). Đưa dữ liệu chuẩn bị vào Given; tách các kết quả lựa chọn khác nhau thành kịch bản riêng.
- [ ] **Q07 — Quan sát được:** Then cho phép kết luận đúng/sai. Chỉ dùng số liệu khi quy tắc cần số liệu và đã có nguồn; kết quả như "từ chối yêu cầu, giữ nguyên người phụ trách" không cần thêm thời gian tùy ý.

**And / But:** nối tiếp loại bước đứng trước, không tạo nhánh xử lý. Có thể bổ sung bối cảnh sau Given hoặc kết quả sau Then; But chỉ diễn đạt ý tương phản. Không có giới hạn cứng về số And, số dòng hoặc số AC; chỉ tách khi có nhiều kịch bản độc lập.

---

## C. Hành vi nghiệp vụ và độ tin cậy

- [ ] **Q08 — Ngôn ngữ nghiệp vụ:** US/AC mô tả hành vi và thông tin người dùng nhận được; không quy định giao diện hay cách lập trình.
- [ ] **Q09 — Lỗi có kết quả rõ:** Nêu lý do người dùng nhận biết được và ảnh hưởng lên dữ liệu/trạng thái theo quy tắc nguồn. Chỉ bắt buộc nguyên văn thông báo nếu nguồn yêu cầu; các lựa chọn xác nhận/hủy cần kịch bản riêng.
- [ ] **Q10 — Trung thực về điều chưa biết:** Quy tắc, ngưỡng, mục tiêu thời gian và kết quả chưa có căn cứ được đánh dấu cần xác nhận, không dùng ví dụ thay cho bằng chứng.

---

## D. INVEST và bàn giao

- [ ] **Q11 — Sáu tiêu chí INVEST:** Có đánh giá I, N, V, E, S, T và căn cứ theo [hướng dẫn INVEST](../references/invest-criteria.md). Đánh dấu Cần xác nhận khi chưa có thông tin, nhất là khả năng ước lượng và quy mô do đội thực hiện đánh giá.
- [ ] **Q12 — Phân rã có giá trị:** Khi chia nhỏ, mỗi US vẫn có mục tiêu sử dụng được và đủ ba nhóm AC ở Q04; giữ điều kiện hợp lệ, quyền hạn và xử lý lỗi cần thiết trong cùng phạm vi.
- [ ] **Q13 — Thông tin bàn giao có nguồn:** Mức ưu tiên và ước lượng có căn cứ hoặc được ghi cần xác nhận. Phê duyệt chỉ ghi khi có bằng chứng; ghi "Chưa có" là hợp lệ khi chờ duyệt. Các mục kiểm thử và Definition of Done chỉ được dẫn từ thỏa thuận có sẵn; không tự đánh dấu sản phẩm đã hoàn thành.
- [ ] **Q14 — Bao phủ yêu cầu nguồn:** Với nhiều FR/US, mọi mục trong phạm vi có ánh xạ hoặc lý do chưa xử lý; thay đổi không làm mất yêu cầu đã có.
- [ ] **Q15 — Đúng nhánh và trạng thái:** Rà soát không làm thay đổi tệp; chỉnh sửa chỉ trong phạm vi được cho phép. Kết luận tài liệu tuân theo quy tắc trạng thái bên dưới.

---

## Trạng thái tài liệu

| Trạng thái                  | Điều kiện                                                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Draft — Bản nháp**        | Còn mục chưa đạt hoặc cần xác nhận ngoài việc phê duyệt, kể cả INVEST. Được phép trả bản nháp kèm danh sách vấn đề; chưa khẳng định sẵn sàng đưa vào đợt phát triển                     |
| **Review — Chờ phê duyệt**  | Các mục áp dụng và sáu tiêu chí INVEST đều đạt bằng thông tin hiện có; chỉ còn chờ người có trách nhiệm duyệt phiên bản này. Thiếu tên/ngày phê duyệt lúc này không buộc quay lại Draft |
| **Approved — Đã phê duyệt** | Đủ điều kiện Review và có xác nhận rõ người duyệt, ngày duyệt, đúng phiên bản; AI không tự phê duyệt                                                                                    |

Khi thay đổi nội dung nghiệp vụ hoặc AC của bản Approved, đưa phiên bản mới về Draft hoặc Review theo kết quả kiểm tra; giữ lịch sử phê duyệt cũ trong ghi chú, không coi là phê duyệt cho nội dung mới. Nhánh chỉ rà soát chỉ đề xuất trạng thái, không tự sửa trạng thái nguồn.

## AC và Definition of Done

AC là yêu cầu hành vi riêng của story. Definition of Done (DoD) là thỏa thuận chất lượng chung của đội cho phần sản phẩm hoàn thành, có thể gồm cả kiểm tra nghiệp vụ và kỹ thuật; không chỉ dành riêng cho một vai trò.

Nếu đã có DoD, dẫn tài liệu đó trong phần ghi chú. Nếu chưa có, ghi cần đội thống nhất; việc soạn US không tự sinh hoặc đánh dấu đạt một danh sách kỹ thuật. Checklist ở đây đánh giá **chất lượng tài liệu**, không chứng nhận tính năng đã chạy đúng.
