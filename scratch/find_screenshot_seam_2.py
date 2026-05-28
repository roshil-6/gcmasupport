import os
from PIL import Image
import numpy as np

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
img_path = os.path.join(brain_dir, "media__1779651733103.png")

if os.path.exists(img_path):
    img = Image.open(img_path)
    w, h = img.size
    pixels = np.array(img)
    print(f"Crop size: {w}x{h}")
    
    gray = 0.299 * pixels[:, :, 0] + 0.587 * pixels[:, :, 1] + 0.114 * pixels[:, :, 2]
    
    col_diffs = np.mean(np.abs(gray[:, 1:] - gray[:, :-1]), axis=0)
    
    jumps = []
    for x in range(10, w - 10):
        jumps.append((col_diffs[x], x))
            
    jumps.sort(reverse=True, key=lambda x: x[0])
    print("Top 10 columns with largest jumps in second crop:")
    for val, x in jumps[:10]:
        print(f"  Column {x} -> {x+1}: value = {val:.4f}")
        
    # Print pixel values around the top jump
    top_x = jumps[0][1]
    print(f"Pixel values around column {top_x} at y=300:")
    for x in range(max(0, top_x - 5), min(w, top_x + 6)):
        print(f"  Col {x}: {pixels[300, x, :3]}")
else:
    print("File not found.")
