import os
from PIL import Image
import numpy as np

latest_path = r"public/home/gcma-hero-latest.png"

if os.path.exists(latest_path):
    img = Image.open(latest_path)
    w, h = img.size
    pixels = np.array(img)
    
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    
    print("Row differences at x=423:")
    for y in range(0, h, 20):
        diff = abs(gray[y, 424] - gray[y, 423])
        if diff > 10:
            print(f"  Row {y}: diff={diff:.2f}, pix423={pixels[y, 423, :3]}, pix424={pixels[y, 424, :3]}")
else:
    print("File not found.")
