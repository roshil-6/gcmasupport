from PIL import Image
import os

path = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home\gcma-hero-white.jpg"

if not os.path.exists(path):
    print(f"Error: {path} does not exist!")
else:
    with Image.open(path) as img:
        w, h = img.size
        print(f"Original size of poster: {w}x{h}")
        
        # We want to add 80 pixels of white padding at the top.
        # Let's create a new canvas of size w x (h + 80) with a solid white background
        new_h = h + 80
        new_img = Image.new("RGB", (w, new_h), (255, 255, 255))
        
        # Paste the original image onto the new canvas shifted down by 80 pixels
        new_img.paste(img, (0, 80))
        
        # Save the new padded image back to the same path
        new_img.save(path)
        print(f"Saved padded poster to {path} with new size: {new_img.size}")
