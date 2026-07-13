# Discovery Quick Checklist — 1 trang

> Dùng khi review Discovery Report trước khi bàn giao. In ra hoặc mở trên màn hình thứ hai.

---

## ✅ CRITICAL (Phải đạt 100%)

| ✓ | Mục tiêu | Cách kiểm tra |
| :---: | :--- | :--- |
| ☐ | **Problem Statement rõ ràng** | Trả lời được 3 câu: Vấn đề gì? Ai gặp? Hậu quả? |
| ☐ | **Assumptions được đánh dấu** | CTRL+F "[GIẢ ĐỊNH:" — mọi giả định phải xuất hiện ở đây |
| ☐ | **Không có chi tiết kỹ thuật** | CTRL+F tìm "API", "database", "endpoint", "schema", "framework" — nếu tìm thấy → SAI |
| ☐ | **Có Go/No-Go rõ ràng** | Phải có quyết định: Go / No-Go / Conditional Go + lý do |
| ☐ | **Đủ 6 inputs cho PRD** | Section 7 (PRD Kickoff Package) có đầy đủ: tên, mục đích, đối tượng, in-scope, out-of-scope, ràng buộc |

---

## 📋 KIỂM TRA NHANH 7 PHẦN

### 1. Problem Framing (3 điểm)

- ☐ Problem Statement: vấn đề + ai gặp + hậu quả
- ☐ Pain Point có Severity / Frequency / Scope
- ☐ Có baseline metrics (định lượng nếu có)

### 2. Stakeholder Map (3 điểm)

- ☐ Liệt kê ≥ 3 stakeholder chính (name + role + concern)
- ☐ Có Influence/Interest Grid
- ☐ Mỗi stakeholder có thông tin cần nhận từ Discovery

### 3. Opportunity Assessment (2 điểm)

- ☐ Business Value được mô tả (định lượng nếu có)
- ☐ Assumptions đánh dấu `[GIẢ ĐỊNH: ...]`

### 4. Business Solution Options (2 điểm)

- ☐ Có ≥ 2 phương án nghiệp vụ (mô tả + lợi ích + rủi ro + chi phí)
- ☐ Có trade-off analysis + recommendation

### 5. Feasibility & Risk (2 điểm)

- ☐ Feasibility: Technical + Resource + Legal được đánh giá
- ☐ Top 3 risks có mitigation cụ thể

### 6. Prioritization & Decision (2 điểm)

- ☐ Impact/Effort matrix (hoặc scoring ICE/RICE)
- ☐ Go/No-Go rõ ràng + lý do

### 7. PRD Kickoff Package (1 điểm)

- ☐ Đủ 6 inputs cho cc-prd-writer

---

## 🎯 TÓM TẮT ĐIỂM

| Phần | Điểm |
| :--- | :--- |
| 1. Problem Framing | ☐☐☐ /3 |
| 2. Stakeholder Map | ☐☐☐ /3 |
| 3. Opportunity Assessment | ☐☐ /2 |
| 4. Solution Options | ☐☐ /2 |
| 5. Feasibility & Risk | ☐☐ /2 |
| 6. Prioritization | ☐☐ /2 |
| 7. PRD Kickoff | ☐ /1 |
| **Tổng** | **☐/15** |

**Ngưỡng bàn giao:** ≥ 13/15 (87%) + TẤT CẢ CRITICAL phải đạt.

---

## ⚡ SAI LẦM THƯỜNG GẶP

| ❌ Sai | ✅ Đúng |
| :--- | :--- |
| Nhảy thẳng giải pháp, bỏ qua vấn đề | Viết Problem Statement rõ ràng trước |
| Không có baseline metrics | Xác định chỉ số hiện tại để đo improvement |
| Không có stakeholder map | Liệt kê đủ + Influence/Interest Grid |
| Mô tả solution spec (API, DB) trong discovery | Chỉ nêu phương án nghiệp vụ ở mức product direction |
| Không có Go/No-Go | Đưa ra quyết định rõ ràng: Go / No-Go / Conditional |
| Tự suy diễn khi thiếu thông tin | Đặt câu hỏi hoặc ghi `[GIẢ ĐỊNH: ...]` |
| Không đóng gói PRD inputs | Hoàn thành Section 7: PRD Kickoff Package |
