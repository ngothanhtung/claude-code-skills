# Ví dụ 3: User Flow — Luồng màn hình đăng ký tài khoản

## Đầu vào

```
Vẽ user flow cho luồng đăng ký tài khoản:
- Trang chủ → Đăng ký → Nhập số điện thoại → Nhập OTP → Tạo mật khẩu → Thành công
- OTP sai → thử lại
- Số điện thoại đã tồn tại → thông báo lỗi → về Trang chủ
```

## Phân tích

- Loại: User Flow (tập trung end-user, luồng màn hình)
- Nhánh: 1 nhánh chính + 2 nhánh lỗi nhỏ
- Scope: Không dùng khung scope (User Flow không phân hệ thống)
- Màu: Xanh lá cho màn hình chính, Vàng cho decision, Đỏ cho lỗi

## Điểm khác biệt so với Activity Diagram

- Không có khung nét đứt phân hệ thống
- Mỗi bước = 1 màn hình khách hàng thấy
- Nhánh lỗi gọn: chỉ ghi popup + quay lại, không chi tiết
- Tất cả bước cùng 1 màu (xanh lá) vì cùng 1 actor (khách hàng)
- Decision chỉ ở những màn hình có input validation

## File đầu ra

`dang-ky-tai-khoan-user-flow.drawio`
