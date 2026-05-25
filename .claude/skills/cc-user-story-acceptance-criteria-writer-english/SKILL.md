---
name: cc-user-story-acceptance-criteria-writer-english
description: |
  Generate User Stories compliant with the 6 INVEST criteria and Given-When-Then (Gherkin) Acceptance Criteria for Business Analysts and Product Owners.
  Supports 3 modes: Create New, Refine, and Add Acceptance Criteria.

  ACTIVATED when the user requests: writing, creating, reviewing, optimizing, or splitting User Stories or Acceptance Criteria.
  Including when the user pastes a feature description or Product Requirements Document (PRD) and requests User Story generation.

  NOT FOR: writing a complete Product Requirements Document (PRD) or Software Requirements Specification (SRS) (use prd-writer, srs-writer), writing detailed technical test cases, writing formal Use Cases (use po-usecase-refiner), or designing Business Rules (use business-rule-generator).
---

# User Story & Acceptance Criteria Writer

## Purpose

Empower Business Analysts (BAs) and Product Owners (POs) to craft high-quality User Stories meeting all 6 INVEST criteria and Gherkin-format Acceptance Criteria — ready for Developers to estimate and Testers to derive test cases.

## Workflow

### Step 1: Identify the Mode

Ask the user or infer from the provided content (then confirm):

- **Mode A (Create New)**: User provides a feature description → Generate a new User Story and Acceptance Criteria.
- **Mode B (Refine)**: A User Story or Acceptance Criteria already exists → Evaluate and propose improvements.
- **Mode C (Add Acceptance Criteria)**: A User Story already exists → Generate additional detailed Acceptance Criteria.

### Step 2: Gather Input Information

Collect all 4 of the following before proceeding (never assume if missing):

1. **Persona / User Type**: Who uses the feature? (Project Manager, Team Member, Supervisor, Client, Admin...)
2. **Goal**: What action does the user want to perform?
3. **Business Value**: Why is this feature needed? (Value delivered to the product or business)
4. **Context / Scope**: Which subsystem or module does the feature belong to?

### Step 3: Write the User Story Using the Template

Apply the standard 3-part format:

```markdown
**User Story US-[Number]**: [Concise title]

**As a** [Specific user type — avoid generic terms like "user"]
**I want to** [Specific, measurable action]
**So that** [Real business value — do not simply restate "I want to"]
```

### Step 4: Validate Against the 6 INVEST Criteria

Self-assess the User Story before responding using the table below:

| Criterion | Self-check Question | Action if Non-compliant |
| :--- | :--- | :--- |
| **I**ndependent | Does this story depend on any other story? | Split out dependencies or merge stories |
| **N**egotiable | Is there room for discussion and negotiation? | Remove rigid technical details |
| **V**aluable | What tangible value does it deliver to the user or business? | Rewrite the **So that** clause to be clearer |
| **E**stimable | Can the development team estimate the implementation effort? | Add context and constraints |
| **S**mall | Can it be completed within one development cycle (Sprint)? | Split into independent stories |
| **T**estable | Can the tester write corresponding test cases? | Add specific, measurable Acceptance Criteria |

*(See [invest-criteria.md](./references/invest-criteria.md) for detailed guidance)*

### Step 5: Write Acceptance Criteria (AC)

