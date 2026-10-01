# Ví dụ mẫu về Câu chuyện người dùng và Tiêu chí nghiệm thu cho ProjectOS (Quản lý Dự án)

> [!NOTE]
> Bốn ví dụ dưới đây là bài tập **giả lập** trong bối cảnh ProjectOS. Mã BT, tên, số liệu và quy tắc chỉ là nguồn của bài tập, không phải yêu cầu khách hàng hay bằng chứng kiểm thử.

Ví dụ 1 dẫn đến biểu mẫu đầy đủ. Ví dụ 2–4 là trích đoạn US + AC để luyện viết kịch bản; khi bàn giao tài liệu, điền thêm metadata, sáu tiêu chí INVEST và câu hỏi theo [biểu mẫu trống](../templates/user-story-template-blank.md), rồi áp dụng [checklist chất lượng](../checklists/quality-checklist.md). Các trích đoạn chưa có đánh giá INVEST và thông tin bàn giao đầy đủ nên vẫn là **Draft**.

---

## Ví dụ 1: Tạo dự án mới

Đọc [US-PROJ-001 trong biểu mẫu đã điền](../templates/user-story-template-example.md): nguồn BT-01, bốn AC về tạo thành công, hai ngày trùng nhau, ngày kết thúc không hợp lệ và thiếu quyền. Đây là nguồn duy nhất của ví dụ này, kèm đánh giá INVEST và lý do giữ Draft.

---

## Ví dụ 2: Giao công việc (Task Assignment)

### Câu chuyện người dùng US-TASK-001: Giao công việc cho thành viên trong dự án

**Nguồn giả lập BT-02:** Quản lý có quyền phân công được giao một công việc chưa có người phụ trách cho thành viên cùng dự án. Mỗi thành viên nhận tối đa 10 công việc chưa hoàn thành trong dự án đó, tính cả việc sắp giao. Yêu cầu không hợp lệ bị từ chối và giữ nguyên phân công. Tạo công việc, đổi thời hạn và gửi lời nhắc nằm ngoài phạm vi.

**As a** quản lý có quyền phân công trong dự án

**I want to** giao công việc đã có cho một thành viên đủ điều kiện

**So that** nhóm biết ai chịu trách nhiệm và tránh phân công vượt khả năng tiếp nhận đã quy định

#### US-TASK-001/AC-01: Giao công việc thành công — Happy path

- **Given** quản lý có quyền phân công, T-01 chưa hoàn thành và chưa có người phụ trách; An là thành viên cùng dự án đang có 8 công việc chưa hoàn thành.
- **When** quản lý gửi yêu cầu giao T-01 cho An.
- **Then** An trở thành người phụ trách T-01 và có tổng cộng 9 công việc chưa hoàn thành trong dự án.

#### US-TASK-001/AC-02: Chạm giới hạn tiếp nhận — Edge case

- **Given** quản lý có quyền phân công, T-01 chưa hoàn thành và chưa có người phụ trách; An là thành viên cùng dự án đang có 9 công việc chưa hoàn thành.
- **When** quản lý gửi yêu cầu giao T-01 cho An.
- **Then** T-01 được giao cho An, nâng tổng số công việc chưa hoàn thành của An trong dự án lên đúng 10.

#### US-TASK-001/AC-03: Vượt giới hạn tiếp nhận — Error/Negative

- **Given** quản lý có quyền phân công, T-01 chưa hoàn thành và chưa có người phụ trách; An là thành viên cùng dự án đã có 10 công việc chưa hoàn thành.
- **When** quản lý gửi yêu cầu giao thêm T-01 cho An.
- **Then** yêu cầu bị từ chối vì sẽ vượt giới hạn 10 công việc chưa hoàn thành.
- **And** T-01 vẫn chưa có người phụ trách; số công việc của An giữ nguyên.

#### US-TASK-001/AC-04: Người nhận ngoài dự án — Validation/Error

- **Given** quản lý có quyền phân công, T-01 chưa có người phụ trách và Bình không thuộc dự án của T-01.
- **When** quản lý gửi yêu cầu giao T-01 cho Bình.
- **Then** yêu cầu bị từ chối vì Bình không phải thành viên dự án.
- **And** T-01 vẫn chưa có người phụ trách.

#### US-TASK-001/AC-05: Người giao thiếu quyền — Error/Negative

