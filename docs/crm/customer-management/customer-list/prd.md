# TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD)

## CRM — Quản lý Danh sách Khách hàng

**Phiên bản:** 1.0
**Ngày:** 2026-07-14
**Tác giả:** BA
**Tài liệu tham chiếu:** Không có (Viết mới)

---

## 1. Tổng quan sản phẩm

### 1.1 Mục đích

Phòng kinh doanh hiện quản lý khách hàng trên Google Sheets riêng lẻ, gây ra tình trạng trùng lặp thông tin, mất dữ liệu khi nhân viên nghỉ việc, và không có cơ chế phân quyền truy cập. Tính năng Quản lý Danh sách Khách hàng trên CRM giúp tập trung toàn bộ thông tin khách hàng vào một nơi duy nhất, đảm bảo mọi nhân viên đều làm việc trên cùng nguồn dữ liệu, đồng thời hỗ trợ tìm kiếm, lọc và phân loại khách hàng theo trạng thái.

### 1.2 Phạm vi

| Trong phạm vi (In-scope) | Ngoài phạm vi (Out-of-scope) |
| :--- | :--- |
| Xem danh sách khách hàng với phân trang | Tích hợp hệ thống email marketing |
| Tìm kiếm khách hàng theo tên, email, SĐT | Import/export CSV (sẽ có ở phiên bản sau) |
| Lọc danh sách theo trạng thái (Đang hoạt động, Tạm khóa, Đã khóa) | Xem lịch sử tương tác khách hàng |
| Tạo mới khách hàng | Báo cáo phân tích hành vi khách hàng |
| Cập nhật thông tin khách hàng | Tích hợp Zalo/WhatsApp |
| Khóa/mở khóa tài khoản khách hàng | — |

### 1.3 Đối tượng người dùng

| Đối tượng | Vai trò | Mô tả |
| :--- | :--- | :--- |
| Nhân viên kinh doanh | Người dùng chính | Tra cứu, tạo và cập nhật thông tin khách hàng hàng ngày |
| Quản lý kinh doanh | Người giám sát | Theo dõi tổng quan danh sách, kiểm tra khách hàng bị trùng |
| Admin hệ thống | Người quản trị | Quản lý quyền truy cập module CRM |

### 1.4 Lợi ích chính

- Giảm 70% thời gian tìm kiếm thông tin khách hàng so với Google Sheets.
- Loại bỏ tình trạng trùng lặp khách hàng nhờ cơ chế kiểm tra email/SDT duy nhất.
- Nhân viên mới có thể tham gia làm việc ngay trong ngày đầu tiên với dữ liệu tập trung.

---

## 2. Yêu cầu chức năng

### 2.1 Danh sách và tìm kiếm

**FR-001:** Xem danh sách khách hàng

**Mô tả nghiệp vụ:** Hiển thị danh sách tất cả khách hàng dưới dạng bảng, phân trang tối đa 10 bản ghi/trang. Mỗi bản ghi hiển thị: tên, email, địa chỉ, số điện thoại, trạng thái và ghi chú. Sắp xếp mặc định theo ngày tạo mới nhất lên trên.

**Tác nhân (Actor):** Nhân viên kinh doanh

**Điều kiện kích hoạt (Trigger):** Người dùng truy cập module "Quản lý khách hàng"

**Luồng chính (Happy Path):**

1. Người dùng chọn module "Quản lý khách hàng" trên thanh điều hướng.
2. Hệ thống hiển thị danh sách khách hàng, mặc định lọc theo trạng thái "Tất cả".
3. Người dùng cuộn hoặc chuyển trang để xem thêm khách hàng.

**Luồng thay thế (Alternative Flow):**

- [Chưa có dữ liệu]: Nếu hệ thống chưa có khách hàng nào, hiển thị thông báo "Chưa có khách hàng nào" kèm nút "Thêm khách hàng mới".
- [Lỗi tải dữ liệu]: Hiển thị thông báo lỗi kèm nút "Thử lại".

**Kết quả mong đợi (Expected Outcome):** Danh sách hiển thị đầy đủ thông tin 6 trường, phân trang hoạt động đúng trong vòng 2 giây.

**Quy tắc nghiệp vụ (Business Rules):**

- Mỗi trang hiển thị tối đa 10 bản ghi.
- Sắp xếp mặc định theo ngày tạo giảm dần (mới nhất lên trên).
- Tất cả nhân viên kinh doanh đều có quyền xem danh sách khách hàng của toàn bộ hệ thống.

**User Story liên quan:** US-CRM-CL-001

---

**FR-002:** Tìm kiếm khách hàng

