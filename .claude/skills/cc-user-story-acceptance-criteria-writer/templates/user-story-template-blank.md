# Biểu mẫu Câu chuyện người dùng & Tiêu chí Nghiệm thu

Dùng cho một US; lặp lại cho từng story trong phạm vi. Thay phần trong ngoặc bằng thông tin có căn cứ; giữ `[CẦN XÁC NHẬN: ...]` nếu chưa biết. Các chỗ trống không được tính là yêu cầu hoàn chỉnh.

Đọc [checklist chất lượng](../checklists/quality-checklist.md) để áp dụng quy tắc và trạng thái; xem [ví dụ đã điền](./user-story-template-example.md) khi cần minh họa. Biểu mẫu này chỉ quy định cách trình bày, không tạo thêm điều kiện đạt.

---

## Câu chuyện người dùng US-[MÃ_TÍNH_NĂNG]-[MÃ_SỐ]: [Mục tiêu nghiệp vụ]

**As a** [Vai trò và hoàn cảnh liên quan]

**I want to** [Hành động hoặc kết quả mong muốn]

**So that** [Giá trị người dùng hoặc doanh nghiệp nhận được]

---

### Siêu dữ liệu (Metadata)

| Trường                            | Giá trị                         | Căn cứ / Ghi chú                                                                                        |
| --------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Epic / Feature**                | [Tên tính năng]                 |                                                                                                         |
| **Nguồn / FR**                    | [Mã FR có sẵn hoặc mô tả nguồn] | [Tài liệu, mục hoặc yêu cầu người dùng]                                                                 |
| **Phạm vi**                       | [Bao gồm / Không bao gồm]       | [Quy tắc liên quan]                                                                                     |
| **Độ ưu tiên (MoSCoW)**           | [Theo nguồn / Cần xác nhận]     | Must: cần có; Should: quan trọng; Could: có thể thêm; Won't: ngoài đợt này. Ghi lý do và người xác nhận |
| **Ước lượng (Estimate)**          | [Đội cung cấp / Cần xác nhận]   | [Nguồn đánh giá, không tự đặt số]                                                                       |
| **Phiên bản**                     | [Mã phiên bản hoặc ngày sửa]    |                                                                                                         |
| **Trạng thái (Status)**           | Draft                           | [Kết luận theo checklist]                                                                               |
| **Người phê duyệt (Approved By)** | [Chưa có / Người đã xác nhận]   | [Căn cứ phê duyệt phiên bản này]                                                                        |
| **Ngày phê duyệt**                | [Chưa có / Ngày thực tế]        |                                                                                                         |

---

### Truy vết khi có nhiều yêu cầu hoặc phân rã

Chỉ thêm bảng này một lần cho cả bộ story khi cần; giữ mã theo quy ước nguồn.

| Nguồn / FR / US cũ    | US tương ứng                     | Tình trạng bao phủ                   | Lý do chưa xử lý / Câu hỏi |
| --------------------- | -------------------------------- | ------------------------------------ | -------------------------- |
| [Mã hoặc mô tả nguồn] | [US hiện có hoặc mã mới đề xuất] | [Đã bao phủ / Một phần / Chưa xử lý] | [Nếu có]                   |

---

### Tự đánh giá theo tiêu chí INVEST

Điền theo [hướng dẫn INVEST](../references/invest-criteria.md); mỗi dòng có căn cứ và việc cần làm rõ nếu có.

| Tiêu chí                              | Đạt / Cần cải thiện / Cần xác nhận | Căn cứ / Hướng xử lý |
| ------------------------------------- | ---------------------------------- | -------------------- |
| **I — Independent (Độc lập)**         | [Trạng thái]                       | [Căn cứ]             |
| **N — Negotiable (Có thể thảo luận)** | [Trạng thái]                       | [Căn cứ]             |
| **V — Valuable (Có giá trị)**         | [Trạng thái]                       | [Căn cứ]             |
| **E — Estimable (Ước lượng được)**    | [Trạng thái]                       | [Căn cứ]             |
| **S — Small (Nhỏ gọn)**               | [Trạng thái]                       | [Căn cứ]             |
| **T — Testable (Kiểm tra được)**      | [Trạng thái]                       | [Căn cứ]             |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

Dùng các ô dưới đây theo Q04–Q10 trong checklist. Giữ mã AC cũ khi bổ sung; thêm kịch bản nếu nguồn còn trường hợp bắt buộc chưa bao phủ.

#### [Mã US]/AC-01: [Kịch bản thông thường — Happy path]

- **Given** [Vai trò, trạng thái và dữ liệu ban đầu]
- **When** [Sự kiện kích hoạt]
- **Then** [Kết quả nghiệp vụ quan sát được]
- **And** [Kết quả cùng kịch bản, nếu cần]

#### [Mã US]/AC-02: [Kịch bản biên hoặc xác thực nghiệp vụ — Edge/Validation]

- **Given** [Điều kiện biên hoặc quy tắc đang được kiểm tra]
- **When** [Sự kiện kích hoạt]
- **Then** [Kết quả theo quy tắc đã xác nhận]

#### [Mã US]/AC-03: [Kịch bản xử lý lỗi — Error/Negative]

- **Given** [Điều kiện lỗi liên quan đến story]
- **When** [Sự kiện kích hoạt]
- **Then** [Lý do và kết quả người dùng nhận biết được]
- **And** [Dữ liệu hoặc trạng thái được giữ hay thay đổi theo quy tắc nguồn]

### Kết quả kiểm tra tài liệu

Sau khi áp dụng toàn bộ [checklist](../checklists/quality-checklist.md), ghi các mục chưa đạt hoặc cần xác nhận. Không sao chép một danh sách được đánh dấu đạt sẵn.

| Mã mục / US / AC      | Kết quả                        | Căn cứ            | Hành động / Người cần xác nhận |
| --------------------- | ------------------------------ | ----------------- | ------------------------------ |
| [Qxx và mã liên quan] | [Cần cải thiện / Cần xác nhận] | [Nội dung cụ thể] | [Việc tiếp theo]               |

**Kết luận:** [Draft / Review / Approved theo quy tắc checklist].

---

### Ghi chú (Notes)

| Loại                            | Nội dung                                                          |
| ------------------------------- | ----------------------------------------------------------------- |
| **Sự phụ thuộc (Dependencies)** | [Mã US hoặc điều kiện đã có / Chưa rõ / Không có theo nguồn]      |
| **Giả định (Assumptions)**      | [Giả định được cho phép, chưa xác nhận / Không có]                |
| **Câu hỏi mở (Open Questions)** | [Câu hỏi và người cần trả lời]                                    |
| **Definition of Done (DoD)**    | [Tham chiếu thỏa thuận của đội nếu có / Chưa được cung cấp]       |
| **Lịch sử thay đổi**            | [Nội dung sửa, mã cũ → mới nếu có; phê duyệt của phiên bản trước] |
