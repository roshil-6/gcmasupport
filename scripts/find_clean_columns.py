import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
latest_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")

print("Analyzing gcma-hero-latest.png (1536x1024):")
with Image.open(latest_path) as img:
    print(f"Size: {img.size}")
    # Inspect columns between x=550 and x=750 to find the best clean vertical strip.
    # We look for a range of columns where standard deviation is low and stays low.
    clean_columns = []
    for x in range(550, 750, 5):
        col = [img.getpixel((x, y)) for y in range(0, img.height, 5)]
        r_vals = [p[0] for p in col]
        mean = sum(r_vals) / len(r_vals)
        variance = sum((v - mean) ** 2 for v in r_vals) / len(r_vals)
        std_dev = variance ** 0.5
        print(f"  Col {x}: Mean R={mean:.1f}, Std Dev={std_dev:.1f}")
