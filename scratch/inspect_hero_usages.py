with open(r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\components\Hero.tsx", "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if "desktopHeroImageIndex" in line or "desktopHeroImage" in line or "desktopHeroTexture" in line:
            print(f"Line {i+1}: {line.strip()}")
