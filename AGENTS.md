# AGENTS.md

This file provides specialized guidance for **Codex** (Cursor, Copilot, VS Code AI extensions) and **Gemini** (Gemini Code Assist, Google AI / DeepMind agentic tools, Antigravity) when working with the code, skills, and documentation in this repository.

For Claude Code specific instructions, refer to [CLAUDE.md](file:///Users/tony/GitHub/claude-code-skills/CLAUDE.md).

---

## 1. Repository Purpose & Context

This is a **Claude Code Skills library** — a curated collection of specialized skills (prompt-based agents) that augment AI capabilities.

* **Primary Language:** The skills, checklists, templates, and reference materials are primarily written in **Vietnamese**. They are specifically tailored for Product Managers, Product Owners, and Business Analysts (BA/PM/PO workflows) in Vietnam.
* **Target Scope:** Covers the full software development lifecycle from discovery through to requirements engineering, implementation, and verification.
* **Design Pattern:** Each skill resides in its own directory under `.claude/skills/` (for locally developed skills) and follows a structured template: `SKILL.md` (definition & flow), `checklists/` (quality review), `references/` (examples/specifications), and `templates/` (blank/filled artifacts).

---

## 2. Guidelines for CODEX (Cursor / Copilot / VS Code AI)

Codex-based tools typically operate on single-file edits, inline completions, and local chat interfaces. When acting as Codex, follow these instructions:

### A. Skill Discovery & Manual Execution

* Since Codex lacks a native `/skill` command runner or specialized execution tools, you must **manually locate and read** the relevant `SKILL.md` file in `.claude/skills/` or `.agents/skills/`.
* Use local file search (`Cmd+P` or fuzzy matching) or directory listing to find skills matching the user's request.
* **Read the entire `SKILL.md`** before generating any product documentation or code changes to ensure you adhere to the specified prompt structure, examples, and trigger conditions.

### B. Indexing & Reference Alignment

* Ensure your codebase indexer (e.g., Cursor Index) has processed the `.claude/` directory.
* When generating PRDs or User Stories, refer directly to [README.md](file:///Users/tony/GitHub/claude-code-skills/README.md) to align with standard Vietnamese software development definitions.

### C. Formatting and Linting

* Respect the rules in `.markdownlint.json`.
* Always use your task runner or the terminal to lint markdown files before saving changes:

  ```bash
  npx --yes markdownlint-cli AGENTS.md
  ```

---

## 3. Guidelines for GEMINI (Gemini Code Assist / Antigravity)

Gemini-based tools and agentic frameworks possess extremely large context windows and strong logical reasoning capabilities. When acting as Gemini, follow these instructions:

### A. Leveraging the Large Context Window

* **Deep-Read References:** Leverage your large context window to read the main `SKILL.md` along with all related `checklists/`, `templates/`, and `references/` directories for a skill before starting your work.
* Keep the entire toolchain flow in context. This enables you to maintain exact schema matching and cross-referencing without truncating or losing track of standard Vietnamese business rules.

### B. Planning & Agentic Execution (Planning Mode)

* When using agentic systems (like Antigravity or planning-enabled runners):
  1. **Research & Map:** List all directories in `.claude/skills/` to locate specialized skills.
  2. **Draft Plan:** Update the implementation plan, outlining the sequence of skills you will chain together. Highlight any open questions or assumptions.
  3. **Execute in Sequence:** Apply the skills sequentially based on the Toolchain Flow.
  4. **Verify & Review:** Validate your output against the specific checklist files in the skill's `checklists/` directory.

### C. Language and Tone Consistency

* Maintain strict **Vietnamese professional IT/Business terminology** when creating or modifying BA/PM/PO document deliverables.
* Use natural, concise, and highly structured Vietnamese. Avoid direct translations of English idioms (e.g., use "luồng xử lý lỗi" instead of "ngoại lệ dòng chảy").

---

## 4. Toolchain Flow (Skill Chain)

Both Codex and Gemini should respect and enforce the sequential flow of skills when assisting users:

```text
cc-pd-writer (Discovery)
    ↓ 6 required inputs (Persona, Goal, Business Value, Context, Scope, Constraints)
cc-prd-writer (PRD)
    ↓ features and specifications
cc-user-story-acceptance-criteria-writer (User Stories + AC)
    ↓ user stories and Gherkin Acceptance Criteria
cc-use-case-writer (Use Cases) / cc-srs-writer (SRS)
    ↓ detailed interactions and system specifications
Implementation: writing-plans → executing-plans → verification-before-completion
    ↓
test-driven-development / systematic-debugging
    ↓
requesting-code-review / receiving-code-review → finishing-a-development-branch
```

---

## 5. Key Conventions & Standards

### A. Creating a New Skill

To create or modify a skill, follow the **Skill Creator** workflow defined in `.agents/skills/skill-creator/SKILL.md` (or `.claude/skills/skill-creator/SKILL.md`):

* Ensure a consistent file structure:
  * `SKILL.md` — main skill containing trigger conditions, workflows, anti-patterns, examples.
  * `checklists/` — quality checklists (e.g., `quality-checklist-discovery.md`).
  * `references/` — templates, examples, reference documents.
  * `templates/` — output templates (where applicable).

### B. User Story Standards

When writing User Stories and Acceptance Criteria:

* **06 INVEST Criteria:** Stories must be Independent, Negotiable, Valuable, Estimable, Small, and Testable.
* **Gherkin AC:** Every User Story must contain at least **3 acceptance scenarios** formatted in Gherkin (`Given-When-Then`):
  1. *Happy Path:* Normal user flow.
  2. *Edge Case / Business Rule Validation:* Borderline scenario or verification rule.
  3. *Error Path:* Fault/error handling.
* **No UI/Technical Details in AC:** Keep Acceptance Criteria focused on business behavior, not UI elements (e.g., button colors) or technical implementation details (e.g., database tables or API endpoints).

### C. Markdown Guidelines

* Keep bullet points short and readable.
* Do not use HTML tags inside markdown headings or Mermaid diagrams unless strictly necessary.
* Use standard GitHub alerts for highlights: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, or `> [!CAUTION]`.

---

## 6. Linting & Formatting Commands

Run these terminal commands to verify your modifications before finishing your task:

```bash
# Lint a markdown file
npx --yes markdownlint-cli .claude/skills/<skill-name>/SKILL.md

# Format markdown files
npx mdformat <file>
```
