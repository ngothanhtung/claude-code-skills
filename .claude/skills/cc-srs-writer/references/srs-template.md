# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)

## [Tên hệ thống / Tính năng]

Dùng phần cần thiết theo phạm vi; thay placeholder bằng thông tin có nguồn. Phần chưa biết giữ `[CHƯA XÁC ĐỊNH: ...]` và liên kết câu hỏi ở mục 6. Áp dụng [checklist chất lượng](../checklists/quality-checklist-srs.md) để xác định kết quả và trạng thái, không coi việc điền mẫu là đã đạt.

| Thuộc tính                   | Giá trị                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------- |
| Phiên bản / ngày sửa         | [Phiên bản và ngày thực tế]                                                   |
| Người soạn / người phụ trách | [Thông tin đã cung cấp; không tự đặt tên]                                     |
| Nguồn tham chiếu             | [PRD/FR, US/AC, UC, chính sách, contract hoặc mô tả trực tiếp; phiên bản/mục] |
| Trạng thái                   | [Draft / Review / Approved theo checklist]                                    |
| Phê duyệt                    | [Chưa có / Người, ngày, phiên bản, phạm vi và bằng chứng]                     |
| Phạm vi lần soạn/rà soát     | [Toàn bộ hoặc các phần được yêu cầu]                                          |

---

## 1. Tổng quan

### 1.1 Mục đích tài liệu

[Mục đích của SRS này là gì. 1-2 đoạn.]

### 1.2 Phạm vi hệ thống

[Hệ thống làm gì cho ai; các phần bao gồm/ngoài phạm vi, bối cảnh sử dụng, hệ thống liên quan và phụ thuộc đã biết. Ghi riêng phần chưa xác định.]

### 1.3 Định nghĩa, từ viết tắt, chuẩn tham chiếu

| Thuật ngữ   | Định nghĩa   |
| :---------- | :----------- |
| [Thuật ngữ] | [Định nghĩa] |

**Chuẩn tham chiếu:**

[Ghi tài liệu, phiên bản và phạm vi áp dụng mà dự án thực sự yêu cầu. Biểu mẫu tham khảo IEEE 830-1998 như cấu trúc lịch sử và ISO/IEC/IEEE 29148 về kỹ nghệ yêu cầu; không tự gán chứng nhận tuân thủ hay phiên bản tiêu chuẩn chưa được cung cấp.]

### 1.4 Người đọc dự kiến

- Trưởng nhóm phát triển (Development Lead)
- Kiến trúc sư hệ thống (System Architect)
- Lập trình viên (Developer)
- Kiểm thử viên (QA Engineer)

---

## 2. Yêu cầu chức năng và dữ liệu

Lặp mục 2.1 cho từng yêu cầu chức năng. Mã SRS theo quy ước dự án, duy nhất trong tài liệu; giữ mã cũ khi sửa. Các yêu cầu ở mục 2–4 đều được đưa vào RTM, kể cả dữ liệu, NFR, giao diện và ràng buộc. Có thể dẫn mã sẵn có thay vì tạo thêm một yêu cầu trùng nghĩa.

### 2.1 SRS-[mã]: [Tên yêu cầu]

| Trường                   | Nội dung                                                               |
| ------------------------ | ---------------------------------------------------------------------- |
| Nguồn                    | [Mã nguồn, tài liệu/phiên bản/mục; nếu mô tả trực tiếp thì trích đoạn] |
| Mức xác nhận             | [Theo nguồn / Đề xuất chưa xác nhận; người xác nhận nếu có]            |
| Yêu cầu                  | [Hệ thống phải đáp ứng nghĩa vụ nào, quan sát được]                    |
| Vai trò / quyền          | [Ai hoặc hệ thống nào được thực hiện]                                  |
| Điều kiện trước          | [Trạng thái/dữ liệu trước khi kích hoạt]                               |
| Sự kiện                  | [Hành động hoặc sự kiện kích hoạt]                                     |
| Kết quả / trạng thái sau | [Kết quả thành công, dữ liệu thay đổi hoặc giữ nguyên]                 |
| Liên quan                | [Mã contract mục 4, dữ liệu mục 2.2, NFR mục 3, phụ thuộc]             |
| Ưu tiên                  | [Theo nguồn / Chưa được cung cấp]                                      |

#### Các tình huống và quy tắc

