# US-CRM-001: Hiển thị và quản lý khách hàng theo cột Kanban

## Câu chuyện người dùng (User Story)

**As a** nhân viên kinh doanh đã đăng nhập hệ thống CRM và được phân công quản lý danh mục khách hàng
**I want to** xem danh sách khách hàng được phân loại theo các cột Kanban tương ứng với trạng thái, và kéo thả khách hàng giữa các cột để cập nhật trạng thái
**So that** theo dõi trực quan pipeline bán hàng và cập nhật trạng thái khách hàng một cách nhanh chóng, chính xác

---

## Các trạng thái khách hàng (CRM Pipeline — 7 cột Kanban)

| # | Trạng thái | Màu gợi ý | Mô tả |
|---|---|---|---|
| 1 | Tiềm năng (Lead) | Xám nhạt `#6B7280` | Khách hàng mới, chưa qua đánh giá |
| 2 | Đã liên hệ (Contacted) | Xanh dương `#3B82F6` | Đã tiếp cận, đang trong quá trình tìm hiểu |
| 3 | Định tính (Qualified) | Tím `#8B5CF6` | Đã xác nhận nhu cầu, có tiềm năng chuyển đổi |
| 4 | Gửi báo giá (Proposal) | Cam `#F97316` | Đã gửi đề xuất / báo giá |
| 5 | Đàm phán (Negotiating) | Vàng `#EAB308` | Đang thương lượng hợp đồng / giá cả |
| 6 | Ký hợp đồng (Won) | Xanh lá `#22C55E` | Đã chốt deal — trạng thái kết thúc thành công |
| 7 | Mất khách (Lost) | Đỏ `#EF4444` | Không thành công — trạng thái kết thúc thất bại |

> **Lưu ý nghiệp vụ:** Cột 6 (Ký hợp đồng) và cột 7 (Mất khách) là trạng thái kết thúc — khi kéo thả vào/rakhỏi các cột này cần áp dụng quy tắc riêng (xem AC 02, AC 03).

---

## INVEST Self-check

| Tiêu chí | Câu hỏi tự kiểm tra | Trạng thái |
|:---|:---|:---:|
| **I**ndependent | Story không phụ thuộc story khác — chỉ cần có module CRUD khách hàng (đã có sẵn hoặc song song) | ✅ Đạt |
| **N**egotiable | Không có chi tiết kỹ thuật cứng nhắc; các quy tắc chuyển trạng thái có thể thảo luận với đội | ✅ Đạt |
| **V**aluable | Trực quan hóa pipeline, giảm thao tác cập nhật trạng thái, nâng cao hiệu suất bán hàng | ✅ Đạt |
| **E**stimable | UI Kanban board, drag-drop event, API cập nhật trạng thái — đủ để ước lượng | ✅ Đạt |
| **S**mall | Có thể chia thành 2 story (Hiển thị vs Kéo-thả) nếu Sprint ngắn; gộp chung vẫn đủ nhỏ cho 1 Sprint | ⚠️ Cần theo dõi |
| **T**estable | 5 tiêu chí nghiệp thu bao phủ luồng thường, luồng biên, luồng lỗi | ✅ Đạt |

---

## Tiêu chí nghiệp thu (Acceptance Criteria)

### AC-01: Kéo thả chuyển trạng thái thành công (Happy Path)

- **Given** người dùng đang ở trang danh sách khách hàng dạng Kanban, khách hàng "Công ty ABC" đang ở cột **Đã liên hệ**
- **When** người dùng kéo thẻ khách hàng "Công ty ABC" sang cột **Định tính**
- **Then** hệ thống cập nhật trạng thái khách hàng thành "Định tính", hiển thị thông báo thành công, và khách hàng xuất hiện trong cột mới
- **And** thời điểm chuyển trạng thái được ghi nhận (timestamp)

---

### AC-02: Chuyển sang cột "Mất khách" yêu cầu nhập lý do (Luồng biên — Validation nghiệp vụ)

- **Given** người dùng đang kéo thẻ khách hàng "Công ty XYZ" từ cột **Đàm phán** sang cột **Mất khách**
- **When** người dùng thả thẻ tại cột "Mất khách"
- **Then** hệ thống hiển thị popup yêu cầu nhập **Lý do mất khách** (bắt buộc)
- **And** khách hàng chỉ được chuyển sang cột "Mất khách" khi lý do đã được ghi nhận
- **And** nếu người dùng hủy popup, khách hàng quay về cột ban đầu

