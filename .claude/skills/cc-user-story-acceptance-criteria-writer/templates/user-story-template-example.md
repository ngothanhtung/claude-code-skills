# Biểu mẫu Câu chuyện người dùng & Tiêu chí Nghiệm thu — ProjectOS

Đây là **bài tập giả lập**, không phải yêu cầu đã được khách hàng phê duyệt hay bằng chứng sản phẩm đã chạy đúng. Dùng [biểu mẫu trống](./user-story-template-blank.md) cho dữ liệu thực tế; áp dụng [checklist chất lượng](../checklists/quality-checklist.md) để đánh giá.

**Nguồn giả lập BT-01:** Quản lý có quyền tạo dự án với tên và khoảng thời gian dự kiến để nhóm có không gian làm việc chung. Ngày kết thúc được trùng ngày bắt đầu nhưng không được sớm hơn. Người không có quyền tạo bị từ chối. Mời thành viên và phân công công việc nằm ngoài story này. Các giá trị ngày và tên dưới đây chỉ minh họa các quy tắc đó.

---

## Câu chuyện người dùng US-PROJ-001: Tạo dự án với khoảng thời gian dự kiến

**As a** quản lý dự án có quyền tạo dự án trên ProjectOS

**I want to** tạo dự án với tên và khoảng thời gian dự kiến

**So that** nhóm có không gian làm việc chung và biết thời gian dự kiến của dự án

---

### Siêu dữ liệu (Metadata)

| Trường                            | Giá trị                                           | Căn cứ / Ghi chú                                             |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| **Epic / Feature**                | Quản lý dự án                                     | Bài tập giả lập                                              |
| **Nguồn / FR**                    | BT-01                                             | Mã bài tập do tài liệu này đặt, không phải FR của dự án thật |
| **Phạm vi**                       | Tạo dự án, kiểm tra khoảng thời gian và quyền tạo | Không gồm mời thành viên hoặc giao việc                      |
| **Độ ưu tiên (MoSCoW)**           | Cần xác nhận                                      | Chưa có quyết định từ người phụ trách sản phẩm               |
| **Ước lượng (Estimate)**          | Cần xác nhận                                      | Chưa có đánh giá của đội thực hiện                           |
| **Phiên bản**                     | Bản minh họa 1                                    |                                                              |
| **Trạng thái (Status)**           | Draft                                             | Còn các mục cần xác nhận                                     |
| **Người phê duyệt (Approved By)** | Chưa có                                           | Không có phê duyệt thật                                      |
| **Ngày phê duyệt**                | Chưa có                                           |                                                              |

---

### Tự đánh giá theo tiêu chí INVEST

Đây là đánh giá nội dung bài tập, không phải xác nhận của một đội dự án thật.

| Tiêu chí            | Kết quả      | Căn cứ / Hướng xử lý                                          |
| ------------------- | ------------ | ------------------------------------------------------------- |
| **I — Independent** | Cần xác nhận | Cần biết tài khoản và quyền tạo đã tồn tại chưa               |
| **N — Negotiable**  | Đạt          | Nêu kết quả và quy tắc, để mở cách thực hiện                  |
| **V — Valuable**    | Đạt          | Nhóm có không gian làm việc và khoảng thời gian dự kiến       |
| **E — Estimable**   | Cần xác nhận | Đội cần đánh giá thông tin và phụ thuộc                       |
| **S — Small**       | Cần xác nhận | Một mục tiêu nghiệp vụ, nhưng chưa có đánh giá quy mô của đội |
| **T — Testable**    | Đạt          | Có kết quả quan sát được cho các quy tắc giả lập              |

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

Mọi AC dưới đây thuộc US-PROJ-001. Áp dụng cấu trúc và độ bao phủ Q04–Q10 trong checklist; ngày cụ thể dùng để minh họa ranh giới, không tạo yêu cầu về thời gian phản hồi.

#### US-PROJ-001/AC-01: Tạo dự án thành công — Happy path

