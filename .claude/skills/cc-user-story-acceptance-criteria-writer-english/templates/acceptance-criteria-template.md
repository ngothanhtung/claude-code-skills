# Acceptance Criteria Template — ProjectOS

> **Format:** Given-When-Then (Gherkin syntax)
> **Minimum requirement:** 3 ACs — Happy path + Edge case + Negative path
> **Distinction:** Acceptance Criteria (AC) ≠ Test Case ≠ Test Script
>
> - **AC** describes business behavior → written for BA/PO.
> - **Test Case** is derived from AC, recording input/expected result → written for Tester.
> - **Test Script** is the code/procedure that executes the Test Case → written for QA Automation.

---

## Metadata

| Field | Value |
| :--- | :--- |
| **User Story (US)** | US-[FEATURE_CODE]-[NUMBER] — e.g., US-PROJ-001 |
| **Epic / Feature** | [Epic/Feature name] |
| **Author** | [Author name / "BA: Name"] |
| **Date Written** | [YYYY-MM-DD] |
| **Status** | [Draft / In Review / Approved] |
| **AC Count** | [Total number of ACs written for this US] |

**Status rules:**

- **Draft** → Under development, not ready for review.
- **In Review** → Submitted to PO/Stakeholder for review, awaiting feedback.
- **Approved** → PO has confirmed; ready for Dev/QA implementation.

---

## Given-When-Then (Gherkin) Writing Rules

### Minimum Structure

| Component | Role | Rule |
| :--- | :--- | :--- |
| **Given** | Precondition — context BEFORE the action | Use **specific** data: person names, dates, quantities. **Do not** use generic values like "a valid user." |
| **When** | The **single** action by the user | Must be **one action only**. If multiple actions exist → split into 2 separate ACs. |
| **Then** | Primary outcome — measurable | Include specific metrics: "within 3 seconds," "80% ratio," "send 3 notifications." |
| **And** | Secondary outcome extending from Then | Use for additional outcomes on the same branch. **Maximum 2 And** clauses per AC. If more needed → split the AC. |
| **But** | Exception / scenario **contrary** to Then | Use when describing behavior opposite to the main Then. |

### Anti-patterns

| ❌ Wrong | ✅ Correct |
| :--- | :--- |
| `When` has multiple actions: "click Create **and** click Confirm" | Split into 2 separate ACs |
| `Then` uses vague language: "system responds **quickly**" | "system responds **within 2 seconds**" |
| `Given` is generic: "a valid user" | "Nguyen Van A is logged in as Project Manager" |
| `And` accumulates 4+ clauses → AC too long | AC is combining multiple scenarios → split into 2 ACs |
| Using `And` for exceptions | Use `But` for contrary cases |
| Describing UI details: "blue button" | Describe behavior: "system displays success message" |
| Contains API name: "call POST /v1/projects" | Describe business outcome: "system creates a new project record" |
| "etc.", "other cases" | Describe each specific case clearly |

---

## Templates by Scenario Type

### Acceptance Criteria 1: [Scenario Name — Happy path]

> **Rule:** Happy path describes the ideal **successful** flow — user does everything correctly, system responds correctly.

```text
Given [Specific preconditions — who, where, what data]
When  [One single action by the user]
Then  [Primary outcome — with measurable data]
And   [Secondary outcome — if any, maximum 2 And clauses]
And   [Final secondary outcome — if any]
```

#### Illustrative Example — Happy path

```text
Given Project Manager is logged in and has project creation permissions on ProjectOS
When  Project Manager fills in all required fields and clicks "Create Project"
Then  system creates a new project record and displays the project detail page within 3 seconds
And   sends invitation emails to all members added to the initial member list
And   new project appears on the Project Manager's Dashboard
```

---

### Acceptance Criteria 2: [Scenario Name — Edge case / Validation]

> **Rule:** Edge case describes a **boundary** condition — data is in the correct format but at a boundary (maximum count, date boundary, zero value...).

```text
Given [Specific boundary context — data at the boundary]
When  [Action triggering the edge case]
Then  [System handles the boundary condition correctly]
And   [Specific notification or feedback behavior]
```

#### Illustrative Example — Edge case

```text
Given project "CRM v2.0" has 3 members: Nguyen Van A, Tran Thi B, Le Van C
When  Project Manager attempts to assign a task to Hoang Van D — who is not a project member
Then  system displays error message: "Hoang Van D is not a member of this project"
And   does not create a new task record
```

---

### Acceptance Criteria 3: [Scenario Name — Negative path / Error]

> **Rule:** Negative path describes system behavior when an **error** or **invalid data** occurs — system must handle it gracefully, not crash, with no side effects.

```text
Given [Specific error context — invalid data, access denied, timeout...]
When  [Action leading to the error]
Then  [System handles the error correctly — no crash]
And   [Specific error message with clear content]
But   [What does NOT happen — no unexpected side effects]
```

#### Illustrative Example — Negative path

```text
Given a team member already has 8 in-scope tasks (maximum threshold: 10)
When  Project Manager assigns a 9th task to that team member
Then  system displays warning: "This member already has 8 in-scope tasks"
And   if Project Manager confirms → task is still assigned
But   the 11th task cannot be assigned without confirming the warning
```

---

## AC Quality Checklist

> Self-assess each item before confirming that the AC is ready.

### Gherkin Structure

- [ ] Each AC has **Given + When + Then** complete.
- [ ] **When** contains **only one** action.
- [ ] **Then** includes **specific measurable data** (time, quantity, percentage).
- [ ] **And** count per AC is **≤ 2**. If > 2 → split the AC.
- [ ] **But** is used for exceptions instead of And.

### Given Data Quality

- [ ] Given uses **specific data** (person names, dates, quantities) not generic ("a valid user").
- [ ] Given contains no actions — only describes the initial state.

### Scenario Coverage

- [ ] Contains **1 Happy path** (success flow).
- [ ] Contains **1 Edge case** (business boundary).
- [ ] Contains **1 Negative path** (error / invalid data handling).
- [ ] Total AC count for this US is **≤ 7–8**. If exceeded → decompose the US.

### Language

- [ ] **No** vague terms: "fast," "nice," "friendly," "appropriate," "intuitive."
- [ ] **No** technical details: API names, database schema, framework.
- [ ] **No** UI descriptions: button color, pixel dimensions, font.
- [ ] Error messages have **specific content**, not a generic "error message."

### Test Case Derivation Potential

- [ ] From each AC, **at least 3 Test Cases** can be derived: valid input, boundary, invalid.
- [ ] A Tester reading the AC **can understand the scenario without asking the BA** for clarification.
