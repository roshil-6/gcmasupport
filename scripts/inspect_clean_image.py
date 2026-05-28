import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
clean_path = os.path.join(public_dir, "home", "gcma-hero-green-clean.jpg")
statue_path = os.path.join(public_dir, "home", "gcma-hero-green-statue.jpg")
latest_path = os.path.join(public_dir, "home", "gcma-hero-green-latest.jpg")

print("Checking gcma-hero-green-latest.jpg (original):")
with Image.open(latest_path) as img:
    print(f"Size: {img.size}")
    # Let's inspect pixel variances in columns to find where the background is clean
    # and where the text actually begins.
    # We can compute standard deviation of columns.
    # Text columns will have higher variation vertically.
    for x in range(350, 500, 10):
        col = [img.getpixel((x, y)) for y in range(0, img.height, 2)]
        r_vals = [p[0] for p in col]
        mean = sum(r_vals) / len(r_vals)
        variance = sum((v - mean) ** 2 for v in r_vals) / len(r_vals)
        std_dev = variance ** 0.5
        print(f"  Col {x}: Mean R={mean:.1f}, Std Dev={std_dev:.1f}")

print("\nChecking gcma-hero-green-clean.jpg:")
with Image.open(clean_path) as img:
    print(f"Size: {img.size}")
    # Check the right side (where we pasted the stretched background)
    for x in range(450, 950, 100):
        col = [img.getpixel((x, y)) for y in range(0, img.height, 2)]
        r_vals = [p[0] for p in col]
        mean = sum(r_vals) / len(r_vals)
        variance = sum((v - mean) ** 2 for v in r_vals) / len(r_vals)
        std_dev = variance ** 0.5
        print(f"  Col {x}: Mean R={mean:.1f}, Std Dev={std_dev:.1f}")
