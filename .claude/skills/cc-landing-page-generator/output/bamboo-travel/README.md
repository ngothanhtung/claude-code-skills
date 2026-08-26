# Bamboo Travel Landing Page

Landing page quảng bá du lịch Việt Nam dành cho **Bamboo Travel** — agency du lịch chuyên phục vụ khách hàng Gen Z.

## Thông tin dự án

- **Thương hiệu:** Bamboo Travel
- **Ngành:** Agency du lịch Việt Nam
- **Target:** Gen Z (18–28 tuổi)
- **Tone:** Trẻ trung + Tối giản
- **Techstack:** HTML + Tailwind CSS (CDN) + Vanilla JS
- **Design inspiration:** Airbnb (warm, photography-led, generous whitespace)

## Các sections

1. Navbar (scroll blur + hamburger mobile)
2. Hero (headline chuyển đổi + trust signal + CTA)
3. Problem (4 pain points của Gen Z)
4. Solution (giới thiệu Bamboo Travel)
5. Benefits (4 lợi ích)
6. Detail / Tours (3 gói tour)
7. Social Proof (stats + testimonials)
8. Pricing (bảng giá 3 gói)
9. FAQ (accordion)
10. Footer (liên hệ + social)

## Design system

- **Primary:** `#ff385c` (Airbnb Rausch)
- **Secondary / Bamboo:** `#2d9c7e`
- **Ink:** `#222222`
- **Body:** `#3f3f3f`
- **Muted:** `#6a6a6a`
- **Canvas:** `#ffffff`
- **Surface:** `#f7f7f7`
- **Typography:** Plus Jakarta Sans (display) + Inter (body)
- **Icons:** Lucide Icons
- **Animation:** Animate.css + Intersection Observer scroll reveal

## Giá tour

| Gói | Giá | Ghi chú |
|-----|-----|---------|
| Tour ngày thường | **3.000.000₫** | Giá gốc 5.000.000₫ |
| Tour cao điểm | **7.000.000₫** | 4N3Đ Đà Nẵng – Hội An |
| Tour private | **Liên hệ** | Lịch trình tùy chỉnh |

## Cách chạy

### Mở trực tiếp

```bash
open index.html
```

Hoặc kéo thả file `index.html` vào trình duyệt.

### Dùng local server (khuyến nghị)

```bash
cd bamboo-travel
npx serve .
```

Trang sẽ chạy tại `http://localhost:3000`.

## Cách deploy

### Vercel

1. Push thư mục `bamboo-travel/` lên GitHub.
2. Import project vào Vercel.
3. Framework preset: **Other** (static).
4. Deploy.

### Netlify

1. Kéo thả thư mục `bamboo-travel/` vào [Netlify Drop](https://app.netlify.com/drop).
2. Nhận URL tự động.

### GitHub Pages

```bash
git add index.html README.md
git commit -m "deploy: bamboo travel landing page"
git push
```

## Ảnh minh họa

Page sử dụng ảnh placeholder từ Unsplash. Bạn có thể thay bằng ảnh thật của Bamboo Travel bằng cách cập nhật các thẻ `<img>` trong `index.html`.

## Tối ưu chuyển đổi (CRO)

- Headline theo công thức: `[Kết quả] + [Thời gian] + [Xóa bỏ rào cản]`.
- CTA nổi bật ở Hero, Pricing, Navbar và CTA Banner.
- Trust signal: 12.000+ khách, 4.9/5 rating.
- Cam kết hoàn tiền để giảm rào cản mua hàng.
- Pricing hiển thị giá gốc gạch ngang + giá khuyến mãi.
- FAQ giải đáp thắc mắc phổ biến.
