import os
from PIL import Image
import numpy as np

screenshot_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\media__1779712544404.png"
seamless_path = r"public/home/gcma-hero-green-seamless.png"

if not os.path.exists(screenshot_path):
    print("Screenshot not found:", screenshot_path)
    exit(1)
if not os.path.exists(seamless_path):
    print("Seamless image not found:", seamless_path)
    exit(1)

# Open images
shot = Image.open(screenshot_path).convert("RGB")
bg = Image.open(seamless_path).convert("RGB")

shot_arr = np.array(shot)
bg_arr = np.array(bg)

sh, sw, _ = shot_arr.shape
bgh, bgw, _ = bg_arr.shape

print(f"Screenshot size: {sw}x{sh}")
print(f"Background size: {bgw}x{bgh}")

# Since the screenshot might be resized, let's try direct template matching at multiple scales,
# or we can check the color signature.
# But wait! If the screenshot is a direct crop, we can find a matching y-range and x-range.
# Let's search for the best matching position of the screenshot in the background.

best_mse = float('inf')
best_x = -1
best_y = -1
best_scale = 1.0

# Try a few scales in case it is resized
for scale in [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]:
    w_scaled = int(sw * scale)
    h_scaled = int(sh * scale)
    if w_scaled > bgw or h_scaled > bgh or w_scaled < 10 or h_scaled < 10:
        continue
        
    shot_resized = shot.resize((w_scaled, h_scaled), Image.Resampling.LANCZOS)
    shot_res_arr = np.array(shot_resized)
    
    # We can scan the background for a match.
    # To speed it up, let's subsample or check key rows.
    # Let's do a sliding window search on y and x.
    # Since the image is large, let's slide with step 4 or 8.
    step = 8
    for y in range(0, bgh - h_scaled, step):
        for x in range(0, bgw - w_scaled, step):
            # Calculate MSE
            window = bg_arr[y:y+h_scaled, x:x+w_scaled]
            mse = np.mean((window - shot_res_arr) ** 2)
            if mse < best_mse:
                best_mse = mse
                best_x = x
                best_y = y
                best_scale = scale

print(f"Best Match - Scale: {best_scale}, x: {best_x}, y: {best_y}, MSE: {best_mse}")

# Let's print out what is at that y-range in gcma-hero-green-seamless.png
if best_y != -1:
    y_start = best_y
    y_end = best_y + int(sh * best_scale)
    x_start = best_x
    x_end = best_x + int(sw * best_scale)
    print(f"Corresponds to background image region: x [{x_start} to {x_end}], y [{y_start} to {y_end}]")
