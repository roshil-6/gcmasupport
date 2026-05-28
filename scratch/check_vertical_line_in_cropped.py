import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
cropped_path = os.path.join(public_dir, "public", "home", "gcma-hero-green-statue-cropped.jpg")

with Image.open(cropped_path) as img:
    w, h = img.size
    pixels = img.load()
    
    # Let's count bright pixels in the left half of the image
    print(f"Size of cropped image: {w}x{h}")
    
    # We want to find columns on the left (x < w/2) that have a vertical line
    # A vertical line will have bright pixels spanning many y-coordinates in the same column
    for x in range(w // 2):
        col_pixels = []
        for y in range(h):
            r, g, b = pixels[x, y][:3]
            # check if gold-ish / not background
            if r > 30 or g > 50 or b > 35:
                col_pixels.append(y)
        if len(col_pixels) > 50:
            print(f"Col x={x}: {len(col_pixels)} non-bg pixels, Y range: {min(col_pixels)} to {max(col_pixels)}")
