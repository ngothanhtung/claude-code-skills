# Bộ tài liệu phát triển phần mềm: PRD → User Story → Use Case → SRS/Specs

## 1. PRD (Product Requirements Document)

- **Mục đích:** Trả lời câu hỏi *"Xây cái gì? Cho ai? Tại sao?"*
- **Định nghĩa:** PRD là tài liệu do Product Manager / Product Owner viết, mô tả sản phẩm ở góc độ kinh doanh và người dùng.

### Nội dung điển hình gồm:
- Vấn đề cần giải quyết (problem statement)
- Đối tượng người dùng (target users, personas)
- Mục tiêu sản phẩm và KPIs
- Các tính năng chính (features) ở mức cao
- Phạm vi (in-scope / out-of-scope)
- Ràng buộc về thời gian, ngân sách, công nghệ

> [!NOTE]
> PRD không đi sâu vào kỹ thuật. Nó là "kim chỉ nam" để cả team hiểu cùng một sản phẩm.

---

## 2. User Story + Acceptance Criteria

- **Mục đích:** Chia nhỏ PRD thành các đơn vị giá trị cho người dùng, đủ nhỏ để team dev làm trong 1 sprint.
- **Công thức viết User Story:**
  ```text
  "As a [vai trò], I want [hành động], so that [lợi ích]."
  ```
  *Ví dụ:* `"Là một học viên, tôi muốn xem mô hình 3D tế bào để tôi có thể hiểu cấu trúc bên trong dễ hơn so với hình 2D."`

- **Acceptance Criteria (AC):** Là điều kiện nghiệm thu — danh sách cụ thể để biết story "xong" hay chưa. Thường viết theo Gherkin:
  ```gherkin
  Given [bối cảnh], When [hành động], Then [kết quả].
  ```

> [!NOTE]
> User Story là "công cụ làm việc" chính của team Agile/Scrum.

---

## 3. Use Case

- **Mục đích:** Mô tả chi tiết tương tác giữa Actor (người/hệ thống bên ngoài) và System để hoàn thành một mục tiêu cụ thể.
- **Cấu trúc thường gặp của Use Case:**
  - **Actor:** Ai khởi tạo
  - **Preconditions:** Điều kiện trước khi bắt đầu
  - **Main Flow (Happy Path):** Các bước chính
  - **Alternative Flows:** Nhánh phụ
  - **Exception Flows:** Lỗi/ngoại lệ
  - **Postconditions:** Trạng thái sau khi xong

> [!NOTE]
> Use Case chi tiết hơn User Story, mô tả đầy đủ các luồng (kể cả lỗi), thường đi kèm Use Case Diagram (UML).

---

## 4. SRS (Software Requirements Specification) / Specs

- **Định nghĩa:** Đây là tài liệu kỹ thuật chi tiết — đặc tả phần mềm cho team dev/test thực thi.
- **Tiêu chuẩn:** SRS thường theo chuẩn IEEE 830, gồm:
  - **Functional Requirements (FR):** Hệ thống phải làm gì
  - **Non-Functional Requirements (NFR):** Hiệu năng, bảo mật, scalability, usability...
  - **External Interface Requirements:** API, UI, hardware, các hệ thống tích hợp
  - **Data Model / ERD**
  - **Constraints:** Công nghệ, pháp lý, business rules

