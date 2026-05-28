import os
from PIL import Image
import numpy as np

public_dir = r"public/home"
cropped_path = os.path.join(public_dir, 'gcma-hero-green-statue-cropped.jpg')

if not os.path.exists(cropped_path):
    print("File not found:", cropped_path)
    exit(1)

with Image.open(cropped_path) as img:
    w, h = img.size
    print(f"Cropped Image dimensions: {w}x{h}")
    pixels = np.array(img.convert("RGB"))
    
    row_gold_counts = []
    for y in range(h):
        gold_count = 0
        for x in range(w):
            r, g, b = pixels[y, x]
            # check if it is gold-ish
            if r > 100 and g > 80 and b < 150:
                gold_count += 1
        if gold_count > w * 0.1:
            row_gold_counts.append((y, gold_count))
            
    print(f"Found {len(row_gold_counts)} rows with >10% gold pixels in cropped image.")
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
