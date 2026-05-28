import os
import math
from PIL import Image, ImageFilter

public_dir = r"public/home"
latest_path = os.path.join(public_dir, 'gcma-hero-latest.png')
seamless_path = os.path.join(public_dir, 'gcma-hero-green-seamless.png')
statue_cropped_path = os.path.join(public_dir, 'gcma-hero-green-statue-cropped.jpg')

target_color = (11, 47, 31) # #0b2f1f (Rich dark forest green)

# 1. Process Desktop Seamless Image
print("Processing desktop image with smooth mathematical transition and BFS color keying...")
with Image.open(latest_path) as img:
    w, h = img.size
    cx, cy = 254, 528
    
    # We take a clean vertical slice between the statue and the text
    # to composite a split-free background
    slice_x1, slice_x2 = 630, 730
    bg_slice = img.crop((slice_x1, 0, slice_x2, h))
    
    # Resize the clean slice to cover the entire width of the image
    img_bg = bg_slice.resize((w, h), Image.Resampling.LANCZOS)
    
    img_clean = img.copy()
    pixels_clean = img_clean.load()
    pixels_orig = img.load()
    pixels_bg = img_bg.load()
    
    blend_start = 300
    blend_end = 900

    def get_bg_color(x, bg_rgb):
        # Calculate right-side color (floral pattern dimmed by 15%)
        right_col = (
            int(0.85 * bg_rgb[0] + 0.15 * target_color[0]),
            int(0.85 * bg_rgb[1] + 0.15 * target_color[1]),
            int(0.85 * bg_rgb[2] + 0.15 * target_color[2])
        )
        if x < blend_start:
            return target_color
        elif x > blend_end:
            return right_col
        else:
            # Smooth horizontal interpolation of the background layer
            factor = (x - blend_start) / (blend_end - blend_start)
            return (
                int((1.0 - factor) * target_color[0] + factor * right_col[0]),
                int((1.0 - factor) * target_color[1] + factor * right_col[1]),
                int((1.0 - factor) * target_color[2] + factor * right_col[2])
            )

    # BFS color keying to isolate the statue foreground
    print("Generating statue mask using connected-component background separation...")
    is_fg = [[True for _ in range(w)] for _ in range(h)]
    is_bg_candidate = [[False for _ in range(w)] for _ in range(h)]
    for y in range(h):
        for x in range(w):
            r, g, b = pixels_orig[x, y][:3]
            # Dark green background threshold
            if r < 18 and g < 38 and b < 22:
                is_bg_candidate[y][x] = True
                
    queue = []
    visited = [[False for _ in range(w)] for _ in range(h)]
    
    # Seed from borders (within the x < 600 statue zone)
    for y in range(h):
        if is_bg_candidate[y][0]:
            queue.append((0, y))
            visited[y][0] = True
        if is_bg_candidate[y][599]:
            queue.append((599, y))
            visited[y][599] = True
            
    for x in range(600):
        if is_bg_candidate[0][x] and not visited[0][x]:
            queue.append((x, 0))
            visited[0][x] = True
        if is_bg_candidate[h-1][x] and not visited[h-1][x]:
            queue.append((x, h-1))
            visited[h-1][x] = True
            
    # Seed from inside the circle (known background coordinates)
    seed_points = [(254, 300), (254, 200), (100, 300), (400, 300)]
    for sx, sy in seed_points:
        if is_bg_candidate[sy][sx] and not visited[sy][sx]:
            queue.append((sx, sy))
            visited[sy][sx] = True
            
    # Run BFS
    while queue:
        cx_pixel, cy_pixel = queue.pop(0)
        is_fg[cy_pixel][cx_pixel] = False
        
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx_pixel + dx, cy_pixel + dy
            if 0 <= nx < 600 and 0 <= ny < h:
                if is_bg_candidate[ny][nx] and not visited[ny][nx]:
                    visited[ny][nx] = True
                    queue.append((nx, ny))
                    
    # Create PIL Image mask and apply Gaussian blur for feathering
    mask_img = Image.new("L", (w, h), 0)
    mask_pixels = mask_img.load()
    for y in range(h):
        for x in range(w):
            if x < 600 and is_fg[y][x]:
                mask_pixels[x, y] = 255
                
    # Smooth the mask (GaussianBlur 4 pixels creates a perfect soft edge)
    mask_smooth = mask_img.filter(ImageFilter.GaussianBlur(4))
    mask_smooth_pixels = mask_smooth.load()
    
    # Composite the statue onto the seamless background
    for y in range(h):
        for x in range(w):
            orig_rgb = pixels_orig[x, y][:3]
            bg_rgb = pixels_bg[x, y][:3]
            
            bg_col = get_bg_color(x, bg_rgb)
            
            # Blend opacity based on mask and radial fade (to ensure mask doesn't leak on the right)
            dx = x - cx
            dy = y - cy
            d = math.sqrt(dx*dx + dy*dy)
            
            if d <= 280:
                radial_fade = 1.0
            elif d >= 360:
                radial_fade = 0.0
            else:
                radial_fade = 1.0 - (d - 280) / (360 - 280)
                
            opacity = (mask_smooth_pixels[x, y] / 255.0) * radial_fade
            
            pixels_clean[x, y] = (
                int(opacity * orig_rgb[0] + (1.0 - opacity) * bg_col[0]),
                int(opacity * orig_rgb[1] + (1.0 - opacity) * bg_col[1]),
                int(opacity * orig_rgb[2] + (1.0 - opacity) * bg_col[2])
            )
            
    img_clean.save(seamless_path)
    print("Saved desktop image to", seamless_path)

# 2. Process Mobile Statue Image
print("Processing mobile image...")
with Image.open(seamless_path) as img:
    w, h = img.size
    crop_size = 736
    crop_x1 = max(0, cx - crop_size // 2)
    crop_y1 = max(0, cy - crop_size // 2)
    crop_x2 = crop_x1 + crop_size
    crop_y2 = crop_y1 + crop_size
    
    statue_crop = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    cw, ch = statue_crop.size
    ccx, ccy = cx - crop_x1, cy - crop_y1
    
    pixels_m = statue_crop.load()
    
    for y in range(ch):
        for x in range(cw):
            dx = x - ccx
            dy = y - ccy
            d = math.sqrt(dx*dx + dy*dy)
            
            if d >= 340:
                pixels_m[x, y] = target_color
            elif d > 250:
                factor = (d - 250) / (340 - 250)
                r, g, b = pixels_m[x, y][:3]
                pixels_m[x, y] = (
                    int((1.0 - factor) * r + factor * target_color[0]),
                    int((1.0 - factor) * g + factor * target_color[1]),
                    int((1.0 - factor) * b + factor * target_color[2])
                )
                
    statue_crop.save(statue_cropped_path, "JPEG", quality=95)
    print("Saved mobile image to", statue_cropped_path)
