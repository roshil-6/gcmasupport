import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
cropped_path = os.path.join(public_dir, "public", "home", "gcma-hero-green-statue-cropped.jpg")

with Image.open(cropped_path) as img:
    pixels = img.load()
    
    # Print some pixels from row y = 250, for x from 300 to 340
    print("Row y=250:")
    for x in range(300, 341):
        print(f"x={x}: {pixels[x, 250][:3]}", end=" | ")
    print()
