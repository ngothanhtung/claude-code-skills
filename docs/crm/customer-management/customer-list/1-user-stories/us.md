# Câu chuyện người dùng — Tính năng Danh sách Khách hàng (CRM)

> **Module:** CRM / Customer Management / Customer List
> **Ngày viết:** 2026-05-25
> **Người viết:** BA
> **Trạng thái:** Draft

---

## US-CRM-CL-001: Xem danh sách khách hàng

**As a** nhân viên kinh doanh đã đăng nhập và được phân quyền truy cập module Quản lý khách hàng (CRM)

**I want to** xem danh sách tất cả khách hàng với các thông tin: tên, email, địa chỉ, số điện thoại, trạng thái và ghi chú

**So that** tôi nắm được tổng quan danh sách khách hàng hiện có và dễ dàng tra cứu thông tin khi cần

### Siêu dữ liệu (Metadata)

| Trường | Giá trị |
| :--- | :--- |
| **Epic / Feature** | CRM — Quản lý khách hàng |
| **Độ ưu tiên (MoSCoW)** | Must |
| **Ước lượng (Estimate)** | — |
| **Sự phụ thuộc (Dependencies)** | Không có |
| **Giả định (Assumptions)** | Người dùng đã đăng nhập; dữ liệu khách hàng đã tồn tại trong hệ thống |

### Tự đánh giá theo tiêu chí INVEST

| Tiêu chí | Đạt? | Ghi chú & Hướng xử lý nếu ⚠️ |
| :--- | :--- | :--- |
| **I**ndependent | ✅ | Story hoàn toàn độc lập, không phụ thuộc câu chuyện nào khác |
| **N**egotiable | ✅ | Mô tả hành vi nghiệp vụ, không chứa chi tiết kỹ thuật cứng nhắc |
| **V**aluable | ✅ | Mang lại giá trị rõ ràng: tra cứu nhanh thông tin khách hàng |
| **E**stimable | ✅ | Đội phát triển dễ dàng ước lượng thời gian dựa trên mock data |
| **S**mall | ✅ | Chỉ mô tả một hành vi duy nhất: Xem danh sách (Read) |
| **T**estable | ✅ | Có đủ AC với dữ liệu cụ thể để Tester viết kịch bản kiểm thử |

### Tiêu chí nghiệp thu (Acceptance Criteria)

#### Tiêu chí nghiệm thu 1: Hiển thị danh sách khách hàng thông thường

- **Given** hệ thống CRM có sẵn 25 bản ghi khách hàng trong cơ sở dữ liệu
- **When** nhân viên kinh doanh truy cập trang danh sách khách hàng
- **Then** hệ thống hiển thị danh sách với tối đa 10 khách hàng trên mỗi trang
- **And** mỗi bản ghi hiển thị đầy đủ 6 trường: tên, email, địa chỉ, số điện thoại, trạng thái, ghi chú
- **And** phân trang hiển thị đúng số trang và cho phép chuyển trang

#### Tiêu chí nghiệp thu 2: Lọc danh sách theo trạng thái khách hàng

- **Given** hệ thống CRM có 10 khách hàng ở trạng thái "Đang hoạt động" và 5 khách hàng ở trạng thái "Không hoạt động"
- **When** nhân viên kinh doanh chọn bộ lọc trạng thái là "Đang hoạt động"
- **Then** hệ thống hiển thị đúng 10 khách hàng có trạng thái "Đang hoạt động"
- **And** các khách hàng có trạng thái khác không xuất hiện trong danh sách

#### Tiêu chí nghiệp thu 3: Tìm kiếm khách hàng theo tên hoặc email

- **Given** hệ thống CRM có khách hàng tên "Nguyễn Văn An" với email `an.nguyen@company.com`
- **When** nhân viên kinh doanh nhập "Nguyễn Văn An" vào ô tìm kiếm và nhấn tìm kiếm
- **Then** hệ thống hiển thị đúng bản ghi của "Nguyễn Văn An"
- **And** kết quả tìm kiếm chứa từ khóa trong cả trường tên và email

#### Tiêu chí nghiệp thu 4: Danh sách trống

