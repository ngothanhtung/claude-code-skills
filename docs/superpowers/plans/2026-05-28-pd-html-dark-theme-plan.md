# Dark Theme cho 2 file HTML Product Discovery — Kế hoạch triển khai

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Chuyển 2 file HTML Product Discovery (CRM và Task Management) từ light theme sang dark theme cố định, thêm tooltip cho thuật ngữ chuyên ngành, sử dụng 1 shared CSS file.

**Architecture:** Shared CSS file (`dark-theme.css`) chứa toàn bộ override màu + tooltip system. 2 file HTML import CSS này, không thay đổi HTML structure. Tooltip dùng CSS thuần (`::after` + `attr(data-tip)`), không thư viện ngoài.

**Tech Stack:** CSS thuần, HTML tĩnh, Tailwind (giữ nguyên config gốc).

---

## File Structure

```
docs/
  dark-theme.css               ← TẠO MỚI
  task-management/pd.html      ← SỬA (thêm link CSS, wrap tooltip terms)
  crm/pd.html                 ← SỬA (thêm link CSS, wrap tooltip terms)
```

---

## Task 1: Tạo `docs/dark-theme.css`

**Files:**
- Create: `docs/dark-theme.css`

- [ ] **Step 1: Tạo file `dark-theme.css` với toàn bộ CSS override**

