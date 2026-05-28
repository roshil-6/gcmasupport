import os
import math
from PIL import Image, ImageDraw

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
hero_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")

with Image.open(hero_path) as img:
    width, height = img.size
    print(f"Image Size: {width}x{height}")
    
    # We want to find the circular border. Let's sample pixels in the left half (x from 0 to 768).
    # The gold circle has a bright gold border. Let's search for pixels that are very bright gold.
    # Gold color is high R and G, lower B. e.g. R > 180, G > 150, B < 100.
    gold_pixels = []
    for y in range(0, height, 2):
        for x in range(0, 700, 2):
            r, g, b = img.getpixel((x, y))
            # Let's detect the outer gold circle.
            # In the screenshot, there is a circular outline.
            # Let's print out some pixels to find its coordinate range.
            pass
            
    # Let's crop a square region that contains the statue.
    # Based on the screenshot:
    # The statue is in the left part.
    # Let's crop from x=100 to x=700, and y=150 to y=850, and inspect the brightness.
    # Actually, let's write a script that crops a few test sizes and saves them so we can find the exact circle.
    # But wait, we can find the circle by scanning horizontally and vertically for the gold ring.
    # Let's scan along y=512 (middle of the image) from x=50 to x=600.
    y_mid = 512
    row_pixels = [img.getpixel((x, y_mid)) for x in range(0, 700)]
    
    # Let's print the colors along the middle row to see where the gold ring starts and ends.
    # The gold ring will have high values of R and G compared to the green background.
    # Green background has very low R and G (e.g. R < 20, G < 40, B < 20).
    # The ring will have R > 150, G > 120.
    ring_crossings = []
    for x in range(10, 690):
        r, g, b = img.getpixel((x, y_mid))
        if r > 100 and g > 80 and b < 100:  # Gold-ish
            ring_crossings.append((x, (r, g, b)))
            
    print("Gold-like pixels along y=512:")
    for x, col in ring_crossings[:30]:
        print(f"x={x}: {col}")
    print("...")
    for x, col in ring_crossings[-30:]:
        print(f"x={x}: {col}")
