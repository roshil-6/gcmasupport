import os
import shutil
import glob
from PIL import Image

art_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
temp_media_dir = os.path.join(art_dir, ".tempmediaStorage")

def inspect(name, path):
    if not os.path.exists(path):
        print(f"{name} does not exist at {path}")
        return
    try:
        with Image.open(path) as img:
            w, h = img.size
            img_rgb = img.convert('RGB')
            img_mini = img_rgb.resize((1, 1))
            avg_color = img_mini.getpixel((0, 0))
            print(f"{name}: path={path}, size={w}x{h}, mode={img.mode}, avg_rgb={avg_color}")
    except Exception as e:
        print(f"Error inspecting {name}: {e}")

inspect("logo_statue.png", "public/logo_statue.png")
inspect("hero-background.jpeg", "public/hero-background.jpeg")
inspect("media__1779474806240.png", os.path.join(art_dir, "media__1779474806240.png"))
inspect("media__1779659889479.jpg", os.path.join(art_dir, "media__1779659889479.jpg"))
inspect("media__1779661448706.jpg", os.path.join(art_dir, "media__1779661448706.jpg"))

# Let's see if we have logo_statue.jpeg in the repository or git
# We can restore logo_statue.jpeg from 1d16ade using a git command, but first let's see if it's there.
