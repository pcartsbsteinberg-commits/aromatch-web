$outputFile = "CONTE_PROYECTO_AURA.md"
$projectRoot = "e:\aromatch-web"

Set-Content -Path $outputFile -Value "# Proyecto: Aura de Kant`n"
Add-Content -Path $outputFile -Value "## Estructura del Proyecto (tree)`n"
Add-Content -Path $outputFile -Value "````text"

# Basic tree simulation ignoring node_modules, .next, .git
$items = Get-ChildItem -Path $projectRoot -Recurse -Exclude "node_modules", ".next", ".git", "v0-source", "dist", "build", "coverage", "public" | Where-Object { $_.FullName -notmatch "\\node_modules\\" -and $_.FullName -notmatch "\\.next\\" -and $_.FullName -notmatch "\\.git\\" -and $_.FullName -notmatch "\\v0-source\\" -and $_.FullName -notmatch "\\public\\" }

foreach ($item in $items) {
    $relativePath = $item.FullName.Substring($projectRoot.Length + 1)
    Add-Content -Path $outputFile -Value $relativePath
}
Add-Content -Path $outputFile -Value "`````n"

Add-Content -Path $outputFile -Value "## Archivos Clave`n"

$importantFiles = @(
    "package.json",
    "next.config.ts",
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.mjs",
    "rules.md"
)

foreach ($file in $importantFiles) {
    $fullPath = Join-Path $projectRoot $file
    if (Test-Path $fullPath) {
        Add-Content -Path $outputFile -Value "### $file`n"
        Add-Content -Path $outputFile -Value "````javascript"
        Get-Content $fullPath -Raw | Add-Content -Path $outputFile
        Add-Content -Path $outputFile -Value "`````n"
    }
}

Add-Content -Path $outputFile -Value "## Código Fuente (src/)`n"

$srcFiles = Get-ChildItem -Path "$projectRoot\src" -Recurse -File | Where-Object { $_.Extension -match "\.(ts|tsx|js|jsx|css)$" }

foreach ($file in $srcFiles) {
    $relativePath = $file.FullName.Substring($projectRoot.Length + 1)
    Add-Content -Path $outputFile -Value "### $relativePath`n"
    Add-Content -Path $outputFile -Value "````javascript"
    Get-Content $file.FullName -Raw | Add-Content -Path $outputFile
    Add-Content -Path $outputFile -Value "`````n"
}

Write-Host "Contexto generado en $outputFile"
