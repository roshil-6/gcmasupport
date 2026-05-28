import os
from PIL import Image

public_dir = r"public/home"
clean_path = os.path.join(public_dir, 'gcma-hero-green-clean.png')
latest_path = os.path.join(public_dir, 'gcma-hero-latest.png')

print(f"clean_path exists: {os.path.exists(clean_path)}")
print(f"latest_path exists: {os.path.exists(latest_path)}")

if os.path.exists(clean_path):
    with Image.open(clean_path) as img:
        print(f"Clean image size: {img.size}")
if os.path.exists(latest_path):
    with Image.open(latest_path) as img:
        print(f"Latest image size: {img.size}")
