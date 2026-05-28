from PIL import Image
import os

path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-poster-first-green.png"

with Image.open(path) as img:
    w, h = img.size
    print(f"Original size of green poster: {w}x{h}")
    # Crop out the top 50 pixels containing the baked-in nav bar
    cropped_img = img.crop((0, 50, w, h))
    cropped_img.save(path)
    print(f"Cropped and saved green poster to {path} with size: {cropped_img.size}")
