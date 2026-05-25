---
name: activity-diagram-builder
description: |
  Vẽ Activity Diagram hoặc User Flow có màu sắc từ mô tả luồng nghiệp vụ,
  xuất file .drawio chỉnh sửa được, hỗ trợ nhiều luồng rẽ nhánh, phân biệt
  phạm vi hệ thống bằng khung nét đứt + màu.
  Kích hoạt khi: "vẽ activity diagram", "vẽ sơ đồ hoạt động", "vẽ flowchart
  có màu", "vẽ user flow", "vẽ luồng màn hình", "tạo activity", "vẽ sơ đồ
  nghiệp vụ", "vẽ flow có rẽ nhánh", "vẽ sơ đồ cho Confluence", "xuất drawio",
  "vẽ diagram đẹp", kể cả khi nói tắt "vẽ activity đi", "làm cái flow đi".
  KHÔNG dùng cho: sequence diagram, ERD, class diagram, gantt chart,
  swimlane process flow.
---

# Mục tiêu

Sinh file Activity Diagram hoặc User Flow dạng `.drawio` có màu sắc chuyên nghiệp
từ mô tả luồng nghiệp vụ, sẵn sàng import vào draw.io hoặc Confluence —
thay vì người dùng phải vẽ tay trên draw.io mất 30-60 phút.

---

## Bước 0: Hỏi loại diagram

Trước khi bắt đầu, hỏi người dùng chọn 1 trong 2 loại:

| Loại | Mô tả | Khi nào dùng |
|------|--------|-------------|
| **Activity Diagram** | Sơ đồ hoạt động tổng thể, nhiều actor/hệ thống, rẽ nhánh theo điều kiện | Mô tả luồng nghiệp vụ end-to-end cho Business Analyst/Product Owner/stakeholder |
| **User Flow** | Sơ đồ luồng màn hình, tập trung end-user thấy gì trên app | Mô tả hành trình khách hàng đi qua từng màn hình, có nhánh lỗi gọn |

Nếu người dùng đã nói rõ loại (ví dụ "vẽ activity") → bỏ qua bước hỏi, làm luôn.

---

## Bước 1: Thu thập thông tin đầu vào

Đọc mô tả luồng nghiệp vụ người dùng cung cấp (text, file tài liệu, Use Case, BRD).
Xác định:

- **Tên luồng** (dùng đặt tên file output)
- **Các nhánh/luồng con** (ví dụ: CCCD vs VNeID)
- **Danh sách bước** cho mỗi nhánh
- **Actor/hệ thống** thực hiện từng bước
- **Phạm vi hệ thống** cần khoanh vùng (ví dụ: SDK, App, Server)
- **Điểm rẽ nhánh** (decision) và điều kiện

Nếu thiếu thông tin → hỏi bổ sung ngắn gọn, tối đa 2-3 câu hỏi.

---

## Bước 2: Thiết kế layout

### Quy tắc layout chung

- **Chiều dọc** là hướng chính (top → bottom)
- **Rẽ nhánh** trải ngang (left/right từ diamond decision)
- **Hội tụ** bằng merge diamond trước khi vào phần chung
- **Khoảng cách** giữa các bước: 50-60px dọc, 20px+ ngang giữa nhánh
- **Page width** tối đa: 850px cho 2 nhánh, 1100px cho 3 nhánh

### Quy tắc phân màu

| Mục đích | Fill Color | Stroke Color | Ví dụ |
|-----------|-----------|-------------|-------|
| Bước chung / Neutral | #f5f5f5 | #999999 | Chọn chức năng, Bắt đầu |
| Decision (rẽ nhánh) | #fff2cc | #d6b656 | Hình thức? Hợp lệ? |
| Nhánh 1 (chính) | #d5e8d4 | #82b366 | Luồng CCCD/NFC |
| Nhánh 2 (phụ) | #FAECE7 | #D85A30 | Luồng VNeID |
| Hệ thống kiểm tra / Server | #E8E6FC | #7F77DD | Kiểm tra Cơ sở dữ liệu quốc gia, So khớp Core |
| App xử lý | #E1F5EE | #1D9E75 | Hiển thị thông tin, OTP |
| Hệ thống bên ngoài (third party) | #dae8fc | #6c8ebf | VNeID, NAPAS |
| Lỗi / Thông báo lỗi | #f8cecc | #b85450 | Thông báo lỗi |
| Khung phạm vi hệ thống | none | tương ứng | Nét đứt, bao quanh nhóm bước |

