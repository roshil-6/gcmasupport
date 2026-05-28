import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
logo_path = os.path.join(public_dir, "logo_statue.png")

with Image.open(logo_path) as img:
    # Let's crop the left half and right half and see if we can detect if there's text or if it's a full poster.
    # We can also check if the background is solid or has a gradient.
    print(f"Image Size: {img.size}")
    # Let's check some pixel values
    # Left side (statue region): (300, 500)
    # Right side (text region): (1100, 500)
    # Corner: (10, 10)
    print("Corner pixel (10, 10):", img.getpixel((10, 10)))
    print("Left pixel (300, 500):", img.getpixel((300, 500)))
    print("Right pixel (1100, 500):", img.getpixel((1100, 500)))

    # Let's check if the right side is mostly dark green or if it has text (i.e. high contrast variation)
    # Let's calculate variance in a patch on the right side
    right_patch = img.crop((1000, 400, 1200, 600))
    pixels = list(right_patch.getdata())
    r_vals = [p[0] for p in pixels]
    g_vals = [p[1] for p in pixels]
    b_vals = [p[2] for p in pixels]
    r_var = sum((x - sum(r_vals)/len(r_vals))**2 for x in r_vals)/len(r_vals)
    print("Right patch color variance (high variance means text/features present):", r_var)

    # Let's check the same for logo_statue.png and see if it has the text or is it just the statue.
    # In gcma-hero-latest.png:
    latest_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")
    if os.path.exists(latest_path):
        with Image.open(latest_path) as img2:
            print("Latest corner pixel (10, 10):", img2.getpixel((10, 10)))
            print("Latest left pixel (300, 500):", img2.getpixel((300, 500)))
            print("Latest right pixel (1100, 500):", img2.getpixel((1100, 500)))
            right_patch2 = img2.crop((1000, 400, 1200, 600))
            pixels2 = list(right_patch2.getdata())
            r_vals2 = [p[0] for p in pixels2]
            r_var2 = sum((x - sum(r_vals2)/len(r_vals2))**2 for x in r_vals2)/len(r_vals2)
            print("Latest right patch variance:", r_var2)