**Mô tả nghiệp vụ:** Cho phép người dùng tìm kiếm khách hàng bằng cách nhập từ khóa vào ô tìm kiếm. Hệ thống tìm kiếm theo 3 trường: tên, email và số điện thoại. Kết quả tìm kiếm hiển thị ngay lập tức (tối đa 1 giây) và vẫn giữ nguyên định dạng bảng như FR-001.

**Tác nhân (Actor):** Nhân viên kinh doanh

**Điều kiện kích hoạt (Trigger):** Người dùng nhập từ khóa vào ô tìm kiếm và nhấn Enter hoặc chờ 300ms (tìm kiếm tự động).

**Luồng chính (Happy Path):**

1. Người dùng nhập từ khóa vào ô tìm kiếm.
2. Hệ thống lọc danh sách khách hàng theo tên, email hoặc SĐT chứa từ khóa.
3. Bảng hiển thị kết quả phù hợp, cập nhật số lượng kết quả.

**Luồng thay thế (Alternative Flow):**

- [Không tìm thấy]: Hiển thị thông báo "Không tìm thấy khách hàng phù hợp" với gợi ý kiểm tra lại từ khóa.

**Kết quả mong đợi (Expected Outcome):** Kết quả hiển thị trong vòng 1 giây kể từ khi nhập xong từ khóa.

**Quy tắc nghiệp vụ (Business Rules):**

- Tìm kiếm không phân biệt hoa/thường.
- Từ khóa tối thiểu 2 ký tự mới bắt đầu tìm kiếm.

**User Story liên quan:** US-CRM-CL-003

---

**FR-003:** Lọc danh sách theo trạng thái

**Mô tả nghiệp vụ:** Cho phép người dùng lọc danh sách khách hàng theo trạng thái: Tất cả, Đang hoạt động, Tạm khóa, Đã khóa. Bộ lọc hiển thị dưới dạng dropdown ngay phía trên bảng danh sách.

**Tác nhân (Actor):** Nhân viên kinh doanh

**Điều kiện kích hoạt (Trigger):** Người dùng chọn một trạng thái từ dropdown bộ lọc.

**Luồng chính (Happy Path):**

1. Người dùng mở dropdown bộ lọc trạng thái.
2. Chọn một trạng thái cụ thể (ví dụ: "Đang hoạt động").
3. Hệ thống lọc và hiển thị danh sách khách hàng có trạng thái phù hợp.
4. Hiển thị số lượng kết quả phù hợp.

**Kết quả mong đợi (Expected Outcome):** Danh sách được lọc trong vòng 1 giây, chỉ hiển thị khách hàng có trạng thái được chọn.

**Quy tắc nghiệp vụ (Business Rules):**

- Mặc định hiển thị trạng thái "Tất cả".
- Không cho phép lọc kết hợp nhiều trạng thái cùng lúc (phiên bản này).

**User Story liên quan:** US-CRM-CL-002

---

### 2.2 CRUD Khách hàng

**FR-004:** Tạo mới khách hàng

**Mô tả nghiệp vụ:** Cho phép nhân viên kinh doanh tạo hồ sơ khách hàng mới bằng cách điền Form thông tin: họ tên (bắt buộc), email (bắt buộc, phải là duy nhất trong hệ thống), số điện thoại (tuỳ chọn), địa chỉ (tuỳ chọn) và ghi chú (tuỳ chọn). Sau khi lưu, hệ thống chuyển hướng về danh sách và hiển thị thông báo thành công.

**Tác nhân (Actor):** Nhân viên kinh doanh

**Điều kiện kích hoạt (Trigger):** Người dùng nhấn nút "Thêm khách hàng mới" trên danh sách.

**Luồng chính (Happy Path):**

1. Người dùng nhấn nút "Thêm khách hàng mới".
2. Hệ thống hiển thị Form tạo khách hàng trống.
3. Người dùng nhập thông tin và nhấn "Lưu".
4. Hệ thống kiểm tra email chưa tồn tại trong hệ thống.
5. Hệ thống lưu hồ sơ khách hàng với trạng thái mặc định "Đang hoạt động".
6. Chuyển hướng về danh sách, hiển thị thông báo "Tạo khách hàng thành công".

**Luồng thay thế (Alternative Flow):**

- [Email trùng]: Nếu email đã tồn tại, hiển thị lỗi "Email này đã được sử dụng" dưới trường email.
- [Thiếu thông tin bắt buộc]: Hiển thị lỗi tại các trường bắt buộc chưa điền.

**Kết quả mong đợi (Expected Outcome):** Khách hàng mới xuất hiện trong danh sách ngay sau khi lưu thành công.