| Mã nguồn / kịch bản     | Điều kiện và đầu vào   | Kết quả / trạng thái mong đợi                             | Cách kiểm tra       |
| ----------------------- | ---------------------- | --------------------------------------------------------- | ------------------- |
| [Luồng chính / AC]      | [Điều kiện]            | [Kết quả]                                                 | [Đối chiếu hành vi] |
| [Luồng thay thế / biên] | [Điều kiện theo nguồn] | [Kết quả]                                                 | [Cách đánh giá]     |
| [Lỗi / thiếu quyền]     | [Điều kiện theo nguồn] | [Lý do, trạng thái giữ/thay đổi; dẫn mã lỗi mục 4 nếu có] | [Cách đánh giá]     |

Các hàng là vị trí gợi ý, không phải kịch bản đã xác nhận. Bao phủ mọi trường hợp bắt buộc từ nguồn; phần chưa rõ dẫn câu hỏi. Quy tắc chung được định nghĩa một lần rồi tham chiếu.

### 2.2 Mô hình dữ liệu logic (khi có dữ liệu)

**Đối tượng:** [Tên và ý nghĩa]

| Mã SRS / nguồn | Thuộc tính | Kiểu / định dạng / đơn vị  | Ràng buộc / ý nghĩa                                              |
| -------------- | ---------- | -------------------------- | ---------------------------------------------------------------- |
| [Mã và nguồn]  | [Tên]      | [Kiểu logic; miền giá trị] | [Bắt buộc, duy nhất, quan hệ, ý nghĩa giá trị trống nếu áp dụng] |

[Quan hệ giữa đối tượng; trạng thái/vòng đời; quyền truy cập và thời gian lưu giữ theo nguồn nếu liên quan. Dẫn định nghĩa dùng chung thay vì chép lại ở contract. Thiết kế bảng lưu trữ và index chỉ tham chiếu nếu đã có ràng buộc được xác nhận.]

### 2.3 Ràng buộc đã xác nhận

| Mã SRS | Ràng buộc                          | Nguồn / phiên bản                     | Lý do / yêu cầu chịu ảnh hưởng |
| ------ | ---------------------------------- | ------------------------------------- | ------------------------------ |
| [Mã]   | [Điều kiện hệ thống phải tuân thủ] | [Nguồn hoặc quyết định được xác nhận] | [Phạm vi ảnh hưởng]            |

[Đề xuất hoặc giả định chưa xác nhận đặt ở mục 6 và liên kết tại vị trí liên quan, không trộn vào ràng buộc chính thức.]

---

## 3. Yêu cầu phi chức năng (Non-Functional Requirements)

### 3.1 Phạm vi chất lượng

| Nhóm cần xem xét               | Nguồn / SRS liên quan hoặc câu hỏi / lý do không áp dụng              |
| ------------------------------ | --------------------------------------------------------------------- |
| Hiệu suất                      | [Thời gian phản hồi, năng lực xử lý nếu nguồn yêu cầu]                |
| Bảo mật / quyền riêng tư       | [Quyền truy cập, bảo vệ thông tin, kiểm tra đầu vào theo nguồn]       |
| Khả dụng / khôi phục           | [Mức sẵn sàng, mức mất dữ liệu và thời gian khôi phục được chấp nhận] |
| Khả năng mở rộng               | [Mức tải/dữ liệu cần hỗ trợ; không phải chiến lược kiến trúc]         |
| Tương thích / khả năng sử dụng | [Môi trường, thiết bị, khả năng tiếp cận nếu liên quan]               |
| Nhóm khác                      | [Theo nguồn; ghi Không áp dụng khi có căn cứ]                         |

### 3.2 SRS-[mã]: [Tên NFR]

Lặp bảng này cho mỗi NFR áp dụng. Các chỉ số và ngưỡng do nguồn xác nhận; thiếu thì đặt câu hỏi, không lấy số mẫu.

| Trường                 | Nội dung                                                                |
| ---------------------- | ----------------------------------------------------------------------- |
| Nguồn / loại           | [Mã NFR hoặc chính sách/mô tả/phiên bản; nhóm chất lượng]               |
| Yêu cầu / tiêu chí đạt | [Kết quả đúng/sai; chỉ số, đơn vị, ngưỡng nếu là định lượng]            |
| Điều kiện              | [Môi trường, tải, dữ liệu, khoảng đo, điều kiện áp dụng cần thiết]      |
| Cách kiểm tra          | [Cách đo/cách tính hoặc kịch bản đánh giá; công cụ chỉ khi đã xác nhận] |
| Liên quan              | [Mã chức năng, giao diện hoặc dữ liệu chịu ràng buộc]                   |
| Xác nhận / câu hỏi     | [Căn cứ hoặc câu hỏi mục 6]                                             |

