import os
from PIL import Image, ImageDraw

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare"
latest_path = os.path.join(public_dir, "public", "home", "gcma-hero-latest.png")
output_dir = os.path.join(public_dir, "scratch")

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
    
    # Save a visualization where Component 0 is red and Component 1 is blue, other components are yellow
    vis_img = statue_raw.copy()
    vis_pixels = vis_img.load()
    
    for idx, comp in enumerate(components):
        if idx == 0:
            color = (255, 0, 0) # Component 0: Red
        elif idx == 1:
            color = (0, 0, 255) # Component 1: Blue
        else:
            color = (255, 255, 0) # Other: Yellow
            
        for px, py in comp:
            # blend the color slightly
            r, g, b = vis_pixels[px, py][:3]
            vis_pixels[px, py] = (int(0.5*r + 0.5*color[0]), int(0.5*g + 0.5*color[1]), int(0.5*b + 0.5*color[2]))
            
    vis_path = os.path.join(output_dir, "components_visualization.png")
    vis_img.save(vis_path)
    print(f"Saved visualization to {vis_path}")
