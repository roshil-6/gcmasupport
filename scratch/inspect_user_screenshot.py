import os
from PIL import Image
import numpy as np

screenshot_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\media__1779712001732.png"

if not os.path.exists(screenshot_path):
    print("Screenshot not found:", screenshot_path)
    exit(1)

with Image.open(screenshot_path) as img:
    w, h = img.size
    print(f"Screenshot dimensions: {w}x{h}")
    pixels = np.array(img.convert("RGB"))
    
    # Let's check if there are gold rows in this screenshot
    row_gold_counts = []
    for y in range(h):
        gold_count = 0
        for x in range(w):
            r, g, b = pixels[y, x]
            # Gold color check
            if r > 120 and g > 90 and b < 100:
                gold_count += 1
        if gold_count > w * 0.3: # if more than 30% of the row is gold
            row_gold_counts.append((y, gold_count))
            
    print(f"Found {len(row_gold_counts)} gold rows in user screenshot:")
    if row_gold_counts:
        groups = []
        current_group = [row_gold_counts[0][0]]
        for y, count in row_gold_counts[1:]:
            if y == current_group[-1] + 1:
                current_group.append(y)
            else:
                groups.append(current_group)
                current_group = [y]
        groups.append(current_group)
        
        for g in groups:
            print(f"Group: rows {g[0]} to {g[-1]} (height: {len(g)})")
