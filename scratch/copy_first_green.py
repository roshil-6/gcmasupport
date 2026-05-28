import shutil
import os

appdata_brain = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
first_green_src = os.path.join(appdata_brain, "media__1779474272288.png")
first_green_dst = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-poster-first-green.png"

if os.path.exists(first_green_src):
    shutil.copy2(first_green_src, first_green_dst)
    print(f"Copied {first_green_src} to {first_green_dst}")
else:
    print(f"Error: {first_green_src} does not exist.")
