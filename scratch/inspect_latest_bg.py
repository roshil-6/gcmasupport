import os
from PIL import Image
import numpy as np

latest_path = r"public/home/gcma-hero-latest.png"

if os.path.exists(latest_path):
    img = Image.open(latest_path)
    pixels = np.array(img)
    print("RGB values at y=100 in gcma-hero-latest.png:")
    for x in range(300, 1500, 100):
        print(f"  Col {x}: {pixels[100, x, :3]}")
else:
    print("File not found.")
