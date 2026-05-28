import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
logo_path = os.path.join(public_dir, "logo_statue.png")

with Image.open(logo_path) as img:
    w, h = img.size
    print(f"logo_statue.png size: {w}x{h}")
    # Sample a horizontal line across the center cy=528
    cy = 528
    # We print the colors of some pixels along y=528 to see if they are cream or dark green or gold
    samples = [0, 100, 200, 254, 400, 600, 768, 1000, 1200, 1500]
    for x in samples:
        print(f"Pixel ({x}, {cy}): {img.getpixel((x, cy))}")
