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
- [x] Replace `OWNER/REPO` in the CI badge URL in `README.md`
- [x] Add a license file (recommended for public repos)
- [x] Consider adding a short `CONTRIBUTING.md` (how to add recipes + run `npm test`)

## GitHub Branch Policy (main)

- [ ] Protect `main` branch
  - [ ] Require pull request before merging
  - [ ] Require 1 approval and dismiss stale approvals
  - [ ] Require CODEOWNER review (only `@dsainz3`)
  - [ ] Require status checks: `ci` and require branches up to date
  - [ ] Require conversation resolution
  - [ ] Require linear history
  - [ ] Block force pushes
  - [ ] Block deletions

## Security Hygiene

- [x] Add Dependabot config (`.github/dependabot.yml`)
- [ ] Enable Dependabot alerts + security updates (GitHub repo settings)
- [ ] Enable secret scanning + push protection (GitHub repo settings)

## Optional Hardening

- [x] Add `CODEOWNERS` (`.github/CODEOWNERS`)
- [ ] Require signed commits (GitHub branch protection)

Done criteria:

- One command updates TOC
- New recipes start from template
- Feedback captured on best recipes
