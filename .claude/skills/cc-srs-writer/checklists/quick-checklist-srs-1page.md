# SRS Quick Checklist — 1 trang

> Dùng khi review SRS trước khi bàn giao. In ra hoặc mở trên màn hình thứ hai.

---

## ✅ CRITICAL (Phải đạt 100%)

| ✓ | Mục tiêu | Cách kiểm tra |
| :---: | :--- | :--- |
| ☐ | **Mỗi SRS-[mã] có FR nguồn** | CTRL+F tìm "FR-" — mỗi SRS phần tử phải ghi rõ FR-[mã] nguồn |
| ☐ | **RTM đầy đủ** | Section 5: mọi SRS-[mã] đều có trong bảng RTM, không mồ côi |
| ☐ | **Không tự chọn tech stack** | CTRL+F tìm "Dùng framework", "Sử dụng PostgreSQL/MySQL", "Cloud provider" — nếu có mà chưa confirm → ghi `[CHƯA XÁC ĐỊNH]` |
| ☐ | **Không mở rộng ngoài FR PRD** | So sánh mỗi SRS-[mã] với FR trong PRD — nếu có SRS không có FR nguồn → SAI |
| ☐ | **Không có CI/CD, deployment, monitoring** | CTRL+F tìm "pipeline", "deployment", "monitoring", "Prometheus", "Grafana" — nếu tìm thấy → SAI |
| ☐ | **Không có microservices design** | CTRL+F tìm "microservice", "service decomposition", "service mesh" — nếu tìm thấy → SAI |
| ☐ | **Mỗi NFR có ngưỡng đo được** | CTRL+F tìm "nhanh", "mạnh", "ổn định" — nếu có mà không đi kèm số cụ thể → SAI |
| ☐ | **Mọi `[CHƯA XÁC ĐỊNH]` được ghi nhận** | CTRL+F tìm "CHƯA XÁC ĐỊNH" — liệt kê đầy đủ, không được lẫn trong nội dung chính |

---

## 📋 KIỂM TRA NHANH 7 PHẦN

### 1. Nguồn gốc yêu cầu (3 điểm)

- ☐ Mỗi SRS-[mã] có FR-[mã] nguồn ghi rõ
- ☐ Có RTM liên kết SRS ↔ FR đầy đủ
- ☐ Không có SRS phần tử "mồ côi"

### 2. Giao diện kỹ thuật (5 điểm)

- ☐ Mỗi API có request schema đầy đủ (field, type, required)
- ☐ Mỗi API có response schema (data + meta)
- ☐ Mỗi API có mã lỗi (error code + HTTP status + nguyên nhân)
- ☐ Data model có đầy đủ field + kiểu + ràng buộc
- ☐ Indexes ghi rõ (PK, FK, additional)

### 3. NFR (3 điểm)

- ☐ Mỗi NFR có ngưỡng cụ thể (số đo được)
- ☐ Mỗi NFR có điều kiện đo + phương pháp đo
- ☐ NFR phân biệt rõ 5 loại: Performance, Security, Availability, Scalability, Compatibility

### 4. Giới hạn phạm vi (4 điểm)

- ☐ Không có tech stack tự chọn
- ☐ Không có chức năng vượt FR trong PRD
- ☐ Không có CI/CD, deployment, monitoring
- ☐ Không có microservices, service decomposition

### 5. Tích hợp hệ thống (2 điểm)

- ☐ Mỗi tích hợp có contract rõ (API/message format)
- ☐ Không thêm third-party ngoài PRD

### 6. Quyết định kiến trúc (1 điểm)

- ☐ ADR cho FR cục bộ; quyết định tổng thể chuyển ADD

### 7. Chất lượng tài liệu (2 điểm)

- ☐ Thuật ngữ/từ viết tắt định nghĩa trong Section 1.3
- ☐ Mọi tech choice chưa confirm có `[CHƯA XÁC ĐỊNH]`

---

## 🎯 TÓM TẮT ĐIỂM

| Phần | Điểm |
| :--- | :--- |
| 1. Nguồn gốc yêu cầu | ☐☐☐ /3 |
| 2. Giao diện kỹ thuật | ☐☐☐☐☐ /5 |
| 3. NFR | ☐☐☐ /3 |
| 4. Giới hạn phạm vi | ☐☐☐☐ /4 |
| 5. Tích hợp hệ thống | ☐☐ /2 |
| 6. Quyết định kiến trúc | ☐ /1 |
| 7. Chất lượng tài liệu | ☐☐ /2 |
| **Tổng** | **☐/20** |

**Ngưỡng bàn giao:** ≥ 18/20 (90%) + TẤT CẢ CRITICAL phải đạt.

---

## ⚡ SAI LẦM THƯỜNG GẶP

| ❌ Sai | ✅ Đúng |
| :--- | :--- |
| "Dùng Node.js + PostgreSQL" | Ghi `[CHƯA XÁC ĐỊNH]` hoặc xác nhận |
| Tạo 84 endpoints cho 3 FR | Chỉ mô tả interface cần thiết cho FR |
| "Gửi email qua SendGrid API" | Ghi "email service integration" — provider chỉ ghi nếu confirm |
| Microservices design trong SRS | Chuyển sang ADD hoặc ADR riêng |
| CI/CD pipeline, deployment trong SRS | Tạo tài liệu DevOps/SRE riêng |
| SRS không có PRD/FR nguồn | Hỏi: có PRD/FR/Use Case làm nguồn không? |
| NFR: "Hệ thống phải nhanh" | NFR: "p95 < 200ms, measure bằng k6, load test 50 users" |