### Quy tắc khung phạm vi (scope container)

- Dùng `dashed=1;dashPattern=8 4` rect bao quanh nhóm bước thuộc cùng 1 hệ thống
- Label nhỏ phía trên bên trong khung: `fillColor=[màu nhạt];fontSize=10;fontStyle=1`
- Stroke color khung = stroke color của nhóm bước bên trong
- Padding khung: 20px mỗi cạnh so với bước ngoài cùng

---

## Bước 3: Sinh file .drawio

Tạo file XML theo format draw.io (mxfile/mxGraphModel).

### Shape sử dụng

| Shape | Style draw.io | Dùng cho |
|-------|-------------|---------|
| Start | `ellipse;fillColor=#333;strokeColor=#333;aspect=fixed` (r=12) | Điểm bắt đầu |
| End | 2 ellipse lồng nhau: ngoài `fillColor=none;strokeWidth=2.5`, trong `fillColor=#333` | Điểm kết thúc |
| Action/Step | `rounded=1;whiteSpace=wrap;html=1;rx=10` | Mỗi bước hành động |
| Decision | `rhombus;whiteSpace=wrap;html=1` | Điểm rẽ nhánh |
| Merge | `rhombus;fillColor=#666;strokeColor=#666;aspect=fixed` (nhỏ, 26x26) | Hội tụ nhánh |
| Scope container | `rounded=1;fillColor=none;dashed=1;dashPattern=8 4` | Khoanh vùng hệ thống |
| Scope label | `text;fillColor=[màu nhạt];rounded=1;fontSize=10;fontStyle=1` | Tên hệ thống |

### Quy tắc edge (đường nối)

- Tất cả edge dùng `edgeStyle=orthogonalEdgeStyle;rounded=0` (vuông góc)
- Edge chính: không cần label
- Edge từ decision: label ngắn gọn (ví dụ "CCCD", "VNeID", "Hợp lệ", "Không hợp lệ")
- Edge lỗi quay lại: `dashed=1;strokeColor=#b85450` (nét đứt đỏ)
- Label edge lỗi: "Về Trang chủ", "Thực hiện lại"

### Quy tắc text

- Action step: `fontSize=11;fontStyle=1` (bold)
- 2 dòng trong 1 step: dòng 1 bold `fontSize=11;fontStyle=1`, dòng 2 `fontSize=10` mô tả phụ
- Decision: `fontSize=11;fontStyle=1`
- Edge label: `fontSize=10`
- Scope label: `fontSize=10;fontStyle=1;fontColor=[màu đậm]`
- Dùng `html=1` và `<br>` cho xuống dòng trong cell

### Template XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net">
  <diagram id="[id]" name="[Tên diagram]">
    <mxGraphModel dx="1422" dy="[height]" grid="1" gridSize="10"
      guides="1" tooltips="1" connect="1" arrows="1" fold="1"
      page="1" pageScale="1" pageWidth="[width]" pageHeight="[height]">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        <!-- Shapes here -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

### Kích thước shape

| Shape | Width | Height |
|-------|-------|--------|
| Action step 1 dòng | 200-270 | 40-44 |
| Action step 2 dòng | 270 | 50-56 |
| Decision | 120 | 80 |
| Merge diamond | 26 | 26 |
| Start/End circle | 24 | 24 |
| Scope container | bước rộng nhất + 40px padding | tổng bước + 40px |

---

## Bước 4: Thêm Legend (chú thích)

Luôn thêm legend ở cuối diagram:

- Rect nền nhạt `fillColor=#FAFAFA;strokeColor=#CCCCCC`
- Tiêu đề "Chú thích" bold
- Mỗi mục: rect màu nhỏ (20x14) + text mô tả
- Bố trí 2 cột nếu > 4 mục

---

## Bước 5: Xuất file

