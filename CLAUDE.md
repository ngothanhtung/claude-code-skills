# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a **Claude Code Skills library** — a curated collection of specialized skills (prompt-based agents) that augment Claude Code's capabilities. Each skill is a self-contained module with a `SKILL.md` main file, checklists, templates, and references. The skills are primarily written in Vietnamese and designed for BA/PM/PO workflows, covering the full software development lifecycle from discovery through implementation.

## Repository Structure

```text
.claude/skills/          # Locally developed skills (primary source)
  cc-pd-writer/          # Product Discovery → 6 inputs for PRD
  cc-prd-writer/         # Product Requirements Document
  cc-user-story-acceptance-criteria-writer/  # User Story + Gherkin AC
  cc-user-story-acceptance-criteria-writer-english/  # English variant
  cc-use-case-writer/    # Detailed Use Cases
  cc-srs-writer/         # Software Requirements Specification (IEEE 830)
  cc-landing-page-generator/  # Landing page generation
  brainstorming/
  writing-plans/
  executing-plans/
  subagent-driven-development/
  test-driven-development/
  systematic-debugging/
  verification-before-completion/
  requesting-code-review/
  receiving-code-review/
  finishing-a-development-branch/
  using-git-worktrees/
  using-superpowers/
  skill-creator/         # Skill creation workflow
  frontend-design/       # (symlink to .agents/skills/)
  vercel-react-best-practices/  # (symlink to .agents/skills/)

.agents/skills/          # External skills (sourced from GitHub repos)
  frontend-design/       # anthropics/skills
  skill-creator/         # anthropics/skills
  vercel-react-practices/  # vercel-labs/agent-skills

docs/                    # Example documents produced by skills
  auth/                  # Authentication module examples
  crm/                   # CRM system examples
  task-management/       # Task management examples
  superpowers/specs/     # Skill design specifications
```

## Toolchain Flow (Skill Chain)

Skills are designed to be used in sequence:

```text
cc-pd-writer (Discovery)
    ↓ 6 required inputs
cc-prd-writer (PRD)
    ↓ features
cc-user-story-acceptance-criteria-writer (User Stories + AC)
    ↓ user stories
cc-use-case-writer (Use Cases) / cc-srs-writer (SRS)
    ↓ requirements
Implementation: writing-plans → executing-plans → verification-before-completion
    ↓
test-driven-development / systematic-debugging
    ↓
requesting-code-review / receiving-code-review → finishing-a-development-branch
```

## Key Conventions

### Creating a New Skill

Use the `skill-creator` skill: invoke it via `/skill skill-creator` or the `Skill` tool. Follow its workflow exactly — it defines file structure, SKILL.md format, and quality checklists.

### Skill File Structure

Each skill follows a consistent pattern:

- `SKILL.md` — main skill with trigger conditions, workflow, anti-patterns, examples
- `checklists/` — self-review checklists (e.g., quality-checklist-discovery.md)
- `references/` — templates, examples, fillable documents
- `templates/` — output templates (where applicable)

### Markdown Linting

Markdown files are linted with markdownlint. Lint rules are in `.markdownlint.json` — MD013 (line length), MD024 (duplicate headings), MD060 (blank line after YAML), and trailing spaces are disabled. To lint: `npx --yes markdownlint@latest <file>`

### Language

Skills are primarily written in Vietnamese. When adding or editing skills, match the language of existing content in the same skill.

## Linting & Formatting

```bash
# Lint a markdown file
npx --yes markdownlint@latest .claude/skills/<skill-name>/SKILL.md

# Format markdown
npx mdformat <file>
```

## Working with Skills

- Skills are invoked via the `Skill` tool (not Read tool) — follow the skill's instructions directly after invocation.
- If a user request matches a skill's trigger conditions, invoke that skill first.
- Do not modify `.agents/skills/` directly — those are symlinked from external sources and updated via `skills-lock.json`.
- Local skills live in `.claude/skills/`. When creating new skills, place them there.