**Minh họa giả lập, không phải yêu cầu dự án:** Nếu chính sách nguồn cấm người không được phân quyền đọc báo cáo, tiêu chí kiểm tra là yêu cầu đọc bị từ chối và dữ liệu báo cáo không được cung cấp. Đây là kết quả đúng/sai, không cần thêm giới hạn thời gian tùy ý.

---

## 4. Giao diện hệ thống (System Interface)

### 4.1 Danh mục giao diện

Contract là thỏa thuận về thông tin trao đổi và kết quả giữa các bên. Xét giao diện người dùng, phần cứng, phần mềm và truyền thông theo phạm vi; loại không áp dụng ghi lý do. Hành vi người dùng dẫn về mục 2, chi tiết thiết kế dẫn tài liệu đã có.

| Mã SRS / nguồn | Loại / giao diện | Bên gửi / nhận                    | Mục đích           | Định nghĩa chính                              |
| -------------- | ---------------- | --------------------------------- | ------------------ | --------------------------------------------- |
| [Mã và nguồn]  | [Tên / loại]     | [Vai trò, hệ thống hoặc thiết bị] | [Yêu cầu trao đổi] | [Mục 4.2 hoặc contract có sẵn, phiên bản/mục] |

### 4.2 SRS-[mã]: [Contract của giao diện]

Dùng mã ở danh mục 4.1, không tạo mã khác cho cùng nghĩa vụ. Lặp cho từng giao diện cần đặc tả; nếu contract đã có thì dẫn chính xác phiên bản và phần áp dụng, chỉ ghi phần khác biệt được xác nhận.

| Trường                        | Nội dung                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Nguồn / phiên bản contract    | [Yêu cầu nguồn và tài liệu contract nếu có]                                                                   |
| Bên gửi / nhận và trách nhiệm | [Theo nguồn; nhà cung cấp chỉ khi đã xác nhận]                                                                |
| Thao tác / sự kiện            | [Tên thao tác, thời điểm trao đổi]                                                                            |
| Định danh / giao thức         | [HTTP: method/path; message: tên/định dạng; file: định dạng; thiết bị: kiểu tín hiệu — chỉ điền loại thực tế] |
| Quyền / điều kiện             | [Điều kiện được phép trao đổi]                                                                                |
| Kết quả thành công            | [Kết quả và trạng thái theo contract, gồm HTTP status/headers khi áp dụng; dẫn hành vi mục 2]                 |

#### Dữ liệu vào / ra

| Chiều      | Trường              | Kiểu / định dạng          | Bắt buộc     | Ràng buộc / ý nghĩa / mã dữ liệu              |
| ---------- | ------------------- | ------------------------- | ------------ | --------------------------------------------- |
| [Vào / ra] | [Tên theo contract] | [Kiểu, đơn vị, định dạng] | [Có / không] | [Giới hạn, giá trị trống, tham chiếu mục 2.2] |

Nếu có schema máy đọc được, dẫn schema đã xác nhận; ví dụ dữ liệu phải hợp lệ theo schema đó và ghi rõ là minh họa. Không áp đặt một response envelope chung cho mọi giao diện.

#### Mã lỗi và kết quả không thành công

| Điều kiện lỗi    | Mã lỗi / HTTP status nếu áp dụng | Thông tin trả về             | Ảnh hưởng dữ liệu / trạng thái                    | Nguồn / SRS  |
| ---------------- | -------------------------------- | ---------------------------- | ------------------------------------------------- | ------------ |
| [Lỗi theo nguồn] | [Theo contract / Chưa xác định]  | [Nội dung bên gọi nhận được] | [Giữ nguyên, thay đổi hoặc phục hồi theo quy tắc] | [Tham chiếu] |

[Khi liên quan: ghi quy tắc đã xác nhận cho gián đoạn, timeout, gửi lại, yêu cầu trùng hoặc sai thứ tự; dẫn câu hỏi nếu chưa rõ. Không tự đặt số lần gửi lại hoặc thời gian chờ.]

---