**Quy tắc nghiệp vụ (Business Rules):**

- Email phải là duy nhất trong toàn hệ thống.
- Họ tên là trường bắt buộc; email là trường bắt buộc.
- Trạng thái mặc định khi tạo mới là "Đang hoạt động".

**User Story liên quan:** US-CRM-CL-004

---

**FR-005:** Cập nhật thông tin khách hàng

**Mô tả nghiệp vụ:** Cho phép nhân viên kinh doanh chỉnh sửa thông tin hồ sơ khách hàng: họ tên, email, số điện thoại, địa chỉ, ghi chú và trạng thái. Khi nhấn nút chỉnh sửa, hệ thống hiển thị Form đã điền sẵn dữ liệu hiện tại. Nhấn "Lưu thay đổi" để cập nhật.

**Tác nhân (Actor):** Nhân viên kinh doanh

**Điều kiện kích hoạt (Trigger):** Người dùng nhấn nút chỉnh sửa (biểu tượng bút) trên dòng khách hàng cần sửa.

**Luồng chính (Happy Path):**

1. Người dùng nhấn nút chỉnh sửa trên dòng khách hàng.
2. Hệ thống hiển thị Form đã điền sẵn thông tin hiện tại.
3. Người dùng chỉnh sửa và nhấn "Lưu thay đổi".
4. Hệ thống kiểm tra email mới (nếu thay đổi) chưa tồn tại.
5. Cập nhật hồ sơ khách hàng.
6. Chuyển hướng về danh sách, hiển thị thông báo "Cập nhật thành công".

**Luồng thay thế (Alternative Flow):**

- [Email trùng]: Nếu email mới đã được dùng cho khách hàng khác, hiển thị lỗi.
- [Hủy bỏ]: Người dùng nhấn "Hủy" → quay về danh sách mà không lưu.

**Kết quả mong đợi (Expected Outcome):** Thông tin mới được hiển thị ngay trên danh sách sau khi lưu.

**Quy tắc nghiệp vụ (Business Rules):**

- Email mới (nếu thay đổi) phải là duy nhất.
- Chỉ nhân viên tạo hồ sơ hoặc admin mới được chỉnh sửa.

**User Story liên quan:** US-CRM-CL-005

---

**FR-006:** Khóa / Mở khóa tài khoản khách hàng

**Mô tả nghiệp vụ:** Cho phép quản lý kinh doanh thay đổi trạng thái khách hàng giữa "Đang hoạt động" và "Đã khóa". Hành động yêu cầu xác nhận trước khi thực hiện. Khách hàng bị khóa không xuất hiện trong kết quả lọc mặc định.

**Tác nhân (Actor):** Quản lý kinh doanh

**Điều kiện kích hoạt (Trigger):** Quản lý nhấn nút "Khóa" hoặc "Mở khóa" trên dòng khách hàng.

**Luồng chính (Happy Path):**

1. Quản lý nhấn nút "Khóa" trên dòng khách hàng đang hoạt động.
2. Hệ thống hiển thị hộp thoại xác nhận: "Bạn có chắc muốn khóa tài khoản khách hàng [tên]?"
3. Quản lý nhấn "Xác nhận".
4. Hệ thống cập nhật trạng thái thành "Đã khóa".
5. Hiển thị thông báo thành công, danh sách tự động cập nhật.

**Luồng thay thế (Alternative Flow):**

- [Hủy xác nhận]: Quản lý nhấn "Hủy" → không thay đổi gì.
- [Mở khóa]: Thực hiện tương tự nhưng chuyển trạng thái về "Đang hoạt động".

**Kết quả mong đợi (Expected Outcome):** Trạng thái khách hàng được thay đổi ngay trên danh sách, khách hàng khóa không xuất hiện ở bộ lọc mặc định.

**Quy tắc nghiệp vụ (Business Rules):**

- Chỉ quản lý kinh doanh trở lên mới có quyền khóa/mở khóa.
- Hành động yêu cầu xác nhận (confirmation dialog) trước khi thực hiện.
- Khi bị khóa, khách hàng không xuất hiện ở trạng thái "Đang hoạt động".

**User Story liên quan:** US-CRM-CL-006

---

## 3. Yêu cầu phi chức năng (NFR)

| Tiêu chí | Ngưỡng yêu cầu | Ghi chú |
| :--- | :--- | :--- |
| Thời gian phản hồi (FR-001~003) | < 2 giây | Khi tải danh sách, tìm kiếm, lọc |
| Đảm bảo email duy nhất | 100% | Không chấp nhận trùng email trong mọi hoàn cảnh |
| Bảo mật truy cập | Xác thực bắt buộc | Cần đăng nhập trước khi truy cập module |
| Phân quyền | Vai trò nghiệp vụ | Nhân viên kinh doanh: CRUD cơ b��n; Quản lý: thêm quyền khóa/mở khóa |

