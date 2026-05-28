import os
from PIL import Image
import numpy as np

public_dir = r"public/home"
files_to_process = [
    'gcma-hero-green-seamless.png',
    'gcma-hero-green-seamless.jpg'
]

for filename in files_to_process:
    filepath = os.path.join(public_dir, filename)
    if not os.path.exists(filepath):
        print(f"File {filename} not found, skipping.")
        continue
        
    print(f"Processing {filename}...")
    with Image.open(filepath) as img:
        # Convert to RGB if needed
        original_mode = img.mode
        has_alpha = 'A' in original_mode
        img_rgb = img.convert("RGB")
        w, h = img_rgb.size
        pixels = np.array(img_rgb)
        
        # 1. Top double line interpolation (rows 122 to 141)
        y_top_start = 122
        y_top_end = 141
        # We interpolate using row 121 and row 142 as clean references
        y_ref_above = 121
        y_ref_below = 142
        
        for y in range(y_top_start, y_top_end + 1):
            weight = (y - y_ref_above) / (y_ref_below - y_ref_above)
            for x in range(w):
                color_above = pixels[y_ref_above, x].astype(float)
                color_below = pixels[y_ref_below, x].astype(float)
                pixels[y, x] = (1.0 - weight) * color_above + weight * color_below
                
        # 2. Bottom double line interpolation (rows 879 to 897)
        y_bot_start = 879
        y_bot_end = 897
        # We interpolate using row 878 and row 898 as clean references
        y_bot_above = 878
        y_bot_below = 898
        
        for y in range(y_bot_start, y_bot_end + 1):
            weight = (y - y_bot_above) / (y_bot_below - y_bot_above)
            for x in range(w):
                color_above = pixels[y_bot_above, x].astype(float)
                color_below = pixels[y_bot_below, x].astype(float)
                pixels[y, x] = (1.0 - weight) * color_above + weight * color_below
                
        # Save back the processed image
        new_img = Image.fromarray(pixels)
        if has_alpha:
            # Re-attach alpha channel from original image if it had one
            original_rgba = img.convert("RGBA")
            alpha = np.array(original_rgba)[:, :, 3]
            new_rgba = np.zeros((h, w, 4), dtype=np.uint8)
            new_rgba[:, :, :3] = pixels
            new_rgba[:, :, 3] = alpha
            new_img = Image.fromarray(new_rgba, "RGBA")
            new_img.save(filepath, "PNG")
        else:
            if filename.endswith(".jpg") or filename.endswith(".jpeg"):
                new_img.save(filepath, "JPEG", quality=95)
            else:
                new_img.save(filepath, "PNG")
                
        print(f"Successfully processed and saved {filename}")
