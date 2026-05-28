import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
statue_path = os.path.join(public_dir, "home", "gcma-hero-green-statue-cropped.jpg")

if os.path.exists(statue_path):
    with Image.open(statue_path) as img:
        w, h = img.size
        print(f"Statue Image Size: {w}x{h}")
        # Let's count bright gold/yellow pixels (R > 180, G > 130, B < 80)
        gold_pixels = 0
        for y in range(h):
            for x in range(w):
                r, g, b = img.getpixel((x, y))[:3]
                if r > 180 and g > 130 and b < 80:
                    gold_pixels += 1
        print(f"Gold pixels count: {gold_pixels} (out of {w*h} total pixels)")
else:
    print("Statue image does not exist.")
