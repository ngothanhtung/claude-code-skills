# PRD Quick Checklist — 1 trang

> Dùng khi review PRD trước khi bàn giao. In ra hoặc mở trên màn hình thứ hai.

---

## ✅ CRITICAL (Phải đạt 100%)

| ✓ | Mục tiêu | Cách kiểm tra |
| :---: | :--- | :--- |
| ☐ | **Không có chi tiết kỹ thuật trong FR** | CTRL+F tìm "API", "database", "endpoint", "schema", "framework", "protocol", "Redis", "SQL", "JWT", "HTTP" — nếu tìm thấy → SAI |
| ☐ | **Out-of-scope liệt kê rõ ràng** | Bảng In-scope/Out-of-scope không được trống, Out-scope ≥ 1 mục |
| ☐ | **Mỗi FR P0/P1 có User Story trong RTM** | Đọc Section 8 (RTM), kiểm tra mỗi FR P0/P1 có cột User Story điền đầy đủ |
| ☐ | **Mỗi User Story có ≥ 3 AC Given-When-Then** | Ít nhất 3 AC: Happy Path, Edge Case, Error Path — mỗi AC phải có đủ 3 dòng Given/When/Then |
| ☐ | **Giả định được đánh dấu** | CTRL+F "[GIẢ ĐỊNH:" — mọi giả định phải xuất hiện ở đây, không đ��ợc lẫn trong nội dung chính |

---

## 📋 KIỂM TRA NHANH 8 PHẦN

### 1. Tổng quan (2 điểm)

- ☐ Tên sản phẩm/tính năng rõ ràng
- ☐ Bảng In-scope / Out-of-scope đầy đủ

### 2. Yêu cầu chức năng (6 điểm)

- ☐ Mỗi FR có mã FR-[số]
- ☐ FR không chứa thuật ngữ kỹ thuật
- ☐ Mỗi FR có đủ: Actor, Trigger, Happy Path, Alt Flow, Expected Outcome
- ☐ Mỗi FR có ≥ 1 Business Rule
- ☐ FR nhóm theo module logic
- ☐ FR đủ nhỏ để test trong 1 Sprint

### 3. NFR (2 điểm)

- ☐ Có ≥ 3 tiêu chí: Hiệu suất, Bảo mật, Khả dụng
- ☐ Mỗi NFR có ngưỡng đo được (số cụ thể)

### 4. UX/UI (2 điểm)

- ☐ Có luồng user chính (text/ASCII)
- ☐ Không chứa wireframe/mockup chi tiết

### 5. Tích hợp (1 điểm)

- ☐ Chỉ ghi tên hệ thống + chức năng, không chỉ định cơ chế kỹ thuật

### 6. User Stories & RTM (4 điểm)

- ☐ FR P0/P1 có US trong RTM
- ☐ Mỗi US đạt INVEST
- ☐ Mỗi US có ≥ 3 AC Given-When-Then
- ☐ RTM đủ cột: FR, Tên, Nguồn, Ưu tiên, US, Phase

### 7. Rủi ro & Giả định (2 điểm)

- ☐ Mỗi rủi ro có Mức độ + Giải pháp
- ☐ Mỗi giả định ghi hậu quả nếu sai

### 8. Tổng thể (1 điểm)

- ☐ Không có giả định tự suy diễn không đánh dấu `[GIẢ ĐỊNH: ...]`

---

## 🎯 TÓM TẮT ĐIỂM

| Phần | Điểm |
| :--- | :--- |
| 1. Tổng quan | ☐☐ /2 |
| 2. FR | ☐☐☐☐☐☐ /6 |
| 3. NFR | ☐☐ /2 |
| 4. UX/UI | ☐☐ /2 |
| 5. Tích hợp | ☐ /1 |
| 6. US & RTM | ☐☐☐☐ /4 |
| 7. Rủi ro | ☐☐ /2 |
| 8. Tổng thể | ☐ /1 |
| **Tổng** | **☐/20** |

**Ngưỡng bàn giao:** ≥ 18/20 (90%) + TẤT CẢ CRITICAL phải đạt.

---

## ⚡ SAI LẦM THƯỜNG GẶP

| ❌ Sai | ✅ Đúng |
| :--- | :--- |
| "Gọi API MoMo qua POST" | "Tạo yêu cầu thanh toán, hiển thị mã QR" |
| "Lưu vào PostgreSQL" | "Lưu thông tin đơn hàng, trạng thái Chờ thanh toán" |
| FR quá lớn: "Quản lý toàn bộ đơn hàng" | FR nhỏ: "Tạo mới đơn hàng", "Xem chi tiết đơn hàng" |
| Không có Out-of-scope | Liệt kê rõ ràng |
| US đứng riêng, không gắn FR | US phải gắn FR trong RTM |
| Tự suy diễn: "Giả sử người dùng..." | Ghi `[GIẢ ĐỊNH: người dùng...]` |
