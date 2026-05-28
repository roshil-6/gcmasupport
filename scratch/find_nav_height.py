from PIL import Image
import os

path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-white.png"
output_path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-white-cropped.png"

with Image.open(path) as img:
    w, h = img.size
    img_rgb = img.convert("RGB")
    
    # We want to scan the rows from top (y=0) downwards to find where the navigation bar text ends.
    # The navigation bar in the screenshot has a white/cream background. Let's find rows that
    # are almost completely white/cream, and see where the text (darker pixels) stops.
    # Let's print the average brightness and minimum brightness of the first 120 rows.
    for y in range(0, 120):
        row_pixels = [img_rgb.getpixel((x, y)) for x in range(w)]
        # Count how many pixels are NOT white/cream (e.g. brightness < 240 or color distance from white > 15)
        non_white_count = 0
        for p in row_pixels:
            if p[0] < 240 or p[1] < 240 or p[2] < 240:
                non_white_count += 1
        print(f"Row {y}: non-white pixels = {non_white_count}")
