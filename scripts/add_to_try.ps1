#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Add an item to the to-try list.
.EXAMPLE
    .\scripts\add_to_try.ps1 -Name "Smoked brisket flat" -Category beef
    .\scripts\add_to_try.ps1 -Name "Pork belly bacon" -Category pork -Notes "cure 7 days first"
#>
param(
    [Parameter(Mandatory)][string]$Name,
    [Parameter(Mandatory)][ValidateSet('pork','beef','fowl','fish','vegetables','other')][string]$Category,
    [string]$Notes = ""
)

$file = Join-Path $PSScriptRoot "..\to-try\README.md"
$content = Get-Content $file -Raw

$heading = "## " + (Get-Culture).TextInfo.ToTitleCase($Category)
$entry = if ($Notes) { "- [ ] **$Name** — $Notes" } else { "- [ ] **$Name**" }

# Insert after the matching heading line
if ($content -notmatch [regex]::Escape($heading)) {
    Write-Error "Category heading '$heading' not found in to-try/README.md"
    exit 1
}

# Find the line after the heading and insert there (before the next blank line or next heading)
$lines = Get-Content $file
$out = [System.Collections.Generic.List[string]]::new()
$inserted = $false

for ($i = 0; $i -lt $lines.Count; $i++) {
    $out.Add($lines[$i])
    if (-not $inserted -and $lines[$i] -eq $heading) {
        # Skip any existing entries, insert after them (before next heading or end marker)
        $j = $i + 1
        while ($j -lt $lines.Count -and $lines[$j] -notmatch '^## ' -and $lines[$j] -notmatch '^<!-- TO-TRY:END -->') {
            $out.Add($lines[$j])
            $j++
        }
        $out.Add($entry)
        $out.Add("")
        $i = $j - 1
        $inserted = $true
    }
}

$out | Set-Content $file -Encoding UTF8
Write-Host "Added: $entry" -ForegroundColor Green
Write-Host "File:  to-try/README.md"
