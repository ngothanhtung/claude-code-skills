# Plan — Landing Page Bamboo Travel

## Tóm tắt yêu cầu

- **Techstack:** HTML + CSS + Tailwind CSS (CDN)
- **Ngành/Niche:** Agency du lịch Việt Nam
- **Thương hiệu:** Bamboo Travel
- **Target:** Khách hàng trẻ, Gen Z
- **Tone:** Trẻ trung + Tối giản
- **Màu sắc:** Tự đề xuất theo ngành du lịch + tên thương hiệu
- **Sections:** Navbar, Hero, Problem, Solution, Benefits, Detail, Social Proof, Pricing, FAQ, Footer
- **Giá / Ưu đãi:**
  - Trung bình: 5.000.000₫
  - Khuyến mãi ngày thường: 3.000.000₫
  - Cao điểm: 7.000.000₫

## Design System

**Inspiration chính:** Airbnb (warm, photography-led, generous whitespace, friendly rounded UI).

**Màu sắc:**

- **Primary:** `#ff385c` (Airbnb Rausch) — CTA chính, trust signal, năng động trẻ trung.
- **Primary Active:** `#e00b41`
- **Secondary / Bamboo:** `#2d9c7e` (Bamboo Green) — gắn tên thương hiệu, dùng cho icon background, badge, hover link.
- **Ink:** `#222222`
- **Body:** `#3f3f3f`
- **Muted:** `#6a6a6a`
- **Hairline:** `#dddddd`
- **Canvas:** `#ffffff`
- **Surface Soft:** `#f7f7f7`

**Typography:**

- **Display/Headings:** `Plus Jakarta Sans` (trẻ trung, tối giản, phù hợp Gen Z).
- **Body:** `Inter`.
- **Scale:**
  - Hero h1: 40–48px (mobile 32–36px), weight 700.
  - Section h2: 28–32px, weight 700.
  - Card title: 18–20px, weight 600.
  - Body: 16px/1.6.
  - Small/caption: 14px.

**Shape & Spacing:**

- Border radius button: `8px` (hoặc `9999px` cho pill CTA phụ).
- Cards radius: `16px`.
- Section padding: `80px` desktop / `48px` mobile.
- Container max-width: `1280px`.

## Cấu trúc 10 Sections + Copy chính

### 1. Navbar

- Logo trái: Bamboo Travel (icon tre + text).
- Menu: Trang chủ, Tour, Điểm đến, Về chúng tôi.
- CTA phải: "Đặt lịch tư vấn" (pill Rausch).
- Hamburger mobile.

### 2. Hero

- **Headline:** "Khám phá Việt Nam theo cách của Gen Z — từ 3 triệu cho chuyến đi đáng nhớ"
- **Sub-headline:** Tour trọn gói, lịch trình tự do, không ẩn phí. Bamboo Travel lo từ A-Z.
- **CTA chính:** "Xem tour hot" + "Tư vấn miễn phí".
- **Trust signal:** "+12.000 bạn trẻ đã đi cùng Bamboo" + 5 sao.
- Background: gradient hoặc placeholder hero image du lịch Việt Nam (Hạ Long/Sapa/Mộc Châu).

### 3. Problem (Nỗi đau)

4 pain points dành cho Gen Z:

1. "Muốn đi nhưng không biết bắt đầu từ đâu."
2. "Sợ tour gượng ép, đi theo đoàn đông đúc."
3. "Giá ẩn phí, phát sinh ngoài dự kiến."
4. "Lịch trình rườm rà, không có thời gian sống ảo."

### 4. Solution

Giới thiệu Bamboo Travel:

- Tour thiết kế riêng cho Gen Z.
- Lịch trình linh hoạt, thời gian check-in đẹp.
- Giá trọn gói, không phát sinh.
- Hỗ trợ 24/7 trên nhóm chat.

### 5. Benefits (Lợi ích)

4 cards:

1. **Tiết kiệm thời gian** — "Lịch trình tối ưu, không đi lòng vòng."
2. **Chi phí minh bạch** — "Trọn gói từ 3 triệu, không phí ẩn."
3. **Cộng đồng Gen Z** — "Đi cùng bạn bè mới, vibe hợp gu."
4. **Ảnh đẹp mỗi ngày** — "Spot check-in được chọn lọc, sẵn sàng sống ảo."

