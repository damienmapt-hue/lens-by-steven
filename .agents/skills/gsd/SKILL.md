---
name: gsd
description: "Context engineering and spec-driven development system. Prevents context rot and ensures high-quality outcomes through a structured discuss → plan → execute → verify cycle. Manages project state via PROJECT.md, REQUIREMENTS.md, ROADMAP.md, and STATE.md."
---

# GSD - Get Shit Done

A powerful system for building complex features reliably by engineering context and following a rigorous development lifecycle.

## When to Apply

Reference these guidelines when starting any complex feature or refactor that:
- Spans multiple files or components
- Requires significant research or architectural decisions
- Benefits from clear traceability from requirements to implementation
- Is prone to "context rot" (quality decay as the session grows)

## Core Methodology: The GSD Cycle

### 1. Discuss (Context Capture)
Before planning, capture all constraints and preferences.
- **Goal**: Create a `{phase}-CONTEXT.md` (or equivalent) that locks in design and functional decisions.
- **Keywords**: layout, interaction, error handling, edge cases.

### 2. Plan (Atomic Task Planning)
Break the work into small, verifiable chunks.
- **Format**: Use XML-like structure for atomic tasks.
- **Verification**: Each task must have a clear `verify` step (e.g., shell command or browser check).

### 3. Execute (Surgical Implementation)
Implement tasks with high precision.
- **Git**: Commit after each atomic task with a descriptive message.
- **Context**: Keep the main session focused on the current task; use sub-agents for heavy lifting.

### 4. Verify (Quality Assurance)
Validate the implementation against the original requirements.
- **Goal**: Create a `VERIFICATION.md` or updated `walkthrough.md` documenting the results.

## Documentation Standards

Always maintain these files at the project root or in `.planning/`:
- `PROJECT.md`: High-level vision and tech stack.
- `REQUIREMENTS.md`: Scoped features (v1, v2, out-of-scope).
- `ROADMAP.md`: Phases and milestones.
- `STATE.md`: Memory across sessions (decisions, blockers, current position).

## How to Use This Skill

When the user asks to "Get Shit Done" or perform a complex task:
1. Initialize/Audit the project docs (`PROJECT.md`, etc.).
2. Run the **discuss → plan → execute → verify** cycle.
3. Use specialized sub-agents for research and execution waves.
