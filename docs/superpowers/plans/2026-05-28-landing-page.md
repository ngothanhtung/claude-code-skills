# Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tạo trang landing page giới thiệu bộ tài liệu phát triển phần mềm (PRD → User Story → Use Case → SRS) với dark theme, màu accent mint, timeline dọc.

**Architecture:** Trang HTML tĩnh đơn lẻ, dùng Tailwind CSS (CDN) cho styling, Google Fonts (Inter) cho typography, custom CSS inline cho tooltip và timeline connector.

**Tech Stack:** HTML5, Tailwind CSS (CDN), Inter (Google Fonts), SVG icons (inline), vanilla JS cho tooltip.

---

## File Structure

- **Create:** `index.html` — Trang landing page hoàn chỉnh

---

## Task 1: Xây dựng trang index.html

**Files:**
- Create: `index.html`

### Cấu trúc file gồm 5 phần:

**Phần 1 — `<head>`:** Meta tags, Tailwind CDN, Google Fonts (Inter), custom `<style>` cho tooltip và timeline connector.

**Phần 2 — Header:** Tiêu đề "Bộ tài liệu phát triển phần mềm", mô tả ngắn bằng tiếng Việt.

**Phần 3 — Timeline:** Container `max-w-2xl mx-auto` chứa 4 card xếp dọc. Mỗi card gồm:
- Icon SVG bên trái
- Nội dung bên phải: tên giai đoạn (với thuộc tính `data-tooltip`), mô tả, nút "Xem chi tiết"
- Đường kẻ nối mint giữa các card (dùng `border-l-2 border-mint` trên card + `border-l-2 border-mint/30` trên div connector)

**Phần 4 — Footer:** Liên kết GitHub repo.

**Phần 5 — `<script>`:** JavaScript vanilla xử lý tooltip: tạo/thêm phần tử tooltip khi hover vào phần tử có `data-tooltip`, ẩn khi rời chuột.

### Các class Tailwind cần định nghĩa trong Tailwind config (inline script):

```js
colors: {
  'canvas-dark': '#0a0a0a',
  'charcoal': '#1c1c1e',
  'mint': '#00d4a4',
  'mint-deep': '#00b48a',
  'muted': '#a8a8aa',
  'border-dark': '#2a2a2c',
}
```

### Nội dung 4 giai đoạn:

| # | Tên | Icon SVG | Mô tả |
|---|---|---|---|
| 1 | PRD | document icon | *"Trả lời: Xây cái gì? Cho ai? Tại sao? Đây là kim chỉ nam để cả team hiểu cùng một sản phẩm."* |
| 2 | User Story + Acceptance Criteria | user icon | *"Chia nhỏ PRD thành các đơn vị giá trị cho người dùng, đủ nhỏ để team dev làm trong 1 sprint."* |
| 3 | Use Case | flowchart icon | *"Mô tả chi tiết tương tác giữa Actor và System để hoàn thành một mục tiêu cụ thể."* |
| 4 | SRS | gear icon | *"Đặc tả kỹ thuật chi tiết cho team dev/test thực thi. Thường theo chuẩn IEEE 830."* |

### Danh sách thuộc tính `data-tooltip`:

- `data-tooltip="Product Requirements Document — Tài liệu mô tả sản phẩm ở góc độ kinh doanh và người dùng"` (trên "PRD")
- `data-tooltip="Câu chuyện người dùng — mô tả tính năng từ góc nhìn của người dùng cuối"` (trên "User Story")
- `data-tooltip="Tiêu chí nghiệm thu — danh sách điều kiện cụ thể để biết một tính năng đã xong hay chưa"` (trên "Acceptance Criteria")
- `data-tooltip="Bản mô tả chi tiết các bước tương tác giữa người dùng/hệ thống và phần mềm để hoàn thành một mục tiêu"` (trên "Use Case")
- `data-tooltip="Người hoặc hệ thống bên ngoài tương tác với phần mềm"` (trên "Actor")
- `data-tooltip="Software Requirements Specification — Đặc tả yêu cầu phần mềm, tài liệu kỹ thuật chi tiết cho team dev/test"` (trên "SRS")

### Tooltip CSS (custom style block):

```css
[data-tooltip-wrapper] { position: relative; display: inline; }
[data-tooltip-wrapper]:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #2a2a2c;
  border: 1px solid #00d4a4;
  color: #ffffff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 150ms ease, transform 150ms ease;
  pointer-events: none;
  z-index: 50;
  max-width: 320px;
  white-space: normal;
  text-align: left;
}
.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #00d4a4;
}
```

### Timeline connector CSS:

```css
.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 27px;
  top: 100%;
  width: 2px;
  height: 24px;
  background: linear-gradient(to bottom, #00d4a4, #00d4a420);
}
```

### JavaScript tooltip logic:

```js
document.querySelectorAll('[data-tooltip]').forEach(el => {
  const wrapper = document.createElement('span');
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline';
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);

  const tip = document.createElement('span');
  tip.className = 'tooltip';
  tip.textContent = el.dataset.tooltip;
  wrapper.appendChild(tip);
});
```

### Hover card CSS:

```css
.timeline-card {
  transition: border-color 200ms ease, background-color 200ms ease, transform 200ms ease;
}
.timeline-card:hover {
  border-color: #00d4a4 !important;
  background-color: #1e1e20;
  transform: translateX(2px);
}
```

### Nút "Xem chi tiết" CSS:

```css
.btn-outline {
  border: 1px solid #00d4a4;
  color: #00d4a4;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 150ms ease, color 150ms ease;
  display: inline-block;
}
.btn-outline:hover {
  background-color: #00d4a4;
  color: #0a0a0a;
}
```

- [ ] **Viết file `index.html` hoàn chỉnh** với tất cả các phần trên
- [ ] **Commit:** `git add index.html && git commit -m "feat: add landing page with dark theme and timeline layout"`

---

## Task 2: Kiểm tra bằng trình duyệt

**Files:**
- Modify: `index.html` (sửa nếu cần)

- [ ] Mở `index.html` trong trình duyệt (dùng `open` hoặc live server)
- [ ] Kiểm tra: dark theme hiển thị đúng, 4 card timeline dọc, đường kẻ nối mint, hover state hoạt động
- [ ] Kiểm tra: tooltip xuất hiện khi hover vào các thuật ngữ
- [ ] Kiểm tra: responsive trên mobile
- [ ] Sửa nếu có lỗi, commit tiếp nếu cần