```css
/* ============================================
   DARK THEME — Product Discovery HTML
   Override light semantic colors for dark mode
   ============================================ */

/* ── 1. Body & Background ─────────────────── */
body,
.bg-canvas {
  background-color: #0f0f0f !important;
  color: #f0f0f0;
}

.bg-surface {
  background-color: #1a1a1a !important;
}

.bg-surface-soft {
  background-color: #141414 !important;
}

.bg-surface-code {
  background-color: #1c1c1e !important;
}

/* ── 2. Borders / Hairlines ────────────────── */
.border-hairline,
.border-hairline-soft {
  border-color: #2a2a2a !important;
}

.border-hairline-soft {
  border-color: #222222 !important;
}

/* ── 3. Text Colors ───────────────────────── */
.text-ink {
  color: #f0f0f0 !important;
}

.text-charcoal {
  color: #e0e0e0 !important;
}

.text-steel {
  color: #a0a0a0 !important;
}

.text-stone {
  color: #707070 !important;
}

.text-muted {
  color: #606060 !important;
}

/* ── 4. Nav & Header ──────────────────────── */
header,
header nav,
nav {
  background-color: #0f0f0f !important;
  border-color: #2a2a2a !important;
}

/* ── 5. Sidebar ───────────────────────────── */
aside,
.sidebar-item {
  color: #a0a0a0 !important;
}

.sidebar-item:hover {
  background-color: #1a1a1a !important;
  color: #f0f0f0 !important;
}

.sidebar-item.active {
  background-color: #1a1a1a !important;
  color: #f0f0f0 !important;
}

aside nav .text-muted {
  color: #606060 !important;
}

aside nav .text-steel {
  color: #a0a0a0 !important;
}

/* ── 6. Tables ───────────────────────────── */
.table-header {
  background-color: #141414 !important;
}

.table-row:not(:last-child) {
  border-color: #2a2a2a !important;
}

table th,
table td {
  border-color: #2a2a2a !important;
}

/* ── 7. Cards & Sections ─────────────────── */
section,
.bg-canvas {
  background-color: #0f0f0f !important;
}

.bg-surface,
.bg-surface-soft {
  background-color: #1a1a1a !important;
}

/* Hero gradient overrides */
.gradient-hero {
  background: linear-gradient(135deg, #1a3d4a 0%, #2d5a4a 100%) !important;
}

/* Task Management sky gradient → dark variant */
[style*="87a8c8"] {
  background: linear-gradient(180deg, #1a2530 0%, #1a251f 100%) !important;
}

/* ── 8. Badges & Tags ─────────────────────── */
/* Opacity bump: 0.12 → 0.15 for dark readability */
.badge-green,
.tag-green {
  background-color: rgba(0, 212, 164, 0.15) !important;
  color: #00d4a4 !important;
}

.badge-red,
.tag-red {
  background-color: rgba(212, 86, 86, 0.15) !important;
  color: #d45656 !important;
}

.badge-blue,
.tag-blue {
  background-color: rgba(55, 114, 207, 0.15) !important;
  color: #3772cf !important;
}

.badge-orange,
.tag-orange {
  background-color: rgba(195, 125, 13, 0.15) !important;
  color: #c37d0d !important;
}

.badge-gray {
  background-color: #1a1a1a !important;
  color: #a0a0a0 !important;
}

/* ── 9. Buttons ──────────────────────────── */
.bg-ink {
  background-color: #f0f0f0 !important;
  color: #0f0f0f !important;
}

.text-white,
.text-white\/70,
.text-white\/80 {
  color: #f0f0f0 !important;
}

/* ── 10. Scrollbar ────────────────────────── */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #3a3a3a;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4a4a4a;
}

/* ── 11. Selection ────────────────────────── */
::selection {
  background-color: rgba(0, 212, 164, 0.25) !important;
}

/* ── 12. Code & Mono ─────────────────────── */
code,
.font-mono,
code-inline,
.bg-surface-code {
  background-color: #1c1c1e !important;
  color: #e0e0e0 !important;
}

/* Inline code in text */
p code,
li code,
td code {
  background-color: #1c1c1e !important;
  color: #00d4a4 !important;
}

/* Code inside light containers */
.bg-canvas code,
.bg-surface code {
  background-color: #1c1c1e !important;
  color: #00d4a4 !important;
}

/* ── 13. Chart.js Canvas Dark Overrides ──── */
canvas {
  background-color: transparent !important;
}

/* Chart grid lines */
canvas {
  filter: none;
}

/* Override chart container bg if any */
.chart-container,
.chart-container-sm,
.chart-container-lg {
  background-color: transparent !important;
}

/* ── 14. Footer ─────────────────────────── */
footer {
  border-color: #2a2a2a !important;
  background-color: #0f0f0f !important;
}

/* ── 15. Hover States ─────────────────────── */
a:hover {
  color: #f0f0f0 !important;
}

.card-hover:hover {
  border-color: rgba(0, 212, 164, 0.3) !important;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.3) !important;
}

/* ── 16. TOC Items ────────────────────────── */
.toc-item {
  color: #a0a0a0 !important;
}

.toc-item:hover {
  color: #f0f0f0 !important;
}

.toc-item.active {
  color: #f0f0f0 !important;
  border-color: #00d4a4 !important;
}

/* ── 17. Priority / Severity Bars ─────────── */
.priority-bar {
  opacity: 0.8;
}

/* ── 18. Section dividers ─────────────────── */
.section-divider {
  border-color: #2a2a2a !important;
}

/* ── 19. Influence/Interest Grid backgrounds ─ */
.bg-green-50 {
  background-color: rgba(0, 212, 164, 0.08) !important;
}

.bg-amber-50 {
  background-color: rgba(195, 125, 13, 0.08) !important;
}

.bg-blue-50 {
  background-color: rgba(55, 114, 207, 0.08) !important;
}

.bg-gray-50 {
  background-color: #1a1a1a !important;
}

/* ── 20. Quality checklist ────────────────── */
input[type="checkbox"] {
  accent-color: #00d4a4;
}

label.cursor-pointer {
  cursor: pointer;
}

/* ── 21. Form inputs ──────────────────────── */
input,
textarea,
select {
  background-color: #1a1a1a !important;
  border-color: #2a2a2a !important;
  color: #f0f0f0 !important;
}

/* ── 22. Breadcrumbs ──────────────────────── */
.bg-surface-soft {
  background-color: #141414 !important;
}

/* ============================================
   TOOLTIP SYSTEM
   ============================================ */

.term {
  border-bottom: 1px dotted currentColor;
  cursor: help;
  position: relative;
  display: inline;
}

.term:hover::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #1e1e1e;
  border: 1px solid #2a2a2a;
  color: #e0e0e0;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  max-width: 300px;
  white-space: normal;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease, transform 150ms ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.4;
}

.term:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}

/* Tooltip arrow (optional small triangle) */
.term:hover::before {
  content: '';
  position: absolute;
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #2a2a2a;
  z-index: 10000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease;
}

.term:hover::before {
  opacity: 1;
}
```

