import os
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
latest_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")

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
    
    for i, c in enumerate(components[:5]):
        xs = [p[0] for p in c]
        ys = [p[1] for p in c]
        min_x, max_x = min(xs), max(xs)
        min_y, max_y = min(ys), max(ys)
        ccx = sum(xs) / len(c)
        ccy = sum(ys) / len(c)
        print(f"Component {i}: size={len(c)}, bbox=({min_x}, {min_y}) -> ({max_x}, {max_y}), center=({ccx:.1f}, {ccy:.1f})")
