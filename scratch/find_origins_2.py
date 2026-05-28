import os
from PIL import Image

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
original_files = [
    "media__1779474272288.png",
    "media__1779474806240.png",
    "media__1779480272369.jpg",
    "media__1779480722719.png",
    "media__1779485334744.png"
]

for name in original_files:
    path = os.path.join(brain_dir, name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"{name}: format={img.format}, size={img.size}, mode={img.mode}")
    else:
        print(f"{name} does not exist!")
