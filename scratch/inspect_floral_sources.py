import os
from PIL import Image
import numpy as np

files = [
    r"public/logo_statue.png",
    r"public/home/gcma-hero-latest.png",
    r"public/home/gcma-hero-new.png",
    r"public/home/gcma-hero-green-clean.png",
    r"public/home/gcma-hero-green-seamless.png"
]

for path in files:
    if os.path.exists(path):
        with Image.open(path) as img:
            w, h = img.size
            pixels = np.array(img)
            # Check a region on the right side: x = 1000 to 1400, y = 100 to 400
            # If the image is smaller, adjust coordinates
            x1 = min(1000, w - 200)
            x2 = min(1400, w - 10)
            y1 = min(100, h - 200)
            y2 = min(400, h - 10)
            
            region = pixels[y1:y2, x1:x2, :3]
            gray = 0.299 * region[:, :, 0] + 0.587 * region[:, :, 1] + 0.114 * region[:, :, 2]
            std = np.std(gray)
            mean_color = np.mean(region, axis=(0, 1))
            print(f"{path}: size={img.size}, mean_color={mean_color}, std={std:.4f}")
    else:
        print(f"Path does not exist: {path}")
