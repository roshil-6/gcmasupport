import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
seamless_path = os.path.join(public_dir, "public", "home", "gcma-hero-green-seamless.png")
output_path = os.path.join(public_dir, "scratch", "test_seamless_crop.jpg")

target_color = (11, 47, 31) # #0b2f1f (Rich dark forest green)

with Image.open(seamless_path) as img:
    # Crop from x1=60 to x2=520 (width 460) to exclude the left double border
    crop_x1, crop_y1 = 60, 180
    crop_x2, crop_y2 = 520, 876
    statue_crop = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    
    # Let's save this crop directly to see what it contains
    statue_crop.save(output_path, "JPEG", quality=95)
    print(f"Saved test crop to {output_path}")