- Lưu file tại `/mnt/user-data/outputs/[tên-luồng]-activity.drawio`
- Tên file: kebab-case, hậu tố `-activity` hoặc `-user-flow`
- Present file cho người dùng download
- Hướng dẫn: "Mở bằng draw.io → File → Open, hoặc trên Confluence → Insert → draw.io Diagram → import file"

---

## Bước 6 (tùy chọn): Xuất PNG

Nếu người dùng yêu cầu thêm PNG:

1. Tạo file SVG tương đương với nội dung diagram
2. Dùng Python cairosvg chuyển SVG → PNG (scale=2 cho chất lượng cao)
3. Lưu tại `/mnt/user-data/outputs/[tên-luồng]-activity.png`

```python
import cairosvg
cairosvg.svg2png(bytestring=svg_content.encode('utf-8'),
                 write_to='/mnt/user-data/outputs/[file].png', scale=2)
```

---

## Ví dụ nhanh

### Ví dụ 1: Activity Diagram — Luồng đơn

**Input:** "Vẽ activity cho luồng đổi mật khẩu: khách hàng nhập mật khẩu cũ → Hệ thống kiểm tra → khách hàng nhập mật khẩu mới → Xác nhận OTP → Thành công"

**Output:** File .drawio: 1 nhánh dọc, 5 bước, màu xanh lá cho bước khách hàng, màu tím cho bước hệ thống, Start → Nhập mật khẩu cũ → Kiểm tra → Nhập mật khẩu mới → OTP → Thành công → End, Legend 2 mục.

### Ví dụ 2: Activity Diagram — Nhiều nhánh rẽ

**Input:** "Vẽ activity cho luồng thu thập Số tài khoản ngân hàng có 2 phương thức: CCCD và VNeID. Phần SDK xử lý riêng, phần App xử lý chung"

**Output:** File .drawio: Decision rẽ 2 nhánh — trái = CCCD (xanh lá), phải = VNeID (cam), khung nét đứt tím bao SDK eKYC cho mỗi nhánh, Merge diamond hội tụ, khung nét đứt xanh lá bao phần App xử lý chung, Legend 5-6 mục.

### Ví dụ 3: User Flow — Luồng màn hình

**Input:** "Vẽ user flow cho luồng đăng ký tài khoản: Trang chủ → Đăng ký → Nhập số điện thoại → Nhập OTP → Tạo mật khẩu → Thành công. Nhánh lỗi: OTP sai → thử lại"

**Output:** File .drawio: Luồng chính dọc, mỗi bước = 1 màn hình, tất cả bước màu xanh lá (end-user journey), Decision "OTP đúng?" → đúng tiếp tục, sai → nhánh đỏ quay lại, không có khung scope, Legend 3 mục.

---

## Ràng buộc

- **Orthogonal edge**: Tất cả đường nối phải vuông góc (`edgeStyle=orthogonalEdgeStyle`), không dùng curved hay straight. Lý do: orthogonal dễ đọc nhất cho sơ đồ nghiệp vụ.
- **Không chồng nhánh**: Đảm bảo khoảng cách ngang tối thiểu 100px giữa 2 cột nhánh. Chồng lấn làm diagram không đọc được.
- **Tối đa 15 bước/nhánh**: Nếu vượt, đề xuất tách 2 diagram hoặc gộp bước nhỏ.
- **LUÔN có Legend**: Dù diagram đơn giản hay phức tạp.
- **LUÔN dùng `html=1`** trong style mỗi cell — cho phép dùng `<br>` xuống dòng.
- **LUÔN đặt `vertex="1" parent="1"`** cho shape, `edge="1" parent="1"` cho edge — thiếu sẽ lỗi khi import draw.io.
- **Phân biệt Activity Diagram vs User Flow**: Activity có khung scope phân hệ thống, nhiều actor; User Flow không có khung scope, tập trung màn hình end-user thấy. Không trộn 2 loại.
- **>2 nhánh rẽ**: Mở rộng pageWidth tương ứng (thêm ~300px mỗi nhánh), đảm bảo legend vẫn nằm trong page.
- **Mô tả bước**: Dùng thuật ngữ nghiệp vụ tiếng Việt, ≤ 30 ký tự dòng 1 (title), ≤ 40 ký tự dòng 2 (subtitle).
