# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)

## CRM — Quản lý Danh sách Khách hàng

**Phiên bản:** 1.0
**Ngày:** 2026-07-14
**Tác giả:** Dev Lead
**Tài liệu tham chiếu:** PRD CRM Danh sách Khách hàng v1.0 (2026-07-14)
**Trạng thái:** Bản nháp

---

## 1. Tổng quan

### 1.1 Mục đích tài liệu

SRS này đặc tả chi tiết kỹ thuật cho tính năng Quản lý Danh sách Khách hàng trong hệ thống CRM. Mọi phần tử kỹ thuật được truy xuất ngược về FR tương ứng trong PRD CRM v1.0. Tài liệu phục vụ đội ngũ phát triển (Dev Lead, Developer) và kiểm thử viên (QA Engineer) trong quá trình triển khai và kiểm thử.

### 1.2 Phạm vi hệ thống

**Thuộc phạm vi SRS này:**

- API endpoints cho CRUD danh sách khách hàng
- Mô hình dữ liệu khách hàng
- Quy tắc xử lý nghiệp vụ cấp độ kỹ thuật
- Tích hợp xác thực (authentication) hiện có

**Không thuộc phạm vi SRS này:**

- UX/UI design (thuộc PRD + UX Designer)
- Triển khai infrastructure, CI/CD, deployment (thuộc tài liệu DevOps/SRE)
- Tính năng Import/Export CSV (Out-of-scope trong PRD)
- Tích hợp email marketing (Out-of-scope trong PRD)

### 1.3 Định nghĩa, từ viết tắt, chuẩn tham chiếu

| Thuật ngữ | Định nghĩa |
| :--- | :--- |
| CRM | Customer Relationship Management |
| FR | Functional Requirement — Yêu cầu chức năng trong PRD |
| SRS | Software Requirements Specification |
| RTM | Requirements Traceability Matrix |
| ADR | Architecture Decision Record |
| RBAC | Role-Based Access Control |
| UUID | Universally Unique Identifier |

**Chuẩn tham chiếu:**

- [IEEE 830-1998] — Recommended Practice for Software Requirements Specifications
- [ISO/IEC/IEEE 29148] — Requirements engineering
- [ISO/IEC 25010:2011] — SQuaRE

### 1.4 Người đọc dự kiến

- Trưởng nhóm phát triển (Development Lead)
- Kiến trúc sư hệ thống (System Architect)
- Lập trình viên (Developer)
- Kiểm thử viên (QA Engineer)

---

## 2. Yêu cầu chức năng — Specification by FR

### 2.1 Xem danh sách khách hàng

**FR-001 nguồn:** Xem danh sách khách hàng (PRD v1.0)

**SRS-001:** API lấy danh sách khách hàng có phân trang

**Mô tả ngắn:** Endpoint GET trả về danh sách khách hàng dạng JSON, hỗ trợ phân trang và sắp xếp theo ngày tạo giảm dần.

**Nguồn:** FR-001 trong PRD

#### 2.1.1 Giao diện (Interface)

**API Endpoint:**

| Phương thức | Đường dẫn | Mô tả |
| :--- | :--- | :--- |
| GET | /api/v1/customers | Lấy danh sách khách hàng (phân trang, sắp xếp) |

**Query Parameters:**

| Param | Kiểu | Required | Mặc định | Mô tả |
| :--- | :--- | :--- | :--- | :--- |
| page | integer | Không | 1 | Số trang |
| per_page | integer | Không | 10 | Số bản ghi/trang (max 50) |
| sort_by | string | Không | created_at | Trường sắp xếp |
| sort_order | string | Không | desc | asc hoặc desc |

