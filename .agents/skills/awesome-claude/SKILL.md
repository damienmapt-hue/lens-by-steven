---
name: awesome-claude
description: "Curated index of specialized Claude Code resources. Searchable list of agents, plugins, hooks, and tools for DevOps, security, data, and more. Reference this directory for domain-specific capabilities."
---

# Awesome Claude Code Index

A selectively curated list of skills, agents, plugins, hooks, and other amazing tools for enhancing your development workflow.

## When to Apply

Reference these guidelines when search for:
- Domain-specific skills (DevOps, Security, Scientific, Finance)
- Workflow automation patterns (Ralph Wiggum, CCPM, TDD Guard)
- Tooling for session management, observability, and debugging
- Specialized slash-commands or hooks

## How to Search

The primary sources for information in this skill are:
- `README.md`: Categorized overview of top-tier resources.
- `THE_RESOURCES_TABLE.csv`: Structured data with descriptions and links.
- `README_ALTERNATIVES/`: Alternative formats (Classic, Flat).

### Recommended Search Command

```bash
# Search by keyword in the resources table
grep -i "<keyword>" .agents/skills/awesome-claude/THE_RESOURCES_TABLE.csv
```

## Featured Categories

- **Agent Skills**: General, DevOps, Security, AI Science, Finance.
- **Workflows**: Spec-driven development, agentic patterns, project management.
- **Tooling**: IDE integrations, usage monitors, orchestrators, config managers.
- **Hooks & Slash-Commands**: Git, testing, documentation, CI/CD.

## How to Use This Skill

When the user asks for a specialized tool or capability not found in the current project:
1. Search specifically for a matching category in `README.md`.
2. Look up the specific resource in `THE_RESOURCES_TABLE.csv` for details and URLs.
3. If possible, research the linked repository to understand how to adapt its patterns.
