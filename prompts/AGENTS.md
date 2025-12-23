# Agent Instructions (Smokehouse Repo)

This repository is a personal smoking and grilling knowledge base written in Markdown.

## Goals

- Keep content practical and repeatable.
- Prefer **cook to temperature, not time** (times are estimates).
- Keep recipes clean; use `cooks/` for real-world logs and iteration notes.

## Repo Structure

- `README.md`: entry point + table of contents (managed by doctoc).
- `TEMPLATE_RECIPE.md`: starting point for new recipes.
- `proteins/`: recipes organized by protein (subfolders contain `README.md` indexes).
- `holidays/`: holiday-specific cooks and indexes.
- `techniques/`: reusable technique writeups.
- `equipment/`: smoker notes and constraints.
- `marinades/`: canonical bases and approved variants.
- `cooks/`: cook logs (what actually happened).

## Editing Rules

- Markdown must pass lint.
- Keep headings and lists surrounded by blank lines (markdownlint default rules).
- Unicode typography is allowed (→, °F, ½, en dashes). Avoid garbled copy/paste characters.

## TOC Rules (README)

- `README.md` contains doctoc markers. Do not hand-edit the generated TOC section.
- Update TOC after heading changes:
  - `npm run toc`
- Validate TOC is up to date:
  - `npm run toc:check`

## Validation (Required Before PR/Commit)

Run:

```bash
npm ci
npm test
```

`npm test` runs Markdown lint + doctoc validation.