- [ ] **Step 2: Commit**

```bash
git add docs/dark-theme.css
git commit -m "$(cat <<'EOF'
feat: add shared dark theme CSS override

- Dark background colors (canvas, surface, borders)
- Dark text colors (ink, charcoal, steel, stone, muted)
- Badge/tag opacity adjustments for dark readability
- Custom scrollbar styling
- Selection highlight color
- Chart.js canvas transparent override
- Tooltip system with ::after + attr(data-tip)
- Hover state adjustments

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Cập nhật `docs/crm/pd.html`

**Files:**
- Modify: `docs/crm/pd.html` — thêm link CSS vào `<head>`, wrap thuật ngữ bằng `<span class="term" data-tip="...">`

**Thuật ngữ cần tooltip trong CRM file:**
- `Stakeholder` → "Cá nhân hoặc nhóm có quyền lợi hoặc ảnh hưởng đến dự án"
- `Pain Point` → "Vấn đề thực tế mà người dùng gặp phải trong công việc"
- `Baseline Metrics` → "Chỉ số nền tảng — giá trị hiện tại trước khi cải tiến"
- `Go / No-Go` → "Quyết định tiến hành hoặc dừng lại"
- `MVP` (Minimum Viable Product) → "Sản phẩm khả thi tối thiểu — phiên bản cơ bản nhất để kiểm chứng giả thuyết"
- `ROI` → "Return on Investment — Tỷ lệ lợi nhuận trên vốn đầu tư"
- `KPI` → "Key Performance Indicator — Chỉ số đo lường hiệu suất chính"
- `SLA` → "Service Level Agreement — Thỏa thuận mức dịch vụ, cam kết về uptime và hiệu năng"
- `CRUD` → "Create, Read, Update, Delete — Bốn thao tác cơ bản trên dữ liệu"
- `SaaS` → "Software as a Service — Phần mềm dịch vụ, thuê theo tháng hoặc năm"

- [ ] **Step 1: Thêm link `dark-theme.css` vào `<head>`**

Thêm sau dòng `<link href="https://fonts.googleapis.com...` (trước `<script>` đầu tiên):

```html
  <link rel="stylesheet" href="../dark-theme.css" />
```

- [ ] **Step 2: Wrap các thuật ngữ trong file bằng `<span class="term" data-tip="...">`**

Tìm và thay thế từng thuật ngữ. Ví dụ:
- `Stakeholder` trong text "Stakeholder Map", "Stakeholder Identification" → bọc riêng từ "Stakeholder"
- `Pain Point` trong "Pain Point Mapping" → bọc riêng
- `Baseline Metrics` → bọc riêng
- `Go / No-Go` → bọc riêng
- `MVP` → bọc riêng
- `ROI` → bọc riêng
- `KPI` → bọc riêng
- `SLA` → bọc riêng
- `CRUD` → bọc riêng
- `SaaS` → bọc riêng

**Lưu ý:** Chỉ wrap từ/thuật ngữ, không wrap cả cụm. Ví dụ:
- `"Stakeholder Map"` → `"<span class="term" data-tip="...">Stakeholder</span> Map"`
- `"Baseline Metrics"` → `"<span class="term" data-tip="...">Baseline Metrics</span>"`
- `"Go / No-Go Recommendation"` → `"<span class="term" data-tip="...">Go / No-Go</span> Recommendation"`