**Response (200):**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "phone": "string | null",
      "address": "string | null",
      "status": "active | locked",
      "notes": "string | null",
      "created_at": "2026-07-14T08:30:00Z",
      "updated_at": "2026-07-14T08:30:00Z"
    }
  ],
  "meta": {
    "status": "success",
    "message": "",
    "pagination": {
      "current_page": 1,
      "per_page": 10,
      "total_items": 25,
      "total_pages": 3
    }
  }
}
```

**Mã lỗi:**

| Mã lỗi | HTTP Status | Nội dung | Nguyên nhân |
| :--- | :--- | :--- | :--- |
| AUTH-001 | 401 Unauthorized | Chưa xác thực | Token JWT hết hạn hoặc không hợp lệ |
| AUTH-002 | 403 Forbidden | Không có quyền truy cập module CRM | User không thuộc role kinh doanh/admin |
| SRV-001 | 500 Internal Server Error | Lỗi hệ thống | Database connection timeout hoặc lỗi không xác định |

#### 2.1.2 Mô hình dữ liệu (Data Model)

##### Entity: customers

| Thuộc tính | Kiểu dữ liệu | Ràng buộc | Mô tả |
| :--- | :--- | :--- | :--- |
| id | UUID | PRIMARY KEY, NOT NULL | ID duy nhất, tự sinh |
| name | VARCHAR(255) | NOT NULL | Họ tên khách hàng |
| email | VARCHAR(255) | NOT NULL, UNIQUE | Email duy nhất trong hệ thống |
| phone | VARCHAR(20) | NULL | Số điện thoại (tuỳ chọn) |
| address | TEXT | NULL | Địa chỉ (tuỳ chọn) |
| status | VARCHAR(20) | NOT NULL, DEFAULT 'active' | Trạng thái: active / locked |
| notes | TEXT | NULL | Ghi chú (tuỳ chọn) |
| created_by | UUID | FOREIGN KEY → users.id, NOT NULL | Nhân viên tạo |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Thời điểm tạo |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Thời điểm cập nhật cuối |

**Index:**

- Primary Key: `id`
- Unique: `email` (email phải là duy nhất — FR-004, FR-005)
- Index: `status` (phục vụ lọc theo trạng thái — FR-003)
- Composite Index: `created_by, created_at` (phục vụ sắp xếp + phân trang)

#### 2.1.3 Quy tắc xử lý (Processing Rules)

- Sắp xếp mặc định theo `created_at DESC`
- `per_page` tối đa 50, vượt quá tự động limit về 50
- Phân trang offset-based: `OFFSET = (page - 1) * per_page`
- Response `data` trả về mảng rỗng `[]` nếu không có kết quả (không trả `null`)

#### 2.1.4 Ràng buộc và giả định kỹ thuật

| Loại | Nội dung |
| :--- | :--- |
| Ràng buộc kỹ thuật | Response time p95 < 200ms cho tối đa 10,000 bản ghi |
| Giả định kỹ thuật | Database đã được seed dữ liệu test; UUID version 4 |

---

### 2.2 Tìm kiếm khách hàng

**FR-002 nguồn:** Tìm kiếm khách hàng (PRD v1.0)

**SRS-002:** API tìm kiếm khách hàng theo từ khóa

**Mô tả ngắn:** Endpoint GET trả về danh sách khách hàng phù hợp từ khóa, tìm kiếm theo 3 trường: name, email, phone.

**Nguồn:** FR-002 trong PRD

#### 2.2.1 Giao diện (Interface)

**API Endpoint:**

| Phương thức | Đường dẫn | Mô tả |
| :--- | :--- | :--- |
| GET | /api/v1/customers/search?q={keyword} | Tìm kiếm khách hàng theo từ khóa |

**Query Parameters:**

| Param | Kiểu | Required | Mô tả |
| :--- | :--- | :--- | :--- |
| q | string | Có | Từ khóa tìm kiếm (tối thiểu 2 ký tự) |

**Response (200):**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "phone": "string | null",
      "status": "active | locked",
      "match_field": "name | email | "phone""
    }
  ],
  "meta": {
    "status": "success",
    "message": "",
    "total_results": 3
  }
}
```

