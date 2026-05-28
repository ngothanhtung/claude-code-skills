# Thiết kế — Dark Theme cho 2 file HTML Product Discovery

**Ngày:** 2026-05-28
**Loại:** Thiết kế giao diện (UI Design)
**Phạm vi:** Chuyển đổi light → dark theme cho 2 file HTML

---

## 1. Tổng quan

**Mục tiêu:** Chuyển 2 file HTML từ light theme sang dark theme cố định, giữ nguyên cấu trúc layout và nội dung, chỉ override CSS.

**Nguyên tắc:**
- Không thay đổi HTML structure, chỉ override CSS
- Giữ nguyên Tailwind config gốc, chỉ đảo semantic colors
- Thuật ngữ chuyên ngành có tooltip khi hover
- Dark theme cố định, không toggle

---

## 2. Bảng màu — Light → Dark

| Token CSS | Light (cũ) | Dark (mới) | Ghi chú |
|---|---|---|---|
| `bg-canvas` | `#ffffff` | `#0f0f0f` | Nền chính body |
| `bg-surface` | `#f7f7f7` | `#1a1a1a` | Card, section nền |
| `bg-surface-soft` | `#fafafa` | `#141414` | Table header, hover |
| `bg-surface-code` | `#1c1c1e` | giữ nguyên | Code block, đã tối |
| `border-hairline` | `#e5e5e5` | `#2a2a2a` | Viền nhẹ |
| `border-hairline-soft` | `#ededed` | `#222222` | Viền mềm |
| `border-hairline-dark` | `#1f1f1f` | giữ nguyên | Đã tối |
| `text-ink` | `#0a0a0a` | `#f0f0f0` | Chữ chính |
| `text-charcoal` | `#1c1c1e` | `#e0e0e0` | Chữ body |
| `text-steel` | `#5a5a5c` | `#a0a0a0` | Chữ mờ, label |
| `text-stone` | `#888888` | `#707070` | Chữ phụ |
| `text-muted` | `#a8a8aa` | `#606060` | Chữ rất mờ |

**Accent colors — giữ nguyên:**
- Mint-green: `#00d4a4`
- Brand-green: `#00d4a4`
- Brand-error: `#d45656`
- Brand-warn: `#c37d0d`
- Brand-tag: `#3772cf`

**Gradient overrides:**
- CRM hero gradient: giữ nguyên (đã là `#1a3d4a → #2d5a4f`)
- Task Management sky gradient: đảo từ `#87a8c8 → #f5e9d8` thành `#1a2530 → #1a251f`

**Semantic adjustments:**
- Badge/Tag backgrounds: tăng opacity từ `0.12` → `0.15` trên nền tối
- Code block `<code>`: giữ nguyên `#1c1c1e` (đã dark)
- Custom scrollbar: track `#1a1a1a`, thumb `#3a3a3a`
- Selection color: `rgba(0, 212, 164, 0.25)`

---

## 3. Hệ thống Tooltip

**Cơ chế:** CSS thuần, không thư viện ngoài.

**Markup:**
```html
<span class="term" data-tip="Tooltip text here">Thuật ngữ</span>
```

**CSS:**
```css
.term {
  border-bottom: 1px dotted currentColor;
  cursor: help;
  position: relative;
}
.term:hover::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #1e1e1e;
  border: 1px solid #2a2a2a;
  color: #e0e0e0;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  max-width: 280px;
  white-space: normal;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease, transform 150ms ease;
  white-space: nowrap;
}
.term:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}
```

**Danh sách thuật ngữ cần tooltip:**

| Thuật ngữ | Giải thích |
|---|---|
| `Stakeholder` | Cá nhân hoặc nhóm có quyền lợi hoặc ảnh hưởng đến dự án |
| `Pain Point` | Vấn đề thực tế mà người dùng gặp phải trong công việc |
| `ROI` | Return on Investment — Tỷ lệ lợi nhuận trên vốn đầu tư |
| `KPI` | Key Performance Indicator — Chỉ số đo lường hiệu suất chính |
| `Baseline Metrics` | Chỉ số nền tảng — giá trị hiện tại trước khi cải tiến |
| `Go / No-Go` | Quyết định tiến hành hoặc dừng lại |
| `MVP` | Minimum Viable Product — Sản phẩm khả thi tối thiểu |
| `MoSCoW` | Must-have, Should-have, Could-have, Won't-have |
| `Sprint` | Chu kỳ phát triển ngắn (1-4 tuần) trong Agile |
| `Backlog` | Danh sách công việc cần làm, sắp xếp theo ưu tiên |
| `SLA` | Service Level Agreement — Thỏa thuận mức dịch vụ |
| `CRUD` | Create, Read, Update, Delete — Bốn thao tác cơ bản |
| `NFR` | Non-Functional Requirements — Yêu cầu phi chức năng |
| `Influence/Interest Grid` | Ma trận đánh giá mức ảnh hưởng và quan tâm của bên liên quan |
| `Mitigation` | Biện pháp giảm thiểu rủi ro |
| `Trade-off` | Sự đánh đổi giữa các lựa chọn |
| `SME` | Subject Matter Expert — Chuyên gia về lĩnh vực liên quan |
| `SaaS` | Software as a Service — Phần mềm dịch vụ, thuê theo tháng |

> Từ phổ biến như Dashboard, Report, User, Admin, Login, Button — **không** cần tooltip.

---

## 4. Cấu trúc file

```
docs/
  dark-theme.css           ← TẠO MỚI: Shared CSS override
  task-management/
    pd.html                ← SỬA: Thêm <link dark-theme.css>
  crm/
    pd.html                ← SỬA: Thêm <link dark-theme.css>
```

---

## 5. Chi tiết từng file

### 5.1 `docs/dark-theme.css` (tạo mới)

Chứa toàn bộ:
- Dark color variable overrides
- Tooltip styles + animation
- Dark gradient overrides
- Badge/tag semantic adjustments
- Scrollbar styling
- Selection styling
- Chart.js canvas dark overrides (transparent bg, grid color `#2a2a2a`)

### 5.2 `docs/crm/pd.html`

- Thêm `<link rel="stylesheet" href="../dark-theme.css" />` vào `<head>`
- Gradient hero band: giữ nguyên (đã dark)
- Sky gradient: đảo sang dark variant
- Tooltip cho: Stakeholder, ROI, KPI, Baseline Metrics, Go/No-Go, MVP, SLA, CRUD

### 5.3 `docs/task-management/pd.html`

- Thêm `<link rel="stylesheet" href="../dark-theme.css" />` vào `<head>`
- Hero gradient sky: đảo từ `#87a8c8 → #f5e9d8` sang `#1a2530 → #1a251f`
- Tooltip cho: MoSCoW, Sprint, Backlog, NFR, MVP, CRUD, SLA, KPI, ROI, Trade-off, Mitigation

---

## 6. Edge Cases

- **Chart.js canvas:** Background transparent, grid color `#2a2a2a`, axis labels màu `#a0a0a0`
- **Inline SVG dùng hex cứng:** Giữ nguyên vì đủ nổi trên dark
- **Code block `<code>`/`<pre>`:** Giữ nguyên nền `#1c1c1e`
- **Badges:** Tăng opacity background từ `0.12` → `0.15`
- **Hover states:** Lighten border-color nhẹ trên dark background