---

### AC-03: Chuyển khách hàng đã ký hợp đồng sang cột khác cần cảnh báo (Luồng biên — Phục hồi trạng thái)

- **Given** khách hàng "Công ty DEF" đang ở cột **Ký hợp đồng**
- **When** người dùng kéo thẻ "Công ty DEF" ra khỏi cột "Ký hợp đồng" (sang bất kỳ cột nào)
- **Then** hệ thống hiển thị cảnh báo xác nhận: "Khách hàng này đã ký hợp đồng. Bạn có chắc muốn chuyển trạng thái không?"
- **And** chỉ cập nhật trạng thái khi người dùng xác nhận đồng ý
- **And** nếu người dùng hủy, khách hàng quay về cột "Ký hợp đồng"

---

### AC-04: Mất kết nối khi đang kéo thả (Luồng lỗi)

- **Given** người dùng đang thực hiện thao tác kéo thả khách hàng
- **When** kết nối mạng bị gián đoạn hoặc server không phản hồi trong thời gian cho phép (timeout)
- **Then** hệ thống hiển thị thông báo lỗi kết nối, giữ nguyên vị trí khách hàng ở cột ban đầu và cho phép thử lại
- **And** không có dữ liệu trạng thái bị mất hoặc ghi nhận sai

---

### AC-05: Người dùng không có quyền cập nhật trạng thái khách hàng không thuộc phân công (Luồng lỗi — Quyền truy cập)

- **Given** khách hàng "Công ty GHI" được phân công cho nhân viên B, người dùng hiện tại là nhân viên A không phải chủ sở hữu
- **When** người dùng cố gắng kéo thả thẻ "Công ty GHI" sang cột khác
- **Then** hệ thống từ chối thao tác, hiển thị thông báo "Bạn không có quyền cập nhật trạng thái khách hàng này" và giữ nguyên vị trí thẻ

---

## Definition of Done (DoD)

```markdown
- [ ] Giao diện Kanban hiển thị đúng 7 cột với số lượng khách hàng mỗi cột
- [ ] Thao tác kéo-thả mượt, có animation feedback khi hover/drag
- [ ] API cập nhật trạng thái trả về thành công và dữ liệu được persist
- [ ] Popup nhập lý do hiển thị khi kéo vào cột "Mất khách"
- [ ] Cảnh báo xác nhận hiển thị khi kéo khỏi cột "Ký hợp đồng"
- [ ] Toast notification hiển thị thành công / lỗi sau mỗi thao tác
- [ ] Xử lý lỗi mạng: hiển thị thông báo và rollback vị trí thẻ
- [ ] Kiểm tra quyền: user không sở hữu khách hàng không thể kéo-thả
- [ ] Responsive trên Desktop (1024px+) — Kanban scroll ngang trên màn nhỏ
- [ ] Unit test cho hàm xử lý validation nghiệp vụ (chuyển Mất khách, chuyển Ký hợp đồng)
- [ ] Đã test trên Chrome, Safari, Firefox
```

---

## Ghi chú (Notes)

### Giả định (Assumptions)

- Người dùng đã đăng nhập hệ thống CRM trước khi sử dụng tính năng.
- Module CRUD khách hàng (tạo, xem, sửa thông tin) đã tồn tại; Kanban chỉ bổ sung giao diện hiển thị và thao tác kéo-thả.
- Khi tạo mới, khách hàng mặc định vào cột **Tiềm năng** nếu chưa qua đánh giá.

### Câu hỏi làm rõ (Open Questions)

| # | Câu hỏi | Ảnh hưởng |
|---|---|---|
| 1 | Trạng thái mặc định khi tạo mới khách hàng là cột nào? | Mặc định đề xuất: **Tiềm năng** |
| 2 | Nhân viên kinh doanh có thể kéo thả khách hàng không thuộc phân công của mình không? | Đề xuất: **Không** — chỉ chủ sở hữu hoặc quản lý |
| 3 | Lý do mất khách nên là **danh sách chọn** hay **nhập tự do**? | Đề xuất: **Cho phép cả hai** — chọn từ danh sách + trường "Khác" |
| 4 | 7 trạng thái trên đã phù hợp với pipeline của bạn chưa? | Vui lòng xác nhận hoặc điều chỉnh |

### Sự phụ thuộc (Dependencies)

- API cập nhật trạng thái khách hàng (`PUT /api/customers/{id}/status`)
- Module Authentication / Authorization (kiểm tra quyền sở hữu khách hàng)
