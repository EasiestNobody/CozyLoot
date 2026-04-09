$targetFile = "c:\xampp\htdocs\CozyLoot\assets\kl-selfcare.png"
while (-not (Test-Path $targetFile)) {
    Start-Sleep -Seconds 5
}
Start-Sleep -Seconds 5
cd c:\xampp\htdocs\CozyLoot
git add .
git commit -m "feat: generate AI character images"
git push
