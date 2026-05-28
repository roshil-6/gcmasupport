import os
from PIL import Image
import numpy as np

seamless_path = r"public/home/gcma-hero-green-seamless.png"

if os.path.exists(seamless_path):
    img = Image.open(seamless_path)
    pixels = np.array(img)
    print("RGB values at y=100 in gcma-hero-green-seamless.png:")
    for x in range(300, 1500, 100):
        print(f"  Col {x}: {pixels[100, x, :3]}")
else:
    print("File not found.")
