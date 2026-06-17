$ErrorActionPreference = "Continue"
$imgDir = "c:\Users\hp010\Desktop\jewelry_site\public\images"
$artDir = "C:\Users\hp010\.gemini\antigravity-ide\brain\416ce911-f1cb-435a-8e06-53098406c78b"
$ceoDir = "c:\Users\hp010\Desktop\jewelry_site\ceo images"
$projDir = "c:\Users\hp010\Desktop\jewelry_site"
$logFile = "$projDir\setup_log.txt"

"=== SETUP STARTED ===" | Out-File $logFile

# Create images directory
New-Item -ItemType Directory -Path $imgDir -Force | Out-Null
"Created images directory" | Tee-Object -Append $logFile

# Copy generated images
$imageMap = @{
    "logo_2011_1781694266870.png" = "logo.png"
    "hero_banner_branded_1781693897852.png" = "hero-banner.png"
    "gold_collection_1781693757534.png" = "gold-collection.png"
    "diamond_collection_1781693771958.png" = "diamond-collection.png"
    "rings_collection_1781693798313.png" = "rings-collection.png"
    "necklace_collection_1781693809171.png" = "necklace-collection.png"
    "bracelet_collection_1781693845921.png" = "bracelet-collection.png"
    "earrings_collection_1781693857207.png" = "earrings-collection.png"
    "about_store_1781693870186.png" = "about-store.png"
    "gold_mens_chain_1781694280054.png" = "gold-mens-chain.png"
    "gold_womens_pendant_1781694290506.png" = "gold-womens-pendant.png"
    "diamond_tennis_bracelet_1781694311565.png" = "diamond-tennis-bracelet.png"
    "diamond_engagement_ring_1781694322263.png" = "diamond-engagement-ring.png"
    "mens_gold_watch_1781694333094.png" = "mens-gold-watch.png"
    "womens_diamond_watch_1781694361520.png" = "womens-diamond-watch.png"
}

foreach ($src in $imageMap.Keys) {
    $srcPath = Join-Path $artDir $src
    $dstPath = Join-Path $imgDir $imageMap[$src]
    try {
        Copy-Item -Path $srcPath -Destination $dstPath -Force
        "Copied: $src -> $($imageMap[$src])" | Tee-Object -Append $logFile
    } catch {
        "FAILED: $src - $($_.Exception.Message)" | Tee-Object -Append $logFile
    }
}

# Copy CEO images
$ceoFiles = Get-ChildItem $ceoDir -Filter "*.jpeg" | Sort-Object Name
$ceoIndex = 1
foreach ($file in $ceoFiles) {
    $dstPath = Join-Path $imgDir "ceo-$ceoIndex.jpg"
    try {
        Copy-Item -Path $file.FullName -Destination $dstPath -Force
        "Copied CEO: $($file.Name) -> ceo-$ceoIndex.jpg" | Tee-Object -Append $logFile
    } catch {
        "FAILED CEO: $($file.Name) - $($_.Exception.Message)" | Tee-Object -Append $logFile
    }
    $ceoIndex++
}

# List resulting images
"=== IMAGES IN PUBLIC ===" | Tee-Object -Append $logFile
Get-ChildItem $imgDir | ForEach-Object { "$($_.Name) ($($_.Length) bytes)" | Tee-Object -Append $logFile }

"=== SETUP COMPLETE ===" | Tee-Object -Append $logFile
