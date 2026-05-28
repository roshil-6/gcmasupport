from PIL import Image
import os

# Paths to inspect
logo_statue_path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\logo_statue.png"
gcma_hero_white_path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-white.png"

def analyze_image_top(path, name):
    if not os.path.exists(path):
        print(f"{name} does not exist at {path}")
        return
    with Image.open(path) as img:
        print(f"=== {name} ({img.size[0]}x{img.size[1]}) ===")
        # Let's save a crop of the top 100 pixels to see what's there
        # and print the colors of some pixels at the top
        img_rgb = img.convert("RGB")
        w, h = img.size
        # Sample pixels along a horizontal line near the top (y=20)
        # to see if it's a solid background or has varying colors (like text)
        y = min(20, h - 1)
        colors = [img_rgb.getpixel((x, y)) for x in range(0, w, w // 10)]
        print(f"Sample colors at y={y}: {colors}")
        
        # Check if the colors vary highly (indicates text/nav)
        r_vals = [c[0] for c in colors]
        g_vals = [c[1] for c in colors]
        b_vals = [c[2] for c in colors]
        variance = (max(r_vals) - min(r_vals)) + (max(g_vals) - min(g_vals)) + (max(b_vals) - min(b_vals))
        print(f"Variance at y={y}: {variance}")

analyze_image_top(logo_statue_path, "logo_statue.png")
analyze_image_top(gcma_hero_white_path, "gcma-hero-white.png")