**Mã lỗi:**

| Mã lỗi | HTTP Status | Nội dung | Nguyên nhân |
| :--- | :--- | :--- | :--- |
| VAL-001 | 400 Bad Request | Từ khóa quá ngắn | `q` có ít hơn 2 ký tự |
| AUTH-001 | 401 Unauthorized | Chưa xác thực | Token JWT hết hạn hoặc không hợp lệ |

#### 2.2.2 Quy tắc xử lý (Processing Rules)

- Tìm kiếm không phân biệt hoa/thường: chuyển query và field về lowercase trước khi so sánh
- Sử dụng SQL `LIKE '%keyword%'` trên cả 3 trường: `name`, `email`, `phone`
- Từ khóa < 2 ký tự: trả lỗi VAL-001
- Kết quả trả về tối đa 50 bản ghi (không phân trang trong search)

---

### 2.3 Tạo mới khách hàng

**FR-004 nguồn:** Tạo mới khách hàng (PRD v1.0)

**SRS-003:** API tạo mới khách hàng

**Mô tả ngắn:** Endpoint POST nhận thông tin khách hàng, kiểm tra email trùng, lưu vào database.

**Nguồn:** FR-004 trong PRD

#### 2.3.1 Giao diện (Interface)

**API Endpoint:**

| Phương thức | Đường dẫn | Mô tả |
| :--- | :--- | :--- |
| POST | /api/v1/customers | Tạo mới khách hàng |

**Request Body:**

```json
{
  "name": { "type": "string", "required": true, "description": "Họ tên khách hàng" },
  "email": { "type": "string", "required": true, "description": "Email duy nhất" },
  "phone": { "type": "string", "required": false, "description": "Số điện thoại" },
  "address": { "type": "string", "required": false, "description": "Địa chỉ" },
  "notes": { "type": "string", "required": false, "description": "Ghi chú" }
}
```

**Response (201 Created):**

```json
{
  "data": {
    "id": "uuid",
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@example.com",
    "phone": "0901234567",
    "address": "123 Lê Lợi, Q1, TP.HCM",
    "status": "active",
    "notes": null,
    "created_by": "uuid-cua-nhan-vien",
    "created_at": "2026-07-14T08:30:00Z",
    "updated_at": "2026-07-14T08:30:00Z"
  },
  "meta": {
    "status": "success",
    "message": "Tạo khách hàng thành công"
  }
}
```

**Mã lỗi:**

| Mã lỗi | HTTP Status | Nội dung | Nguyên nhân |
| :--- | :--- | :--- | :--- |
| VAL-002 | 400 Bad Request | Thiếu trường bắt buộc | `name` hoặc `email` bị thiếu |
| VAL-003 | 400 Bad Request | Email không hợp lệ | Định dạng email không đúng |
| DUP-001 | 409 Conflict | Email đã tồn tại | Email đã được sử dụng cho khách hàng khác |
| AUTH-001 | 401 Unauthorized | Chưa xác thực | Token JWT hết hạn hoặc không hợp lệ |

#### 2.3.2 Quy tắc xử lý (Processing Rules)

- Kiểm tra email trùng TRƯỚC khi insert (atomic check): `SELECT id FROM customers WHERE email = $1`
- Nếu email trùng → trả DUP-001 (409 Conflict)
- `status` mặc định là `"active"` — không cho phép client set giá trị khác khi tạo
- `created_by` lấy từ JWT claim `user_id` trong request header
- `created_at` và `updated_at` tự sinh bởi database (server-side)

---

### 2.4 Cập nhật thông tin khách hàng

**FR-005 nguồn:** Cập nhật thông tin khách hàng (PRD v1.0)

**SRS-004:** API cập nhật thông tin khách hàng

**Mô tả ngắn:** Endpoint PUT cập nhật thông tin hồ sơ khách hàng. Nếu thay đổi email, kiểm tra trùng.

