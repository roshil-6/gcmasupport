import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
logo_path = os.path.join(public_dir, "logo_statue.png")

with Image.open(logo_path) as img:
    width, height = img.size
    print(f"Size: {width}x{height}")
    
    # Let's find the bounding box of pixels that are NOT cream (RGB near 240-255)
    # Let's say if R < 220 or G < 220 or B < 200, it's a non-cream pixel.
    non_cream_pixels = []
    for y in range(0, height, 5):
        for x in range(0, width, 5):
            p = img.getpixel((x, y))
            if p[0] < 235 or p[1] < 235 or p[2] < 225:
                non_cream_pixels.append((x, y))
                
    if non_cream_pixels:
        min_x = min(p[0] for p in non_cream_pixels)
        max_x = max(p[0] for p in non_cream_pixels)
        min_y = min(p[1] for p in non_cream_pixels)
        max_y = max(p[1] for p in non_cream_pixels)
        print(f"Bounding box of non-cream content: x=({min_x} to {max_x}), y=({min_y} to {max_y})")
    else:
        print("No non-cream content found!")
