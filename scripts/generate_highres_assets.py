import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
latest_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")
clean_out_path = os.path.join(public_dir, "home", "gcma-hero-green-clean.jpg")
statue_out_path = os.path.join(public_dir, "home", "gcma-hero-green-statue.jpg")

print("Generating high-resolution assets from gcma-hero-latest.png...")
with Image.open(latest_path) as img:
    w, h = img.size
    print(f"Original Size: {w}x{h}")
    
    # 1. Create clean background for desktop (1536x1024)
    # We take a clean vertical slice between the statue and the text
    slice_x1, slice_x2 = 630, 730
    bg_slice = img.crop((slice_x1, 0, slice_x2, h))
    
    # We resize the clean slice to cover the right side of the image
    cover_width = w - slice_x2
    bg_cover = bg_slice.resize((cover_width, h), Image.Resampling.LANCZOS)
    
    # Paste it back to cover the text on the right
    img_clean = img.copy()
    img_clean.paste(bg_cover, (slice_x2, 0))
    
    # Save high-res clean background
    img_clean.save(clean_out_path, "JPEG", quality=98)
    print(f"Saved high-res clean background to {clean_out_path} ({img_clean.size})")
    
    # 2. Create high-res statue for mobile (660x1024)
    # We crop from x=0 to x=660 (which includes the statue and its glow/medallion)
    statue_img = img.crop((0, 0, 660, h))
    
    # Save high-res mobile statue
    statue_img.save(statue_out_path, "JPEG", quality=98)
    print(f"Saved high-res mobile statue to {statue_out_path} ({statue_img.size})")

print("Done generating high-resolution assets!")
