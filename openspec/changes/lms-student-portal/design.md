## Context

Hệ thống Quản lý học tập hiện tại phân tán — học viên phải tra cứu điểm số, điểm danh, lịch học, lịch thi và lịch bảo vệ đồ án qua nhiều kênh riêng lẻ. PRD tại `docs/lms/prd.md` xác định nhu cầu xây dựng một Student Portal tập trung, cho phép học viên theo dõi toàn bộ hoạt động học tập cá nhân tại một giao diện duy nhất.

Dự án được chia làm 4 phase theo kế hoạch triển khai trong PRD. Thiết kế này tập trung vào phase 1 (nền tảng & điểm số) và phase 2 (điểm danh), đồng thời đặt nền tảng kiến trúc cho phase 3–4 (lịch học, lịch thi, lịch bảo vệ).

**Giả định kiến trúc chính** (từ PRD):
- Hệ thống quản lý đào tạo hiện có cung cấp API REST
- Cơ sở đào tạo có hệ thống SSO nội bộ
- Sử dụng thư viện tạo PDF phía server

## Goals / Non-Goals

**Goals:**
- Xây dựng ứng dụng web Student Portal với kiến trúc module, dễ mở rộng qua các phase
- Tích hợp với hệ thống quản lý đào tạo qua API REST để đọc dữ liệu điểm, điểm danh, lịch
- Hỗ trợ responsive trên mobile và desktop
- Đạt WCAG 2.1 AA
- Hiệu năng: tải trang điểm số < 3s, trang lịch < 2s, xuất tệp < 10s

**Non-Goals:**
- Không xử lý việc giáo viên nhập/sửa điểm — chỉ đọc
- Không xây dựng hệ thống quản lý lịch cho giáo viên
- Không hỗ trợ chấm phúc khảo
- Không thay thế hệ thống quản lý đào tạo hiện tại — chỉ tích hợp đọc dữ liệu

## Decisions

### 1. Frontend Framework: Next.js 14+ (App Router)

**Chọn Next.js** thay vì React SPA (Vite) hoặc Vue/Nuxt.

- **Lý do**: Next.js cung cấp SSR/SSG, routing sẵn, API routes cho proxy nhẹ, và hệ sinh thái React lớn. App Router hỗ trợ server components, giúp giảm bundle size và tối ưu SEO cho các trang public.
- **Alternative cân nhắc**: Vite + React Router — nhẹ hơn nhưng không có SSR và cần tự xử lý routing, không có API routes. Vue Nuxt — cũng tốt nhưng đội ngũ quen React hơn.

### 2. Kiến trúc: BFF (Backend-for-Frontend) Pattern

**Chọn BFF pattern** thay vì gọi trực tiếp API hệ thống quản lý đào tạo từ client.

- **Lý do**: API hệ thống quản lý đào tạo có thể không tối ưu cho frontend (nhiều field, format phức tạp). BFF đóng vai trò proxy, transform dữ liệu, caching, và che giấu cấu trúc backend gốc. Điều này giúp frontend đơn giản hơn, dễ thay đổi khi backend thay đổi.
- **Alternative cân nhắc**: Gọi trực tiếp từ client — đơn giản nhưng phơi bày cấu trúc API backend, khó caching, khó xử lý lỗi tập trung. GraphQL — mạnh cho query linh hoạt nhưng overkill cho use case chủ yếu đọc dữ liệu có cấu trúc cố định.

### 3. Authentication: SSO + Session Token

**Chọn kết hợp SSO** (từ cơ sở đào tạo) + **session token** lưu trong httpOnly cookie, thay vì JWT token lưu client-side.

- **Lý do**: HttpOnly cookie an toàn hơn (chống XSS), phù hợp với ứng dụng web truyền thống. SSO giúp học viên không cần nhập lại thông tin nếu đã đăng nhập hệ thống khác.
- **Alternative cân nhắc**: JWT lưu localStorage — tiện cho SPA nhưng dễ bị XSS đánh cắp token. JWT httpOnly cookie — cũng ổn nhưng cần refresh token handling phức tạp hơn.

### 4. State Management: React Server Components + React Query (Client)

**Chọn kết hợp Server Components cho dữ liệu tĩnh/initial + React Query cho dữ liệu dynamic client-side**.

