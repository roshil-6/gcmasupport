from PIL import Image
import os

path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-white.png"

with Image.open(path) as img:
    w, h = img.size
    print(f"Original size: {w}x{h}")
    # Crop: box is (left, upper, right, lower)
    # Crop out the top 45 pixels
    cropped_img = img.crop((0, 45, w, h))
    cropped_img.save(path)
    print(f"Cropped and saved to {path} with size: {cropped_img.size}")
