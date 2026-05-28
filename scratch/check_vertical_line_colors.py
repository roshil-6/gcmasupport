import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")

with Image.open(latest_path) as img:
    crop_x1, crop_y1 = 80, 180
    crop_x2, crop_y2 = 428, 876
    statue_raw = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    pixels = statue_raw.load()
    
    # Print the colors of some pixels at x=60
    print("Colors at x=60:")
    for y in range(250, 300):
        print(f"y={y}: {pixels[60, y][:3]}", end=" | ")
    print()
