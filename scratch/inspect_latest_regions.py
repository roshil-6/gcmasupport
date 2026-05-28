import os
from PIL import Image
import numpy as np

latest_path = r"public/home/gcma-hero-latest.png"

if os.path.exists(latest_path):
    img = Image.open(latest_path)
    w, h = img.size
    pixels = np.array(img)
    
    # Check average color in columns:
    # Column 350 (left of 423)
    # Column 500 (right of 423)
    # Let's inspect at y = 100 (away from statue)
    print("RGB at y=100:")
    for x in range(410, 440):
        print(f"  Col {x}: {pixels[100, x, :3]}")
else:
    print("File not found.")
