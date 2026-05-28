import os
from PIL import Image
import numpy as np

logo_statue_path = r"public/logo_statue.png"
latest_path = r"public/home/gcma-hero-latest.png"

if os.path.exists(logo_statue_path) and os.path.exists(latest_path):
    img1 = Image.open(logo_statue_path)
    img2 = Image.open(latest_path)
    print(f"logo_statue size={img1.size}, format={img1.format}")
    print(f"gcma-hero-latest size={img2.size}, format={img2.format}")
    
    # Check if they are pixel-identical
    p1 = np.array(img1)
    p2 = np.array(img2)
    
    if p1.shape == p2.shape:
        diff = np.abs(p1.astype(float) - p2.astype(float))
        max_diff = np.max(diff)
        mean_diff = np.mean(diff)
        print(f"Max pixel difference: {max_diff}")
        print(f"Mean pixel difference: {mean_diff}")
        if max_diff == 0:
            print("The files are pixel-identical.")
        else:
            print("The files are different.")
    else:
        print("Shapes are different.")
else:
    print("One of the files does not exist.")
