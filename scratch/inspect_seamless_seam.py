import os
from PIL import Image
import numpy as np

seamless_path = r"public/home/gcma-hero-green-seamless.png"

if os.path.exists(seamless_path):
    img = Image.open(seamless_path)
    w, h = img.size
    pixels = np.array(img)
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    
    col_diffs = np.mean(np.abs(gray[:, 1:] - gray[:, :-1]), axis=0)
    
    print("Column differences in range x=600 to 800:")
    for x in range(600, 800):
        if col_diffs[x] > 1.0:
            print(f"  Column {x} -> {x+1}: diff = {col_diffs[x]:.4f}")
else:
    print("Seamless image not found.")
