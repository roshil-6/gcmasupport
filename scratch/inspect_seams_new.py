import os
from PIL import Image
import numpy as np

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
img1_path = os.path.join(brain_dir, "media__1779651706266.png")
img2_path = os.path.join(brain_dir, "media__1779651733103.png")

if os.path.exists(img1_path):
    with Image.open(img1_path) as img:
        print(f"img1 size: {img.size}")
if os.path.exists(img2_path):
    with Image.open(img2_path) as img:
        print(f"img2 size: {img.size}")

seamless_path = r"public/home/gcma-hero-green-seamless.png"
if os.path.exists(seamless_path):
    img = Image.open(seamless_path)
    w, h = img.size
    pixels = np.array(img)
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    
    # Calculate column differences
    col_diffs = np.mean(np.abs(gray[:, 1:] - gray[:, :-1]), axis=0)
    
    # Find all column indexes in the middle area (x=200 to 1200) where difference > 5
    jumps = []
    for x in range(200, 1200):
        if col_diffs[x] > 5:
            jumps.append((col_diffs[x], x))
            
    jumps.sort(reverse=True, key=lambda x: x[0])
    print("Columns with differences > 5 in gcma-hero-green-seamless.png:")
    for val, x in jumps[:10]:
        print(f"  Column {x} -> {x+1}: value = {val:.4f}")
