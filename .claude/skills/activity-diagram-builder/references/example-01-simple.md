# Ví dụ 1: Activity Diagram đơn giản — Đổi mật khẩu

## Đầu vào

```
Vẽ activity cho luồng đổi mật khẩu:
- Khách hàng nhập mật khẩu cũ
- Hệ thống kiểm tra mật khẩu
- Khách hàng nhập mật khẩu mới + xác nhận
- Xác nhận OTP
- Đổi thành công
```

## Phân tích

- Loại: Activity Diagram (có bước hệ thống kiểm tra)
- Nhánh: 1 nhánh duy nhất (không rẽ)
- Scope: Không cần khung (luồng đơn giản)
- Màu: Xanh lá cho bước khách hàng, tím cho bước hệ thống
- Bước: 5 bước + Start + End

## File đầu ra

`doi-mat-khau-activity.drawio`

## Cấu trúc XML (rút gọn)

```xml
<!-- Start circle -->
<mxCell id="start" style="ellipse;fillColor=#333;strokeColor=#333;aspect=fixed;"
  vertex="1" parent="1">
  <mxGeometry x="300" y="20" width="24" height="24"/>
</mxCell>

<!-- Bước 1: Khách hàng nhập mật khẩu cũ — màu xanh lá -->
<mxCell id="s1" value="Nhập mật khẩu cũ"
  style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;
  fontStyle=1;fontSize=11;" vertex="1" parent="1">
  <mxGeometry x="215" y="70" width="200" height="40"/>
</mxCell>

<!-- Bước 2: Hệ thống kiểm tra mật khẩu — màu tím -->
<mxCell id="s2" value="Kiểm tra mật khẩu"
  style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8E6FC;strokeColor=#7F77DD;
  fontStyle=1;fontSize=11;" vertex="1" parent="1">
  <mxGeometry x="215" y="130" width="200" height="40"/>
</mxCell>

<!-- Đường nối giữa các bước (orthogonal) -->
<mxCell style="edgeStyle=orthogonalEdgeStyle;rounded=0;"
  edge="1" source="s1" target="s2" parent="1"/>
```