### 6. Detail (Chi tiết dịch vụ)

3 gói tour nổi bật:

1. **Tour ngày thường** — 3.000.000₫ (giá gốc 5.000.000₫). 3N2Đ, nhóm 8–16 người, xe đời mới, homestay đẹp.
2. **Tour cao điểm** — 7.000.000₫. 4N3Đ, điểm đến hot, nghỉ dưỡng chất lượng.
3. **Tour private** — Báo giá theo nhóm. Linh hoạt lịch trình, photographer riêng.

### 7. Social Proof

- Stats: 12.000+ khách, 4.9/5 đánh giá, 50+ điểm đến, 98% khách quay lại.
- 3 testimonials từ Gen Z (tên, tuổi, điểm đến, quote ngắn).

### 8. Pricing

Bảng giá 3 gói với gói "Ngày thường" làm nổi bật (recommended):

- Hiển thị giá gốc gạch ngang + giá khuyến mãi.
- CTA "Đặt tour ngay" trên mỗi card.
- Cam kết hoàn tiền nếu không hài lòng.

### 9. FAQ

5–7 câu hỏi phổ biến:

1. Giá đã bao gồm những gì?
2. Có được hủy/tổ chức riêng không?
3. Nhóm đi tối đa bao nhiêu người?
4. Có hỗ trợ trả góp không?
5. Lịch trình có linh hoạt không?
6. Cần mang theo gì?

### 10. Footer

- Logo + slogan: "Khám phá Việt Nam, theo cách của bạn."
- Liên kết nhanh: Tour, Về chúng tôi, Blog, Chính sách.
- Liên hệ: SĐT, email, địa chỉ.
- Social: Facebook, Instagram, TikTok, YouTube.
- Copyright 2026 Bamboo Travel.

## Animation & Icons

**Animation (Animate.css + Intersection Observer):**

- Hero headline: `fadeInDown`.
- Hero CTA: `pulse` hoặc `fadeInUp`.
- Section titles: `fadeInUp` khi scroll vào viewport.
- Cards: `fadeInUp` với stagger delay.
- Problem items: `fadeInLeft` / `fadeInRight` xen kẽ.
- Pricing recommended card: `bounceIn`.
- Stats counter: countUp JS.
- FAQ accordion: `fadeInDown` khi expand.

**Icons (Lucide):**

- Navbar: `Menu`, `X`
- Hero: `ArrowRight`, `Sparkles`
- Problem: `AlertTriangle`, `XCircle`
- Solution: `CheckCircle2`, `Lightbulb`
- Benefits: `Clock`, `Wallet`, `Users`, `Camera`
- Detail: `MapPin`, `Bus`, `Bed`, `Camera`
- Social Proof: `Star`, `Quote`, `Users`
- Pricing: `Check`, `Tag`, `Zap`, `Crown`
- FAQ: `ChevronDown`, `HelpCircle`
- Footer: `Mail`, `Phone`, `MapPin`

## Cấu trúc file

```
/Users/tony/GitHub/claude-code-skills/.claude/skills/cc-landing-page-generator/output/
└── bamboo-travel/
    ├── index.html          # Single-file landing page
    └── README.md           # Hướng dẫn chạy/deploy
```

Sử dụng Tailwind CSS CDN, Animate.css CDN, Lucide CDN, Google Fonts (Plus Jakarta Sans + Inter).

## Checklist trước khi xuất bản

- [ ] Techstack đúng: HTML + Tailwind CSS CDN.
- [ ] Đủ 10 sections theo yêu cầu.
- [ ] Responsive 3 breakpoints: desktop / tablet / mobile.
- [ ] Headline đúng công thức chuyển đổi.
- [ ] CTA nổi bật ở Hero, Pricing, Navbar, Footer.
- [ ] Pricing hiển thị giá gốc gạch ngang + giá KM.
- [ ] FAQ accordion hoạt động.
- [ ] Animation scroll-triggered mượt mà.
- [ ] Navbar scroll blur / hamburger mobile.
- [ ] Code gọn gàng, comment rõ ràng.

## Bước tiếp theo

Sau khi user duyệt plan, sẽ:

1. Tạo thư mục `output/bamboo-travel/`.
2. Viết file `index.html` đầy đủ 10 sections theo design system trên.
3. Viết `README.md` hướng dẫn mở file và deploy.
4. Self-review checklist và lint nếu cần.
