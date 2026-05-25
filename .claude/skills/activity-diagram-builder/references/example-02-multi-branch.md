# Ví dụ 2: Activity Diagram nhiều nhánh — Thu thập sinh trắc học

## Đầu vào

```
Vẽ activity cho luồng thu thập sinh trắc học:
- Khách hàng chọn hình thức: CCCD hoặc VNeID
- Luồng CCCD: Chụp trước → sau → QR → NFC → Hiển thị → Cơ sở dữ liệu quốc gia → Liveness
- Luồng VNeID: Chụp trước → sau → QR → Hiển thị → VNeID chia sẻ → Liveness
- Phần chung (App): Hiển thị + bổ sung → So khớp Core → OTP → Thành công
- Khoanh vùng SDK cho phần eKYC, khoanh vùng App cho phần chung
```

## Phân tích

- Loại: Activity Diagram
- Nhánh: 2 nhánh (CCCD trái, VNeID phải)
- Scope: 2 khung (SDK eKYC tím, App xanh lá)
- Màu: Xanh lá cho CCCD, Cam cho VNeID, Tím cho kiểm tra, Xanh lá nhạt cho App, Xanh dương cho hệ thống bên ngoài
- Page: 850px width (2 nhánh)

## Cấu trúc layout

```
           [Start]
              |
      [Chọn hình thức thu thập]
              |
         <Hình thức?>
        /            \
    CCCD            VNeID
  ┌──────┐        ┌──────┐
  │ SDK  │        │ SDK  │
  │ ──── │        │ ──── │
  │ Chụp │        │ Chụp │
  │ QR   │        │ QR   │
  │ NFC  │        │ Hiển │
  │ Hiển │        │ VNeID│
  │ CSDL │        │ Live │
  │ Live │        └──────┘
  └──────┘            |
       |         ◆ Merge
       └────────┘
              |
      ┌──────────────┐
      │     App      │
      │ ──────────── │
      │ Hiển thị+BS │
      │ So khớp Core │
      │ OTP          │
      │ Cập nhật    │
      └──────────────┘
              |
           [End]
```

## Quy tắc áp dụng

- Nhánh trái x=20..300, nhánh phải x=440..720
- Decision ở giữa x=315
- Merge diamond ở giữa x=362
- Vùng App ở giữa x=195..555
- Legend ở cuối, 2 cột, 6 mục