- **Lý do**: Tận dụng server components để fetch dữ liệu ban đầu (giảm client JS), React Query cho caching, refetch, pagination phía client. Không cần Redux vì state phức tạp không cao.
- **Alternative cân nhắc**: Redux Toolkit — quá nặng cho use case chủ yếu đọc dữ liệu hiển thị. SWR — tương tự React Query nhưng ít feature hơn.

### 5. PDF/Excel Generation: Server-side (BFF)

**Chọn thư viện server-side** (pdfmake/puppeteer cho PDF, exceljs cho Excel) thay vì client-side rendering.

- **Lý do**: File tạo server-side đảm bảo định dạng nhất quán, không phụ thuộc trình duyệt, có thể thêm watermark/chữ ký điện tử dễ dàng. Client-side rendering có thể khác nhau giữa các trình duyệt.
- **Ảnh hưởng**: BFF cần thêm resources cho tác vụ tạo file nặng — cần xử lý timeout và queue cho các request xuất lớn.

### 6. Caching Layer: In-memory (BFF) + CDN cho assets tĩnh

**Chọn in-memory caching tại BFF** (TTL 5-30 phút tùy loại dữ liệu), không dùng Redis riêng ở phase 1.

- **Lý do**: Dữ liệu điểm/điểm danh thay đổi không thường xuyên, in-memory cache là đủ trong phase 1. Khi scale lên, có thể thêm Redis Layer sau.
- **Rủi ro**: Cache phân tán khi chạy nhiều BFF instances — cần sticky session hoặc chuyển sang Redis ở phase sau.

### 7. Component Library: shadcn/ui + Tailwind CSS

**Chọn shadcn/ui** (Radix primitives + Tailwind) thay vì Material UI hoặc Ant Design.

- **Lý do**: Nhẹ, accessible (Radix đạt WCAG), dễ custom theme, tree-shake tự nhiên. Bundle size nhỏ hơn MUI đáng kể.
- **Alternative cân nhắc**: Material UI — nặng, khó custom (CSS-in-JS overhead). Ant Design — thiết kế tốt nhưng ít accessible hơn và phù hợp desktop hơn.

## Risks / Trade-offs

| Risk | Mitigation |
| :--- | :--- |
| **API hệ thống quản lý đào tạo chưa sẵn sàng** — Có thể API không đáp ứng đủ dữ liệu hoặc chưa có | Thiết kế BFF với adapter pattern, có thể switch sang kết nối database trực tiếp mà không ảnh hưởng frontend; chuẩn bị mock data cho development |
| **Hiệu năng xuất PDF/Excel** — File bảng điểm toàn khóa cho nhiều học viên đồng thời có thể gây quá tải | Giới hạn concurrent exports (queue), hiển thị thời gian chờ ước tính; dùng caching cho các file xuất giống nhau |
| **Cache invalidation** — Dữ liệu điểm/điểm danh thay đổi không đều đặn, khó xác định TTL tối ưu | Dùng TTL ngắn (5 phút) cho điểm danh (thay đổi thường xuyên hơn), TTL dài hơn (30 phút) cho lịch học; cung cấp nút "Làm mới" thủ công |
| **Đồng bộ lịch thay đổi** — Lịch học/thi có thể thay đổi sau khi công bố | Lưu trữ lịch sử thay đổi, đánh dấu buổi/lịch bị thay đổi bằng màu sắc riêng, gửi thông báo |
| **Thiết bị cũ / trình duyệt lỗi thời** — Một số học viên dùng thiết bị cũ không hỗ trợ JS mới | Dùng polyfill khi cần; cung cấp trang trạng thái "Trình duyệt không được hỗ trợ" với hướng dẫn nâng cấp |

## Open Questions

1. **API contract chi tiết**: Cần xác định chính xác endpoint và response format từ hệ thống quản lý đào tạo trước khi implement BFF. Có cần thêm middleware transform layer?
2. **Phân trang dữ liệu**: Với học viên có nhiều môn học qua nhiều học kỳ, cần xác định threshold cho phân trang (ví dụ: load 10 học kỳ gần nhất mặc định, load more cho cũ hơn).
3. **Định dạng chữ ký điện tử trên PDF**: Cần làm rõ yêu cầu — là chữ ký số (digital signature) hay chỉ là text "Đã xác nhận"?
4. **Thông báo realtime**: Push notification cho lịch thay đổi — cần WebSocket hay polling là đủ (phase 1)?
