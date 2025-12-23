# Contributing

## Adding a Recipe

1. Copy `TEMPLATE_RECIPE.md` into the appropriate folder (usually under `proteins/` or `holidays/`).
2. Fill out the sections you used (not every section is required).
3. Prefer “cook to temperature, not time” and include target temps where relevant.
4. Add `Feedback & Ratings` after you’ve cooked it at least once.

## Adding a Cook Log

- Add logs under `cooks/` as dated Markdown files (example: `2025-12-23_321_ribs.md`).
- Capture what actually happened: ambient temp/weather, grate temp behavior, timing.
- Include wrap/finish details and what to change next time.

## Markdown Style

- Keep Markdown lint clean: run `npm test` before committing.
- Typography: Unicode is allowed (→, °F, ½, en dashes).
- Avoid garbled characters from copy/paste (mojibake).

## Table of Contents

- If you change major headings in `README.md`, update and validate the TOC:
  - Update: `npm run toc`
  - Validate: `npm run toc:check`

## Tests / Checks

```bash
npm ci
npm test
```

`npm test` validates Markdown lint, README TOC, and that recipes include `## Feedback & Ratings`.
