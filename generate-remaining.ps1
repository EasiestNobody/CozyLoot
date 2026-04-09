$images = @(
  @{ out="mm-selfcare.png"; prompt="kawaii cute my melody rose face mask packet skincare product photography pink background" },
  @{ out="kuromi-accessories.png"; prompt="kawaii cute kuromi skull crossbody bag purple black product photography" },
  @{ out="kuromi-selfcare.png"; prompt="kawaii cute kuromi purple bath bomb set product photography" },
  @{ out="cinnamoroll-stationery.png"; prompt="kawaii cute cinnamoroll sky blue pencil case product photography pastel" },
  @{ out="cinnamoroll-accessories.png"; prompt="kawaii cute cinnamoroll fluffy keychain product photography light blue" },
  @{ out="cinnamoroll-selfcare.png"; prompt="kawaii cute cinnamoroll vanilla hand cream tube product photography light blue" },
  @{ out="pompompurin-stationery.png"; prompt="kawaii cute pompompurin honey yellow washi tape sticker set product photography" },
  @{ out="pompompurin-accessories.png"; prompt="kawaii cute pompompurin brown beret pin set product photography yellow" },
  @{ out="pompompurin-selfcare.png"; prompt="kawaii cute pompompurin honey lip balm product photography yellow" },
  @{ out="kl-stationery.png"; prompt="kawaii cute korilakkuma mini notebook set bear strawberry product photography pink" },
  @{ out="kl-accessories.png"; prompt="kawaii cute korilakkuma cat ear headband white bear product photography" },
  @{ out="kl-selfcare.png"; prompt="kawaii cute korilakkuma berry face mist bottle skincare product photography" }
)

foreach ($img in $images) {
    if (-not (Test-Path "c:\xampp\htdocs\CozyLoot\assets\$($img.out)")) {
        echo "Starting job for $($img.out)..."
        $url = "https://image.pollinations.ai/prompt/" + [uri]::EscapeDataString($img.prompt) + "?width=400&height=400&nologo=true&seed=122"
        $file = "c:\xampp\htdocs\CozyLoot\assets\" + $img.out
        try {
            Invoke-WebRequest -Uri $url -OutFile $file
            Start-Sleep -Seconds 2
        } catch {
            Write-Host "Failed to download $($img.out), skipping to next"
        }
    }
}
