import os
from PIL import Image
import numpy as np

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
img_path = os.path.join(brain_dir, "media__1779651706266.png")

if os.path.exists(img_path):
    img = Image.open(img_path)
    w, h = img.size
    pixels = np.array(img)
    print(f"Screenshot size: {w}x{h}")
    
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    
    # Calculate column differences
    col_diffs = np.mean(np.abs(gray[:, 1:] - gray[:, :-1]), axis=0)
    
    # Find all column indexes in the middle area (x=100 to 800) where difference is high
    jumps = []
    for x in range(100, w - 100):
        jumps.append((col_diffs[x], x))
            
    jumps.sort(reverse=True, key=lambda x: x[0])
    print("Top 10 columns with largest jumps in user screenshot:")
    for val, x in jumps[:10]:
        print(f"  Column {x} -> {x+1}: value = {val:.4f}")
else:
    print("File not found.")