**Danh sách đầy đủ các vị trí cần thay (tìm trong file):**

1. Tiêu đề section `"2. Stakeholder Map"` → `"2. <span class="term" data-tip="Cá nhân hoặc nhóm có quyền lợi hoặc ảnh hưởng đến dự án">Stakeholder</span> Map"`
2. Tiêu đề `"2.1 Stakeholder Identification"` → bọc "Stakeholder"
3. `"2.2 Influence / Interest Grid"` → bọc `"Influence / Interest Grid"` với tip "Ma trận đánh giá mức ảnh hưởng và quan tâm của bên liên quan"
4. `"Pain Point"` → bọc "Pain Point"
5. `"1.3 Baseline Metrics"` → bọc "Baseline Metrics"
6. `"6.2 Go / No-Go Recommendation"` → bọc "Go / No-Go"
7. `"Option B: SaaS CRM"` → bọc "SaaS"
8. `"Sales Manager"`, `"Sales Rep"`, `"Customer Support"` → KHÔNG cần tooltip (tự giải thích)
9. `"Technical"`, `"Resource"`, `"Legal/Compliance"` → KHÔNG cần tooltip
10. `"Impact"`, `"Effort"`, `"Time-to-value"`, `"Risk"` → KHÔNG cần tooltip (tự giải thích)
11. `"Phase 1 MVP"` → bọc "MVP"
12. `"PIPL compliance"` → KHÔNG cần tooltip
13. `"Role-based access control"` → KHÔNG cần tooltip
14. `"Go"` trong recommendation box → bọc "Go" với tip "Quyết định tiến hành"
15. `"No-Go"` (nếu có) → bọc với tip "Quyết định dừng lại"
16. `"Quick Stats"` → KHÔNG cần tooltip
17. `"Recommended"`, `"Alternative"` → KHÔNG cần tooltip

**CRM-specific terms cần tooltip:**
- `Pipeline` → "Quy trình theo dõi khách hàng từ lead đến deal đóng"
- `Lead` → "Khách hàng tiềm năng — người đã thể hiện quan tâm nhưng chưa mua"
- `Conversion rate` → "Tỷ lệ chuyển đổi — phần trăm lead trở thành khách hàng"

- [ ] **Step 3: Commit**

```bash
git add docs/crm/pd.html
git commit -m "$(cat <<'EOF'
feat: apply dark theme to CRM Product Discovery HTML

- Import shared dark-theme.css
- Wrap business terms (Stakeholder, Pain Point, Baseline Metrics,
  Go/No-Go, MVP, SaaS, Pipeline, Lead, Conversion rate) with
  tooltip spans
- No structural HTML changes

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Cập nhật `docs/task-management/pd.html`

**Files:**
- Modify: `docs/task-management/pd.html` — thêm link CSS, wrap thuật ngữ

**Thuật ngữ cần tooltip trong Task Management file:**
- `MoSCoW` → "Must-have, Should-have, Could-have, Won't-have — phương pháp phân loại ưu tiên"
- `Sprint` → "Chu kỳ phát triển ngắn (thường 1-4 tuần) trong Agile"
- `Backlog` → "Danh sách công việc cần làm, được sắp xếp theo ưu tiên"
- `NFR` → "Non-Functional Requirements — Yêu cầu phi chức năng: hiệu năng, bảo mật, khả năng mở rộng"
- `MVP` → "Minimum Viable Product — Sản phẩm khả thi tối thiểu"
- `SLA` → "Service Level Agreement — Thỏa thuận mức dịch vụ"
- `ROI` → "Return on Investment — Tỷ lệ lợi nhuận trên vốn đầu tư"
- `KPI` → "Key Performance Indicator — Chỉ số đo lường hiệu suất chính"
- `Trade-off` → "Sự đánh đổi — chọn cái này thì mất cái kia"
- `Mitigation` → "Biện pháp giảm thiểu rủi ro"
- `QA` → "Quality Assurance — Đảm bảo chất lượng sản phẩm"
- `CRUD` → "Create, Read, Update, Delete — Bốn thao tác cơ bản trên dữ liệu"
- `SME` → "Subject Matter Expert — Chuyên gia về lĩnh vực liên quan"
- `Sprint Planning` → bọc riêng "Sprint"

- [ ] **Step 1: Thêm link `dark-theme.css` vào `<head>`**

Tìm thẻ `</style>` đầu tiên (trước `</head>`), thêm link CSS vào TRƯỚC nó:

```html
  <link rel="stylesheet" href="../dark-theme.css" />
