import os
import glob
from PIL import Image

def analyze_image(path):
    try:
        with Image.open(path) as img:
            w, h = img.size
            img_rgb = img.convert('RGB')
            # sample average color by resizing to 1x1
            img_mini = img_rgb.resize((1, 1))
            avg_color = img_mini.getpixel((0, 0))
            print(f"{os.path.basename(path)}: size={w}x{h}, mode={img.mode}, avg_rgb={avg_color}")
    except Exception as e:
        pass

# artifacts directory
art_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
temp_media_dir = os.path.join(art_dir, ".tempmediaStorage")

print("--- Artifacts Root ---")
for ext in ['*.png', '*.jpg', '*.jpeg']:
    for f in glob.glob(os.path.join(art_dir, ext)):
        analyze_image(f)
    for f in glob.glob(os.path.join(art_dir, "**", ext), recursive=True):
        analyze_image(f)

print("--- Temp Media ---")
if os.path.exists(temp_media_dir):
    for ext in ['*.png', '*.jpg', '*.jpeg']:
        for f in glob.glob(os.path.join(temp_media_dir, ext)):
            analyze_image(f)
