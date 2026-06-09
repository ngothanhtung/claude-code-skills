## ADDED Requirements

### Requirement: System sends exam reminder notifications
The system SHALL send automatic reminders for upcoming exams 7 days before and 1 day before each exam date. Notifications SHALL include: course name, exam date, time, room, and candidate number. Notifications SHALL be sent through configured channels (email and/or push notification).

#### Scenario: 7-day exam reminder
- **WHEN** 7 days before an exam
- **THEN** the system queues and sends a reminder notification to the student

#### Scenario: 1-day exam reminder
- **WHEN** 1 day before an exam
- **THEN** the system sends a second reminder notification

### Requirement: System sends defense reminder notifications
The system SHALL send automatic reminders for thesis defenses 7 days before and 1 day before each defense date. Notifications SHALL include: thesis title, defense date, time, and room.

#### Scenario: 7-day defense reminder
- **WHEN** 7 days before a defense
- **THEN** the system sends a reminder notification to the student

#### Scenario: 1-day defense reminder
- **WHEN** 1 day before a defense
- **THEN** the system sends a second reminder notification

### Requirement: System notifies schedule changes
The system SHALL send a notification (push and/or email) when a class schedule changes, at least 24 hours before the changed session when possible.

#### Scenario: Schedule change notification
- **WHEN** a class schedule is changed with at least 24 hours notice
- **THEN** the system sends a notification detailing the change

### Requirement: Notification channel flexibility
The system SHALL support at least the following notification channels: email and in-app/browser push notification. The system MAY support additional channels (SMS, mobile push) in future phases.

#### Scenario: Email notification delivered
- **WHEN** the system sends a notification via email
- **THEN** the email is delivered to the student's registered email address

#### Scenario: Push notification delivered
- **WHEN** the system sends a notification via push
- **THEN** the notification is displayed in the browser/application
