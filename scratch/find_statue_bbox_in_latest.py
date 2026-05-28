import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")

with Image.open(latest_path) as img:
    w, h = img.size
    pixels = img.load()
    
    # We want to find the bounding box of all bright pixels (e.g. R > 100, G > 80, B > 40)
    # let's scan the image
    xs = []
    ys = []
    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y][:3]
            # check if gold-ish
            if r > 100 and g > 80:
                xs.append(x)
                ys.append(y)
                
    if xs:
        print(f"Bright pixels range: X: {min(xs)} to {max(xs)}, Y: {min(ys)} to {max(ys)}")
    else:
        print("No bright pixels found with the criteria R > 100 and G > 80.")