```

**Vị trí chính xác:** Trong file `task-management/pd.html`, tìm:
```html
  </style>
</head>
```
Thay thành:
```html
  <link rel="stylesheet" href="../dark-theme.css" />
  </style>
</head>
```

- [ ] **Step 2: Wrap các thuật ngữ trong file**

**Danh sách đầy đủ các vị trí cần thay:**

1. `"MoSCoW"` → `"<span class="term" data-tip="Must-have, Should-have, Could-have, Won't-have — phương pháp phân loại ưu tiên">MoSCoW</span>"`
2. `"Sprint Planning"` → bọc "Sprint" riêng
3. `"Sprint"` (nếu xuất hiện riêng) → bọc
4. `"Backlog"` → `"<span class="term" data-tip="Danh sách công việc cần làm, được sắp xếp theo ưu tiên">Backlog</span>"`
5. `"MVP"` → `"<span class="term" data-tip="Minimum Viable Product — Sản phẩm khả thi tối thiểu, phiên bản cơ bản nhất để kiểm chứng giả thuyết">MVP</span>"`
6. `"SLA"` → `"<span class="term" data-tip="Service Level Agreement — Thỏa thuận mức dịch vụ, cam kết về uptime và hiệu năng">SLA</span>"`
7. `"ROI"` → `"<span class="term" data-tip="Return on Investment — Tỷ lệ lợi nhuận trên vốn đầu tư">ROI</span>"`
8. `"KPI"` → `"<span class="term" data-tip="Key Performance Indicator — Chỉ số đo lường hiệu suất chính">KPI</span>"`
9. `"Trade-off"` → `"<span class="term" data-tip="Sự đánh đổi — chọn cái này thì mất cái kia">Trade-off</span>"`
10. `"Mitigation"` → `"<span class="term" data-tip="Biện pháp giảm thiểu rủi ro">Mitigation</span>"`
11. `"QA"` (trong "QA Engineer") → `"<span class="term" data-tip="Quality Assurance — Đảm bảo chất lượng sản phẩm">QA</span>"`
12. `"CRUD"` → `"<span class="term" data-tip="Create, Read, Update, Delete — Bốn thao tác cơ bản trên dữ liệu">CRUD</span>"`
13. `"SME"` → `"<span class="term" data-tip="Subject Matter Expert — Chuyên gia về lĩnh vực liên quan">SME</span>"`
14. `"NFR"` → `"<span class="term" data-tip="Non-Functional Requirements — Yêu cầu phi chức năng: hiệu năng, bảo mật, khả năng mở rộng">NFR</span>"`
15. `"Impact / Effort Matrix"` → bọc "Impact / Effort Matrix" với tip "Ma trận đánh giá tác động và công sức cần thiết"
16. `"Go / No-Go"` → bọc tương tự
17. `"Influence/Interest Grid"` → bọc
18. `"ROI" (trong 6 inputs)` → bọc
19. `"OKR"` → `"<span class="term" data-tip="Objectives and Key Results — Mục tiêu và kết quả then chốt">OKR</span>"`
20. `"CAGR"` → `"<span class="term" data-tip="Compound Annual Growth Rate — Tỷ lệ tăng trưởng kép hàng năm">CAGR</span>"`
21. `"NPS"` → `"<span class="term" data-tip="Net Promoter Score — Chỉ số đo lường mức độ hài lòng và trung thành của khách hàng">NPS</span>"`
22. `"Gantt"` (trong "Biểu đồ Gantt") → `"<span class="term" data-tip="Biểu đồ Gantt — dạng biểu đồ thanh ngang thể hiện tiến độ và phụ thuộc công việc theo thời gian">Gantt</span>"`
23. `"Webhook"` → `"<span class="term" data-tip="Cơ chế thông báo tự động từ server khi có sự kiện xảy ra, thay vì client phải liên tục hỏi">Webhook</span>"`
24. `"WebSocket"` → `"<span class="term" data-tip="Giao thức kết nối hai chiều thời gian thực giữa client và server">WebSocket</span>"`
25. `"SSE"` → `"<span class="term" data-tip="Server-Sent Events — server tự động gửi dữ liệu đến client qua HTTP, một chiều">SSE</span>"`
26. `"GDPR"` → `"<span class="term" data-tip="General Data Protection Regulation — Quy định bảo vệ dữ liệu cá nhân của Liên minh Châu Âu">GDPR</span>"`
27. `"PIPL"` → `"<span class="term" data-tip="Personal Information Protection Law — Luật bảo vệ thông tin cá nhân của Việt Nam">PIPL</span>"`
28. `"C-Level"` → `"<span class="term" data-tip="C-Level — nhóm quản lý cấp cao: CEO, CTO, CFO, COO...">C-Level</span>"`
29. `"SMB"` → `"<span class="term" data-tip="Small and Medium Business — Doanh nghiệp vừa và nhỏ">SMB</span>"`
30. `"APAC"` → `"<span class="term" data-tip="Asia-Pacific — Khu vực châu Á-Thái Bình Dương">APAC</span>"`
31. `"CTO"` → `"<span class="term" data-tip="Chief Technology Officer — Giám đốc kỹ thuật">CTO</span>"`
32. `"PM"` (trong "Project Manager") → `"<span class="term" data-tip="Project Manager — Quản lý dự án, chịu trách nhiệm tiến độ và nguồn lực">PM</span>"`
33. `"UX"` → `"<span class="term" data-tip="User Experience — Trải nghiệm người dùng">UX</span>"`
34. `"FE"` (Frontend) → `"<span class="term" data-tip="Frontend — Phần giao diện người dùng (client-side)">FE</span>"`
35. `"BE"` (Backend) → `"<span class="term" data-tip="Backend — Phần xử lý phía server (server-side)">BE</span>"`

