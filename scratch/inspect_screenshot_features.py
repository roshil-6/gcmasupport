import os
from PIL import Image
import numpy as np

screenshot_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\media__1779712544404.png"

if not os.path.exists(screenshot_path):
    print("Screenshot not found:", screenshot_path)
    exit(1)

with Image.open(screenshot_path) as img:
    w, h = img.size
    print(f"Screenshot size: {w}x{h}")
    pixels = np.array(img.convert("RGB"))
    
    # Let's count pixels that are NOT dark green (R > 15 or G > 35 or B > 20)
    non_dark_green_pixels = []
    for y in range(h):
        for x in range(w):
            r, g, b = pixels[y, x]
            if r > 15 or g > 35 or b > 20:
                non_dark_green_pixels.append((x, y, (r, g, b)))
                
    print(f"Found {len(non_dark_green_pixels)} non-dark-green pixels out of {w*h} ({len(non_dark_green_pixels)/(w*h)*100:.2f}%)")
    if len(non_dark_green_pixels) > 0:
        print("Sample non-dark-green pixels:")
        for px in non_dark_green_pixels[:30]:
            print(f"  x={px[0]}, y={px[1]}: RGB={px[2]}")
            
        # Count dominant non-dark-green colors
        colors = [px[2] for px in non_dark_green_pixels]
        unique_colors, counts = np.unique(colors, axis=0, return_counts=True)
        sorted_indices = np.argsort(-counts)
        print("Top non-dark-green colors:")
        for idx in sorted_indices[:10]:
            print(f"  Color {unique_colors[idx]}: {counts[idx]} pixels")
    else:
        print("No non-dark-green pixels found. The screenshot is entirely solid dark green background!")
