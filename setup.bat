@echo off
echo ========================================
echo  Royal Crest Gems - Image Setup Script
echo ========================================
echo.

set IMGDIR=c:\Users\hp010\Desktop\jewelry_site\public\images
set ARTDIR=C:\Users\hp010\.gemini\antigravity-ide\brain\416ce911-f1cb-435a-8e06-53098406c78b
set CEODIR=c:\Users\hp010\Desktop\jewelry_site\ceo images

echo Creating images directory...
if not exist "%IMGDIR%" mkdir "%IMGDIR%"

echo Copying generated product images...
copy /Y "%ARTDIR%\logo_2011_1781694266870.png" "%IMGDIR%\logo.png"
copy /Y "%ARTDIR%\hero_banner_branded_1781693897852.png" "%IMGDIR%\hero-banner.png"
copy /Y "%ARTDIR%\gold_collection_1781693757534.png" "%IMGDIR%\gold-collection.png"
copy /Y "%ARTDIR%\diamond_collection_1781693771958.png" "%IMGDIR%\diamond-collection.png"
copy /Y "%ARTDIR%\rings_collection_1781693798313.png" "%IMGDIR%\rings-collection.png"
copy /Y "%ARTDIR%\necklace_collection_1781693809171.png" "%IMGDIR%\necklace-collection.png"
copy /Y "%ARTDIR%\bracelet_collection_1781693845921.png" "%IMGDIR%\bracelet-collection.png"
copy /Y "%ARTDIR%\earrings_collection_1781693857207.png" "%IMGDIR%\earrings-collection.png"
copy /Y "%ARTDIR%\about_store_1781693870186.png" "%IMGDIR%\about-store.png"
copy /Y "%ARTDIR%\gold_mens_chain_1781694280054.png" "%IMGDIR%\gold-mens-chain.png"
copy /Y "%ARTDIR%\gold_womens_pendant_1781694290506.png" "%IMGDIR%\gold-womens-pendant.png"
copy /Y "%ARTDIR%\diamond_tennis_bracelet_1781694311565.png" "%IMGDIR%\diamond-tennis-bracelet.png"
copy /Y "%ARTDIR%\diamond_engagement_ring_1781694322263.png" "%IMGDIR%\diamond-engagement-ring.png"
copy /Y "%ARTDIR%\mens_gold_watch_1781694333094.png" "%IMGDIR%\mens-gold-watch.png"
copy /Y "%ARTDIR%\womens_diamond_watch_1781694361520.png" "%IMGDIR%\womens-diamond-watch.png"

echo.
echo Copying CEO photos...
set INDEX=1
for %%f in ("%CEODIR%\*.jpeg") do (
    copy /Y "%%f" "%IMGDIR%\ceo-!INDEX!.jpg"
    set /a INDEX+=1
)

rem Manual CEO copy since delayed expansion might not work
copy /Y "%CEODIR%\WhatsApp Image 2026-06-17 at 3.47.05 AM.jpeg" "%IMGDIR%\ceo-1.jpg"
copy /Y "%CEODIR%\WhatsApp Image 2026-06-17 at 3.47.05 AM (1).jpeg" "%IMGDIR%\ceo-2.jpg"
copy /Y "%CEODIR%\WhatsApp Image 2026-06-17 at 3.47.06 AM.jpeg" "%IMGDIR%\ceo-3.jpg"
copy /Y "%CEODIR%\WhatsApp Image 2026-06-17 at 3.47.06 AM (1).jpeg" "%IMGDIR%\ceo-4.jpg"
copy /Y "%CEODIR%\WhatsApp Image 2026-06-17 at 3.47.06 AM (2).jpeg" "%IMGDIR%\ceo-5.jpg"

echo.
echo ========================================
echo  Images copied! Listing results:
echo ========================================
dir "%IMGDIR%"

echo.
echo ========================================
echo  Installing Node.js dependencies...
echo ========================================
cd /d c:\Users\hp010\Desktop\jewelry_site
call npm install

echo.
echo ========================================
echo  Initializing Git and pushing to GitHub
echo ========================================
cd /d c:\Users\hp010\Desktop\jewelry_site
git init
git add .
git commit -m "Initial commit - Royal Crest Gems luxury jewelry website"
git branch -M main
git remote add origin https://github.com/fatherlorddrive-byte/jewelry-site.git
git push -u origin main

echo.
echo ========================================
echo  ALL DONE! Your site is ready.
echo ========================================
echo.
pause
