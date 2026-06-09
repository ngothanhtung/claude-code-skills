## ADDED Requirements

### Requirement: Student can view attendance summary by course
The system SHALL display a summary table of attendance for all courses in the current semester, showing: course name, total sessions, number of present sessions, number of absent sessions (with/without permission), attendance rate (%), and status. Courses with attendance rate below 80% SHALL be visually highlighted as "Cảnh báo", below 60% as "Nghiêm trọng".

#### Scenario: Attendance summary loads
- **WHEN** the student navigates to the "Attendance" page
- **THEN** the system displays the attendance summary table for the current semester within 3 seconds

#### Scenario: Warning for low attendance
- **WHEN** a course has an attendance rate below 80%
- **THEN** the system highlights that course with a warning status

#### Scenario: No attendance data yet
- **WHEN** the semester has not started or no attendance records exist
- **THEN** the system displays "Chưa có dữ liệu điểm danh cho học kỳ này"

### Requirement: Student can view attendance detail for a specific course
The student SHALL be able to click on a course to view detailed attendance records for each session. Each session row SHALL display: date, time, room, and status (present / absent with permission / absent without permission). Sessions SHALL be sorted in reverse chronological order (most recent first).

#### Scenario: Course attendance detail loads
- **WHEN** the student clicks on a course in the attendance summary
- **THEN** the system displays a detailed list of all attendance sessions for that course

#### Scenario: Attendance detail order
- **WHEN** viewing attendance details
- **THEN** sessions are sorted from most recent to oldest

#### Scenario: Session not yet updated
- **WHEN** a session has not yet been marked by the instructor
- **THEN** the system displays "Chưa cập nhật" for that session

### Requirement: Attendance status categories
The system SHALL support three attendance statuses: "Có mặt" (present), "Vắng có phép" (absent with permission, approved by instructor/training department), and "Vắng không phép" (absent without permission). Absent-with-permission status SHALL only apply after formal approval.

#### Scenario: Different attendance types display correctly
- **WHEN** viewing a session attendance record
- **THEN** it shows "Có mặt" for present, "Vắng có phép" for approved absence, or "Vắng không phép" for unexcused absence

### Requirement: Data privacy for attendance
Attendance records SHALL only be viewable by the student who owns the data. No other user shall be able to view another student's attendance records.

#### Scenario: Only own attendance visible
- **WHEN** viewing attendance records
- **THEN** the student sees only their own attendance data

### Requirement: Attendance update cadence
Attendance records SHALL be updated within 24 hours after each class session.

#### Scenario: Attendance data recency
- **WHEN** a session took place less than 24 hours ago
- **THEN** the attendance status SHALL be updated by the system within 24 hours of the session end
