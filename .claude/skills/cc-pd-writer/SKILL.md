---
name: cc-pd-writer
description: |
  Hỗ trợ BA/PM/PO khám phá và đánh giá ý tưởng/tính năng trước khi viết PRD — thu thập 6 đầu vào bắt buộc cho cc-prd-writer.
  KÍCH HOẠT khi: người dùng muốn chuyển ý tưởng thành Discovery Report, hoặc muốn refine/bổ sung Discovery đã có.
  KẾ TIẾP: khi đã có đủ 6 inputs → dùng cc-prd-writer.
---

# Product Discovery Writer

## Mục đích

Thu thập và xác nhận **6 thông tin đầu vào bắt buộc** cho `cc-prd-writer` một cách có hệ thống.
Discovery tập trung vào **vấn đề, cơ hội và phương án nghiệp vụ** — mô tả ở mức product direction, giữ chi tiết triển khai cho SRS/PRD.

**Quy tắc vàng:** Mọi nội dung trong Discovery Report chỉ mô tả **VẤN ĐỀ**, **CƠ HỘI** và **PHƯƠNG ÁN NGHIỆP VỤ** ở mức product direction.

## Phân biệt Discovery và PRD

|              | Product Discovery                       | PRD                               |
| :----------- | :-------------------------------------- | :-------------------------------- |
| **Mục đích** | Có nên đầu tư không?                    | Cần làm gì, như thế nào?          |
| **Viết cho** | BA / PM / PO (nội bộ)                   | BA / PM / PO + Dev / QA           |
| **Nội dung** | Problem, Opportunity, Feasibility, Risk | Feature, Flow, Business Rule, NFR |

---

## Quy trình thực hiện (Workflow)

### Bước 1: Xác định chế độ

| Chế độ           | Điều kiện                | Hành vi                                                 |
| :--------------- | :----------------------- | :------------------------------------------------------ |
| **A — Viết mới** | Chưa có Discovery Report | Thu thập input → sinh Report hoàn chỉnh 7 phần          |
| **B — Refine**   | Đã có Discovery sơ bộ    | Đánh giá theo checklist → cải thiện từng phần thiếu/yếu |
| **C — Augment**  | Đã có vài phần           | Xác định phần thiếu → bổ sung chỉ phần đó               |

**Hoàn thành khi:** Xác định rõ chế độ A, B, hoặc C và thông báo cho người dùng.

### Bước 2: Thu thập thông tin đầu vào

**4 thông tin tối thiểu:**

1. **Pain point / Vấn đề ban đầu** — Điều gì khiến người dùng/stakeholder quan tâm?
2. **Stakeholder chính** — Ai đang gặp vấn đề / ai yêu cầu tính năng?
3. **Bối cảnh** — Vấn đề xảy ra trong bối cảnh nào (sản phẩm, quy trình hiện tại)?
4. **Mức độ ưu tiên sơ bộ** — Có deadline không? P0/P1/P2?

**Xử lý khi thiếu thông tin:**

| Số thông tin có | Hành động                                                                                                   |
| :-------------- | :---------------------------------------------------------------------------------------------------------- |
| 0–1             | Đặt câu hỏi làm rõ (tối đa 5 câu/lượt). Ưu tiên: Persona, Goal, Business Value, Context, Scope, Constraints |
| 2–3             | Có thể viết bản nháp nếu người dùng đồng ý — đánh dấu `[GIẢ ĐỊNH: ...]` tại mọi điểm suy diễn               |
| ≥ 4             | Viết Discovery Report hoàn chỉnh                                                                            |

**Hoàn thành khi:** Có ≥ 4 thông tin, hoặc người dùng chấp nhận bản nháp với `[GIẢ ĐỊNH]` đã đánh dấu.

### Bước 3: Sinh Discovery Report (7 phần)

Dùng [discovery-template.md](./references/discovery-template.md) làm cấu trúc output.
Mỗi phần có tiêu chí hoàn thành riêng — kiểm tra trước khi chuyển sang phần tiếp.

