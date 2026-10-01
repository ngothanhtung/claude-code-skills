# SRS Quality Checklist — 20 mục kiểm tra

Đây là nguồn duy nhất của điều kiện chất lượng và trạng thái bàn giao. Áp dụng cho toàn bộ phạm vi được yêu cầu; [biểu mẫu SRS](../references/srs-template.md) chỉ quy định cách trình bày.

Ghi từng mục là **Đạt / Cần cải thiện / Cần xác nhận / Không áp dụng**, cùng vị trí và căn cứ. Một mục chỉ Đạt khi mọi yêu cầu liên quan trong phạm vi đều đạt. Không dùng điểm trung bình để bù cho một yêu cầu còn sai hoặc thiếu.

**Không áp dụng** chỉ dành cho mục có điều kiện khi đã xác nhận không có đối tượng tương ứng, kèm lý do. Thiếu thông tin không phải Không áp dụng; dùng Cần xác nhận. Luôn kiểm tra nguồn, phạm vi, mã, tính nhất quán và trạng thái.

Nếu chỉ rà soát, báo vấn đề và đề xuất; không sửa nguồn. Nếu được sửa, xử lý phần có đủ căn cứ; phần còn thiếu quyết định về yêu cầu thì trả Draft/câu hỏi và dừng. Không tạo bằng chứng hay thông tin phê duyệt để làm checklist đạt.

---

## Phần 1: Nguồn và truy vết

- [ ] **1.1 — Mã và nguồn:** Mỗi yêu cầu có mã duy nhất, ổn định và nguồn xác định được đến tài liệu/phiên bản/mục hoặc lời mô tả được cung cấp. Chấp nhận FR, NFR, US/AC, UC, chính sách hoặc contract đã xác nhận; không đòi FR giả khi thiếu PRD.
- [ ] **1.2 — Bao phủ nguồn:** RTM thể hiện mọi yêu cầu nguồn trong phạm vi, kể cả các luồng thay thế/ngoại lệ và AC. Mục chưa bao phủ có lý do/câu hỏi; chỉ ghi Đạt khi hết khoảng trống hoặc có xác nhận loại khỏi phạm vi.
- [ ] **1.3 — Truy ngược:** Mọi yêu cầu SRS về hành vi, dữ liệu, giao diện, NFR và ràng buộc đều truy được về nguồn. Yêu cầu suy ra có lập luận và xác nhận; mã đề xuất phân biệt với mã gốc. Liên kết trong RTM khớp nội dung, không chỉ có tên mã.

---

## Phần 2: Hành vi, contract và dữ liệu

- [ ] **2.1 — Hành vi kiểm chứng được:** Mỗi yêu cầu chức năng có vai trò/quyền, điều kiện trước, sự kiện, kết quả và trạng thái sau rõ ràng. Tách các nghĩa vụ có thể kiểm tra riêng; bao phủ điều kiện biên, lỗi và quy tắc bắt buộc từ nguồn.
- [ ] **2.2 — Contract khi có giao tiếp:** Định danh giao diện, bên gửi/nhận, dữ liệu vào/ra, kiểu/định dạng, trường bắt buộc và ràng buộc đủ để đối chiếu. Dùng schema của contract đã xác nhận; không áp đặt cấu trúc `data + meta`. HTTP method/path/status chỉ áp dụng khi dùng HTTP; message/file/device dùng định dạng tương ứng.
- [ ] **2.3 — Kết quả lỗi:** Từng lỗi liên quan có điều kiện gây lỗi, thông tin/mã trả về theo contract và ảnh hưởng dữ liệu/trạng thái. Xác nhận xử lý thiếu quyền, gián đoạn, yêu cầu trùng/lệch thứ tự khi liên quan; phần chưa có quy tắc là câu hỏi, không tự đặt retry/timeout.
- [ ] **2.4 — Dữ liệu khi có:** Thuộc tính, ý nghĩa, kiểu logic, miền giá trị, quan hệ và ràng buộc dữ liệu khớp nguồn. Chính sách truy cập/lưu giữ dữ liệu có nguồn khi áp dụng. Schema lưu trữ và index chỉ tham chiếu khi là ràng buộc đã xác nhận, không bắt buộc để hoàn thành SRS.
- [ ] **2.5 — Nhất quán:** Hành vi, contract, dữ liệu và NFR dùng cùng thuật ngữ/quy tắc; định nghĩa dùng chung có một nơi chính và tham chiếu hợp lệ. Không có kết quả thành công/lỗi mâu thuẫn giữa các phần.

---

## Phần 3: Yêu cầu phi chức năng (NFR)

- [ ] **3.1 — Kết quả đánh giá:** Mỗi NFR có tiêu chí đúng/sai quan sát được. NFR định lượng có chỉ số, đơn vị và ngưỡng có nguồn; NFR về quyền truy cập hoặc tương thích có thể dùng điều kiện đạt thay vì số tùy ý.
- [ ] **3.2 — Điều kiện và cách kiểm tra:** Mỗi NFR nêu môi trường/tình huống, cách đo hoặc đánh giá; chỉ số hiệu suất/khả dụng cần tải, tập dữ liệu, khoảng đo và cách tính phù hợp. Không biến mục tiêu thành kết quả đã đo.
- [ ] **3.3 — Bao phủ chất lượng:** Các nhóm NFR liên quan từ nguồn đều được xét, gồm hiệu suất, bảo mật/quyền riêng tư, khả dụng/khôi phục, mở rộng, tương thích và nhóm khác nếu có. Nhóm chưa rõ được hỏi; nhóm không áp dụng có căn cứ, không thêm ngưỡng chỉ để lấp mẫu.

