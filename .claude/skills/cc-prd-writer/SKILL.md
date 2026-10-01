---
name: cc-prd-writer
description: |
  Viết tài liệu PRD chuẩn cho BA/PM/PO — mô tả sản phẩm ở mức NGHIỆP VỤ và KẾT QUẢ.
  KÍCH HOẠT khi: người dùng muốn tạo mới PRD từ ý tưởng/BRD, hoặc muốn refine/bổ sung PRD đã có.
  KẾ TIẾP: User Stories → cc-user-story-acceptance-criteria-writer. SRS → cc-srs-writer. Use Case → cc-use-case-writer.
---

# Product Requirements Document Writer

## Mục đích

Hỗ trợ BA/PM/PO soạn thảo PRD chuẩn, rõ ràng, có thể truy xuất nguồn gốc, sẵn sàng bàn giao cho Dev và QA.

**Quy tắc vàng:** Mô tả **HÀNH VI** và **KẾT QUẢ** của hệ thống bằng ngôn ngữ nghiệp vụ. Chi tiết triển khai kỹ thuật thuộc phạm vi SRS.

## Phân biệt PRD và SRS

|              | PRD                                                 | SRS                                     |
| :----------- | :-------------------------------------------------- | :-------------------------------------- |
| **Mục đích** | Mô tả sản phẩm từ góc nhìn nghiệp vụ                | Mô tả hệ thống từ góc nhìn kỹ thuật     |
| **Viết cho** | BA / PM / PO                                        | Dev / QA                                |
| **Nội dung** | Nghiệp vụ, quy trình, kết quả mong đợi              | Kiến trúc, interface, data model        |
| **Ví dụ**    | "Hệ thống gửi email xác nhận khi đơn hàng được tạo" | "POST /api/orders → 200 + JSON payload" |

Tham khảo chi tiết: [prd-vs-srs.md](./references/prd-vs-srs.md).

---

## Quy trình thực hiện (Workflow)

### Bước 1: Xác định chế độ

| Chế độ           | Điều kiện          | Hành vi                                                   |
| :--------------- | :----------------- | :-------------------------------------------------------- |
| **A — Viết mới** | Chưa có PRD        | Thu thập 6 inputs → sinh PRD hoàn chỉnh 10 phần           |
| **B — Refine**   | Đã có PRD          | Đánh giá theo checklist → cải thiện phần yếu              |
| **C — Augment**  | PRD thiếu vài phần | Xác định phần thiếu → bổ sung theo đúng cấu trúc template |

**Hoàn thành khi:** Xác định rõ chế độ A, B, hoặc C và thông báo cho người dùng.

### Bước 2: Thu thập thông tin đầu vào

**6 thông tin bắt buộc:**

1. **Tên sản phẩm / tính năng** — Tên chính xác.
2. **Mục đích sản phẩm** — Vấn đề gì cần giải quyết? Ai gặp?
3. **Đối tượng sử dụng chính** — Nhóm người dùng cốt lõi (End User, Admin, Manager...).
4. **Phạm vi trong (In-scope)** — Chức năng PHẢI có trong phiên bản này.
5. **Phạm vi ngoài (Out-of-scope)** — Chức năng KHÔNG thuộc phiên bản này (ngăn scope creep).
6. **Ràng buộc nghiệp vụ** — Quy định, quy trình, chính sách ảnh hưởng.

**Xử lý khi thiếu thông tin:**

| Số thông tin có | Hành động                                                                                             |
| :-------------- | :---------------------------------------------------------------------------------------------------- |
| 0–2             | Đặt câu hỏi làm rõ (tối đa 6 câu/lượt), ưu tiên đúng 6 thông tin trên                                 |
| 3–5             | Có thể viết bản nháp nếu người dùng đồng ý — ghi giả định trong Section 7, đánh dấu `[GIẢ ĐỊNH: ...]` |
| 6               | Viết PRD hoàn chỉnh                                                                                   |

**Hoàn thành khi:** Có đủ 6 thông tin, hoặc người dùng chấp nhận bản nháp với `[GIẢ ĐỊNH]` đã đánh dấu.

### Bước 3: Xây dựng PRD (10 phần)

Dùng [prd-template.md](./references/prd-template.md) làm cấu trúc output.
Mỗi phần có tiêu chí hoàn thành riêng — kiểm tra trước khi chuyển sang phần tiếp.

| #   | Phần                       | Tiêu chí hoàn thành                                                                                                 |
| :-- | :------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| 1   | **Tổng quan sản phẩm**     | Mục đích rõ (vấn đề + bối cảnh + giá trị); Bảng In-scope/Out-of-scope đầy đủ; Đối tượng người dùng; Key Benefits    |
| 2   | **Yêu cầu chức năng (FR)** | Mỗi FR có: mã `FR-[số]`, mô tả nghiệp vụ, Actor, Trigger, Happy Path, Alt Flow, Expected Outcome, ≥ 1 Business Rule |
| 3   | **Yêu cầu phi chức năng**  | ≥ 3 tiêu chí (Hiệu suất, Bảo mật, Khả dụng) với ngưỡng đo được                                                      |
| 4   | **UX/UI Guidelines**       | Luồng người dùng chính (text/ASCII); UI guidelines ở mức nguyên tắc; Thông báo lỗi có mã + hướng dẫn                |
| 5   | **Tích hợp hệ thống**      | Tên hệ thống + chức năng tích hợp + dữ liệu nghiệp vụ trao đổi + ràng buộc/SLA                                      |
| 6   | **Release Plan**           | Phân kỳ theo Phase, mỗi Phase có mục tiêu + FR liên quan + thời gian ước lượng                                      |
| 7   | **Rủi ro và giả định**     | Mỗi rủi ro có mức độ + giải pháp; Mỗi giả định có hậu quả nếu sai + đánh dấu `[GIẢ ĐỊNH: ...]`                      |
| 8   | **RTM**                    | Ma trận truy xuất đủ cột: FR, Tên, Nguồn, Ưu tiên, User Story, Phase                                                |
| 9   | **User Stories**           | → Bước 4                                                                                                            |
| 10  | **Phụ lục**                | Thuật ngữ + Tài liệu tham khảo                                                                                      |

