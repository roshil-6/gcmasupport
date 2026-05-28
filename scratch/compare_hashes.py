import os
import hashlib
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
logo_path = os.path.join(public_dir, "logo_statue.png")
latest_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")

def get_md5(path):
    if os.path.exists(path):
        with open(path, "rb") as f:
            return hashlib.md5(f.read()).hexdigest()
    return None

logo_hash = get_md5(logo_path)
latest_hash = get_md5(latest_path)

print(f"logo_statue.png: hash={logo_hash}")
print(f"gcma-hero-latest.png: hash={latest_hash}")
print(f"Are hashes equal? {logo_hash == latest_hash}")

# Check logo_statue.png properties
if os.path.exists(logo_path):
    with Image.open(logo_path) as img:
        print(f"logo_statue.png size={img.size}")
