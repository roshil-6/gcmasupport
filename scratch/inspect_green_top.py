from PIL import Image
import os

path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-poster-first-green.png"

with Image.open(path) as img:
    w, h = img.size
    img_rgb = img.convert("RGB")
    
    print(f"=== gcma-hero-poster-first-green.png ({w}x{h}) ===")
    # Let's scan first 120 rows
    for y in range(0, 120):
        row_pixels = [img_rgb.getpixel((x, y)) for x in range(w)]
        # We check distance from white or check variance
        non_white_count = 0
        for p in row_pixels:
            # Check if pixel color is NOT a dark green background
            # The green color has R < 60, G < 80, B < 50. Let's see if we have brighter pixels (like text)
            if p[0] > 100 or p[1] > 100 or p[2] > 100:
                non_white_count += 1
        # Print row stats if there are brighter pixels
        if non_white_count > 10:
            print(f"Row {y}: bright pixels = {non_white_count}")
