import os
from PIL import Image
import numpy as np

latest_path = r"public/home/gcma-hero-latest.png"

if os.path.exists(latest_path):
    img = Image.open(latest_path)
    w, h = img.size
    pixels = np.array(img)
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    
    # We want to print standard deviation of each column in sections to see where it increases
    # We will print the standard deviation for x from 400 to 1000 in steps of 20
    print("Column standard deviations in gcma-hero-latest.png:")
    for x in range(300, 1000, 20):
        # We check y in 0 to 400 (away from statue)
        std = np.std(gray[:400, x])
        print(f"  Col {x}: std={std:.4f}, mean={np.mean(gray[:400, x]):.2f}")
else:
    print("File not found.")
