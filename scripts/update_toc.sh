#!/usr/bin/env bash
set -euo pipefail

# Update README Table of Contents (requires `npm ci` or `npm install`)
npx --no-install doctoc README.md
