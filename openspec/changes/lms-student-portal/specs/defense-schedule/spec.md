## ADDED Requirements

### Requirement: Student can view thesis defense schedule
The system SHALL display the student's thesis/dissertation defense schedule, including: thesis title, defense date, start time, room, committee members (advisor, reviewer, chairperson), and document approval status. The student SHALL be able to click on a defense entry to view full committee details and contact information (if permitted).

#### Scenario: Defense schedule loads
- **WHEN** the student navigates to the "Defense Schedule" page
- **THEN** the system displays the student's defense schedule with thesis title, date, time, and room

#### Scenario: View defense details
- **WHEN** the student clicks on a defense entry
- **THEN** the system displays committee members, location details, group order, and required preparation materials

#### Scenario: No defense scheduled
- **WHEN** the student has no scheduled defense
- **THEN** the system displays "Bạn chưa có lịch bảo vệ đồ án. Vui lòng liên hệ phòng đào tạo."

### Requirement: Defense document status tracking
If the defense documents are not yet approved, the system SHALL display pending document status with a list of missing documents.

#### Scenario: Documents not yet approved
- **WHEN** defense documents are incomplete
- **THEN** the system shows the status with a list of documents still needed

### Requirement: Defense schedule changes notification
If the defense schedule is adjusted, the system SHALL display "Lịch bảo vệ đã được thay đổi" with the updated information.

#### Scenario: Schedule changed
- **WHEN** the defense schedule has been modified
- **THEN** the system displays the change notification and new information

### Requirement: Defense schedule business rules
Defense schedules SHALL only display for students who have registered a thesis topic confirmed by the training department. Committee information SHALL only display after the training department has finalized committee assignments. Students SHALL NOT be able to modify defense schedules through the system.

#### Scenario: Confirmed thesis only
- **WHEN** the student has not registered a confirmed thesis topic
- **THEN** the system shows "Bạn chưa có lịch bảo vệ đồ án"

### Requirement: Reminder notifications for defense
The system SHALL send defense reminder notifications 7 days before and 1 day before the defense date.

#### Scenario: 7-day defense reminder
- **WHEN** 7 days before a defense date
- **THEN** the student receives a reminder notification about the upcoming defense
