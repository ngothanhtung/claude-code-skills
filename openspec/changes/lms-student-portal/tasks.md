## 1. Project Setup & Architecture

- [ ] 1.1 Scaffold Next.js project with App Router, TypeScript, Tailwind CSS
- [ ] 1.2 Configure shadcn/ui with custom theme (institution branding)
- [ ] 1.3 Set up project directory structure (app routes, components, lib, api)
- [ ] 1.4 Configure ESLint, Prettier, and markdownlint
- [ ] 1.5 Set up BFF API proxy layer (Next.js API routes)
- [ ] 1.6 Configure authentication middleware (SSO integration + session management)
- [ ] 1.7 Set up shared type definitions and API client
- [ ] 1.8 Create shared UI components (layout, navigation, loading states, error boundaries)
- [ ] 1.9 Set up React Query provider and default query configuration
- [ ] 1.10 Implement in-memory caching layer in BFF

## 2. Grade Management (FR-001)

- [ ] 2.1 Create BFF API route for semester grade data (proxy + transform from training system)
- [ ] 2.2 Create BFF API route for grade detail per course
- [ ] 2.3 Implement grade data fetching with React Query (semester selector)
- [ ] 2.4 Build semester dropdown selector component
- [ ] 2.5 Build grade summary table component with GPA display
- [ ] 2.6 Build expandable course row with grade breakdown
- [ ] 2.7 Implement grade letter conversion and rounding logic
- [ ] 2.8 Handle empty states: no grades, no courses registered
- [ ] 2.9 Handle error states with retry button

## 3. Grade Export (FR-002)

- [ ] 3.1 Create BFF API route for PDF generation
- [ ] 3.2 Create BFF API route for Excel generation
- [ ] 3.3 Design PDF template (logo, student info, grade table, signature)
- [ ] 3.4 Design Excel template with preserved structure
- [ ] 3.5 Build export dialog component (format + scope selection)
- [ ] 3.6 Implement file download flow with progress indicator
- [ ] 3.7 Implement export audit logging (student ID, timestamp, format, scope)
- [ ] 3.8 Handle empty data warning before export

## 4. Attendance Tracking (FR-003, FR-004)

- [ ] 4.1 Create BFF API route for attendance summary data
- [ ] 4.2 Create BFF API route for attendance detail per course
- [ ] 4.3 Build attendance summary table with course-level stats
- [ ] 4.4 Implement warning status logic (80% / 60% thresholds)
- [ ] 4.5 Build collapsible course row with session-level detail
- [ ] 4.6 Display session statuses: present, absent with/without permission
- [ ] 4.7 Handle empty states: no attendance data, no courses

## 5. Class Schedule (FR-005)

- [ ] 5.1 Create BFF API route for schedule data
- [ ] 5.2 Build week view calendar component
- [ ] 5.3 Build month view calendar component
- [ ] 5.4 Implement view toggle (week/month) with animated transition
- [ ] 5.5 Build navigation controls (previous/next, specific date picker)
- [ ] 5.6 Build session detail popup/panel
- [ ] 5.7 Implement schedule change detection and visual marking
- [ ] 5.8 Handle concurrent classes display (side by side)
- [ ] 5.9 Handle empty week with friendly message

## 6. Exam Schedule (FR-006)

- [ ] 6.1 Create BFF API route for exam schedule data
- [ ] 6.2 Build exam list component with sorted display
- [ ] 6.3 Implement "Sắp thi" badge for exams within 7 days
- [ ] 6.4 Build exam detail view (location, rules, permitted items)
- [ ] 6.5 Handle postponed/canceled exam statuses
- [ ] 6.6 Handle unassigned room display

## 7. Defense Schedule (FR-007)

- [ ] 7.1 Create BFF API route for defense schedule data
- [ ] 7.2 Build defense list component
- [ ] 7.3 Build defense detail view (committee, location, materials)
- [ ] 7.4 Implement document status tracking with missing items list
- [ ] 7.5 Handle schedule change notifications
- [ ] 7.6 Handle empty states: no defense, unconfirmed thesis

## 8. Notification System

- [ ] 8.1 Design notification data model and storage
- [ ] 8.2 Implement email notification service
- [ ] 8.3 Implement push notification service (Web Push / Service Worker)
- [ ] 8.4 Build cron/scheduler for exam reminders (7 days + 1 day before)
- [ ] 8.5 Build cron/scheduler for defense reminders (7 days + 1 day before)
- [ ] 8.6 Implement schedule change notification trigger
- [ ] 8.7 Build in-app notification center component

## 9. Polish & Cross-cutting

- [ ] 9.1 Implement responsive layout for all pages (320px–1920px)
- [ ] 9.2 Add skeleton loading states for all data-dependent components
- [ ] 9.3 Add error boundaries at route level
- [ ] 9.4 Implement session timeout handling (30 min inactivity)
- [ ] 9.5 Add accessibility audit (WCAG 2.1 AA compliance)
- [ ] 9.6 Performance testing: grade page < 3s, schedule page < 2s, export < 10s
- [ ] 9.7 Browser compatibility testing (Chrome, Firefox, Safari, Edge)
- [ ] 9.8 Add end-to-end tests for critical user flows
- [ ] 9.9 Add README with setup instructions and environment variables
