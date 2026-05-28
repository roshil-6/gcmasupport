import os
from PIL import Image

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
screenshot_path = os.path.join(brain_dir, "media__1779634758415.png")

if os.path.exists(screenshot_path):
    with Image.open(screenshot_path) as img:
        w, h = img.size
        print(f"Screenshot size: {w}x{h}")
        # Search for annotations (e.g. bright red pixels, where R is high, G and B are low)
        red_pixels = []
        for y in range(h):
            for x in range(w):
                r, g, b = img.getpixel((x, y))[:3]
                # Saturated red highlight check
                if r > 200 and g < 50 and b < 50:
                    red_pixels.append((x, y))
        
        print(f"Found {len(red_pixels)} potential red annotation pixels.")
        if len(red_pixels) > 0:
            print("First 20 red pixels:", red_pixels[:20])
else:
    print("Screenshot does not exist.")
