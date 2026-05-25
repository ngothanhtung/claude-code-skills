# Biểu mẫu Câu chuyện người dùng (User Story Template) — ProjectOS

---

## Câu chuyện người dùng US-[MÃ_TÍNH_NĂNG]-[MÃ_SỐ]

**As a** [Đối tượng sử dụng cụ thể]
> **Hướng dẫn:** Viết vai trò + trạng thái hiện tại. Không dùng "user" chung chung.
> ✅ *"quản lý dự án đã được phân quyền trên ProjectOS"*
> ❌ *"người dùng"*

**I want to** [Hành động cụ thể, đo lường được]
> **Hướng dẫn:** Dùng động từ rõ ràng. Không dùng "quản lý", "xử lý" chung chung.
> ✅ *"giao công việc cho thành viên cụ thể và đặt deadline"*
> ❌ *"quản lý công việc"*

**So that** [Giá trị nghiệp vụ rõ ràng — KHÔNG lặp lại phần I want]
> **Hướng dẫn:** Trả lời câu hỏi "Nếu không làm, ai chịu thiệt hại gì?"
> ✅ *"thành viên nhóm biết rõ trách nhiệm và tôi theo dõi được tiến độ"*
> ❌ *"để tôi giao công việc"* (lặp lại I want)

---

### Siêu dữ liệu (Metadata)

| Trường | Giá trị | Ghi chú |
| :--- | :--- | :--- |
| **Epic / Feature** | [Tên tính năng lớn] | |
| **Độ ưu tiên (MoSCoW)** | [Must / Should / Could / Won't] | **Must** = nghiệp vụ cốt lõi, không triển khai thì sản phẩm không dùng được. **Should** = quan trọng nhưng có workaround. **Could** = mong muốn, triển khai nếu thời gian cho phép. **Won't** = loại bỏ trong lần này. |
| **Ước lượng (Estimate)** | [Story points / T-shirt size] | |
| **Sự phụ thuộc (Dependencies)** | [Câu chuyện khác hoặc "Không có"] | Nếu có phụ thuộc → đánh dấu ⚠️ trong bảng INVEST bên dưới |
| **Giả định (Assumptions)** | [Điều kiện giả định hoặc "Không có"] | |

---

### Tự đánh giá theo tiêu chí INVEST

| Tiêu chí | Đạt? | Ghi chú & Hướng xử lý nếu ⚠️ |
| :--- | :--- | :--- |
| **I**ndependent (Độc lập) | [✅/⚠️] | ⚠️ → Gộp/chia phụ thuộc; dùng mock data để kiểm thử độc lập |
| **N**egotiable (Thương lượng) | [✅/⚠️] | ⚠️ → Lược bỏ chi tiết kỹ thuật cứng nhắc; tập trung What, không How |
| **V**alue (Giá trị) | [✅/⚠️] | ⚠️ → Viết lại So that hướng outcome, không phải feature |
| **E**stimable (Ước lượng) | [✅/⚠️] | ⚠️ → Bổ sung ngữ cảnh; cân nhắc tạo Spike trước |
| **S**mall (Nhỏ gọn) | [✅/⚠️] | ⚠️ → Chia nhỏ: tách CRUD, tách theo Persona, hoặc tách Happy path trước |
| **T**estable (Kiểm thử được) | [✅/⚠️] | ⚠️ → Bổ sung AC định dạng Given-When-Then, có số liệu cụ thể |

> **Quy tắc:** Nếu bất kỳ tiêu chí nào là ⚠️ → **KHÔNG chuyển sang Sprint Planning** cho đến khi giải quyết xong.

---

### Tiêu chí nghiệm thu (Acceptance Criteria)

> **Yêu cầu tối thiểu:** 3 tiêu chí — Happy path + Edge case + Negative path.
> **Định dạng:** Given-When-Then (Gherkin). **Không** chứa từ mơ hồ ("nhanh", "đẹp"), chi tiết kỹ thuật (API, database), hay mô tả UI (màu nút, pixel).
> **Số lượng tối đa:** 7–8 kịch bản. Nếu vượt quá → phân rã câu chuyện.
>
> [Xem biểu mẫu chi tiết](./acceptance-criteria-template.md)

#### Tiêu chí nghiệm thu 1: [Tên kịch bản — Happy path]

- **Given** [Tiền điều kiện cụ thể]
- **When** [Hành động chính của đối tượng sử dụng]
- **Then** [Kết quả chính — có số liệu đo lường]
- **And** [Kết quả phụ / thông báo hệ thống — nếu có]

#### Tiêu chí nghiệm thu 2: [Tên kịch bản — Edge case / Validation]

- **Given** [Bối cảnh trường hợp biên cụ thể]
- **When** [Hành động kích hoạt]
- **Then** [Hệ thống xử lý đúng nghiệp vụ]
- **And** [Thông báo hoặc hành vi phản hồi cụ thể]

#### Tiêu chí nghiệm thu 3: [Tên kịch bản — Negative path / Error]

- **Given** [Bối cảnh xảy ra lỗi cụ thể]
- **When** [Hành động dẫn đến lỗi]
- **Then** [Hệ thống xử lý lỗi đúng]
- **And** [Thông báo lỗi cụ thể + không có side effect không mong muốn]

---

### Definition of Done (DoD)

> **DoD ≠ Tiêu chí nghiệp thu.** AC cho BA/PO xác nhận nghiệp vụ. DoD cho Dev/QA xác nhận chất lượng kỹ thuật bàn giao.

- [ ] Code passed unit test
- [ ] [Yêu cầu kỹ thuật 1 — ví dụ: API endpoint response time < 2 giây]
- [ ] [Yêu cầu kỹ thuật 2 — ví dụ: Đã test trên Chrome, Safari, Firefox]
- [ ] [Yêu cầu kỹ thuật 3 — ví dụ: Realtime sync hoạt động với 3+ user đồng thời]
- [ ] [Yêu cầu kỹ thuật 4 — ví dụ: Toast notification hiển thị sau khi tạo thành công]

---

### Ghi chú (Notes)

| Loại | Nội dung |
| :--- | :--- |
| **Sự phụ thuộc (Dependencies)** | [Câu chuyện US-xxx phải hoàn thành trước / Không có] |
| **Giả định (Assumptions)** | [Điều kiện giả định / Không có] |
| **Câu hỏi mở (Open Questions)** | [Câu hỏi cần làm rõ với PO/Stakeholder] |

---

### Anti-patterns — Danh mục chống mẫu thiết kế

| ❌ Sai | ✅ Đúng |
| :--- | :--- |
| "As a **người dùng**" | "As a **quản lý dự án đã được phân quyền**" |
| "I want to **quản lý** hồ sơ" | "I want to **cập nhật địa chỉ email**" |
| "So that **để tôi quản lý hồ sơ**" (lặp I want) | "So that **tôi nhận thông báo đúng địa chỉ**" |
| "Then hệ thống phải **phản hồi nhanh**" | "Then hệ thống **tải kết quả trong vòng 2 giây**" |
| Tiêu đề chứa "**VÀ**" | Tách thành 2 câu chuyện người dùng riêng |
| AC mô tả "màu nút bấm", "API /v1/..." | AC mô tả **hành vi nghiệp vụ** của hệ thống |
