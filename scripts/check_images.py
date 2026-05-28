import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"

images = [
    os.path.join(public_dir, "logo_statue.png"),
    os.path.join(public_dir, "hero-background.jpeg"),
    os.path.join(public_dir, "home", "gcma-hero-latest.png"),
    os.path.join(public_dir, "home", "gcma-hero-brand.png"),
    os.path.join(public_dir, "home", "gcma-hero-new.png"),
    os.path.join(public_dir, "home", "header-texture.png"),
]

for img_path in images:
    if os.path.exists(img_path):
        try:
            with Image.open(img_path) as img:
                print(f"Path: {os.path.relpath(img_path, public_dir)}")
                print(f"  Format: {img.format}")
                print(f"  Size: {img.size}")
                print(f"  Mode: {img.mode}")
                if "A" in img.mode:
                    print("  Has alpha channel (transparency)")
                else:
                    print("  No transparency")
        except Exception as e:
            print(f"Error opening {img_path}: {e}")
    else:
        print(f"Path not found: {img_path}")
