$images = @(
  @{ out="kuromi-stationery.png"; prompt="kawaii cute kuromi dark aesthetic purple black notebook pen set product photography" },
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

$jobs = @()
foreach ($img in $images) {
    echo "Starting job for $($img.out)..."
    $url = "https://image.pollinations.ai/prompt/" + [uri]::EscapeDataString($img.prompt) + "?width=400&height=400&nologo=true&seed=122"
    $file = "c:\xampp\htdocs\CozyLoot\assets\" + $img.out
    
    $sb = {
        param($url, $file)
        Invoke-WebRequest -Uri $url -OutFile $file
    }
    $jobs += Start-Job -ScriptBlock $sb -ArgumentList $url, $file
}

Wait-Job $jobs -Timeout 60
Receive-Job $jobs | Out-Null
