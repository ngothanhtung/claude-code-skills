import type { Task } from "./types";

export const seedTasks: Task[] = [
  { id: "CV-021", title: "Thiết kế lại biểu mẫu đăng ký khách hàng", desc: "Rút gọn còn 4 trường, thêm xác thực số điện thoại.", assignee: "Lan Anh", due: "2026-08-25", priority: "cao", status: "Cần làm" },
  { id: "CV-022", title: "Tổng hợp phản hồi khảo sát Q3", desc: "Phân loại theo mức độ hài lòng và gửi báo cáo tổng hợp.", assignee: "Ngọc Mai", due: "2026-08-28", priority: "thap", status: "Cần làm" },
  { id: "CV-023", title: "Chuẩn bị slide báo cáo tuần", desc: "Cập nhật số liệu doanh thu và tiến độ dự án hiện tại.", assignee: "Thu Hà", due: "2026-08-21", priority: "trung", status: "Cần làm" },
  { id: "CV-018", title: "Xây dựng API tích hợp thanh toán VNPay", desc: "Hoàn thiện luồng callback và xử lý lỗi giao dịch.", assignee: "Minh Quân", due: "2026-08-24", priority: "cao", status: "Đang làm" },
  { id: "CV-019", title: "Viết test case cho module giỏ hàng", desc: "Bao phủ các trường hợp thêm/xoá/áp mã giảm giá.", assignee: "Đức Anh", due: "2026-08-26", priority: "trung", status: "Đang làm" },
  { id: "CV-015", title: "Bản dịch tài liệu hướng dẫn sử dụng sang tiếng Anh", desc: "Bản dịch cần đối chiếu thuật ngữ với tài liệu gốc.", assignee: "Thu Hà", due: "2026-08-20", priority: "trung", status: "Chờ duyệt" },
  { id: "CV-016", title: "Thiết kế banner khuyến mãi tháng 9", desc: "Hai phiên bản: web và mạng xã hội, tỉ lệ 16:9 và 1:1.", assignee: "Lan Anh", due: "2026-08-20", priority: "cao", status: "Chờ duyệt" },
  { id: "CV-009", title: "Cập nhật chính sách đổi trả trên website", desc: "Bổ sung điều khoản đổi trả trong 7 ngày cho đơn hàng lỗi.", assignee: "Ngọc Mai", due: "2026-08-15", priority: "thap", status: "Hoàn thành" },
  { id: "CV-010", title: "Rà soát lỗi hiển thị trên mobile", desc: "Sửa lỗi vỡ giao diện ở màn hình dưới 375px.", assignee: "Minh Quân", due: "2026-08-16", priority: "cao", status: "Hoàn thành" },
  { id: "CV-011", title: "Đào tạo nhân viên mới về quy trình CSKH", desc: "Buổi đào tạo 2 tiếng kèm tài liệu quy trình chuẩn.", assignee: "Đức Anh", due: "2026-08-17", priority: "trung", status: "Hoàn thành" },
];
