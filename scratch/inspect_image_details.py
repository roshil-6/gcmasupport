import os
from PIL import Image
import numpy as np

logo_statue_path = r"public/logo_statue.png"

if os.path.exists(logo_statue_path):
    img = Image.open(logo_statue_path)
    w, h = img.size
    pixels = np.array(img)
    
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    col_diffs = np.mean(np.abs(gray[:, 1:] - gray[:, :-1]), axis=0)
    
    jumps = []
    for x in range(200, 1000):
        jumps.append((col_diffs[x], x))
    
    jumps.sort(reverse=True, key=lambda x: x[0])
    print("Top 10 columns with largest jumps in public/logo_statue.png:")
    for val, x in jumps[:10]:
        print(f"  Column {x} -> {x+1}: jump value = {val:.4f}")
else:
    print(f"Path does not exist: {logo_statue_path}")
