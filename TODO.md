# TODO Checklist

- [x] Update `TEMPLATE_RECIPE.md` to include Feedback, Ratings, and Recommendations fields
- [x] Add the Feedback & Ratings section to `README.md`
- [x] Add Feedback & Ratings sections to the existing top recipes (Thanksgiving + Cornish hens)
- [x] Add doctoc markers to `README.md`
- [x] Install doctoc as a dev dependency (`npm install --save-dev doctoc`)
- [x] Generate README TOC (`npx doctoc README.md`)
- [x] Add `scripts/update_toc.sh`
- [x] Document TOC update command in `README.md`

Remaining:

- [x] Add placeholder `README.md` files in empty folders (e.g. `proteins/*/`, `cooks/`) or remove links until populated
- [x] Decide ASCII-only vs Unicode typography (→, °F, ½, en dashes) for maximum portability
- [x] Optional: add a PowerShell `scripts/update_toc.ps1` for Windows-first workflows
- [ ] Replace `OWNER/REPO` in the CI badge URL in `README.md`
- [x] Add a license file (recommended for public repos)
- [x] Consider adding a short `CONTRIBUTING.md` (how to add recipes + run `npm test`)

Done criteria:

- One command updates TOC
- New recipes start from template
- Feedback captured on best recipes
