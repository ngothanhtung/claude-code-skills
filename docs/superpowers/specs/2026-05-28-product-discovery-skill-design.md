# Product Discovery Skill — Design Specification

## Overview

Skill `cc-pd-writer` giúp BA/PM/PO thu thập và xác nhận 6 thông tin đầu vào bắt buộc cho `cc-prd-writer` một cách có hệ thống, trước khi viết PRD. Discovery tập trung vào **vấn đề và cơ hội** — không phải giải pháp hay thiết kế kỹ thuật.

**Vị trí trong chuỗi công cụ:**

```
cc-pd-writer (Discovery)  →  cc-prd-writer (PRD)  →  cc-use-case-writer / cc-srs-writer
     ↓ "6 inputs"                ↓ FRs
cc-user-story-acceptance-criteria-writer (User Stories + AC)
```

**Quy tắc vàng:** Mô tả **VẤN ĐỀ** và **CƠ HỘI** — không mô tả **GIẢI PHÁP** hay **CƠ CHẾ KỸ THUẬT**.

---

## Phân biệt Discovery và PRD

| | Product Discovery | PRD |
| :--- | :--- | :--- |
| **Mục đích** | Xác định vấn đề có đáng giải quyết không | Đặc tả giải pháp để bàn giao cho đội dev |
| **Viết cho** | BA / PM / PO (nội bộ) | BA / PM / PO / Dev / QA |
| **Nội dung** | Problem, Opportunity, Feasibility, Risk | Feature, Flow, Business Rule, NFR |
| **Câu hỏi** | "Có nên làm không?" | "Làm gì, như thế nào?" |
| **Chi tiết triển khai** | Không — đó là việc của SRS | Không — đó là việc của Dev |
| **Output** | Discovery Report | Product Requirements Document |

---

## Skill Metadata

**File:** `cc-pd-writer/SKILL.md`
**Chế độ:** A (Viết mới) / B (Refine) / C (Augment)
**Đối tượng:** BA, PM, PO
**Phụ thuộc:** `cc-prd-writer` (output là input của PRD)

---

## Cấu trúc File

```
cc-pd-writer/
  SKILL.md                                          # Main skill
  checklists/
    quality-checklist-discovery.md                   # 15-point quality checklist
  references/
    discovery-template.md                           # Fillable discovery report
    stakeholder-map-template.md                     # Influence/Interest grid
    opportunity-assessment-template.md               # Business value + ROI
```

---

## Hoạt động chính (7 hoạt động)

### 1. Problem Framing
- **Problem Statement:** 1-2 câu mô tả vấn đề. Gồm: vấn đề là gì, ai gặp, hậu quả.
- **Pain Point Mapping:** Mức độ nghiêm trọng (severity), tần suất (frequency), phạm vi ảnh hưởng (scope).
- **Baseline Metrics:** Chỉ số hiện tại nào sẽ được cải thiện? (VD: thời gian xử lý, tỷ lệ lỗi, số lượng khiếu nại)

### 2. Stakeholder Map
- **Stakeholder Identification:** Liệt kê tất cả người/có liên quan.
- **Influence/Interest Grid:** Phân loại theo mức ảnh hưởng (cao/thấp) và mức quan tâm (cao/thấp).
- **Information Needs:** Mỗi stakeholder cần thông tin gì từ discovery?

### 3. Opportunity Assessment
- **Business Value:** Giá trị kinh doanh — định lượng được nếu có (VD: giảm 20% chi phí vận hành).
- **Market Opportunity:** Cơ hội thị trường / khách hàng bị miss.
- **Strategic Alignment:** Phù hợp chiến lược công ty? (VD: tăng retention, mở thị trường mới)
- **Assumptions:** Những giả định nào cần kiểm chứng? Đánh dấu `[GIẢ ĐỊNH: mô tả]`

### 4. Solution Options & Recommendation
- **2-3 phương án giải quyết** — mỗi phương án: tên, mô tả ngắn, lợi ích chính, rủi ro chính, chi phí ước lượng.
- **Trade-off Analysis:** Bảng so sánh theo: Impact, Effort, Time-to-value, Risk.
- **Khuyến nghị:** Phương án được đề xuất + lý do. Nếu chưa đủ thông tin, ghi rõ cần thêm gì.
- **Lưu ý:** Không mô tả chi tiết triển khai kỹ thuật (API, database, UI). Đó là việc của SRS.

### 5. Feasibility & Risk Assessment
- **Technical Feasibility:** Có khả thi về mặt kỹ thuật? (VD: công nghệ hiện có, độ phức tạp)
- **Resource Feasibility:** Đủ nguồn lực? (VD: team size, budget, timeline)
- **Legal/Compliance:** Có rào cản pháp lý? (VD: GDPR, data residency, industry regulation)
- **Top Risks:** 3 rủi ro chính + Mitigation cụ thể.

### 6. Prioritization Matrix
- **Impact/Effort Matrix:** Biểu đồ 2x2 (High/Low Impact × High/Low Effort).
- **Scoring (tùy chọn):** ICE Score = Impact × Confidence × Ease
- **Go/No-Go Recommendation:** Có nên đầu tư thời gian viết PRD không? Ghi rõ lý do.