---

## Phần 4: Giới hạn phạm vi

- [ ] **4.1 — Ràng buộc có căn cứ:** Công nghệ, chuẩn và giới hạn đã xác nhận có nguồn. Đề xuất chỉ xuất hiện khi được yêu cầu, tách khỏi quyết định chính thức; thiếu lựa chọn triển khai không chặn yêu cầu độc lập với lựa chọn đó.
- [ ] **4.2 — Đúng phạm vi:** Mỗi yêu cầu phục vụ nguồn được chấp nhận; thay đổi/phần mở rộng cần xác nhận phạm vi. Không tự sửa PRD, US/AC, UC hoặc tài liệu ngoài yêu cầu.
- [ ] **4.3 — Yêu cầu vận hành:** Giữ mục tiêu vận hành có nguồn như thời gian khôi phục, nhật ký truy cập hoặc môi trường hỗ trợ; đưa hướng dẫn cài đặt, pipeline và cấu hình giám sát sang tài liệu vận hành. Không kết luận sai chỉ vì có từ khóa kỹ thuật.
- [ ] **4.4 — Ranh giới thiết kế:** Giữ hành vi, giao diện và ràng buộc cần đáp ứng; tham chiếu ADD/ADR cho tổ chức dịch vụ, lưu trữ và triển khai. SRS không tự chọn kiến trúc để điền đủ mẫu.

---

## Phần 5: Tích hợp hệ thống

- [ ] **5.1 — Hợp đồng trao đổi:** Khi có tích hợp, mỗi bên, mục đích và phiên bản contract được xác định; nội dung vào/ra/lỗi dẫn đến đặc tả chính theo 2.2–2.3, không chép thành hợp đồng thứ hai.
- [ ] **5.2 — Đối tác và trách nhiệm:** Tích hợp/nhà cung cấp có nguồn hoặc xác nhận riêng, không bắt buộc phải nằm trong PRD nếu nguồn hợp lệ khác đã có. Trách nhiệm khi gián đoạn và phụ thuộc chưa rõ được ghi để xác nhận.

---

## Phần 6: Quyết định và tác động thay đổi

- [ ] **6.1 — Lịch sử có căn cứ:** Quyết định ảnh hưởng yêu cầu có nguồn, người/ngày xác nhận hoặc trạng thái chưa xác nhận. Khi cập nhật, có ánh xạ mã giữ/thêm/tách/gộp/ngừng dùng và tác động lên contract, dữ liệu, NFR, RTM, tham chiếu kiểm thử; giữ phê duyệt cũ như lịch sử, không áp cho phiên bản mới.

---

## Phần 7: Chất lượng tài liệu

- [ ] **7.1 — Đọc và tra cứu được:** Thuật ngữ được giải thích, tài liệu có phiên bản/phạm vi, nguồn và liên kết hợp lệ. Ví dụ/placeholder phân biệt với dữ liệu thật; tham khảo tiêu chuẩn không được trình bày thành chứng nhận tuân thủ.
- [ ] **7.2 — Khoảng trống và kết luận:** Mọi câu hỏi, giả định, xung đột có vị trí liên quan, người/vai trò cần trả lời và tác động. Bản nháp ghi `[CHƯA XÁC ĐỊNH: ...]` tại chỗ và liên kết sổ câu hỏi; chỉ đánh giá Đạt khi hết vấn đề về nội dung trong phạm vi. Chờ phê duyệt không phải lỗi nội dung. Kết luận áp dụng đúng trạng thái dưới đây.

---

## Ghi kết quả và trạng thái

| Mã mục                  | Vị trí / SRS   | Kết quả               | Căn cứ / Hướng xử lý / Người xác nhận |
| ----------------------- | -------------- | --------------------- | ------------------------------------- |
| [1.1–7.2, ghi từng mục] | [Mã hoặc phần] | [Trạng thái kiểm tra] | [Nội dung cụ thể]                     |

Tổng hợp số mục Đạt, Cần cải thiện, Cần xác nhận, Không áp dụng trên 20 mục để theo dõi, không dùng tỷ lệ này làm ngưỡng duyệt.

| Trạng thái tài liệu         | Điều kiện                                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Draft — Bản nháp**        | Còn mục áp dụng chưa đạt/cần xác nhận, nguồn mâu thuẫn hoặc khoảng trống chưa giải quyết; có thể bàn giao bản nháp kèm câu hỏi    |
| **Review — Chờ phê duyệt**  | Mọi mục áp dụng đều đạt, mục Không áp dụng có căn cứ, chỉ còn chờ phê duyệt phiên bản này; thiếu tên/ngày duyệt lúc này là hợp lệ |
| **Approved — Đã phê duyệt** | Đủ điều kiện chất lượng của Review và có bằng chứng người duyệt, ngày duyệt, đúng phiên bản/phạm vi; AI không tự phê duyệt        |

Khi đổi yêu cầu/contract của bản Approved, tạo phiên bản mới ở Draft hoặc Review theo kết quả; phê duyệt cũ chỉ là lịch sử. Rà soát chỉ khuyến nghị trạng thái, không sửa trạng thái nguồn. Kiểm tra một phần chỉ kết luận phần đó, không nâng trạng thái toàn bộ tài liệu.

Các trạng thái đánh giá **tài liệu yêu cầu**, không chứng nhận sản phẩm đã triển khai hoặc kiểm thử đạt.
