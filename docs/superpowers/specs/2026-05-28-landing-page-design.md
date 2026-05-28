# Landing Page — Bộ tài liệu phát triển phần mềm

## 1. Tổng quan

- **Mục đích:** Trang giới thiệu tổng quan bộ tài liệu phát triển phần mềm (PRD → User Story → Use Case → SRS) — trang tĩnh, đẹp hơn phiên bản README
- **File đích:** `index.html`
- **Framework CSS:** Tailwind CSS (CDN)
- **Font chữ:** Inter (Google Fonts)

---

## 2. Thiết kế hình ảnh

### Màu sắc

| Mục đích | Màu |
|---|---|
| Nền chính | `#0a0a0a` (canvas-dark) |
| Card / Panel | `#1c1c1e` (charcoal) |
| Accent chính | `#00d4a4` (mint-green) |
| Accent nhấn | `#00b48a` (mint-green-deep) |
| Accent nhạt | `#7cebcb` (mint-green-soft) |
| Chữ chính | `#ffffff` |
| Chữ phụ | `#a8a8aa` (muted) |
| Chữ mờ | `#888888` (stone) |
| Viền | `#2a2a2c` |

### Kiểu chữ

- **Font:** Inter (400, 500, 600, 700)
- **Tiêu đề chính:** 32–40px, font-weight 700
- **Tiêu đề card:** 18–20px, font-weight 600
- **Body text:** 14–15px, font-weight 400
- **Mô tả phụ:** 13–14px, font-weight 400, màu muted

---

## 3. Cấu trúc trang

### 3.1 Header

- Tiêu đề chính trang (tên dự án / bộ tài liệu)
- Mô tả ngắn 1–2 câu bằng tiếng Việt
- Căn giữa, khoảng cách padding hợp lý

### 3.2 Thanh tiến trình dọc (Timeline)

4 card xếp theo cột dọc, mỗi card gồm:

- **Icon:** Biểu tượng SVG đặc trưng cho giai đoạn (xem mục 4)
- **Tên giai đoạn:** Thuật ngữ chuyên ngành, kèm tooltip giải thích khi hover (xem mục 5)
- **Mô tả ngắn:** 1–2 câu tiếng Việt, giải thích giai đoạn đó làm gì và tại sao cần nó
- **Nút "Xem chi tiết":** Dẫn đến file tài liệu tương ứng (xem mục 6)

Giữa các card có **đường kẻ dọc màu mint** thể hiện luồng tiến trình (CSS border-left hoặc pseudo-element).

### 3.3 Footer

- Thông tin repo GitHub
- Liên kết đến các trang liên quan

---

## 4. Nội dung 4 giai đoạn

### Giai đoạn 1: PRD (Product Requirements Document)

- **Icon:** Biểu tượng tài liệu / sách mở
- **Mô tả:** *"Trả lời: Xây cái gì? Cho ai? Tại sao? Đây là kim chỉ nam để cả team hiểu cùng một sản phẩm."*
- **Liên kết:** `#` hoặc `docs/crm/pd.html` (trỏ đến file PRD tương ứng)

### Giai đoạn 2: User Story + Acceptance Criteria

- **Icon:** Biểu tượng người dùng / conversation bubble
- **Mô tả:** *"Chia nhỏ PRD thành các đơn vị giá trị cho người dùng, đủ nhỏ để team dev làm trong 1 sprint."*
- **Liên kết:** `#` (trang User Story / template)

### Giai đoạn 3: Use Case

- **Icon:** Biểu tượng sơ đồ / flowchart
- **Mô tả:** *"Mô tả chi tiết tương tác giữa Actor và System để hoàn thành một mục tiêu cụ thể."*
- **Liên kết:** `#`

### Giai đoạn 4: SRS (Software Requirements Specification)

- **Icon:** Biểu tượng bánh răng / code
- **Mô tả:** *"Đặc tả kỹ thuật chi tiết cho team dev/test thực thi. Thường theo chuẩn IEEE 830."*
- **Liên kết:** `#`

---

## 5. Tooltip giải thích thuật ngữ

Tooltip xuất hiện khi hover vào tên giai đoạn hoặc thuật ngữ chuyên ngành.

**Quy tắc:**
- Tooltip có nền `#2a2a2c`, viền `#00d4a4` (1px), bo góc 6px
- Chữ màu trắng, kích thước 12–13px
- Xuất hiện phía trên phần tử (placement: top)
- Animation fade-in nhẹ (opacity transition 150ms)
- Nội dung tooltip bằng tiếng Việt

**Danh sách thuật ngữ cần tooltip:**

| Thuật ngữ | Nội dung tooltip |
|---|---|
| PRD | *Product Requirements Document — Tài liệu mô tả sản phẩm ở góc độ kinh doanh và người dùng* |
| User Story | *Câu chuyện người dùng — mô tả tính năng từ góc nhìn của người dùng cuối* |
| Acceptance Criteria | *Tiêu chí nghiệm thu — danh sách điều kiện cụ thể để biết một tính năng đã "xong" hay chưa* |
| Use Case | *Bản mô tả chi tiết các bước tương tác giữa người dùng/hệ thống và phần mềm để hoàn thành một mục tiêu* |
| Actor | *Người hoặc hệ thống bên ngoài tương tác với phần mềm* |
| SRS | *Software Requirements Specification — Đặc tả yêu cầu phần mềm, tài liệu kỹ thuật chi tiết cho team dev/test* |

---

## 6. Tương tác và trạng thái

### Hover state trên card

- Viền chuyển sang `#00d4a4`
- Background nhấn nhẹ (`#1e1e20`)
- Transition mượt 200ms ease

### Nút "Xem chi tiết"

- Style: outline mint (`border: 1px solid #00d4a4`, text `#00d4a4`)
- Hover: fill mint (`background: #00d4a4`, text `#0a0a0a`)
- Transition 150ms ease

### Tooltip

- Fade-in 150ms khi hover
- Fade-out khi rời chuột

---

## 7. Responsive

- Desktop: 4 card xếp dọc, full width, căn giữa
- Tablet/Mobile: Giảm padding, font size nhỏ hơn, vẫn giữ layout dọc

---

## 8. Công nghệ sử dụng

- **HTML5** — cấu trúc trang
- **Tailwind CSS** (CDN) — styling, dark theme
- **Inter** (Google Fonts) — typography
- **Custom CSS** (inline `<style>`) — tooltip styling, timeline connector line, hover transitions

---

## 9. Checklist triển khai

- [ ] Header với tiêu đề và mô tả ngắn
- [ ] 4 card timeline dọc với icon, tên, mô tả
- [ ] Đường kẻ nối giữa các card (CSS pseudo-element)
- [ ] Tooltip cho tất cả thuật ngữ chuyên ngành
- [ ] Nút "Xem chi tiết" với style outline → fill on hover
- [ ] Footer với liên kết GitHub
- [ ] Responsive trên mobile
- [ ] Không viết tắt, ngôn ngữ tiếng Việt
