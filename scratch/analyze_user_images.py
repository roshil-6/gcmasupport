from PIL import Image
import os

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
images = ["media__1779639683893.png", "media__1779639881872.png", "media__1779639912377.png"]

for name in images:
    path = os.path.join(brain_dir, name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"Image: {name}")
            print(f"  Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
            # Check if there are distinct non-zero colors, especially red/gold
            # Let's count red pixels (e.g. R > 200, G < 50, B < 50)
            if img.mode in ("RGB", "RGBA"):
                pixels = list(img.getdata())
                red_pixels = 0
                for p in pixels:
                    r, g, b = p[:3]
                    if r > 200 and g < 100 and b < 100:
                        red_pixels += 1
                print(f"  Red pixels (likely drawings): {red_pixels} / {len(pixels)} ({red_pixels/len(pixels)*100:.2f}%)")
    else:
        print(f"Path does not exist: {path}")
