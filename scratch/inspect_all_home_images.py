import os
from PIL import Image
import glob

print("--- Public Root ---")
for f in glob.glob("public/*.*"):
    try:
        with Image.open(f) as img:
            print(f"  {os.path.basename(f)}: size={img.size}, format={img.format}")
    except:
        pass

print("--- Public Home ---")
for f in glob.glob("public/home/*.*"):
    try:
        with Image.open(f) as img:
            print(f"  {os.path.basename(f)}: size={img.size}, format={img.format}")
    except:
        pass
