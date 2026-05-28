import os
from PIL import Image
import numpy as np

public_dir = r"public/home"
seamless_path = os.path.join(public_dir, 'gcma-hero-green-seamless.png')

if not os.path.exists(seamless_path):
    print("File not found:", seamless_path)
    exit(1)

with Image.open(seamless_path) as img:
    w, h = img.size
    print(f"Image size: {w}x{h}")
    pixels = np.array(img.convert("RGB"))
    
    # Let's check for gold pixels (R > 100, G > 80, B < 150) in the right 50% of the image (x > 768)
    gold_pixels = []
    for y in range(h):
        for x in range(768, w):
            r, g, b = pixels[y, x]
            if r > 100 and g > 80 and b < 150:
                gold_pixels.append((x, y, (r, g, b)))
                
    print(f"Found {len(gold_pixels)} gold pixels on the right side (x > 768).")
    if len(gold_pixels) > 0:
        # Print a sample of gold pixels
        print("Sample gold pixels on the right side:")
        for gp in gold_pixels[:30]:
            print(f"  x={gp[0]}, y={gp[1]}: RGB={gp[2]}")
            
        # Check if they form horizontal lines (same y across multiple x)
        y_counts = {}
        for x, y, rgb in gold_pixels:
            y_counts[y] = y_counts.get(y, 0) + 1
        sorted_ys = sorted(y_counts.items(), key=lambda item: item[1], reverse=True)
        print("Top rows by gold pixel count on the right side:")
        for y, count in sorted_ys[:10]:
            print(f"  Row {y}: {count} gold pixels (out of {w - 768})")
