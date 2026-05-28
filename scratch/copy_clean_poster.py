import shutil
import os

appdata_brain = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
src = os.path.join(appdata_brain, "media__1779906083109.jpg")
dst = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-white.jpg"

if os.path.exists(src):
    shutil.copy2(src, dst)
    print(f"Successfully copied clean poster to {dst}")
else:
    print(f"Error: source file {src} does not exist!")