**Nguồn:** FR-005 trong PRD

#### 2.4.1 Giao diện (Interface)

**API Endpoint:**

| Phương thức | Đường dẫn | Mô tả |
| :--- | :--- | :--- |
| PUT | /api/v1/customers/{id} | Cập nhật thông tin khách hàng |

**Path Parameters:**

| Param | Kiểu | Mô tả |
| :--- | :--- | :--- |
| id | UUID | ID khách hàng cần cập nhật |

**Request Body:** (giống SRS-003, tất cả field đều optional — chỉ update field được gửi)

**Response (200):** (giống SRS-003, trả về bản ghi đã cập nhật)

**Mã lỗi:**

| Mã lỗi | HTTP Status | Nội dung | Nguyên nhân |
| :--- | :--- | :--- | :--- |
| NOT-001 | 404 Not Found | Không tìm thấy khách hàng | ID không tồn tại trong database |
| DUP-001 | 409 Conflict | Email đã tồn tại | Email mới đã được dùng cho khách hàng khác |
| AUTH-002 | 403 Forbidden | Không có quyền chỉnh sửa | User không phải người tạo hồ sơ và không phải admin |

#### 2.4.2 Quy tắc xử lý (Processing Rules)

- Kiểm tra tồn tại trước: `SELECT id FROM customers WHERE id = $1`
- Nếu email thay đổi: kiểm tra trùng trước khi update (logic tương tự SRS-003)
- `updated_at` tự cập nhật bởi database trigger hoặc application layer
- Chỉ người tạo hồ sơ (`created_by`) hoặc admin mới được cập nhật (FR-005 BR)

---

## 3. Yêu cầu phi chức năng

### 3.1 Hiệu suất

| Tiêu chí | Ngưỡng | Điều kiện đo | Phương pháp đo |
| :--- | :--- | :--- | :--- |
| Thời gian phản hồi GET /customers | p95 < 200ms | Dữ liệu ≤ 10,000 bản ghi, 50 concurrent users | k6 load test |
| Thời gian phản hồi POST /customers | p95 < 300ms | Kiểm tra email trùng trên ≤ 10,000 records | k6 load test |
| Thời gian search | p95 < 500ms | Query ≥ 2 ký tự, ≤ 10,000 records | k6 load test |

### 3.2 Bảo mật

| Tiêu chí | Yêu cầu kỹ thuật | Chuẩn tham chiếu |
| :--- | :--- | :--- |
| Xác thực | JWT RS256, expiry 8h, lấy từ auth service hiện có | RFC 7519 |
| Phân quyền | RBAC: role `sales` CRUD cơ bản, role `manager` thêm quyền lock/unlock | NIST RBAC |
| Input validation | Whitelist field; email validate format RFC 5322; name không chứa script | OWASP Top 10 |
| Audit log | Ghi log mọi thao tác tạo/sửa/khóa khách hàng: user_id, action, timestamp, affected_id | Internal standard |

### 3.3 Khả dụng

| Tiêu chí | Yêu cầu |
| :--- | :--- |
| Uptime | 99.5% / tháng |
| RPO | 1 giờ (backup database hàng giờ) |
| RTO | 4 giờ |

### 3.4 Khả năng mở rộng

- Horizontal scaling thông qua load balancer + nhiều app instances (stateless API)
- Database read replica cho GET/search endpoints nếu load > 5,000 concurrent users

### 3.5 Khả năng tương thích

- REST API versioning: `/api/v1/...` — backward compatible trong cùng major version
- JSON response format chuẩn cho toàn bộ endpoints

---

## 4. Giao diện hệ thống

### 4.1 Giao diện người dùng

| Màn hình | Mô tả | FR liên quan |
| :--- | :--- | :--- |
| Danh sách khách hàng | Bảng phân trang + bộ lọc + nút CRUD | FR-001, FR-003 |
| Form tạo/sửa khách hàng | Form modal với validation real-time | FR-004, FR-005 |
| Dialog xác nhận khóa/mở khóa | Confirmation dialog | FR-006 |

