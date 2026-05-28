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
    
    binary = []
    for y in range(sh):
        row = []
        for x in range(sw):
            r, g, b = pixels[x, y][:3]
            is_foreground = not (r < 30 and g < 50 and b < 35)
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
    
    comp1 = components[1]
    xs = [p[0] for p in comp1]
    ys = [p[1] for p in comp1]
    print(f"Component 1 size: {len(comp1)}")
    print(f"X range: {min(xs)} to {max(xs)}")
    print(f"Y range: {min(ys)} to {max(ys)}")
    
    # Let's count pixels at each x coordinate in Component 1
    x_counts = {}
    for px, py in comp1:
        x_counts[px] = x_counts.get(px, 0) + 1
        
    # Print the coordinates of pixels in Component 1 that are on the far left (x < 150)
    left_pixels = [p for p in comp1 if p[0] < 150]
    print(f"Number of pixels in Component 1 with x < 150: {len(left_pixels)}")
    if left_pixels:
        print("Sample left pixels (x, y):", left_pixels[:20])
        # Y range of these left pixels
        left_ys = [p[1] for p in left_pixels]
        print(f"Left pixels Y range: {min(left_ys)} to {max(left_ys)}")
