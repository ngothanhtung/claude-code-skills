## Why

Học viên hiện phải tra cứu điểm số, điểm danh, lịch học, lịch thi và lịch bảo vệ đồ án rời rạc qua nhiều kênh (bảng điểm giấy, email, tin nhắn). Điều này gây mất thời gian, dễ bỏ lỡ thông tin quan trọng và khó phát hiện kịp thời các bất thường (điểm thấp, thiếu điểm danh). Cần một cổng thông tin học tập tập trung cho học viên để tra cứu toàn bộ hoạt động học tập cá nhân tại một nơi duy nhất.

## What Changes

- Xây dựng **Student Portal** — giao diện web cho học viên tra cứu thông tin học tập cá nhân
- Tích hợp với hệ thống quản lý đào tạo (giả định có API REST) để lấy dữ liệu điểm, điểm danh, lịch
- Triển khai module xuất báo cáo điểm số (PDF/Excel)
- Tích hợp hệ thống thông báo (email/push) nhắc lịch thi và lịch bảo vệ
- Hỗ trợ responsive (mobile-first) và đạt WCAG 2.1 AA

## Capabilities

### New Capabilities
- `grade-management`: Xem điểm tổng hợp theo học kỳ, điểm chi tiết từng thành phần, GPA học kỳ và tích lũy
- `grade-export`: Xuất bảng điểm cá nhân dạng PDF/Excel với logo, thông tin học viên, chữ ký điện tử
- `attendance-tracking`: Xem tổng hợp điểm danh theo môn, chi tiết từng buổi, phân loại vắng có phép/không phép, cảnh báo tỷ lệ tham gia
- `class-schedule`: Xem lịch học dạng tuần/tháng, đánh dấu thay đổi lịch, xem chi tiết buổi học
- `exam-schedule`: Xem danh sách kỳ thi, phòng thi, số báo danh, hình thức thi, nhãn "Sắp thi", thông báo nhắc trước 7 ngày và 1 ngày
- `defense-schedule`: Xem lịch bảo vệ đồ án, thông tin hội đồng, trạng thái hồ sơ, thông báo nhắc trước 7 ngày và 1 ngày
- `notifications`: Gửi thông báo đẩy và email nhắc lịch thi, lịch bảo vệ, thay đổi lịch học

### Modified Capabilities
*(Không có — đây là dự án mới, chưa có spec nào từ trước.)*

## Impact

- **Frontend**: Xây dựng mới giao diện Student Portal (Next.js với responsive design)
- **Backend/API**: Cần module proxy/gateway tích hợp với hệ thống quản lý đào tạo qua REST API
- **Hệ thống thông báo**: Tích hợp qua API thông báo nội bộ hoặc dịch vụ bên thứ ba
- **Dịch vụ xuất tệp**: Thư viện tạo PDF (server-side) và Excel
- **Xác thực**: SSO nội bộ của cơ sở đào tạo hoặc đăng nhập bằng tài khoản học viên
- **Không ảnh hưởng đến hệ thống hiện tại** vì Student Portal là module độc lập, chỉ đọc dữ liệu qua API
