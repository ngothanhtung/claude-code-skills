# Bộ tài liệu phát triển phần mềm: PRD → User Story → Use Case → SRS/Specs → Test Case

## 1. PRD (Product Requirements Document)

- **Mục đích:** Trả lời câu hỏi *"Xây cái gì? Cho ai? Tại sao?"*
- **Định nghĩa:** PRD là tài liệu do Product Manager / Product Owner viết, mô tả sản phẩm ở góc độ kinh doanh và người dùng.

### Nội dung điển hình gồm

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
- **Tiêu chuẩn:** SRS thường theo tinh thần IEEE 830 / ISO/IEC/IEEE 29148, gồm:
  - **Functional Requirements (FR):** Hệ thống phải làm gì
  - **Non-Functional Requirements (NFR):** Hiệu năng, bảo mật, scalability, usability...
  - **External Interface Requirements:** API, UI, hardware, các hệ thống tích hợp
  - **Data Model / ERD**
  - **Constraints:** Công nghệ, pháp lý, business rules

> [!NOTE]
> SRS không thay thế PRD. Mỗi đặc tả kỹ thuật nên truy xuất ngược về FR/User Story/Use Case nguồn.

---

## 5. Test Case

- **Mục đích:** Chuyển PRD, User Story + Acceptance Criteria, Use Case hoặc SRS thành các kịch bản kiểm thử có thể thực thi.
- **Định nghĩa:** Test Case là tài liệu kiểm thử mô tả điều kiện trước khi test, dữ liệu kiểm thử, bước thực hiện và kết quả mong đợi.

### Nội dung điển hình gồm

- Mã test case và traceability về FR / User Story / AC / Use Case / SRS
- Priority (P0/P1/P2) và loại kiểm thử (Functional, UAT, Smoke, Regression, Integration, Permission, Negative)
- Preconditions và test data
- Steps & Expected Results
- Postconditions
- Coverage Matrix
- Risk & Gap cho các thông tin chưa xác định

> [!NOTE]
> Một bộ test case tốt không chỉ có happy path. Cần bao phủ edge case / business rule validation và error path cho các luồng chính.