- **Given** hệ thống CRM chưa có bản ghi khách hàng nào
- **When** nhân viên kinh doanh truy cập trang danh sách khách hàng
- **Then** hệ thống hiển thị thông báo "Chưa có khách hàng nào trong hệ thống"
- **And** không hiển thị bảng dữ liệu rỗng

### Definition of Done (DoD)

- [ ] Code passed unit test
- [ ] API trả về danh sách khách hàng với response time dưới 2 giây
- [ ] Đã test trên Chrome, Safari, Firefox
- [ ] Phân trang hoạt động đúng với dữ liệu thực (25+ bản ghi)

### Ghi chú (Notes)

| Loại | Nội dung |
| :--- | :--- |
| **Sự phụ thuộc** | Không có |
| **Giả định** | Bộ lọc trạng thái mặc định hiển thị "Tất cả"; trường "ghi chú" hiển thị tối đa 100 ký tự trong danh sách |
| **Câu hỏi mở** | Số lượng bản ghi mặc định trên mỗi trang là 10 hay 20? Có cần sắp xếp mặc định không? |

---

## US-CRM-CL-002: Tạo mới khách hàng

**As a** nhân viên kinh doanh đã đăng nhập và được phân quyền truy cập module Quản lý khách hàng (CRM)

**I want to** tạo bản ghi khách hàng mới với đầy đủ thông tin: tên, email, địa chỉ, số điện thoại, trạng thái và ghi chú

**So that** hệ thống lưu trữ thông tin khách hàng mới để quản lý và theo dõi liên hệ

### Siêu dữ liệu (Metadata)

| Trường | Giá trị |
| :--- | :--- |
| **Epic / Feature** | CRM — Quản lý khách hàng |
| **Độ ưu tiên (MoSCoW)** | Must |
| **Ước lượng (Estimate)** | — |
| **Sự phụ thuộc (Dependencies)** | Không có |
| **Giả định (Assumptions)** | Trường bắt buộc là tên và email; trạng thái mặc định khi tạo mới là "Đang hoạt động" |

### Tự đánh giá theo tiêu chí INVEST

| Tiêu chí | Đạt? | Ghi chú & Hướng xử lý nếu ⚠️ |
| :--- | :--- | :--- |
| **I**ndependent | ✅ | Story hoàn toàn độc lập, có thể phát triển và kiểm thử song song |
| **N**egotiable | ✅ | Chi tiết trường bắt buộc có thể thương lượng với PO |
| **V**aluable | ✅ | Tạo mới khách hàng là nghiệp vụ cốt lõi của CRM |
| **E**stimable | ✅ | Form đơn giản, đội phát triển dễ ước lượng |
| **S**mall | ✅ | Một hành vi duy nhất: Tạo mới (Create) |
| **T**estable | ✅ | Có đủ AC bao phủ happy path, validation và xử lý lỗi |

### Tiêu chí nghiệp thu (Acceptance Criteria)

#### Tiêu chí nghiệm thu 1: Tạo khách hàng thành công

- **Given** nhân viên kinh doanh đã đăng nhập và đang ở trang danh sách khách hàng
- **When** nhân viên điền đầy đủ thông tin bắt buộc (tên: "Trần Thị Bình", email: `binh.tran@company.com`) và nhấn nút "Lưu"
- **Then** hệ thống tạo bản ghi khách hàng mới và hiển thị thông báo "Tạo khách hàng thành công"
- **And** khách hàng mới xuất hiện trong danh sách với trạng thái mặc định "Đang hoạt động"
- **And** hệ thống chuyển hướng về trang danh sách khách hàng

#### Tiêu chí nghiệp thu 2: Validation — email trùng lặp

- **Given** hệ thống CRM đã có khách hàng với email `duong.nguyen@company.com`
- **When** nhân viên kinh doanh cố gắng tạo khách hàng mới với email trùng lặp `duong.nguyen@company.com`
- **Then** hệ thống hiển thị thông báo lỗi: "Email đã tồn tại trong hệ thống"
- **And** không tạo bản ghi khách hàng mới
- **And** các trường đã điền vẫn giữ nguyên giá trị (không bị xóa)

