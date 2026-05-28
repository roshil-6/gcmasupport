import os
from PIL import Image
import numpy as np

screenshot_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\media__1779712544404.png"

if not os.path.exists(screenshot_path):
    print("Screenshot not found:", screenshot_path)
    exit(1)

with Image.open(screenshot_path) as img:
    w, h = img.size
    print(f"Screenshot dimensions: {w}x{h}")
    pixels = np.array(img.convert("RGB"))
    
    # Print the unique or dominant colors in the screenshot to understand its content.
    # Check if there are any distinct elements.
    colors, counts = np.unique(pixels.reshape(-1, 3), axis=0, return_counts=True)
    sorted_indices = np.argsort(-counts)
    print("Dominant colors in the screenshot:")
    for idx in sorted_indices[:10]:
        print(f"  Color {colors[idx]}: {counts[idx]} pixels ({counts[idx]/len(pixels.reshape(-1, 3))*100:.2f}%)")
