import os
from PIL import Image
import numpy as np

logo_statue_path = r"public/logo_statue.png"

if os.path.exists(logo_statue_path):
    img = Image.open(logo_statue_path)
    w, h = img.size
    pixels = np.array(img)
    
    # Check average color in a few regions
    # Left side (statue region): x = 0 to 500
    # Right side: x = 800 to 1500
    left_avg = np.mean(pixels[:, :500, :3], axis=(0, 1))
    right_avg = np.mean(pixels[:, 800:, :3], axis=(0, 1))
    
    print(f"Left side average color: {left_avg}")
    print(f"Right side average color: {right_avg}")
    
    # Check if there are gold-like colors (R > 180, G > 140, B < 80) on the right side
    right_flat = pixels[:, 800:, :3].reshape(-1, 3)
    gold_count = np.sum((right_flat[:, 0] > 180) & (right_flat[:, 1] > 140) & (right_flat[:, 2] < 100))
    print(f"Number of bright gold-ish pixels on the right side: {gold_count} / {len(right_flat)} ({gold_count/len(right_flat)*100:.2f}%)")
    
    # Check if there are any white pixels (R > 240, G > 240, B > 240) on the right side
    white_count = np.sum((right_flat[:, 0] > 240) & (right_flat[:, 1] > 240) & (right_flat[:, 2] > 240))
    print(f"Number of white pixels on the right side: {white_count} / {len(right_flat)} ({white_count/len(right_flat)*100:.2f}%)")
else:
    print(f"File not found: {logo_statue_path}")
