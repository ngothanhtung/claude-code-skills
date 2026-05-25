# Biểu mẫu Tiêu chí Nghiệp thu (Acceptance Criteria Template) — ProjectOS

> **Định dạng:** Given-When-Then (Cú pháp Gherkin)
> **Yêu cầu tối thiểu:** 3 AC — Happy path + Edge case + Negative path
> **Phân biệt:** Tiêu chí nghiệp thu (AC) ≠ Kịch bản kiểm thử (Test Case) ≠ Script kiểm thử (Test Script)
>
> - **AC** mô tả hành vi nghiệp vụ → viết cho BA/PO.
> - **Test Case** sinh ra từ AC, ghi rõ input/expected result → viết cho Tester.
> - **Test Script** là code/procedure thực thi Test Case → viết cho QA Automation.

---

## Siêu dữ liệu (Metadata)

| Trường | Giá trị |
| :--- | :--- |
| **Câu chuyện người dùng (US)** | US-[MÃ_TÍNH_NĂNG]-[MÃ_SỐ] — ví dụ: US-PROJ-001 |
| **Tính năng lớn (Epic)** | [Tên Epic/Feature] |
| **Người viết** | [Tên người viết / "BA: Tên"] |
| **Ngày viết** | [Ngày tháng năm] |
| **Trạng thái** | [Draft / In Review / Approved] |
| **Số lượng AC** | [Tổng số AC đã viết cho US này] |

> **Quy tắc trạng thái:**
> - **Draft** → Đang soạn thảo, chưa sẵn sàng review.
> - **In Review** → Đã gửi PO/Stakeholder xem xét, đang chờ phản hồi.
> - **Approved** → PO đã xác nhận, chuyển cho Dev/QA triển khai.

---

## Quy tắc viết Given-When-Then (Gherkin)

### Cấu trúc tối thiểu

| Thành phần | Vai trò | Quy tắc |
| :--- | :--- | :--- |
| **Given** | Tiền điều kiện — bối cảnh TRƯỚC hành động | Dùng dữ liệu CỤ THỂ: tên người, ngày tháng, số lượng thực. **Không** dùng giá trị generic như "một người dùng hợp lệ". |
| **When** | Hành động DUY NHẤT của đối tượng sử dụng | Chỉ có MỘT hành động. Nếu có nhiều hành động → tách thành 2 AC riêng. |
| **Then** | Kết quả chính — đo lường được | Có số liệu cụ thể: "trong vòng 3 giây", "tỷ lệ 80%", "gửi 3 thông báo". |
| **And** | Kết quả PHỤ mở rộng từ Then | Dùng cho kết quả bổ sung cùng nhánh. **Tối đa 2 And** trong 1 AC. Nếu cần nhiều hơn → tách AC. |
| **But** | Ngoại lệ / trường hợp NGƯỢC lại Then | Dùng khi mô tả hành vi đối lập với Then chính. |

### Danh mục chống mẫu thiết kế (Anti-patterns)

| ❌ Sai | ✅ Đúng |
| :--- | :--- |
| `When` có nhiều hành động: "nhấn Tạo **và** nhấn Xác nhận" | Tách thành 2 AC riêng |
| `Then` dùng từ mơ hồ: "hệ thống phản hồi **nhanh**" | "hệ thống phản hồi **trong vòng 2 giây**" |
| `Given` generic: "một người dùng hợp lệ" | "Nguyễn Văn A đã đăng nhập với vai trò quản lý dự án" |
| `And` tích lũy 4+ mệnh đề → AC quá dài | AC đang gộp nhiều scenario → tách thành 2 AC |
| Dùng `And` cho ngoại lệ | Dùng `But` cho trường hợp ngược lại |
| Mô tả chi tiết UI: "nút màu xanh" | Mô tả hành vi: "hệ thống hiển thị thông báo thành công" |
| Chứa tên API: "call POST /v1/projects" | Mô tả nghiệp vụ: "hệ thống tạo bản ghi dự án mới" |
| "v.v.", "các trường hợp khác" | Mô tả rõ ràng từng trường hợp cụ thể |

---

## Mẫu viết cho từng loại kịch bản

### Tiêu chí nghiệm thu 1: [Tên kịch bản — Happy path]

> **Quy tắc:** Happy path mô tả luồng THÀNH CÔNG lý tưởng — người dùng làm đúng, hệ thống phản hồi đúng.

```text
Given [Tiền điều kiện cụ thể — ai, ở đâu, dữ liệu gì]
When  [Một hành động DUY NHẤT của đối tượng sử dụng]
Then  [Kết quả chính — có số liệu đo lường]
And   [Kết quả phụ bổ sung — nếu có, tối đa 2 And]
And   [Kết quả phụ cuối cùng — nếu có]
```

#### Ví dụ minh họa — Happy path