### 4.2 Giao diện phần cứng

Không có yêu cầu giao tiếp phần cứng đặc biệt.

### 4.3 Giao diện phần mềm

| Hệ thống | Chức năng tích hợp | Contract (API / Message format) | Trạng thái xác nhận |
| :--- | :--- | :--- | :--- |
| Auth Service (hiện có) | Xác thực JWT, lấy user info | JWT RS256, header `Authorization: Bearer {token}` | Đã xác nhận |

### 4.4 Giao diện truyền thông

- HTTP/REST, HTTPS (TLS 1.3)
- Content-Type: `application/json`

---

## 5. Ma trận truy xuất yêu cầu (RTM)

**Quy tắc: Mỗi phần tử SRS truy xuất về ít nhất 1 FR trong PRD.**

| SRS-[mã] | Tên | Loại | FR nguồn | Độ ưu tiên | Ghi chú |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SRS-001 | GET /customers | API | FR-001 | P0 | Phân trang + sắp xếp |
| SRS-002 | GET /customers/search | API | FR-002 | P0 | Tìm kiếm theo name/email/phone |
| SRS-003 | POST /customers | API | FR-004 | P0 | Kiểm tra email trùng |
| SRS-004 | PUT /customers/{id} | API | FR-005 | P1 | Kiểm tra quyền + email trùng |
| D-001 | customers table | Data Model | FR-001, FR-004, FR-005 | P0 | UNIQUE(email), status enum |

> **Lưu ý:** FR-003 (Lọc theo trạng thái) được xử lý qua query param `?status=` của SRS-001 — không cần endpoint riêng. FR-006 (Khóa/mở khóa) tương ứng `PUT /customers/{id}` với field `status` trong SRS-004.

---

## 6. Nhật ký quyết định kiến trúc (ADR)

| ADR-[mã] | Quyết định | Bối cảnh | Lựa chọn | Hệ quả |
| :--- | :--- | :--- | :--- | :--- |
| ADR-001 | UUID thay vì auto-increment ID | FR-004 yêu cầu ID duy nhất toàn hệ thống; tương thích distributed | UUID v4 (random) | Ưu: unguessable, distributed-safe. Nhược: index lớn hơn, khó debug |
| ADR-002 | SQL LIKE thay vì full-text search | FR-002 tìm kiếm đơn giản trên ≤10K records | PostgreSQL LIKE '%keyword%' | Ưu: đơn giản, không cần extra service. Nhược: không optimal với >50K records — cần upgrade sang full-text sau |
| ADR-003 | Stateful lock check trên application layer | FR-005 yêu cầu chỉ người tạo hoặc admin mới sửa | Middleware check `created_by == current_user OR role == admin` | Ưu: logic tập trung. Nhược: thêm 1 query per request |

---

## 7. Phụ lục

### 7.1 Từ điển dữ liệu

| Trường | Kiểu | Ràng buộc | Ghi chú |
| :--- | :--- | :--- | :--- |
| id | UUID v4 | PK, NOT NULL | Tự sinh bởi application layer |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Validate RFC 5322 trước khi lưu |
| status | VARCHAR(20) | NOT NULL, DEFAULT 'active' | Chỉ nhận giá trị: 'active', 'locked' |

### 7.2 Tài liệu tham khảo

- [PRD CRM Danh sách Khách hàng](../../../crm/customer-management/customer-list/prd.md)
- [Discovery CRM Danh sách Khách hàng](../../../crm/customer-management/customer-list/discovery.md)
- [User Stories CRM](../../../crm/customer-management/customer-list/1-user-stories/us.md)
- [IEEE 830-1998] — Recommended Practice for Software Requirements Specifications
- [ISO/IEC/IEEE 29148] — Requirements engineering
