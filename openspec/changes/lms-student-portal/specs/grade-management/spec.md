## ADDED Requirements

### Requirement: Student can view grade summary by semester
The system SHALL display a grade summary table for the currently selected semester, including course code, course name, credits, final grade, letter grade, and status. The system SHALL show both the semester GPA and cumulative GPA at the top of the page. The student SHALL be able to select a different semester from a dropdown to load that semester's data.

#### Scenario: Semester grade table loads successfully
- **WHEN** the student navigates to the "Grades" page
- **THEN** the system displays the grade table for the current semester within 3 seconds
- **THEN** the semester GPA and cumulative GPA are displayed above the table

#### Scenario: Student switches semester
- **WHEN** the student selects a different semester from the dropdown
- **THEN** the system loads and displays the grade data for the selected semester

#### Scenario: Semester has no published grades yet
- **WHEN** the selected semester has no published grades
- **THEN** the system displays the message "Điểm số học kỳ này chưa được công bố" instead of the grade table

#### Scenario: No courses registered in semester
- **WHEN** the student has not registered for any courses in the selected semester
- **THEN** the system displays "Bạn chưa đăng ký môn học nào trong học kỳ này" with a link to the course registration page

### Requirement: Student can view detailed grade breakdown per course
When the student clicks on a course row, the system SHALL expand the row to show individual grade components: midterm, practical, final exam, and other scores. Each component SHALL show the score achieved and the maximum possible score.

#### Scenario: Expand course to see grade components
- **WHEN** the student clicks on a course in the grade table
- **THEN** the row expands to display individual grade components with scores

#### Scenario: No grade components available
- **WHEN** the selected course has no detailed grade components
- **THEN** the system displays "Không có thông tin chi tiết" for that course

### Requirement: Grade display follows business rules
The system SHALL round final grades to 2 decimal places. The system SHALL convert numeric grades to letter grades: A (8.5–10), B (7.0–8.4), C (5.5–6.9), D (4.0–5.4), F (< 4.0). The system SHALL only display grades for courses where the instructor has published results; unpublished courses SHALL show status "Chưa công bố". Cumulative GPA SHALL only include courses with published final grades.

#### Scenario: Grade rounding and letter conversion
- **WHEN** the system displays a final grade of 8.456
- **THEN** it SHALL display the grade as 8.46 (rounded to 2 decimal places) with letter grade "A"

#### Scenario: Unpublished course
- **WHEN** a course grade has not been published by the instructor
- **THEN** the system displays "Chưa công bố" as the course status

### Requirement: Error handling for grade loading
If the system cannot load grade data due to a network or server error, it SHALL display an error message with a "Thử lại" (Retry) button.

#### Scenario: Grade data load fails
- **WHEN** the system fails to load grade data
- **THEN** it displays "Không thể tải dữ liệu. Vui lòng kiểm tra kết nối mạng." with a "Thử lại" button
