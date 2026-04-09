# Fix only the mismatched images
$ErrorActionPreference = 'SilentlyContinue'
$a = "c:\xampp\htdocs\CozyLoot\assets"

# item-charm.jpg currently shows cherries - replace with teddy bear accessory
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=200&h=200&fit=crop&q=80" -OutFile "$a\item-charm.jpg" -UseBasicParsing -TimeoutSec 15
Write-Host "1 done"

# Rilakkuma Pen Case shows wrong - get actual pencil case
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&h=200&fit=crop&q=80" -OutFile "$a\item-pencase.jpg" -UseBasicParsing -TimeoutSec 15
Write-Host "2 done"

# Lip balm shows wrong
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1631390518559-8e3a5b9f0d14?w=200&h=200&fit=crop&q=80" -OutFile "$a\item-lipbalm.jpg" -UseBasicParsing -TimeoutSec 15
Write-Host "3 done"

Write-Host "ALL DONE"
