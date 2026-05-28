import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")

with Image.open(latest_path) as img:
    w, h = img.size
    pixels = img.load()
    
    bucket_size = 50
    buckets = [0] * ((w + bucket_size - 1) // bucket_size)
    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y][:3]
            if r > 100 and g > 80:
                buckets[x // bucket_size] += 1
                
    for i, count in enumerate(buckets):
        start_x = i * bucket_size
        end_x = min(start_x + bucket_size - 1, w - 1)
        print(f"Columns {start_x}-{end_x}: {count} bright pixels")