- **Given** quản lý có quyền tạo dự án và chuẩn bị tên "Chương trình mùa hè", ngày bắt đầu 01/07/2026, ngày kết thúc 30/09/2026.
- **When** quản lý gửi yêu cầu tạo dự án với thông tin đó.
- **Then** dự án được tạo với đúng tên và khoảng thời gian đã cung cấp.
- **And** quản lý nhận được xác nhận tạo thành công và có thể xem thông tin dự án.

#### US-PROJ-001/AC-02: Hai ngày trùng nhau — Edge case

- **Given** quản lý có quyền tạo dự án và chuẩn bị dự án "Ngày hội nhóm" bắt đầu và kết thúc cùng ngày 01/07/2026.
- **When** quản lý gửi yêu cầu tạo dự án với thông tin đó.
- **Then** dự án được tạo với ngày bắt đầu và ngày kết thúc đều là 01/07/2026.

#### US-PROJ-001/AC-03: Ngày kết thúc không hợp lệ — Validation/Error

- **Given** quản lý có quyền tạo dự án và chuẩn bị dự án "Chương trình mùa hè" bắt đầu 30/09/2026, kết thúc 01/07/2026.
- **When** quản lý gửi yêu cầu tạo dự án với thông tin đó.
- **Then** yêu cầu bị từ chối với lý do ngày kết thúc sớm hơn ngày bắt đầu.
- **And** dự án mới không được tạo.

#### US-PROJ-001/AC-04: Không có quyền tạo dự án — Error/Negative

- **Given** thành viên không có quyền tạo dự án, dù tên và khoảng thời gian dự kiến đều hợp lệ.
- **When** thành viên gửi yêu cầu tạo dự án.
- **Then** yêu cầu bị từ chối với lý do thiếu quyền tạo dự án.
- **And** dự án mới không được tạo.

### Kết quả kiểm tra tài liệu

| Mã mục  | Kết quả minh họa  | Căn cứ / Việc cần làm rõ                                                                         |
| ------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| Q01–Q10 | Đạt trong bài tập | Các AC thuộc cùng mục tiêu và bao phủ quy tắc giả lập; không coi quy tắc giả lập là yêu cầu thật |
| Q11     | Cần xác nhận      | I, E, S chờ đội thực hiện đánh giá                                                               |
| Q12     | Không áp dụng     | Không phân rã story trong ví dụ này                                                              |
| Q13     | Cần xác nhận      | Chưa có ưu tiên và ước lượng; việc chưa phê duyệt được ghi đúng là "Chưa có"                     |
| Q14     | Đạt trong bài tập | BT-01 ánh xạ đến US-PROJ-001 và các AC-01 đến AC-04                                              |
| Q15     | Đạt               | Giữ Draft và nêu các câu hỏi cần xác nhận                                                        |

**Kết luận: Draft.** Nội dung minh họa có thể dùng để thảo luận; chưa tuyên bố sẵn sàng đưa vào đợt phát triển. Đây là kiểm tra tài liệu, không phải kết quả chạy thử tính năng.

---

### Ghi chú (Notes)

| Loại                            | Nội dung                                                                                                       |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Sự phụ thuộc (Dependencies)** | Cần đội xác nhận tài khoản và quyền tạo đã có hay còn việc phải làm trước                                      |
| **Giả định (Assumptions)**      | Các quy tắc BT-01 chỉ dùng cho bài tập; cần xác nhận lại nếu áp dụng cho sản phẩm                              |
| **Câu hỏi mở (Open Questions)** | Người phụ trách sản phẩm: mức ưu tiên? Đội thực hiện: phạm vi đã đủ để ước lượng và vừa một đợt làm việc chưa? |
| **Definition of Done (DoD)**    | Chưa được cung cấp; tham chiếu thỏa thuận của đội khi có                                                       |
| **Lịch sử thay đổi**            | Ví dụ chưa có phiên bản được phê duyệt                                                                         |

---

### Cách dùng ví dụ

Khi luyện tập, đổi bối cảnh và quy tắc nguồn rồi viết lại AC tương ứng. Đối chiếu checklist thay vì sao chép các dòng đánh giá ở trên; không lấy ưu tiên, số liệu, trạng thái hay xác nhận của ví dụ làm dữ liệu dự án.
