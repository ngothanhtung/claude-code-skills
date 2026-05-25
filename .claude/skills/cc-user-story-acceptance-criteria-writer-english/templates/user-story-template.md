# User Story Template — ProjectOS

---

## User Story US-[FEATURE_CODE]-[NUMBER]

**As a** [Specific user type]
> **Guidance:** State the role + current state. Do not use the generic term "user."
> ✅ *"Project Manager with project creation permissions on ProjectOS"*
> ❌ *"user"*

**I want to** [Specific, measurable action]
> **Guidance:** Use a clear action verb. Do not use vague terms like "manage" or "process."
> ✅ *"assign a task to a specific team member and set a deadline"*
> ❌ *"manage tasks"*

**So that** [Clear business value — do NOT restate "I want to"]
> **Guidance:** Answer the question: "If this is not done, who suffers and how?"
> ✅ *"the team member knows their responsibilities clearly and I can track progress"*
> ❌ *"so that I can assign tasks"* (restates I want)

---

### Metadata

| Field | Value | Notes |
| :--- | :--- | :--- |
| **Epic / Feature** | [Large feature name] | |
| **Priority (MoSCoW)** | [Must / Should / Could / Won't] | **Must** = core business, product unusable without it. **Should** = important but workaround exists. **Could** = desirable, implement if time permits. **Won't** = out of scope for this iteration. |
| **Estimate** | [Story points / T-shirt size] | |
| **Dependencies** | [Other stories or "None"] | If dependencies exist → mark ⚠️ in the INVEST table below |
| **Assumptions** | [Assumed conditions or "None"] | |

---

### INVEST Self-Assessment

| Criterion | Pass? | Notes & Action if ⚠️ |
| :--- | :--- | :--- |
| **I**ndependent | [✅/⚠️] | ⚠️ → Merge/split dependencies; use mock data for independent testing |
| **N**egotiable | [✅/⚠️] | ⚠️ → Remove rigid technical details; focus on What, not How |
| **V**alue | [✅/⚠️] | ⚠️ → Rewrite So that to focus on outcomes, not features |
| **E**stimable | [✅/⚠️] | ⚠️ → Add context; consider creating a Spike first |
| **S**mall | [✅/⚠️] | ⚠️ → Split: separate CRUD, by Persona, or Happy path first |
| **T**estable | [✅/⚠️] | ⚠️ → Add GWT-format ACs with specific measurable data |

> **Rule:** If any criterion is ⚠️ → **DO NOT move to Sprint Planning** until resolved.

---

### Acceptance Criteria

> **Minimum requirement:** 3 ACs — Happy path + Edge case + Negative path.
> **Format:** Given-When-Then (Gherkin). **Do not** include vague terms ("fast," "nice"), technical details (API, database), or UI descriptions (button color, pixel dimensions).
> **Maximum:** 7–8 scenarios. If exceeded → decompose the story.
>
> [See detailed template](./acceptance-criteria-template.md)

#### Acceptance Criteria 1: [Scenario Name — Happy path]

- **Given** [Specific preconditions]
- **When** [Primary action by the user]
- **Then** [Primary outcome — with measurable data]
- **And** [Secondary outcome / system notification — if any]

#### Acceptance Criteria 2: [Scenario Name — Edge case / Validation]

- **Given** [Specific edge case context]
- **When** [Triggering action]
- **Then** [System handles the edge case correctly]
- **And** [Specific notification or feedback behavior]

#### Acceptance Criteria 3: [Scenario Name — Negative path / Error]

- **Given** [Specific error context]
- **When** [Action leading to error]
- **Then** [System handles error gracefully]
- **And** [Specific error message + no unexpected side effects]

---

### Definition of Done (DoD)

> **DoD ≠ Acceptance Criteria.** AC is for BA/PO to confirm business compliance. DoD is for Dev/QA to confirm technical delivery quality.

- [ ] Code passed unit test
- [ ] [Technical requirement 1 — e.g., API endpoint response time < 2 seconds]
- [ ] [Technical requirement 2 — e.g., Tested on Chrome, Safari, Firefox]
- [ ] [Technical requirement 3 — e.g., Realtime sync works with 3+ concurrent users]
- [ ] [Technical requirement 4 — e.g., Toast notification displayed after successful creation]

---

### Notes

| Type | Content |
| :--- | :--- |
| **Dependencies** | [US-xxx must be completed first / None] |
| **Assumptions** | [Assumed conditions / None] |
| **Open Questions** | [Questions to clarify with PO/Stakeholder] |

---

### Anti-patterns

| ❌ Wrong | ✅ Correct |
| :--- | :--- |
| "As a **user**" | "As a **Project Manager with assigned permissions**" |
| "I want to **manage** the profile" | "I want to **update my email address**" |
| "So that **I can manage the profile**" (restates I want) | "So that **I receive notifications at the correct address**" |
| "Then system must **respond quickly**" | "Then system **loads results within 2 seconds**" |
| Title contains "**AND**" | Split into 2 separate User Stories |
| AC describes "button color," "API /v1/..." | AC describes the system's **business behavior** |