## 5. Ma trận truy xuất yêu cầu (Requirements Traceability Matrix)

| Nguồn / phiên bản / mục                         | SRS tương ứng            | Loại                                              | Tình trạng bao phủ                                           | Câu hỏi / lý do / tham chiếu kiểm thử nếu có |
| ----------------------------------------------- | ------------------------ | ------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| [FR, NFR, US/AC, UC/luồng hoặc nguồn trực tiếp] | [Mã SRS, một hoặc nhiều] | [Hành vi / dữ liệu / NFR / giao diện / ràng buộc] | [Đầy đủ / Một phần / Chưa xử lý / Ngoài phạm vi đã xác nhận] | [Chi tiết]                                   |

Đối chiếu hai chiều theo checklist 1.1–1.3. Với nguồn chưa có đặc tả, ghi "Chưa xử lý" thay vì bỏ hàng. Với SRS chưa có nguồn, ghi câu hỏi và giữ Draft thay vì tạo mã FR giả. Yêu cầu suy ra dẫn cả nguồn và căn cứ xác nhận.

---

## 6. Câu hỏi, quyết định và lịch sử thay đổi

### 6.1 Câu hỏi và giả định còn mở

| Mã câu hỏi | Vị trí / SRS | Điểm chưa rõ / nguồn mâu thuẫn       | Tác động       | Người / vai trò cần trả lời | Kết quả xác nhận                            |
| ---------- | ------------ | ------------------------------------ | -------------- | --------------------------- | ------------------------------------------- |
| [Mã]       | [Liên kết]   | [Câu hỏi hoặc giả định được yêu cầu] | [Phần bị chặn] | [Đã biết / cần chỉ định]    | [Chưa xác nhận / câu trả lời và bằng chứng] |

### 6.2 Quyết định có ảnh hưởng đến yêu cầu (khi có)

| Quyết định / ADR tham chiếu | Nguồn / người / ngày xác nhận | Ràng buộc được chấp nhận | SRS chịu ảnh hưởng |
| --------------------------- | ----------------------------- | ------------------------ | ------------------ |
| [Tài liệu và phiên bản]     | [Bằng chứng hoặc câu hỏi]     | [Yêu cầu phải tuân thủ]  | [Mã]               |

Dẫn phân tích lựa chọn kiến trúc sang ADD/ADR riêng; SRS ghi tác động đã được xác nhận, không tự tạo quyết định thay đội.

### 6.3 Lịch sử thay đổi

| Phiên bản   | Nguồn thay đổi | Mã giữ / thêm / ngừng dùng / tách / gộp | Tác động và việc ngoài phạm vi                       | Phê duyệt phiên bản                   |
| ----------- | -------------- | --------------------------------------- | ---------------------------------------------------- | ------------------------------------- |
| [Phiên bản] | [Nguồn]        | [Ánh xạ mã cũ → mới nếu có]             | [Contract, dữ liệu, NFR, RTM, ca kiểm thử liên quan] | [Chưa có / bằng chứng đúng phiên bản] |

---

## 7. Phụ lục

### 7.1 Từ điển dữ liệu (Data Dictionary)

[Dẫn định nghĩa chính ở mục 2.2 hoặc tài liệu đã xác nhận. Chỉ bổ sung giải thích chưa có; tránh chép lại bảng dữ liệu.]

### 7.2 Tài liệu tham khảo

| Tài liệu    | Phiên bản / mục | Vị trí                  | Mục đích                           |
| ----------- | --------------- | ----------------------- | ---------------------------------- |
| [Tên nguồn] | [Phiên bản/mục] | [Đường dẫn đã kiểm tra] | [Yêu cầu hoặc ràng buộc được dùng] |

### 7.3 Kết quả kiểm tra tài liệu

Ghi kết quả từng mục theo checklist đầy đủ, không điền sẵn Đạt. Nếu chỉ rà soát một phần, nêu giới hạn.

| Mã checklist | Vị trí / SRS | Kết quả                                              | Căn cứ / hành động      |
| ------------ | ------------ | ---------------------------------------------------- | ----------------------- |
| [Mã mục]     | [Vị trí]     | [Đạt / Cần cải thiện / Cần xác nhận / Không áp dụng] | [Bằng chứng hoặc lý do] |

**Kết luận:** [Trạng thái theo checklist, phạm vi kết luận và câu hỏi cần giải quyết; đây không phải kết quả thực thi kiểm thử].
