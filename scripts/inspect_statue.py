import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
logo_path = os.path.join(public_dir, "logo_statue.png")

with Image.open(logo_path) as img:
    # Let's save a cropped region around the statue.
    # The image is 1536 x 1024.
    # Usually, if it's the same statue on the left, the statue should be in the left half.
    # Let's check if we can crop a square around the circular statue.
    # In the screenshot, the circular statue has center around x=280, y=512 (assuming height 1024).
    # Let's write a script to check if we can detect the statue circle and crop it, or see what logo_statue.png is.
    print("logo_statue.png dimensions:", img.size)
    # Let's check some horizontal lines in logo_statue.png to see where it has content.
    # Let's check color averages along columns.
    width, height = img.size
    column_brightness = []
    for x in range(0, width, 10):
        col_pixels = [img.getpixel((x, y)) for y in range(0, height, 10)]
        col_avg = sum(sum(p) for p in col_pixels) / (len(col_pixels) * 3)
        column_brightness.append((x, col_avg))
    
    print("Column brightness (sampled every 10px):")
    print("First 10 columns:", column_brightness[:10])
    print("Middle columns (near 768):", column_brightness[70:80])
    print("Last 10 columns:", column_brightness[-10:])
