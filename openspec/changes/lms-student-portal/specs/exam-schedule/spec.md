## ADDED Requirements

### Requirement: Student can view exam schedule list
The system SHALL display a list of all exams the student must attend in the semester, sorted by date in ascending order (closest exam first). Each exam entry SHALL show: course name, exam date, start time, duration, exam format (written/practical/multiple-choice/oral), room, and candidate number. Exams within the next 7 days SHALL be marked with a "Sắp thi" label.

#### Scenario: Exam schedule loads
- **WHEN** the student navigates to the "Exam Schedule" page
- **THEN** the system displays the exam list sorted by date (closest first) within 2 seconds

#### Scenario: Upcoming exam highlighted
- **WHEN** an exam is within 7 days
- **THEN** the system marks it with "Sắp thi" label

#### Scenario: No exam schedule published yet
- **WHEN** the exam schedule for the semester has not been released
- **THEN** the system displays "Lịch thi chưa được công bố. Vui lòng quay lại sau."

### Requirement: Student can view exam details
The student SHALL be able to click on an exam to view detailed information: exam location on a map, exam room rules, and permitted items.

#### Scenario: View exam details
- **WHEN** the student clicks on an exam in the list
- **THEN** the system displays detailed information including location, rules, and permitted items

### Requirement: Exam schedule handles postponement and cancellation
If an exam is postponed or canceled, the system SHALL display "Hoãn" or "Hủy" status and show replacement exam information if available. If the exam room is not yet assigned, the system SHALL display "Chưa xếp phòng" and update when assigned.

#### Scenario: Postponed exam
- **WHEN** an exam has been postponed
- **THEN** the system displays "Hoãn" status with replacement exam info

#### Scenario: Exam room not yet assigned
- **WHEN** the room has not been assigned for an exam
- **THEN** the system displays "Chưa xếp phòng" for that field

### Requirement: Exam schedule business rules
Exam schedules SHALL only display exams for courses the student has registered for. The candidate number SHALL be unique per student per exam and SHALL NOT change. Exam room information SHALL be updated at least 3 days before the exam date.

#### Scenario: Only enrolled exam shown
- **WHEN** viewing the exam schedule
- **THEN** only exams for registered courses are displayed

### Requirement: Reminder notifications for exams
The system SHALL send exam reminder notifications 7 days before and 1 day before each exam, via the configured notification channels.

#### Scenario: 7-day reminder sent
- **WHEN** 7 days before an exam
- **THEN** the student receives a reminder notification about the upcoming exam
