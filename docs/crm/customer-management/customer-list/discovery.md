# PRODUCT DISCOVERY REPORT

## CRM — Quản lý Danh sách Khách hàng

**Phiên bản:** 1.0
**Ngày:** 2026-07-14
**Tác giả:** BA
**Chế độ:** A Viết mới
**Tài liệu tham chiếu:** Yêu cầu từ Phòng kinh doanh (email 2026-07-10)

---

## 1. Problem Framing

### 1.1 Problem Statement

Phòng kinh doanh hiện quản lý danh sách khách hàng trên Google Sheets riêng lẻ do mỗi nhân viên tự tạo. Điều này gây ra ba vấn đề chính: (1) dữ liệu khách hàng bị trùng lặp khi nhiều nhân viên cùng nhập thông tin một khách hàng, (2) khi nhân viên nghỉ việc, dữ liệu khách hàng theo họ bị mất hoàn toàn, và (3) không có cơ chế phân quyền — mọi người đều xem được toàn bộ dữ liệu khách hàng của nhau.

### 1.2 Pain Point Mapping

| Pain Point | Mức độ nghiêm trọng | Tần suất | Phạm vi ảnh hưởng |
| :--- | :--- | :--- | :--- |
| Trùng lặp thông tin khách hàng giữa các Sheets | Cao | Thường xuyên | Toàn bộ phòng kinh doanh |
| Mất dữ liệu khi nhân viên nghỉ việc | Cao | Đôi khi (khi có turnover) | Nhóm nhân viên liên quan |
| Không phân quyền truy cập — ai cũng xem được hết | Trung bình | Thường xuyên | Toàn bộ phòng |
| Phải tra cứu nhiều Sheets để tìm thông tin 1 khách hàng | Trung bình | Thường xuyên | Cá nhân nhân viên kinh doanh |

### 1.3 Baseline Metrics

| Chỉ số | Giá trị hiện tại | Mục tiêu (ước lượng) | Cách đo |
| :--- | :--- | :--- | :--- |
| Thời gian tìm thông tin 1 khách hàng | ~5 phút (tra cứu nhiều Sheets) | < 30 giây (1 nơi duy nhất) | Time tracking thủ công |
| Số lượng trùng lặp khách hàng | ~25% bản ghi bị trùng (ước tính) | < 2% | Query đếm trùng email/SDT |
| Số nhân viên có thể truy cập toàn bộ dữ liệu | 100% (không phân quyền) | 0% (phân quyền theo role) | Kiểm tra thủ công |

---

## 2. Stakeholder Map

### 2.1 Stakeholder Identification

| Stakeholder | Vai trò | Mô tả / Bộ phận | Mối quan tâm chính |
| :--- | :--- | :--- | :--- |
| Nhân viên kinh doanh | End User | 15 người, tra cứu và cập nhật KH hàng ngày | Tra cứu nhanh, nhập liệu dễ |
| Quản lý kinh doanh | Supervisor | 2 người, giám sát hoạt động kinh doanh | Theo dõi danh sách, kiểm tra trùng |
| Admin hệ thống | Technical | 1 người, quản trị CRM | Triển khai và bảo trì |
| Nhân viên nghỉ việc (tương lai) | (không áp dụng) | Nhóm bị ảnh hưởng gián tiếp — không trực tiếp dùng hệ thống | Dữ liệu KH theo họ không bị mất |

### 2.2 Influence/Interest Grid

| | Quan tâm cao | Quan tâm thấp |
| :--- | :--- | :--- |
| **Ảnh hưởng cao** | Quản lý kinh doanh | Admin hệ thống (ít quan tâm nhưng có quyền approve) |
| **Ảnh hưởng thấp** | Nhân viên kinh doanh | Nhân viên chưa liên quan |

### 2.3 Information Needs

| Stakeholder | Thông tin cần từ Discovery | Định dạng |
| :--- | :--- | :--- |
| Quản lý kinh doanh | Problem Statement + Baseline Metrics + Recommendation | Meeting 30 phút + Report ngắn |
| Nhân viên kinh doanh | Problem Statement + timeline triển khai | Email thông báo |
| Admin hệ thống | Technical Feasibility + Resource requirement | Report chi tiết |

---

## 3. Opportunity Assessment

### 3.1 Business Value

- **Định lượng:** Giảm 80% thời gian tìm kiếm KH (từ 5 phút xuống 30 giây × 15 nhân viên × 10 lượt tra cứu/ngày = tiết kiệm ~50 giờ/tháng)
- **Định tính:** Loại bỏ rủi ro mất dữ liệu khi nhân viên nghỉ việc; tăng sự hài lòng của nhân viên khi có công cụ tốt hơn

### 3.2 Market Opportunity

CRM hiện tại (Google Sheets) không đáp ứng được nhu cầu quản lý tập trung. Đây là nhu cầu nội bộ — không phải thị trường bên ngoài, nhưng quan trọng cho hiệu suất kinh doanh.

### 3.3 Strategic Alignment

Phù hợp với chiến lược "Số hóa quy trình kinh doanh" năm 2026. CRM là nền tảng cho các tính năng CRM mở rộng sau này (email marketing, lịch sử tương tác, báo cáo phân tích).

### 3.4 Assumptions

| Giả định | Rủi ro nếu sai | Cách kiểm chứng |
| :--- | :--- | :--- |
| [GIẢ ĐỊNH: Nhân viên kinh doanh sẵn sàng chuyển từ Sheets sang CRM] | Tỷ lệ sử dụng thấp, Sheets vẫn được dùng song song | Phỏng vấn 5 nhân viên kinh doanh |
| [GIẢ ĐỊNH: Dữ liệu Sheets hiện tại đã được chuẩn hóa đủ để import] | Import sai dữ liệu, cần xử lý thủ công nhiều | Kiểm tra sample 50 bản ghi Sheets |
| [GIẢ ĐỊNH: Office 365 / Google Workspace có thể SSO với CRM] | Cần tích hợp SSO thủ công, tăng effort | Kiểm tra API documentation |