#### Tiêu chí nghiệp thu 3: Validation — thiếu trường bắt buộc

- **Given** nhân viên kinh doanh đã mở form tạo khách hàng mới
- **When** nhân viên bỏ trống trường "Tên" và nhấn nút "Lưu"
- **Then** hệ thống hiển thị thông báo lỗi: "Tên khách hàng là trường bắt buộc"
- **And** các trường khác vẫn giữ nguyên giá trị đã điền

#### Tiêu chí nghiệm thu 4: Validation — định dạng email không hợp lệ

- **Given** nhân viên kinh doanh đã mở form tạo khách hàng mới
- **When** nhân viên nhập email không đúng định dạng `binh.tran@` và nhấn nút "Lưu"
- **Then** hệ thống hiển thị thông báo lỗi: "Email không đúng định dạng"
- **And** không tạo bản ghi khách hàng mới

### Definition of Done (DoD)

- [ ] Code passed unit test
- [ ] API tạo khách hàng trả về response time dưới 2 giây
- [ ] Email validation hỗ trợ format chuẩn RFC 5322
- [ ] Đã test trên Chrome, Safari, Firefox

### Ghi chú (Notes)

| Loại | Nội dung |
| :--- | :--- |
| **Sự phụ thuộc** | Không có |
| **Giả định** | Trường "ghi chú" không bắt buộc; địa chỉ và số điện thoại không bắt buộc |
| **Câu hỏi mở** | Số điện thoại có cần validation định dạng Việt Nam (+84) không? Có cần kiểm tra email thực hay chỉ format không? |

---

## US-CRM-CL-003: Cập nhật thông tin khách hàng

**As a** nhân viên kinh doanh đã đăng nhập và được phân quyền chỉnh sửa khách hàng trong module CRM

**I want to** cập nhật thông tin khách hàng bao gồm: tên, email, địa chỉ, số điện thoại, trạng thái và ghi chú

**So that** thông tin khách hàng trong hệ thống luôn chính xác và cập nhật kịp thời

### Siêu dữ liệu (Metadata)

| Trường | Giá trị |
| :--- | :--- |
| **Epic / Feature** | CRM — Quản lý khách hàng |
| **Độ ưu tiên (MoSCoW)** | Must |
| **Ước lượng (Estimate)** | — |
| **Sự phụ thuộc (Dependencies)** | US-CRM-CL-001 (Xem danh sách khách hàng) |
| **Giả định (Assumptions)** | Nhân viên chọn khách hàng cần sửa từ danh sách; trường bắt buộc khi sửa giống tạo mới |

### Tự đánh giá theo tiêu chí INVEST

| Tiêu chí | Đạt? | Ghi chú & Hướng xử lý nếu ⚠️ |
| :--- | :--- | :--- |
| **I**ndependent | ✅ | Phụ thuộc vào US-CRM-CL-001 về mặt nghiệp vụ (cần có danh sách để chọn sửa), nhưng Dev có thể dùng mock data để kiểm thử độc lập |
| **N**egotiable | ✅ | Chi tiết trường sửa có thể thương lượng với PO |
| **V**alue | ✅ | Cập nhật thông tin là nghiệp vụ cốt lõi, đảm bảo dữ liệu luôn đúng |
| **E**stimable | ✅ | Cùng độ phức tạp với form tạo mới, dễ ước lượng |
| **S**mall | ✅ | Một hành vi duy nhất: Cập nhật (Update) |
| **T**estable | ✅ | Có đủ AC bao phủ happy path, validation và xử lý lỗi |

### Tiêu chí nghiệp thu (Acceptance Criteria)

#### Tiêu chí nghiệm thu 1: Cập nhật thông tin thành công

- **Given** khách hàng "Lê Văn Cường" có email `cuong.le@company.com` và trạng thái "Đang hoạt động" đã tồn tại trong hệ thống
- **When** nhân viên kinh doanh chọn khách hàng "Lê Văn Cường", thay đổi số điện thoại thành "0901234567" và trạng thái thành "Không hoạt động", sau đó nhấn "Lưu"
- **Then** hệ thống cập nhật bản ghi và hiển thị thông báo "Cập nhật khách hàng thành công"
- **And** thông tin khách hàng trong danh sách phản ánh đúng dữ liệu vừa sửa