**KHÔNG cần tooltip:** Dashboard, Report, User, Admin, Login, Button, List, Kanban, Calendar, View, Menu, Filter, Sort, Create, Update, Delete, Team, Task, Project, Document, Meeting, Timeline, Chart, Graph, Table, Badge, Tag, Status, Priority, Date, Time, Name, Email, Phone, Address, Company, Customer, Client, Manager, Lead, Deal, Opportunity, Campaign, Email, Notification, Settings, Profile, Password, Login, Logout, Search, Export, Import, Backup, Restore, Version, Release, Deploy, Build, Test, Review, Approve, Reject, Assign, Comment, Mention, Attachment, Link, URL, API, REST, JSON, XML, SQL, Database, Server, Client, Browser, Mobile, Desktop, Tablet, App, Version, Feature, Bug, Issue, Ticket, Epic, Story, Theme, Template, Layout, Header, Footer, Sidebar, Modal, Popup, Toast, Alert, Error, Warning, Success, Info, Debug, Log, Trace, Config, Environment, Production, Development, Staging, Demo, Trial, Free, Paid, Premium, Enterprise, Starter, Basic, Standard, Advanced, Professional, Team, Individual, Personal, Business, Corporate, Government, Education, Healthcare, Finance, E-commerce, Retail, SaaS, PaaS, IaaS, Cloud, On-premise, Hybrid, Mobile-first, Responsive, Adaptive, Progressive, Offline-first.

