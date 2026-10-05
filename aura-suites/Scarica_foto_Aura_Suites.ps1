$ErrorActionPreference = 'Stop'
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$photoDir = Join-Path $base 'Aura_Suites_foto'
if (Test-Path $photoDir) { Remove-Item $photoDir -Recurse -Force }
New-Item -ItemType Directory -Path $photoDir | Out-Null
$files = Get-ChildItem $base -Filter '*.html' -File
$seen = @{}
$count = 0
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8
  foreach ($match in [regex]::Matches($content, '<img\b[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)) {
    $tag = $match.Value
    $srcMatch = [regex]::Match($tag, '(?:src|data-src)=["'']([^"'']+)["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if (-not $srcMatch.Success) { continue }
    $url = [System.Net.WebUtility]::HtmlDecode($srcMatch.Groups[1].Value)
    if (-not ($url -match '^https?://')) { continue }
    if ($seen.ContainsKey($url)) { continue }
    $seen[$url] = $true
    $altMatch = [regex]::Match($tag, 'alt=["'']([^"'']*)["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    $name = if ($altMatch.Success -and $altMatch.Groups[1].Value.Trim()) { $altMatch.Groups[1].Value.Trim() } else { [IO.Path]::GetFileNameWithoutExtension($file.Name) + '-foto-' + ($count + 1) }
    $name = [regex]::Replace($name, '[<>:"/\\|?*]', '-')
    $name = [regex]::Replace($name, '\s+', '-')
    $dest = Join-Path $photoDir ($name + '.jpg')
    $n = 2
    while (Test-Path $dest) { $dest = Join-Path $photoDir ($name + '-' + $n + '.jpg'); $n++ }
    try {
      Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
      if ((Get-Item $dest).Length -gt 0) { $count++ } else { Remove-Item $dest -Force }
    } catch {
      Write-Warning "Download non riuscito: $url"
    }
  }
}
if ($count -eq 0) { Write-Host 'Nessuna foto scaricata. Controlla la connessione Internet e riprova.'; exit 1 }
$zip = Join-Path $base 'Aura_Suites_foto.zip'
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $photoDir '*') -DestinationPath $zip -Force
Write-Host "Completato: $count foto salvate in $zip"
Read-Host 'Premi Invio per chiudere'