#### Tiêu chí nghiệm thu 2: Validation — email trùng lặp khi sửa

- **Given** hệ thống có 2 khách hàng: "Phạm Thị Dung" (email: `dung.pham@company.com`) và "Hoàng Văn E" (email: `hoang.van@company.com`)
- **When** nhân viên kinh doanh sửa email của "Hoàng Văn E" thành `dung.pham@company.com` (đã tồn tại)
- **Then** hệ thống hiển thị thông báo lỗi: "Email đã tồn tại trong hệ thống"
- **And** bản ghi của "Hoàng Văn E" không bị thay đổi
- **And** các trường đã sửa vẫn giữ nguyên giá trị (ngoại trừ email)

#### Tiêu chí nghiệm thu 3: Validation — thiếu trường bắt buộc khi sửa

- **Given** khách hàng "Ngô Thị F" đã tồn tại với đầy đủ thông tin
- **When** nhân viên kinh doanh xóa trắng trường "Tên" và nhấn "Lưu"
- **Then** hệ thống hiển thị thông báo lỗi: "Tên khách hàng là trường bắt buộc"
- **And** bản ghi khách hàng giữ nguyên thông tin cũ

### Definition of Done (DoD)

- [ ] Code passed unit test
- [ ] API cập nhật khách hàng trả về response time dưới 2 giây
- [ ] Đã test trên Chrome, Safari, Firefox
- [ ] Kiểm tra không có side effect trên các bản ghi khác khi cập nhật

### Ghi chú (Notes)

| Loại | Nội dung |
| :--- | :--- |
| **Sự phụ thuộc** | US-CRM-CL-001 — cần có danh sách để chọn khách hàng sửa |
| **Giả định** | Chỉ cho phép sửa thông tin, không cho phép sửa mã khách hàng (ID) |
| **Câu hỏi mở** | Có cần lưu lại lịch sử chỉnh sửa (audit log) không? Ai có quyền sửa — tất cả nhân viên hay chỉ quản lý? |

---

## US-CRM-CL-004: Xóa khách hàng

**As a** nhân viên kinh doanh đã đăng nhập và được phân quyền xóa khách hàng trong module CRM

**I want to** xóa bản ghi khách hàng khỏi hệ thống

**So that** loại bỏ khách hàng không còn cần thiết để giữ dữ liệu CRM luôn gọn gàng và chính xác

### Siêu dữ liệu (Metadata)

| Trường | Giá trị |
| :--- | :--- |
| **Epic / Feature** | CRM — Quản lý khách hàng |
| **Độ ưu tiên (MoSCoW)** | Should |
| **Ước lượng (Estimate)** | — |
| **Sự phụ thuộc (Dependencies)** | US-CRM-CL-001 (Xem danh sách khách hàng) |
| **Giả định (Assumptions)** | Xóa mềm (soft delete) — khách hàng bị ẩn nhưng vẫn lưu trong database; hệ thống yêu cầu xác nhận trước khi xóa |

### Tự đánh giá theo tiêu chí INVEST

| Tiêu chí | Đạt? | Ghi chú & Hướng xử lý nếu ⚠️ |
| :--- | :--- | :--- |
| **I**ndependent | ✅ | Phụ thuộc vào US-CRM-CL-001 về mặt UX (cần danh sách để chọn xóa), nhưng logic xóa hoàn toàn độc lập |
| **N**egotiable | ✅ | Soft delete hay hard delete có thể thương lượng với PO |
| **V**alue | ✅ | Loại bỏ dữ liệu không cần thiết, giữ CRM gọn gàng |
| **E**stimable | ✅ | Logic đơn giản, dễ ước lượng |
| **S**mall | ✅ | Một hành vi duy nhất: Xóa (Delete) |
| **T**estable | ✅ | Có đủ AC bao phủ happy path, confirmation và xử lý lỗi |

