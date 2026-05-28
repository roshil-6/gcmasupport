import os
import glob
from PIL import Image
import time

brain_dir = r"C:\Users\Abhinand Antony\Network"
# Let's search inside the appDataDir brain directory:
appdata_brain = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"

files = glob.glob(os.path.join(appdata_brain, "media__*"))
# sort by time / name
files.sort()

for f in files:
    name = os.path.basename(f)
    mtime = time.ctime(os.path.getmtime(f))
    size = os.path.getsize(f)
    try:
        with Image.open(f) as img:
            w, h = img.size
            # Convert to RGB to get average color
            img_rgb = img.convert("RGB")
            # Sample a few pixels to get average color quickly
            pixels = list(img_rgb.getdata())
            r_avg = sum(p[0] for p in pixels) / len(pixels)
            g_avg = sum(p[1] for p in pixels) / len(pixels)
            b_avg = sum(p[2] for p in pixels) / len(pixels)
            print(f"{name}: size={w}x{h}, file_size={size} bytes, avg_rgb=({r_avg:.1f}, {g_avg:.1f}, {b_avg:.1f}), mtime={mtime}")
    except Exception as e:
        print(f"{name}: error reading image: {e}")