---

## 4. Business Solution Options

### 4.1 Options Overview

| Phương án | Mô tả | Lợi ích chính | Rủi ro chính | Chi phí ước lượng |
| :--- | :--- | :--- | :--- | :--- |
| A: Mua CRM SaaS (HubSpot/Salesforce) | Sử dụng CRM có sẵn trên thị trường, tùy chỉnh nhẹ | Triển khai nhanh, ít maintain | Chi phí license hàng năm, phụ thuộc vendor | Trung bình (license + setup) |
| B: Xây CRM nội bộ | Phát triển CRM trên nền tảng internal tools (Retool/Appsmith + DB) | Tùy chỉnh cao, không phụ thuộc vendor | Thời gian develop longer, cần maintain | Thấp (chỉ chi phí dev time) |

### 4.2 Trade-off Analysis

| Tiêu chí | Phương án A: CRM SaaS | Phương án B: CRM nội bộ |
| :--- | :--- | :--- |
| Impact | Cao — tính năng sẵn có phong phú | Cao — tùy chỉnh đúng nhu cầu |
| Effort | Thấp — setup nhanh | Trung bình — phát triển 4-6 tuần |
| Time-to-value | Nhanh — 1-2 tuần | Chậm — 4-6 tuần |
| Risk | Trung bình — phụ thuộc vendor pricing | Thấp — kiểm soát hoàn toàn |

### 4.3 Recommendation

Khuyến nghị **Phương án B (CRM nội bộ)** — effort trung bình nhưng kiểm soát hoàn toàn, không tốn license fee hàng năm, và phù hợp với quy mô team 15 người. Cần thêm đánh giá chi tiết về: (1) kinh nghiệm team dev với internal tools, (2) thời gian chính xác nếu dùng Appsmith/Retool.

---

## 5. Feasibility & Risk Assessment

### 5.1 Feasibility

| Tiêu chí | Đánh giá | Ghi chú |
| :--- | :--- | :--- |
| Technical Feasibility | Khả thi | Team có kinh nghiệm với internal tools; DB đơn giản (CRUD) |
| Resource Feasibility | Khả thi | 1-2 dev, 4-6 tuần; budget không significant |
| Legal/Compliance | OK | Dữ liệu khách hàng nội bộ, không có yêu cầu pháp lý đặc biệt |

### 5.2 Risk Assessment

| Rủi ro | Mức độ | Mitigation |
| :--- | :--- | :--- |
| Nhân viên không chịu chuyển sang CRM mới | Trung bình | Training 30 phút + chạy song song 2 tuần đầu; thiết lập incentive |
| Import dữ liệu Sheets sai hoặc trùng | Cao | Script validate trước khi import; nhắc nhân viên review sau import |
| Scope creep — yêu cầu thêm tính năng không thuộc Phase 1 | Trung bình | Cố định In-scope/Out-of-scope; review với PO hàng tuần |

---

## 6. Prioritization Matrix

### 6.1 Impact/Effort Matrix

```text
        Effort
        Cao        Thấp
Impact  ┌─────────┬─────────┐
Cao     │         │  [②]    │   ← Ưu tiên cao
        ├─────────┼─────────┤
Thấp    │  [③]    │         │
        └─────────┴─────────┘
```

| Vùng | Phương án | Hành động |
| :--- | :--- | :--- |
| ① Impact Cao, Effort Cao | — | Không có phương án nào rơi vào vùng này |
| ② Impact Cao, Effort Thấp | CRM nội bộ (Appsmith/Retool) | **Ưu tiên cao — làm ngay** |
| ③ Impact Thấp, Effort Cao | Mua CRM SaaS (HubSpot/Salesforce) | Tránh — license fee cao, effort setup không thấp |
| ④ Impact Thấp, Effort Thấp | — | Không có phương án nào |

### 6.2 Go/No-Go Recommendation

| Quyết định | Ghi chú |
| :--- | :--- |
| **Go** | CRM nội bộ (Phương án B) — Đủ thông tin để proceed. Cần confirm: (1) team dev confirm timeline 4-6 tuần, (2) sample data Sheets đã sạch để import. |

---

## 7. PRD Kickoff Package

**1. Tên tính năng:** CRM — Quản lý Danh sách Khách hàng

**2. Mục đích sản phẩm:** Tập trung thông tin khách hàng vào một nơi duy nhất, loại bỏ trùng lặp, đảm bảo dữ liệu không bị mất khi nhân viên nghỉ việc, và phân quyền truy cập theo vai trò.

**3. Đối tượng sử dụng chính:** Nhân viên kinh doanh (tra cứu, CRUD), Quản lý kinh doanh (giám sát, khóa/mở khóa KH), Admin hệ thống (quản trị quyền)

**4. Phạm vi trong (In-scope):** Xem danh sách KH, tìm kiếm, lọc theo trạng thái, tạo mới, cập nhật, khóa/mở khóa tài khoản KH

**5. Phạm vi ngoài (Out-of-scope):** Import/export CSV, tích hợp email marketing, xem lịch sử tương tác, báo cáo phân tích, tích hợp Zalo/WhatsApp

**6. Ràng buộc nghiệp vụ:** Email KH phải là duy nhất; trạng thái mặc định khi tạo mới là "Đang hoạt động"; chỉ quản lý trở lên mới có quyền khóa/mở khóa

> **Bước tiếp theo:** Dùng `cc-prd-writer` để viết PRD hoàn chỉnh từ 6 inputs trên.