### Tiêu chí nghiệp thu (Acceptance Criteria)

#### Tiêu chí nghiệm thu 1: Xóa khách hàng thành công

- **Given** khách hàng "Vũ Thị G" đã tồn tại trong danh sách khách hàng
- **When** nhân viên kinh doanh chọn khách hàng "Vũ Thị G" và nhấn nút "Xóa", sau đó xác nhận xóa trên hộp thoại
- **Then** hệ thống ẩn bản ghi khách hàng "Vũ Thị G" khỏi danh sách
- **And** hiển thị thông báo "Xóa khách hàng thành công"
- **And** khách hàng "Vũ Thị G" không còn xuất hiện trong kết quả lọc và tìm kiếm

#### Tiêu chí nghiệm thu 2: Hủy xóa khi chưa xác nhận

- **Given** nhân viên kinh doanh đã chọn khách hàng "Trần Văn H" và nhấn nút "Xóa"
- **When** nhân viên chọn "Hủy" trên hộp thoại xác nhận xóa
- **Then** hệ thống đóng hộp thoại xác nhận
- **And** khách hàng "Trần Văn H" vẫn tồn tại trong danh sách với đầy đủ thông tin
- **And** không có bản ghi nào bị ẩn hoặc thay đổi

#### Tiêu chí nghiệm thu 3: Xác nhận trước khi xóa

- **Given** nhân viên kinh doanh đã chọn khách hàng "Lê Thị I" để xóa
- **When** nhân viên nhấn nút "Xóa"
- **Then** hệ thống hiển thị hộp thoại xác nhận với nội dung: "Bạn có chắc chắn muốn xóa khách hàng 'Lê Thị I'?"
- **And** hộp thoại có 2 lựa chọn: "Hủy" và "Xác nhận"

### Definition of Done (DoD)

- [ ] Code passed unit test
- [ ] API xóa khách hàng trả về response time dưới 2 giây
- [ ] Đã test trên Chrome, Safari, Firefox
- [ ] Soft delete không ảnh hưởng đến các bản ghi liên quan (đơn hàng, hợp đồng...)

### Ghi chú (Notes)

| Loại | Nội dung |
| :--- | :--- |
| **Sự phụ thuộc** | US-CRM-CL-001 — cần có danh sách để chọn khách hàng xóa |
| **Giả định** | Xóa mềm (soft delete); khách hàng đã xóa không hiển thị trong danh sách chính |
| **Câu hỏi mở** | Có cần khôi phục (undo) sau khi xóa không? Khách hàng có đơn hàng/hợp đồng thì có được xóa không? |

---

## Tổng hợp câu hỏi mở (Open Questions)

| Câu hỏi | Người trả lời | Ưu tiên |
| :--- | :--- | :--- |
| Số bản ghi mặc định trên mỗi trang là 10 hay 20? | PO | Cao |
| Số điện thoại có cần validation định dạng Việt Nam (+84) không? | PO | Trung bình |
| Có cần audit log ghi nhận lịch sử chỉnh sửa không? | PO | Trung bình |
| Có cần khôi phục (undo) sau khi xóa không? | PO | Thấp |
| Khách hàng có đơn hàng/hợp đồng thì có được xóa không? | PO | Cao |

---

## Xác nhận bàn giao

> **Kiểm tra trước khi bàn giao:**
>
> - [ ] Tất cả câu chuyện đạt 06/06 tiêu chí INVEST (✅ trên mỗi bảng)
> - [ ] Mỗi câu chuyện có tối thiểu 3 tiêu chí nghiệm thu (Happy + Edge + Error)
> - [ ] Không có từ mơ hồ ("nhanh", "đẹp", "thân thiện") trong AC
> - [ ] Không có chi tiết kỹ thuật (API, database) trong AC
> - [ ] Dữ liệu trong Given cụ thể (tên, email thực tế, số lượng cụ thể)
> - [ ] Tất cả câu hỏi mở đã được PO/Stakeholder trả lời hoặc ghi nhận

---

**Định dạng:** Tiếng Việt — Bộ tiêu chí nghiệp thu dạng Gherkin (Given-When-Then)