- **Given** người yêu cầu không có quyền phân công, dù T-01 và người nhận đáp ứng các điều kiện còn lại.
- **When** người đó gửi yêu cầu giao T-01.
- **Then** yêu cầu bị từ chối vì thiếu quyền phân công và T-01 vẫn chưa có người phụ trách.

#### US-TASK-001/AC-06: Công việc đã có người phụ trách — Validation/Error

- **Given** quản lý có quyền phân công, T-01 đã giao cho Bình và An là thành viên cùng dự án có 8 công việc chưa hoàn thành.
- **When** quản lý gửi yêu cầu giao T-01 cho An.
- **Then** yêu cầu bị từ chối vì T-01 đã có người phụ trách.
- **And** Bình vẫn phụ trách T-01; số công việc của An giữ nguyên.

---

## Ví dụ 3: Cập nhật tiến độ công việc

### Câu chuyện người dùng US-PROGRESS-001: Cập nhật phần trăm tiến độ công việc

**Nguồn giả lập BT-03:** Người phụ trách được cập nhật tiến độ từ 0% đến 100%, kể cả hai đầu mút. Giảm tiến độ cần kèm lý do và lưu lý do cùng lần cập nhật được chấp nhận. Đạt 100% thì công việc hoàn thành và không nhận cập nhật tiếp; mở lại công việc là phạm vi khác. Mọi yêu cầu bị từ chối đều nêu lý do và giữ nguyên tiến độ, trạng thái cũ.

**As a** thành viên phụ trách công việc

**I want to** cập nhật phần trăm tiến độ phản ánh thực trạng

**So that** quản lý có thông tin để xác định việc cần hỗ trợ

#### US-PROGRESS-001/AC-01: Tăng tiến độ — Happy path

- **Given** An là người phụ trách công việc chưa hoàn thành, hiện có tiến độ 40%.
- **When** An gửi yêu cầu cập nhật tiến độ lên 80%.
- **Then** tiến độ được ghi nhận là 80% và công việc vẫn chưa hoàn thành.

#### US-PROGRESS-001/AC-02: Giảm về mức thấp nhất kèm lý do — Edge case

- **Given** An phụ trách công việc chưa hoàn thành, tiến độ 60%, và chuẩn bị lý do "Cần làm lại toàn bộ phần đã thực hiện".
- **When** An gửi yêu cầu cập nhật về 0% kèm lý do đó.
- **Then** tiến độ được ghi nhận là 0%, lý do được lưu cùng lần cập nhật và công việc vẫn chưa hoàn thành.

#### US-PROGRESS-001/AC-03: Giảm tiến độ thiếu lý do — Validation/Error

- **Given** An phụ trách công việc chưa hoàn thành, tiến độ 60%.
- **When** An gửi yêu cầu cập nhật về 30% mà không kèm lý do.
- **Then** yêu cầu bị từ chối vì thiếu lý do giảm tiến độ.
- **And** tiến độ giữ ở 60% và công việc vẫn chưa hoàn thành.

#### US-PROGRESS-001/AC-04: Đạt mức hoàn thành — Edge case

- **Given** An phụ trách công việc chưa hoàn thành, tiến độ 80%.
- **When** An gửi yêu cầu cập nhật lên 100%.
- **Then** tiến độ được ghi nhận là 100% và công việc được xác định là đã hoàn thành.

#### US-PROGRESS-001/AC-05: Cập nhật công việc đã hoàn thành — Error/Negative

- **Given** An phụ trách công việc đã hoàn thành với tiến độ 100%.
- **When** An gửi yêu cầu cập nhật về 50% kèm lý do cần làm lại.
- **Then** yêu cầu bị từ chối vì công việc đã hoàn thành.
- **And** tiến độ 100% và trạng thái hoàn thành được giữ nguyên.

#### US-PROGRESS-001/AC-06: Vượt mức tối đa — Validation/Error

- **Given** An phụ trách công việc chưa hoàn thành, tiến độ 80%.
- **When** An gửi yêu cầu cập nhật lên 101%.
- **Then** yêu cầu bị từ chối vì tiến độ vượt 100%; tiến độ 80% và trạng thái chưa hoàn thành được giữ nguyên.

#### US-PROGRESS-001/AC-07: Thấp hơn mức tối thiểu — Validation/Error

