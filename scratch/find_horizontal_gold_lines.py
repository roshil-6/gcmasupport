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
    print(f"Image dimensions: {w}x{h}")
    pixels = np.array(img.convert("RGB"))
    
    # We want to find rows that have horizontal lines.
    # A horizontal line will have similar non-green pixels across the width.
    # The background green color is around (11, 47, 31).
    # Gold color has high R and G, lower B. Let's look for pixels with R > 100, G > 80.
    
    row_gold_counts = []
    for y in range(h):
        gold_count = 0
        for x in range(w):
            r, g, b = pixels[y, x]
            # check if it is gold-ish
            if r > 100 and g > 80 and b < 150:
                gold_count += 1
        if gold_count > w * 0.1: # if more than 10% of the row is gold
            row_gold_counts.append((y, gold_count))
            
    print(f"Found {len(row_gold_counts)} rows with >10% gold pixels.")
    # Group contiguous rows
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