Provide **at least 3 Acceptance Criteria** in Gherkin format (Given-When-Then) covering: Happy path (AC #1), Edge case or business validation (AC #2), and Error handling path (AC #3).

```markdown
**Acceptance Criteria [#]: [Scenario Name]**
- **Given** [Specific preconditions]
- **When** [User triggering action]
- **Then** [Expected outcome or measurable output]
- **And** [Accompanying secondary outcome (if any)]
```

**Acceptance Criteria Writing Principles:**

- **Measurable:** Avoid vague terms such as "fast," "nice," "reasonable," or "user-friendly."
- **Business-focused:** Do not include technical details or User Interface (UI) specifications in Acceptance Criteria (that is the Developer's domain).
- **Single-responsibility:** Each AC addresses exactly one scenario — do not combine multiple complex flows.

### Supplementary: Definition of Done (DoD)

**DoD vs Acceptance Criteria (AC) — What's the Difference?**

| | Acceptance Criteria (AC) | Definition of Done (DoD) |
| :--- | :--- | :--- |
| **Purpose** | Does the story meet business requirements? | Is the story ready for delivery? |
| **Written for** | BA / PO | Dev / QA |
| **Content** | Business outcomes | Technical quality, code quality, testing |
| **Example** | "Then system displays confirmation message" | "Code passed unit test" |

DoD is a technical checklist that the Developer self-certifies upon story completion. Unlike Acceptance Criteria (for BA/PO to confirm business compliance), DoD (for Dev/QA to confirm technical quality).

**Example DoD for a Kanban Drag-and-Drop Story:**

```text
**Definition of Done:**
- [ ] Code passed unit test
- [ ] Tested on Chrome, Safari, Firefox
- [ ] Realtime sync works with 3+ concurrent users
- [ ] Smooth animation on drag-and-drop
```

### Step 6: Output Format

Present in the following order:

1. **User Story**: 3 lines (As a / I want / So that).
2. **INVEST Self-check**: Assessment table with status Pass (✅) or Needs Improvement (⚠️) for all 6 criteria.
3. **Acceptance Criteria**: Numbered list.
4. **Notes**: Dependencies, assumptions, or clarifying questions.
5. **Handoff Confirmation**: Ask the user to review the content and confirm the desired format before exporting.

## Anti-patterns to Avoid

- ❌ **Generic user type**: *"As a user"*
  👉 ✅ **Specific**: *"As a Project Manager who has been assigned to a project and has verified their email address"*
- ❌ **Vague action**: *"I want to manage profile"*
  👉 ✅ **Specific**: *"I want to update my email address"*
- ❌ **Value that restates the goal**: *"So that I can manage profile"*
  👉 ✅ **Meaningful**: *"So that I receive notifications at the correct address"*
- ❌ **AC that describes UI**: *"Then button turns blue"*
  👉 ✅ **Behavioral description**: *"Then system displays confirmation message"*
- ❌ **AC containing technical logic**: *"Then call API /v1/users/update"*
  👉 ✅ **Business description**: *"Then user data is updated and persisted"*
- ❌ **Incomplete AC**: Only 1 happy-path scenario
  👉 ✅ **Comprehensive**: At least 3 ACs covering happy path, edge case, and error path.
- ❌ **Overly large User Story**: 1 story covering all CRUD operations
  👉 ✅ **Split**: Separate into distinct stories (Create, Read, Update, Delete).

### Quick Reference Table

| ❌ Wrong | ✅ Correct |
| :--- | :--- |
| "Build the login page" (technical) | "As a user, I want to log in so that..." |
| Epic-sized story | Split into smaller stories |
| No "so that" | Always state the business value |
| Written from dev perspective | Written from end-user perspective |
| Vague AC ("must be fast") | Measurable AC ("load < 2s") |

## User Story Decomposition Criteria & Guidelines

**Signs that decomposition is needed:**

- Title contains the conjunction "AND" (e.g., "Login AND Register").
- Contains more than 1 user type or handles multiple CRUD actions simultaneously.
- Acceptance Criteria exceed 7–8 scenarios.
- Developer's effort estimate exceeds 5 working days.

**Common Decomposition Rules:**

- **By basic operation (CRUD):** Separate Create, Read, Update, and Delete behaviors.
- **By user type (Persona):** Separate the business flows for each user group (Project Manager, Team Member, Client, Admin...).
- **By business rule or flow:** Separate the Happy path from conditional validations or permission checks.
- **By data type:** Split according to each specific data type being processed.

---

## Related Reference Documents

- [user-story-template.md](./templates/user-story-template.md) — Blank template for filling in User Story details.
- [acceptance-criteria-template.md](./templates/acceptance-criteria-template.md) — Standard Gherkin Acceptance Criteria template.
- [invest-criteria.md](./references/invest-criteria.md) — In-depth analysis of the 6 INVEST criteria.
- [examples.md](./references/examples.md) — 4 real-world examples in the Project Management (ProjectOS) domain.
- [quality-checklist.md](./checklists/quality-checklist.md) — Pre-handoff quality self-check checklist.
