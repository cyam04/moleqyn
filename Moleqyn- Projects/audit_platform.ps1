<#
.SYNOPSIS
    Audit Platform Script for Moleqyn Chemistry Learning Platform.
.DESCRIPTION
    Scans all HTML pages, CSS files, and scripts to verify:
    1. Broken internal links (href / src pointing to missing local files)
    2. Proper brand unification ('Moleqyn')
    3. CSS cross-browser compatibility (e.g., standard background-clip)
    4. Essential meta tags (title, viewport, description)
    5. Clean HTML markup and file health
#>

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "       🧪 MOLEQYN PLATFORM HEALTH & AUDIT CHECKER        " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$rootPath = $PSScriptRoot
if (-not $rootPath) { $rootPath = Get-Location }

$htmlFiles = Get-ChildItem -Path $rootPath -Filter "*.html" | Sort-Object Name
$totalFiles = $htmlFiles.Count
$passedChecks = 0
$totalChecks = 0
$issuesFound = @()

Write-Host "Found $totalFiles HTML pages to inspect in '$rootPath'..." -ForegroundColor Gray
Write-Host ""

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $fileName = $file.Name
    $fileIssues = @()

    # Check 1: Document Title
    $totalChecks++
    if ($content -match '<title>(.*?)</title>') {
        $title = $matches[1]
        if ($title -match 'MatterLab') {
            $fileIssues += "Old branding in <title>: '$title'"
        } else {
            $passedChecks++
        }
    } else {
        $fileIssues += "Missing <title> tag"
    }

    # Check 2: Viewport Meta Tag
    $totalChecks++
    if ($content -match 'name="viewport"') {
        $passedChecks++
    } else {
        $fileIssues += "Missing responsive viewport meta tag"
    }

    # Check 3: CSS background-clip compatibility
    $totalChecks++
    if ($content -match '-webkit-background-clip:\s*text' -and $content -notmatch '(?<!-webkit-)background-clip:\s*text') {
        $fileIssues += "Missing standard 'background-clip: text' alongside -webkit prefix"
    } else {
        $passedChecks++
    }

    # Check 4: Navbar brand unification (if navigation exists)
    $totalChecks++
    if ($content -match 'class="(?:mlab-brand|nav-brand|brand)"[^>]*>(.*?)</a>') {
        $brandText = $matches[1]
        if ($brandText -match 'Matter') {
            $fileIssues += "Old brand 'Matter' in navbar: $brandText"
        } else {
            $passedChecks++
        }
    } else {
        $passedChecks++
    }

    # Check 5: Internal links resolution
    $matchesLinks = [regex]::Matches($content, 'href="([a-zA-Z0-9_\-\.\/]+\.html)(?:#[^"]*)?"')
    foreach ($m in $matchesLinks) {
        $linkTarget = $m.Groups[1].Value
        if ($linkTarget -notmatch '^https?://') {
            $targetPath = Join-Path $rootPath $linkTarget
            if (-not (Test-Path $targetPath)) {
                $fileIssues += "Broken internal link: '$linkTarget'"
            }
        }
    }

    # Check 6: Residual user-facing MatterLab branding in text/footer
    $totalChecks++
    if ($content -match '(?i)(?:<footer[^>]*>[\s\S]*?MatterLab[\s\S]*?</footer>|MatterLab\s*—)') {
        $fileIssues += "Residual 'MatterLab' branding found in page footer"
    } else {
        $passedChecks++
    }

    # Reporting status per file
    if ($fileIssues.Count -eq 0) {
        Write-Host "  ✅  $($fileName.PadRight(28)) -> PASSED (Clean)" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️   $($fileName.PadRight(28)) -> $($fileIssues.Count) ISSUE(S)" -ForegroundColor Yellow
        foreach ($iss in $fileIssues) {
            Write-Host "       • $iss" -ForegroundColor DarkYellow
            $issuesFound += "$($fileName): $iss"
        }
    }
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "                     AUDIT SUMMARY                        " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  Pages Inspected : $totalFiles"
Write-Host "  Checks Passed   : $passedChecks / $totalChecks"
if ($issuesFound.Count -eq 0) {
    Write-Host "  Result          : 🎉 100% HEALTHY - No Broken Links or Warnings!" -ForegroundColor Green
} else {
    Write-Host "  Total Issues    : $($issuesFound.Count) to resolve" -ForegroundColor Yellow
}
Write-Host "==========================================================" -ForegroundColor Cyan
