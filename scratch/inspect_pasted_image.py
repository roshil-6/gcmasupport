import os
from PIL import Image

image_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\media__1779713151227.jpg"

if not os.path.exists(image_path):
    print("Image not found:", image_path)
    exit(1)

with Image.open(image_path) as img:
    w, h = img.size
    print(f"Pasted Image Dimensions: {w}x{h} (Aspect Ratio: {w/h:.2f})")