- **Given** An phụ trách công việc chưa hoàn thành, tiến độ 60%.
- **When** An gửi yêu cầu cập nhật về -1% kèm lý do cần làm lại.
- **Then** yêu cầu bị từ chối vì tiến độ thấp hơn 0%; tiến độ 60% và trạng thái chưa hoàn thành được giữ nguyên.

#### US-PROGRESS-001/AC-08: Người cập nhật không phụ trách công việc — Error/Negative

- **Given** Bình không phụ trách công việc chưa hoàn thành có tiến độ 40%.
- **When** Bình gửi yêu cầu cập nhật lên 80%.
- **Then** yêu cầu bị từ chối vì Bình không phải người phụ trách; tiến độ 40% và trạng thái chưa hoàn thành được giữ nguyên.

---

## Ví dụ 4: Báo cáo tiến độ dự án

### Câu chuyện người dùng US-REPORT-001: Xem mức hoàn thành công việc của dự án

**Nguồn giả lập BT-04:** Người có quyền xem báo cáo dự án nhận tổng số công việc, số đã hoàn thành và tỷ lệ hoàn thành = số đã hoàn thành / tổng số × 100%. Khi tổng bằng 0, báo chưa có công việc thay vì tính tỷ lệ. Khi không lấy được dữ liệu, báo chưa thể cung cấp báo cáo, không thay bằng số 0. Người thiếu quyền bị từ chối và không nhận dữ liệu dự án. Đánh giá rủi ro và xuất báo cáo nằm ngoài phạm vi.

**As a** quản lý có quyền xem báo cáo dự án

**I want to** biết số lượng và tỷ lệ công việc đã hoàn thành

**So that** tôi xác định mức công việc còn lại để trao đổi kế hoạch với nhóm

#### US-REPORT-001/AC-01: Báo cáo có dữ liệu — Happy path

- **Given** quản lý có quyền xem báo cáo và dự án có 4 công việc, trong đó 1 việc đã hoàn thành.
- **When** quản lý yêu cầu báo cáo của dự án.
- **Then** báo cáo cho biết tổng 4 công việc, 1 việc đã hoàn thành và tỷ lệ hoàn thành 25%.

#### US-REPORT-001/AC-02: Dự án chưa có công việc — Edge case

- **Given** quản lý có quyền xem báo cáo và dự án có 0 công việc.
- **When** quản lý yêu cầu báo cáo của dự án.
- **Then** báo cáo nêu tổng 0 công việc, 0 việc đã hoàn thành và dự án chưa có công việc; không đưa ra tỷ lệ hoàn thành.

#### US-REPORT-001/AC-03: Không lấy được dữ liệu — Error/Negative

- **Given** quản lý có quyền xem báo cáo nhưng dữ liệu công việc của dự án hiện không thể lấy được.
- **When** quản lý yêu cầu báo cáo của dự án.
- **Then** quản lý được thông báo chưa thể cung cấp báo cáo vì không lấy được dữ liệu.
- **And** không cung cấp các số lượng hoặc tỷ lệ giả định bằng 0; dữ liệu công việc của dự án không bị thay đổi.

#### US-REPORT-001/AC-04: Thiếu quyền xem báo cáo — Error/Negative

- **Given** người yêu cầu không có quyền xem báo cáo dự án.
- **When** người đó yêu cầu báo cáo của dự án.
- **Then** yêu cầu bị từ chối vì thiếu quyền; dữ liệu báo cáo không được cung cấp và dữ liệu công việc không bị thay đổi.

---

## Gợi ý luyện tập

- Đổi ngưỡng trong BT-02 rồi cập nhật cả kịch bản đạt biên và vượt biên; kiểm tra phép đếm trước và sau.
- Đối chiếu AC-02 và AC-03 của BT-03: mỗi kịch bản chỉ có một yêu cầu, khác nhau ở dữ liệu lý do đã chuẩn bị.
- Giải thích vì sao "chưa có công việc" và "không lấy được dữ liệu" trong BT-04 phải có kết quả khác nhau.
- Để dùng trong dự án thật, thay nguồn giả lập bằng nguồn đã xác nhận và đánh giá toàn bộ checklist; các ví dụ không xác nhận ước lượng, DoD hoặc phê duyệt thay đội.