**Hành vi theo chế độ:**

- **Chế độ A:** Sinh đủ 10 phần theo thứ tự.
- **Chế độ B:** Đọc PRD hiện có → chấm điểm theo checklist → viết lại phần < ✅ → đánh dấu thay đổi `[CẬP NHẬT: mô tả]`.
- **Chế độ C:** Đối chiếu với 10 phần → liệt kê phần thiếu → bổ sung và đánh dấu `[BỔ SUNG: mô tả]`.

**Hoàn thành khi:** Tất cả 10 phần đạt tiêu chí (hoặc phần thiếu được đánh dấu `[CẦN BỔ SUNG: ...]` kèm lý do).

### Bước 4: Tạo User Stories tích hợp

**Sub-skill bắt buộc:** `cc-user-story-acceptance-criteria-writer`

Tạo User Stories cho **mỗi FR có độ ưu tiên P0 và P1**. Mỗi User Story phải:

1. Liên kết ngược với FR tương ứng qua RTM (Section 8).
2. Có ≥ 3 Acceptance Criteria dạng Given-When-Then: Happy Path, Edge Case/Business Rule, Error Path.
3. Đánh số `US-[mã]` — trùng mã FR khi có thể.

Tham khảo: [user-story-template-example.md](../cc-user-story-acceptance-criteria-writer/templates/user-story-template-example.md) | [invest-criteria.md](../cc-user-story-acceptance-criteria-writer/references/invest-criteria.md)

**Hoàn thành khi:** Mọi FR P0/P1 trong RTM có User Story tương ứng, mỗi US có ≥ 3 AC Gherkin.

### Bước 5: Kiểm tra chất lượng & Trình bày

Chấm điểm theo [quality-checklist-prd.md](./checklists/quality-checklist-prd.md) — 20 tiêu chí, ngưỡng bàn giao **≥ 18/20** và tất cả mục CRITICAL phải đạt.

Review nhanh: [quick-checklist-prd-1page.md](./checklists/quick-checklist-prd-1page.md).

**Trình bày kết quả theo thứ tự:**

1. **PRD hoàn chỉnh** — theo cấu trúc 10 phần.
2. **Bảng tự kiểm tra chất lượng** — trạng thái Đạt/Cần cải thiện cho mục CRITICAL + điểm tổng /20.
3. **Xác nhận bàn giao** — nêu giả định cần người dùng xác nhận.

**Hoàn thành khi:** Điểm ≥ 18/20 VÀ tất cả CRITICAL đạt. Nếu < 18, quay lại Bước 3 sửa phần yếu.

---

## Anti-Patterns

| Thay vì                                       | Hãy                                                                 |
| :-------------------------------------------- | :------------------------------------------------------------------ |
| Mô tả kỹ thuật: "Gọi API MoMo qua HTTPS POST" | Mô tả nghiệp vụ: "Tạo yêu cầu thanh toán với mã giao dịch duy nhất" |
| FR quá lớn: "Quản lý toàn bộ đơn hàng"        | Tách nhỏ: "Tạo mới đơn hàng", "Xem chi tiết đơn hàng"               |
| Tự suy diễn khi thiếu thông tin               | Đặt câu hỏi hoặc ghi `[GIẢ ĐỊNH: ...]`                              |
| User Story đứng riêng, không gắn FR           | US liên kết FR trong RTM                                            |
| Out-of-scope để trống                         | Liệt kê rõ ràng ≥ 1 mục                                             |
| Bỏ qua ma trận truy xuất                      | RTM liên kết FR → User Story → Phase                                |

---

## Tài liệu tham khảo

**Templates & Reference:**

- [prd-template.md](./references/prd-template.md) — Biểu mẫu PRD đầy đủ 10 phần (dùng làm baseline).
- [prd-vs-srs.md](./references/prd-vs-srs.md) — Phân biệt chi tiết PRD và SRS với ví dụ song song.

**Checklists:**

- [quality-checklist-prd.md](./checklists/quality-checklist-prd.md) — 20 tiêu chí chất lượng trước bàn giao.
- [quick-checklist-prd-1page.md](./checklists/quick-checklist-prd-1page.md) — Checklist 1 trang, review nhanh.

**Skills liên quan:**

- **SUB-SKILL BẮT BUỘC:** `cc-user-story-acceptance-criteria-writer` — sinh User Stories + AC tích hợp trong PRD.
- **RELATED:** `cc-use-case-writer` — Use Case chuẩn tắc (Karl Wiegers) khi cần mô tả luồng tương tác chi tiết.
  - Tham chiếu: [examples.md](../cc-use-case-writer/references/examples.md)

---

## Lịch sử phiên bản

| Phiên bản | Ngày       | Thay đổi                                                                                 |
| :-------- | :--------- | :--------------------------------------------------------------------------------------- |
| 1.0       | 2026-05-01 | Phiên bản đầu tiên: workflow 6 bước, template 10 mục, anti-patterns.                     |
| 1.1       | 2026-07-14 | Bổ sung Mode B/C; thêm checklist tóm tắt; tham chiếu PRD mẫu CRM.                        |
| 2.0       | 2026-10-01 | Tái cấu trúc: progressive disclosure, per-section completion criteria, positive framing. |
