import os
from PIL import Image, ImageFilter

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")
output_path = os.path.join(public_dir, "scratch", "test_statue_640.jpg")

target_color = (11, 47, 31) # #0b2f1f

with Image.open(latest_path) as img:
    crop_x1, crop_y1 = 80, 180
    crop_x2, crop_y2 = 640, 876
    statue_raw = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    sw, sh = statue_raw.size
    pixels = statue_raw.load()
    
    binary = []
    for y in range(sh):
        row = []
        for x in range(sw):
            r, g, b = pixels[x, y][:3]
            is_foreground = not (r < 30 and g < 50 and b < 35)
            # Remove left border/vertical line artifacts
            if x < 135:
                is_foreground = False
            row.append(1 if is_foreground else 0)
        binary.append(row)
        
    visited = [[False for _ in range(sw)] for _ in range(sh)]
    components = []
    
    for y in range(sh):
        for x in range(sw):
            if binary[y][x] == 1 and not visited[y][x]:
                comp = []
                queue = [(x, y)]
                visited[y][x] = True
                while queue:
                    curr_x, curr_y = queue.pop(0)
                    comp.append((curr_x, curr_y))
                    for dx in [-1, 0, 1]:
                        for dy in [-1, 0, 1]:
                            nx, ny = curr_x + dx, curr_y + dy
                            if 0 <= nx < sw and 0 <= ny < sh:
                                if binary[ny][nx] == 1 and not visited[ny][nx]:
                                    visited[ny][nx] = True
                                    queue.append((nx, ny))
                components.append(comp)
                
    components.sort(key=len, reverse=True)
    
    # Fill mask with top 2 components (statue and dome)
    statue_mask = Image.new("L", (sw, sh), 0)
    mask_pixels = statue_mask.load()
    
    # Component 0: Statue
    for px, py in components[0]:
        mask_pixels[px, py] = 255
        
    # Component 1: Dome
    if len(components) > 1 and len(components[1]) > 1000:
        for px, py in components[1]:
            mask_pixels[px, py] = 255
            
    statue_mask_blurred = statue_mask.filter(ImageFilter.GaussianBlur(10))
    
    clean_statue = Image.new("RGB", (sw, sh), target_color)
    clean_statue.paste(statue_raw, (0, 0), mask=statue_mask_blurred)
    
    # Create final 736x736 image and center the sw x sh crop
    final_size = 736
    final_img = Image.new("RGB", (final_size, final_size), target_color)
    
    paste_x = (final_size - sw) // 2
    paste_y = (final_size - sh) // 2
    
    final_img.paste(clean_statue, (paste_x, paste_y))
    final_img.save(output_path, "JPEG", quality=95)
    print(f"Saved clean statue test to {output_path}")
