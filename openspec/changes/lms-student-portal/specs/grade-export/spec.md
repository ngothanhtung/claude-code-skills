## ADDED Requirements

### Requirement: Student can export transcript as PDF or Excel
The system SHALL allow the student to download their transcript as a PDF or Excel file. When the student clicks "Tải bảng điểm", the system SHALL show a dialog to select format (PDF or Excel) and scope (current semester or full course). The system SHALL generate the file within 10 seconds and start the download.

#### Scenario: Export transcript with format selection
- **WHEN** the student clicks "Tải bảng điểm" on the grades page
- **THEN** the system displays a dialog to select format (PDF/Excel) and scope (current semester/full course)
- **WHEN** the student selects PDF for full course and confirms
- **THEN** the system generates the PDF file and starts downloading

#### Scenario: Close dialog without selection
- **WHEN** the student closes the export dialog without selecting a format
- **THEN** the system downloads the transcript in default format (PDF, full course)

### Requirement: Exported file contains required information
The PDF file SHALL include the institution logo, student full name, student ID, course name, semester, a detailed grade table, and an electronic confirmation signature. The Excel file SHALL preserve the grade table structure and allow the student to apply formulas.

#### Scenario: Verify PDF content
- **WHEN** the student opens the downloaded PDF
- **THEN** it contains the institution logo, student name, student ID, grade table, and confirmation signature

#### Scenario: Verify Excel structure
- **WHEN** the student opens the downloaded Excel file
- **THEN** the grade data is in a structured format that allows formula calculations

### Requirement: No data for selected scope
If the selected semester has no grade data, the system SHALL show a warning "Không có dữ liệu để xuất cho học kỳ này" before generating the file.

#### Scenario: Export with empty semester
- **WHEN** the student selects a semester with no published grade data
- **THEN** the system displays the warning "Không có dữ liệu để xuất cho học kỳ này"

### Requirement: Each export action is logged
The system SHALL log every transcript download with student ID, export time, format, and scope for audit purposes.

#### Scenario: Export action recorded
- **WHEN** the student downloads a transcript
- **THEN** the system records the action with student ID, timestamp, format, and scope

### Requirement: Exported file does not contain other students' data
The system SHALL ensure that exported files contain only the requesting student's own grade data.

#### Scenario: Data privacy in export
- **WHEN** the system generates an export file
- **THEN** it SHALL only include data belonging to the requesting student