```text
Given quản lý dự án đã đăng nhập và có quyền tạo dự án trên ProjectOS
When  quản lý dự án điền đầy đủ thông tin bắt buộc và nhấn nút "Tạo dự án"
Then  hệ thống tạo bản ghi dự án mới và hiển thị trang chi tiết trong vòng 3 giây
And   gửi thông báo mời tham gia qua email đến các thành viên đã được thêm
And   dự án mới xuất hiện trên Dashboard của quản lý dự án
```

---

### Tiêu chí nghiệm thu 2: [Tên kịch bản — Edge case / Validation]

> **Quy tắc:** Edge case mô tả điều kiện BIÊN — dữ liệu đúng format nhưng ở ranh giới (số lượng tối đa, ngày biên, giá trị bằng 0...).

```text
Given [Bối cảnh biên cụ thể — dữ liệu ở ranh giới]
When  [Hành động kích hoạt trường hợp biên]
Then  [Hệ thống xử lý đúng nghiệp vụ tại ranh giới đó]
And   [Thông báo hoặc hành vi phản hồi cụ thể]
```

#### Ví dụ minh họa — Edge case

```text
Given dự án "CRM phiên bản 2.0" có 3 thành viên: Nguyễn Văn A, Trần Thị B, Lê Văn C
When  quản lý dự án cố gắng gán công việc cho Hoàng Văn D — không phải thành viên dự án
Then  hệ thống hiển thị thông báo: "Hoàng Văn D không phải thành viên của dự án này"
And   không tạo bản ghi công việc mới
```

---

### Tiêu chí nghiệm thu 3: [Tên kịch bản — Negative path / Error]

> **Quy tắc:** Negative path mô tả hành vi khi xảy ra LỖI hoặc dữ liệu KHÔNG HỢP LỆ — hệ thống phải xử lý graceful, không crash, không side effect.

```text
Given [Bối cảnh xảy ra lỗi cụ thể — dữ liệu không hợp lệ, mất quyền, timeout...]
When  [Hành động dẫn đến lỗi]
Then  [Hệ thống xử lý lỗi đúng nghiệp vụ — không crash]
And   [Thông báo lỗi cụ thể với nội dung rõ ràng]
But   [Điều ngược lại KHÔNG xảy ra — side effect không mong muốn]
```

#### Ví dụ minh họa — Negative path

```text
Given thành viên nhóm đã có 8 công việc đang trong hạn (ngưỡng tối đa: 10)
When  quản lý dự án gán thêm công việc thứ 9 cho thành viên đó
Then  hệ thống hiển thị cảnh báo: "Thành viên đã có 8 công việc đang trong hạn"
And   nếu quản lý dự án xác nhận → công việc vẫn được giao
But   công việc thứ 11 không thể giao nếu chưa xác nhận cảnh báo
```

---

## Danh mục kiểm tra chất lượng (AC Quality Checklist)

> Tự đánh giá từng mục trước khi xác nhận AC đã sẵn sàng.

### Về cấu trúc Gherkin

- [ ] Mỗi AC có đủ **Given + When + Then**.
- [ ] Phần **When** chỉ có **MỘT** hành động duy nhất.
- [ ] Phần **Then** có **số liệu đo lường** cụ thể (thời gian, số lượng, tỷ lệ %).
- [ ] Số lượng **And** trong mỗi AC **≤ 2**. Nếu > 2 → tách AC.
- [ ] Dùng **But** cho ngoại lệ thay vì And.

### Về dữ liệu trong Given

- [ ] Given dùng **dữ liệu cụ thể** (tên người, ngày tháng, số lượng) thay vì generic ("người dùng hợp lệ").
- [ ] Given không chứa hành động — chỉ mô tả trạng thái ban đầu.

### Về độ bao phủ kịch bản

- [ ] Có **1 Happy path** (luồng thành công).
- [ ] Có **1 Edge case** (ranh giới nghiệp vụ).
- [ ] Có **1 Negative path** (xử lý lỗi / dữ liệu không hợp lệ).
- [ ] Tổng số AC cho US này **≤ 7–8**. Nếu vượt → phân rã US.

### Về ngôn ngữ

- [ ] **Không** từ mơ hồ: "nhanh", "đẹp", "thân thiện", "phù hợp", "trực quan".
- [ ] **Không** chi tiết kỹ thuật: tên API, database schema, framework.
- [ ] **Không** mô tả UI: màu nút, pixel, font chữ.
- [ ] Thông báo lỗi có **nội dung cụ thể**, không viết chung chung "thông báo lỗi".

### Về khả năng sinh Test Case

- [ ] Từ mỗi AC, có thể sinh ra **tối thiểu 3 Test Case**: đầu vào hợp lệ, biên, không hợp lệ.
- [ ] Tester đọc AC mà **không cần hỏi BA thêm** là đã hiểu kịch bản.
