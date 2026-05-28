import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")

with Image.open(latest_path) as img:
    crop_x1, crop_y1 = 80, 180
    crop_x2, crop_y2 = 428, 876
    statue_raw = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    sw, sh = statue_raw.size
    pixels = statue_raw.load()
    
    # Print any pixel with R > 40 on the left side (x < 150)
    bright_pixels = []
    for y in range(sh):
        for x in range(150):
            r, g, b = pixels[x, y][:3]
            if r > 40:
                bright_pixels.append((x, y, (r, g, b)))
                
    print(f"Total bright pixels (R > 40) on left (x < 150): {len(bright_pixels)}")
    # group by x coordinates and show counts
    x_counts = {}
    for x, y, col in bright_pixels:
        x_counts[x] = x_counts.get(x, 0) + 1
        
    for x in sorted(x_counts.keys()):
        print(f"Col x={x}: {x_counts[x]} bright pixels")
