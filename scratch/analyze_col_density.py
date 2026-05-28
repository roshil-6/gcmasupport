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
    
    binary = []
    for y in range(sh):
        row = []
        for x in range(sw):
            r, g, b = pixels[x, y][:3]
            is_foreground = not (r < 30 and g < 50 and b < 35)
            row.append(1 if is_foreground else 0)
        binary.append(row)
        
    # Count foreground pixels in each column of the crop
    col_counts = [sum(binary[y][x] for y in range(sh)) for x in range(sw)]
    
    for x, count in enumerate(col_counts):
        if count > 10:
            print(f"Col {x} (original x={crop_x1 + x}): {count} foreground pixels")