### 7. PRD Kickoff Package
- **Đóng gói kết quả discovery** thành 6 thông tin bắt buộc cho `cc-prd-writer`:
  1. **Tên tính năng** — tên chính xác
  2. **Mục đích sản phẩm** — vấn đề cần giải quyết, ai gặp
  3. **Đối tượng sử dụng chính** — nhóm người dùng cốt lõi
  4. **Phạm vi trong (In-scope)** — chức năng PHẢI có trong lần phát hành này
  5. **Phạm vi ngoài (Out-of-scope)** — chức năng KHÔNG thuộc phiên bản này
  6. **Ràng buộc nghiệp vụ** — quy định, quy trình, chính sách ảnh hưởng đến thiết kế

---

## Quy trình thực hiện (Workflow)

### Bước 1: Xác định chế độ

- **Chế độ A (Viết mới):** Từ pain point / ý tưởng → sinh Discovery Report hoàn chỉnh.
- **Chế độ B (Refine):** Đã có Discovery sơ bộ → đánh giá và cải thiện theo checklist chất lượng.
- **Chế độ C (Augment):** Đã có vài phần → bổ sung phần còn thiếu.

### Bước 2: Thu thập thông tin đầu vào

**Thu thập tối thiểu 4 thông tin:**
1. **Pain point / Vấn đề ban đầu** — Điều gì khiến người dùng/stakeholder quan tâm?
2. **Stakeholder chính** — Ai đang gặp vấn đề / ai yêu cầu tính năng?
3. **Bối cảnh** — Vấn đề xảy ra trong bối cảnh nào (sản phẩm hiện tại, quy trình hiện tại)?
4. **Mức độ ưu tiên sơ bộ** — Có deadline không? Đây là P0/P1/P2?

**Khi thiếu thông tin:**
- < 2 thông tin: **ĐẶT CÂU HỎI LÀM RÕ** trước. Không tự suy diễn.
- Người dùng yêu cầu viết ngay: Ghi rõ `[GIẢ ĐỊNH: ...]` trong mỗi phần.

### Bước 3: Thu thập thông tin chi tiết qua 7 hoạt động

Theo thứ tự 1 → 7. Có thể song song 4 và 5 (Solution Options và Feasibility).

### Bước 4: Tự đánh giá theo checklist chất lượng

Checklist 15 điểm. Đạt ≥ 13/15 mới được bàn giao.

### Bước 5: Trình bày kết quả

1. Discovery Report hoàn chỉnh
2. Bảng tự kiểm tra chất lượng (✅/⚠️)
3. Xác nhận đầu ra — hỏi người dùng về định dạng (Markdown / Word)
4. Đề nghị chuyển sang `cc-prd-writer` nếu Discovery đạt chất lượng

---

## Anti-Patterns

| ❌ Sai | ✅ Đúng |
| :--- | :--- |
| Nhảy thẳng sang giải pháp mà chưa định nghĩa rõ vấn đề | Viết Problem Statement rõ ràng trước |
| Không xác định stakeholder | Lập Stakeholder Map với Influence/Interest Grid |
| Bỏ qua giả định → discovery dựa trên assumption sai | Đánh dấu `[GIẢ ĐỊNH: ...]` rõ ràng |
| Mô tả solution spec trong discovery | Chỉ nêu phương án, không mô tả triển khai |
| Không có Go/No-Go | Đưa ra recommendation rõ ràng |
| Không có baseline metrics | Xác định chỉ số hiện tại để đo lường success |
| Tự suy diễn khi thiếu thông tin | Đặt câu hỏi hoặc đánh dấu [GIẢ ĐỊNH] |
| Không đóng gói PRD Kickoff Package | Hoàn thành 6 inputs cho cc-prd-writer |

---

## Quality Checklist (15 điểm)

**Scoring:** ✅ pass / ⚠️ partial / ❌ fail. Đạt ≥ 13/15 để bàn giao.

1. **Problem Statement** (/2): Có mô tả vấn đề rõ ràng (ai gặp, vấn đề gì, hậu quả)?
2. **Pain Point Mapping** (/1): Mức độ nghiêm trọng, tần suất, phạm vi được đánh giá?
3. **Baseline Metrics** (/1): Có chỉ số hiện tại để đo lường?
4. **Stakeholder Identification** (/1): Tất cả stakeholder chính được liệt kê?
5. **Influence/Interest Grid** (/1): Phân loại theo ảnh hưởng và quan tâm?
6. **Business Value** (/1): Giá trị kinh doanh được mô tả (định lượng nếu có)?
7. **Assumptions marked** (/1): Các giả định được đánh dấu `[GIẢ ĐỊNH]`?
8. **Solution Options** (/2): Có tối thiểu 2 phương án với trade-off rõ ràng?
9. **Recommendation** (/1): Có khuyến nghị phương án (hoặc ghi rõ cần thêm thông tin)?
10. **Feasibility** (/1): Technical, Resource, Legal được đánh giá?
11. **Risk Assessment** (/1): Top 3 risks có mitigation cụ thể?
12. **Prioritization** (/1): Có Impact/Effort matrix hoặc scoring?
13. **Go/No-Go** (/1): Có kết luận rõ ràng về việc có nên tiếp tục với PRD?
14. **PRD Kickoff Package** (/2): Đủ 6 inputs cho cc-prd-writer?
15. **No tech specs in discovery** (/1): Không có chi tiết triển khai kỹ thuật?

---

## Deliverables

| File | Mục đích | Lines ước tính |
| :--- | :--- | :--- |
| `SKILL.md` | Main skill — workflow + anti-patterns | ~350 |
| `checklists/quality-checklist-discovery.md` | 15-point self-check | ~60 |
| `references/discovery-template.md` | Fillable template | ~120 |
| `references/stakeholder-map-template.md` | Template + example | ~80 |
| `references/opportunity-assessment-template.md` | Template + example | ~80 |
