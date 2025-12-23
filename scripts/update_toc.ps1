[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath "package.json")) {
  throw "Run this from the repo root (package.json not found)."
}

Write-Host "Updating README.md Table of Contents..."

if (Test-Path -LiteralPath "node_modules") {
  npm run toc
  exit $LASTEXITCODE
}

Write-Host "node_modules not found; running 'npm ci' first..."
npm ci
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

npm run toc
exit $LASTEXITCODE
