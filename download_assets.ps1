$ErrorActionPreference = 'SilentlyContinue'
$assetsDir = "c:\xampp\htdocs\CozyLoot\assets"

# Better-matching images for each item
$downloads = @(
  # Study items - actual stationery
  @{ n="item-pencilset";   u="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=200&h=200&fit=crop&q=80" },
  @{ n="item-stickynotes"; u="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=200&h=200&fit=crop&q=80" },
  @{ n="item-eraser";      u="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=200&h=200&fit=crop&q=80" },
  @{ n="item-memopad";     u="https://images.unsplash.com/photo-1517842645767-c639042777db?w=200&h=200&fit=crop&q=80" },
  @{ n="item-ruler";       u="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=200&h=200&fit=crop&q=80" },
  @{ n="item-notebook";    u="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&h=200&fit=crop&q=80" },
  @{ n="item-pencase";     u="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&h=200&fit=crop&q=80" },
  @{ n="item-washitape";   u="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=200&h=200&fit=crop&q=80" },
  @{ n="item-deskorg";     u="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&h=200&fit=crop&q=80" },
  @{ n="item-journal";     u="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=200&h=200&fit=crop&q=80" },
  @{ n="item-fountainpen"; u="https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200&h=200&fit=crop&q=80" },

  # Plushie items - teddy bears and plush toys
  @{ n="item-charm";       u="https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=200&h=200&fit=crop&q=80" },
  @{ n="item-keychain";    u="https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=200&h=200&fit=crop&q=80" },
  @{ n="item-plushclip";   u="https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=200&h=200&fit=crop&q=80" },
  @{ n="item-magnet";      u="https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=200&h=200&fit=crop&q=80" },
  @{ n="item-plushmedium"; u="https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=200&h=200&fit=crop&q=80" },
  @{ n="item-pillow";      u="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200&h=200&fit=crop&q=80" },
  @{ n="item-giantplush";  u="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&q=80" },

  # Self-care items
  @{ n="item-facemask";    u="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&h=200&fit=crop&q=80" },
  @{ n="item-lipbalm";     u="https://images.unsplash.com/photo-1599735362798-1375a1ece8dc?w=200&h=200&fit=crop&q=80" },
  @{ n="item-handcream";   u="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop&q=80" },
  @{ n="item-bathbomb";    u="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop&q=80" },
  @{ n="item-sleepmask";   u="https://images.unsplash.com/photo-1631390518559-8e3a5b9f0d14?w=200&h=200&fit=crop&q=80" },
  @{ n="item-skincareset"; u="https://images.unsplash.com/photo-1556228578-8c7c2f23af0b?w=200&h=200&fit=crop&q=80" },
  @{ n="item-aromatherapy";u="https://images.unsplash.com/photo-1602928321679-560bb453f190?w=200&h=200&fit=crop&q=80" },

  # Essentials items
  @{ n="item-totebag";     u="https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=200&h=200&fit=crop&q=80" },
  @{ n="item-phonegrip";   u="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop&q=80" },
  @{ n="item-socks";       u="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=200&h=200&fit=crop&q=80" },
  @{ n="item-coinpurse";   u="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop&q=80" },
  @{ n="item-hairclip";    u="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=200&h=200&fit=crop&q=80" },
  @{ n="item-backpack";    u="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&q=80" },
  @{ n="item-earbud";      u="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop&q=80" },
  @{ n="item-blanket";     u="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop&q=80" },
  @{ n="item-watch";       u="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop&q=80" },
  @{ n="item-pinset";      u="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=200&h=200&fit=crop&q=80" },

  # Random items
  @{ n="item-stickers";    u="https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?w=200&h=200&fit=crop&q=80" },
  @{ n="item-artprint";    u="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&h=200&fit=crop&q=80" },
  @{ n="item-snackbox";    u="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop&q=80" }
)

foreach ($d in $downloads) {
  $outFile = Join-Path $assetsDir ($d.n + ".jpg")
  try {
    Invoke-WebRequest -Uri $d.u -OutFile $outFile -UseBasicParsing -TimeoutSec 15
    Write-Host "OK: $($d.n).jpg"
  } catch {
    Write-Host "FAIL: $($d.n)"
  }
}
Write-Host "ALL DONE"