- [ ] **Step 3: Commit**

```bash
git add docs/task-management/pd.html
git commit -m "$(cat <<'EOF'
feat: apply dark theme to Task Management Product Discovery HTML

- Import shared dark-theme.css
- Wrap 35+ business terms with tooltip spans (MoSCoW, Sprint,
  Backlog, NFR, MVP, SLA, ROI, KPI, Trade-off, Mitigation,
  QA, CRUD, SME, Gantt, Webhook, WebSocket, SSE, GDPR,
  PIPL, and more)
- No structural HTML changes

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Verify — Mở cả 2 file trong trình duyệt

**Files:** Kiểm tra trực quan cả 2 file.

- [ ] **Step 1: Mở `docs/crm/pd.html` trong trình duyệt**

```bash
open docs/crm/pd.html
```

- [ ] **Step 2: Mở `docs/task-management/pd.html` trong trình duyệt**

```bash
open docs/task-management/pd.html
```

- [ ] **Step 3: Kiểm tra các điểm sau:**

1. **Nền tối:** Body background phải là `#0f0f0f`, không còn nền trắng
2. **Chữ đọc được:** Chữ chính phải sáng, không tối quá
3. **Accent colors nổi bật:** Mint-green `#00d4a4` phải hiển thị rõ trên nền tối
4. **Tooltip hoạt động:** Hover vào từ có gạch chân chấm → tooltip hiện lên với animation
5. **Badges/Tags:** Nền badge đủ đậm để text bên trong đọc được
6. **Charts:** Chart.js hiển thị đúng màu, không có nền trắng lạ
7. **Code blocks:** Giữ nguyên nền tối `#1c1c1e`
8. **Gradient hero:** CRM gradient giữ nguyên, Task Management gradient về dark variant
9. **Scrollbar:** Scrollbar tối màu, không sáng
10. **Không break layout:** Tất cả layout, spacing, typography giữ nguyên

- [ ] **Step 4: Commit verification**

```bash
git add -A
git commit -m "$(cat <<'EOF'
chore: verify dark theme implementation

Reviewed both HTML files in browser:
- Background colors inverted to dark
- All accent colors visible on dark
- Tooltips working with animation
- Badges readable on dark background
- Charts rendering correctly
- Code blocks preserved dark
- No layout regressions

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review Checklist

- [ ] **Spec coverage:** Đọc lại spec, kiểm tra từng mục:
  - [x] Dark color overrides đầy đủ (canvas, surface, text, borders)
  - [x] Accent colors giữ nguyên (mint-green, error, warn, tag)
  - [x] Gradient overrides (CRM + Task Management)
  - [x] Badge/tag opacity bump
  - [x] Scrollbar styling
  - [x] Selection color
  - [x] Chart.js canvas overrides
  - [x] Tooltip CSS hoàn chỉnh
  - [x] Tooltip markup cho CRM (Stakeholder, Pain Point, Baseline Metrics, Go/No-Go, MVP, SaaS, Pipeline, Lead, Conversion rate)
  - [x] Tooltip markup cho Task Management (MoSCoW, Sprint, Backlog, NFR, MVP, SLA, ROI, KPI, Trade-off, Mitigation, QA, CRUD, SME, + 20+ thuật ngữ khác)
  - [x] Shared CSS file approach
  - [x] No structural HTML changes
- [ ] **Placeholder scan:** Không có TBD, TODO, "fill in", "similar to", placeholder code
- [ ] **Type consistency:** CSS tokens nhất quán xuyên suốt
- [ ] **Commands verified:** Tất cả `git add`/`git commit` commands đúng syntax
