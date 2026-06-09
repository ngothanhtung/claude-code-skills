## ADDED Requirements

### Requirement: Student can view class schedule in week and month views
The system SHALL display the student's class schedule in a visual calendar view with two modes: week view and month view. By default, the system SHALL show the current week. The student SHALL be able to switch between week and month views, navigate to previous/next periods, and select a specific week or month.

#### Scenario: Default week view loads
- **WHEN** the student navigates to the "Schedule" page
- **THEN** the system displays the current week's schedule by default within 2 seconds

#### Scenario: Switch to month view
- **WHEN** the student clicks the month view toggle
- **THEN** the system switches to month view without losing data

#### Scenario: Navigate to next week
- **WHEN** the student clicks "Tuần sau"
- **THEN** the system displays the schedule for the following week

#### Scenario: Week with no classes
- **WHEN** the selected week has no scheduled classes
- **THEN** the system displays an empty calendar with "Tuần này không có lịch học"

### Requirement: Student can view detailed class session info
The student SHALL be able to click on a class session on the calendar to view details: course name, instructor, room, location, number of periods, and notes.

#### Scenario: View class session details
- **WHEN** the student clicks on a class session on the calendar
- **THEN** the system displays a popup or panel with course name, instructor, room, location, number of periods, and notes

### Requirement: Schedule changes are visually marked
When a class schedule has changed (room change, cancellation), the system SHALL mark the affected session with a different color and display "Lịch học có thay đổi" notification. The system SHALL send a push notification and/or email at least 24 hours before the changed session.

#### Scenario: Changed schedule is highlighted
- **WHEN** a class session has a schedule change
- **THEN** the session is marked with a different color and shows "Lịch học có thay đổi"

### Requirement: Schedule is read-only for students
The schedule SHALL only display courses the student has registered for. The student SHALL NOT be able to edit the schedule. Schedule data SHALL be synced from the training management system.

#### Scenario: Only enrolled courses shown
- **WHEN** the student views the schedule
- **THEN** only courses the student is registered for are displayed

### Requirement: Overlapping classes display
When multiple classes occur at the same time slot on the same day, the system SHALL display them side by side on the week view.

#### Scenario: Concurrent classes displayed
- **WHEN** two classes share the same time slot on a day
- **THEN** they are displayed side by side in the week calendar view
