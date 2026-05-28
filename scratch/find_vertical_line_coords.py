import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")

with Image.open(latest_path) as img:
    crop_x1, crop_y1 = 80, 180
    crop_x2, crop_y2 = 428, 876
    statue_raw = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    sw, sh = statue_raw.size
    pixels = statue_raw.load()
    
    # Let's look for foreground pixels on the left side of the crop, say x < 150
    foreground_left = []
    for y in range(sh):
        for x in range(min(150, sw)):
            r, g, b = pixels[x, y][:3]
            is_foreground = not (r < 30 and g < 50 and b < 35)
            if is_foreground:
                foreground_left.append((x, y, (r, g, b)))
                
    print(f"Found {len(foreground_left)} foreground pixels on the left (x < 40).")
    if foreground_left:
        # print first few
        for p in foreground_left[:10]:
            print(f"Pixel at x={p[0]}, y={p[1]}: color={p[2]}")
        # also print x coordinate stats
        xs = [p[0] for p in foreground_left]
        print(f"X coordinate range: {min(xs)} to {max(xs)}")
