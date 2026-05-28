import os
from PIL import Image, ImageDraw

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
hero_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")
output_path = os.path.join(public_dir, "home", "statue-medallion.png")

with Image.open(hero_path) as img:
    # Circle center and radius found: cx=254, cy=528, r=368
    cx, cy, r = 254, 528, 368
    
    # We will crop from x = 0 to cx + r + 10 (632), and y = cy - r - 10 (150) to cy + r + 10 (906)
    # This gives a nice border margin. Let's make it a square or clean rectangle.
    x0 = 0
    y0 = max(0, cy - r - 10)  # 150
    x1 = cx + r + 10          # 632
    y1 = min(img.height, cy + r + 10)  # 906
    
    box = (x0, y0, x1, y1)
    cropped = img.crop(box)
    
    # Create an alpha mask of the same size
    mask = Image.new("L", cropped.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw the circle on the mask.
    # The center of the circle in the cropped image is:
    # cx_cropped = cx - x0 = cx = 254
    # cy_cropped = cy - y0 = 528 - 150 = 378
    cx_c = cx
    cy_c = cy - y0
    
    # Draw a filled circle on the mask
    # We want to keep everything inside the circle.
    # The bounding box of the circle in cropped coordinates is:
    circle_box = (cx_c - r, cy_c - r, cx_c + r, cy_c + r)
    draw.ellipse(circle_box, fill=255)
    
    # We also keep the left edge straight since the circle is cut off there.
    # So we can fill a rectangle from x=0 to cx_c on the mask, if needed?
    # Actually, the ellipse bounding box left is cx_c - r = -114.
    # PIL's draw.ellipse handles negative coordinates and draws the circle arc correctly!
    # So the circle will naturally be cropped at x=0 (the left boundary of the image).
    # That is exactly what we want!
    
    # Apply the mask as the alpha channel
    # Convert cropped to RGBA if not already
    cropped_rgba = cropped.convert("RGBA")
    
    # Create the final image with alpha
    final_img = Image.new("RGBA", cropped.size)
    final_img.paste(cropped_rgba, (0, 0), mask=mask)
    
    # Let's crop it even tighter to remove any fully transparent padding if any,
    # but the width is 0 to 632, which is already tight.
    # Let's save it!
    final_img.save(output_path, "PNG")
    print(f"Saved transparent statue medallion to: {output_path}")
    print(f"Dimensions: {final_img.size}")