---

## 4. UX/UI Guidelines

### 4.1 Luồng người dùng chính

```text
[Nhân viên KD] → [Truy cập CRM] → [Xem danh sách] → [Tìm ki���m/Lọc] → [Tạo/Sửa/Khóa KH]
[Quản lý]      → [Truy cập CRM] → [Xem danh sách] → [Khóa/Mở khóa KH]
```

### 4.2 Quy tắc giao diện

| Nguyên tắc | Mô tả |
| :--- | :--- |
| Form validation real-time | Kiểm tra email trùng ngay khi người dùng rời khỏi trường email |
| Thông báo thành công | Hiển thị toast notification 3 giây rồi tự động ẩn |
| Xác nhận trước khi khóa | Luôn hiển thị confirmation dialog cho hành động khóa/mở khóa |

---

## 5. Tích hợp hệ thống

Không có tích hợp với hệ thống bên thứ ba trong phiên bản này. CRM sẽ tích hợp email marketing và Zalo ở phiên bản sau.

---

## 6. Kế hoạch phát hành

| Giai đoạn | Mục tiêu | FR liên quan | Thời gian ước lượng |
| :--- | :--- | :--- | :--- |
| Phase 1 | Xem, tìm kiếm, lọc danh sách | FR-001, FR-002, FR-003 | 1 Sprint |
| Phase 2 | Tạo, chỉnh sửa, khóa/mở khóa | FR-004, FR-005, FR-006 | 1 Sprint |

---

## 7. Rủi ro và giả định

### 7.1 Rủi ro

| Rủi ro | Mức độ | Giải pháp dự phòng |
| :--- | :--- | :--- |
| Dữ liệu Sheets cũ bị trùng khi nhập vào CRM | Cao | Xây script dọn trùng trước khi import; nhắc nhân viên kiểm tra |
| Nhân viên không quen dùng CRM mới | Trung bình | Tổ chức training 30 phút + tài liệu hướng dẫn ngắn |

### 7.2 Giả định

| Giả định | Ảnh hưởng nếu sai |
| :--- | :--- |
| Nhân viên kinh doanh đã có tài khoản đăng nhập hệ thống | Không truy cập được module CRM |
| Dữ liệu khách hàng hiện tại đã được chuẩn hóa trên Google Sheets | Import sai dữ liệu, cần xử lý thủ công |

---

## 8. Ma trận truy xuất yêu cầu (RTM)

| FR | Tên yêu cầu | Nguồn | Độ ưu tiên | User Story | Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| FR-001 | Xem danh sách khách hàng | Phòng kinh doanh | P0 | US-CRM-CL-001 | Phase 1 |
| FR-002 | Tìm kiếm khách hàng | Phòng kinh doanh | P0 | US-CRM-CL-003 | Phase 1 |
| FR-003 | Lọc theo trạng thái | Phòng kinh doanh | P1 | US-CRM-CL-002 | Phase 1 |
| FR-004 | Tạo mới khách hàng | Phòng kinh doanh | P0 | US-CRM-CL-004 | Phase 2 |
| FR-005 | Cập nhật thông tin | Phòng kinh doanh | P1 | US-CRM-CL-005 | Phase 2 |
| FR-006 | Khóa / Mở khóa tài khoản | Quản lý kinh doanh | P1 | US-CRM-CL-006 | Phase 2 |

---

## 9. User Stories

> **REQUIRED SUB-SKILL:** Dùng `cc-user-story-acceptance-criteria-writer` cho phần này.

User Stories chi tiết đã được viết trong [user-stories.md](../../../customer-management/customer-list/1-user-stories/us.md).

---

## 10. Phụ lục

### 10.1 Thuật ngữ

| Thuật ngữ | Định nghĩa |
| :--- | :--- |
| CRM | Customer Relationship Management — Hệ thống quản lý quan hệ khách hàng |
| Trạng thái khách hàng | Phân loại: Đang hoạt động, Tạm khóa, Đã khóa |

### 10.2 Tài liệu tham khảo

- [User Stories — CRM Danh sách Khách hàng](../../../customer-management/customer-list/1-user-stories/us.md)
- [Use Cases — CRM Danh sách Khách hàng](../../../customer-management/customer-list/2-use-cases/UC-CL-01_xem-danh-sach-khach-hang.md)