| #   | Phần                       | Tiêu chí hoàn thành                                                                                                                   |
| :-- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **Problem Framing**        | Problem Statement trả lời 3 câu (vấn đề gì, ai gặp, hậu quả); Pain Points có severity/frequency/scope; ≥ 1 baseline metric định lượng |
| 2   | **Stakeholder Map**        | ≥ 3 stakeholder (name + role + concern); Influence/Interest Grid đủ 4 ô; Information Needs cho từng stakeholder chính                 |
| 3   | **Opportunity Assessment** | Business Value mô tả (định lượng nếu có); Market + Strategic Alignment; Mọi giả định đánh dấu `[GIẢ ĐỊNH: ...]`                       |
| 4   | **Solution Options**       | ≥ 2 phương án nghiệp vụ (mô tả + lợi ích + rủi ro + chi phí); Trade-off analysis; Recommendation rõ ràng                              |
| 5   | **Feasibility & Risk**     | Technical + Resource + Legal đánh giá; Top 3 risks có mức độ + mitigation cụ thể                                                      |
| 6   | **Prioritization Matrix**  | Impact/Effort matrix (hoặc ICE/RICE); Go/No-Go + lý do                                                                                |
| 7   | **PRD Kickoff Package**    | Đủ 6 inputs: tên tính năng, mục đích, đối tượng, in-scope, out-of-scope, ràng buộc nghiệp vụ                                          |

**Hành vi theo chế độ:**

- **Chế độ A:** Sinh đủ 7 phần theo thứ tự.
- **Chế độ B:** Đọc bản hiện có → chấm điểm theo checklist → viết lại phần đạt < ✅ → trình bày bản cải thiện.
- **Chế độ C:** Đối chiếu bản hiện có với 7 phần → liệt kê phần thiếu → bổ sung chỉ phần thiếu.

**Hoàn thành khi:** Tất cả 7 phần đạt tiêu chí, hoặc phần thiếu được đánh dấu `[CẦN BỔ SUNG: ...]` kèm lý do.

### Bước 4: Kiểm tra chất lượng

Chấm điểm output theo [quality-checklist-discovery.md](./checklists/quality-checklist-discovery.md) (15 tiêu chí, ngưỡng bàn giao ≥ 13/15).

Review nhanh: [quick-checklist-discovery-1page.md](./checklists/quick-checklist-discovery-1page.md).

**Hoàn thành khi:** Điểm ≥ 13/15 VÀ tất cả mục CRITICAL đạt. Nếu < 13, quay lại Bước 3 sửa phần yếu.

---

## Anti-Patterns

| Thay vì                                     | Hãy                                                  |
| :------------------------------------------ | :--------------------------------------------------- |
| Nhảy thẳng giải pháp                        | Viết Problem Statement rõ ràng trước                 |
| Tự suy diễn khi thiếu thông tin             | Đặt câu hỏi hoặc đánh dấu `[GIẢ ĐỊNH: ...]`          |
| Mô tả implementation detail trong Discovery | Giữ ở mức product direction / nghiệp vụ              |
| Bỏ qua quyết định đầu tư                    | Đưa Go/No-Go recommendation rõ ràng                  |
| Không đóng gói đầu ra                       | Hoàn thành Section 7: PRD Kickoff Package (6 inputs) |
| Không có baseline metrics                   | Xác định chỉ số hiện tại để đo lường improvement     |

---

## Tài liệu tham khảo

**Templates:**

- [discovery-template.md](./references/discovery-template.md) — Biểu mẫu Discovery Report đầy đủ (7 phần).
- [stakeholder-map-template.md](./references/stakeholder-map-template.md) — Influence/Interest Grid + vai trò chuẩn (EU/SU/SP/RE/TE/DE).
- [opportunity-assessment-template.md](./references/opportunity-assessment-template.md) — Đánh giá cơ hội kinh doanh (Business Value + Market + Strategic Alignment).

**Checklists:**

- [quality-checklist-discovery.md](./checklists/quality-checklist-discovery.md) — 15 tiêu chí chất lượng trước bàn giao.
- [quick-checklist-discovery-1page.md](./checklists/quick-checklist-discovery-1page.md) — Checklist 1 trang, dùng khi review nhanh.

**Skill liên quan:**

- **CHUỖI KẾ TIẾP:** `cc-prd-writer` — nhận 6 inputs từ PRD Kickoff Package (Section 7).
- **THAM CHIẾU:** [prd-template.md](../cc-prd-writer/references/prd-template.md) — cấu trúc PRD mà Discovery cung cấp đầu vào.

---

## Lịch sử phiên bản

| Phiên bản | Ngày       | Thay đổi                                                                                 |
| :-------- | :--------- | :--------------------------------------------------------------------------------------- |
| 1.0       | 2026-05-01 | Phiên bản đầu tiên: workflow 6 bước, template 7 phần, anti-patterns.                     |
| 1.1       | 2026-07-14 | Sửa lỗi template; thêm quick checklist + opportunity-assessment-template.                |
| 2.0       | 2026-10-01 | Tái cấu trúc: progressive disclosure, per-section completion criteria, positive framing. |
