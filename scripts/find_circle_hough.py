import os
import math
from PIL import Image

public_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"
hero_path = os.path.join(public_dir, "home", "gcma-hero-latest.png")

with Image.open(hero_path) as img:
    width, height = img.size
    
    # Let's find the circular gold ring.
    # The gold ring is a thin circle.
    # Let's find pixels that are "ring-like" (gold, and not part of the statue interior if possible, but the ring itself is very distinct).
    # The ring has a gold color. Let's define a gold mask.
    # Gold: R > 150, G > 120, B < 120.
    gold_pixels = []
    for y in range(50, height - 50, 2):
        for x in range(50, 600, 2):
            r, g, b = img.getpixel((x, y))
            if r > 160 and g > 130 and b < 100:
                gold_pixels.append((x, y))
                
    # Now let's fit a circle (cx, cy, r) to these gold pixels using RANSAC or a simple voting scheme.
    # Since the ring is a circle, many points will lie on it.
    # Let's do a simple voting:
    votes = {}
    # Let's search cx in [200, 450] (step 2), cy in [450, 570] (step 2), r in [280, 400] (step 2)
    # To make it fast, we can sample 200 random gold pixels and vote.
    import random
    random.seed(42)
    sample_pixels = random.sample(gold_pixels, min(len(gold_pixels), 1000))
    
    best_circle = None
    max_votes = 0
    
    # We can also do a grid search on (cx, cy, r) and count how many gold pixels are close to the perimeter.
    # Let's define "close to perimeter": |sqrt((x-cx)^2 + (y-cy)^2) - r| < 4
    for cx in range(250, 350, 5):
        for cy in range(450, 550, 5):
            for r in range(300, 400, 5):
                count = 0
                for px, py in sample_pixels:
                    dist = math.sqrt((px - cx)**2 + (py - cy)**2)
                    if abs(dist - r) < 6:
                        count += 1
                if count > max_votes:
                    max_votes = count
                    best_circle = (cx, cy, r)
                    
    print(f"Coarse search: cx={best_circle[0]}, cy={best_circle[1]}, r={best_circle[2]} with {max_votes} votes")
    
    # Fine search around the coarse result
    cx_coarse, cy_coarse, r_coarse = best_circle
    best_circle_fine = None
    max_votes_fine = 0
    for cx in range(cx_coarse - 8, cx_coarse + 8):
        for cy in range(cy_coarse - 8, cy_coarse + 8):
            for r in range(r_coarse - 8, r_coarse + 8):
                count = 0
                for px, py in sample_pixels:
                    dist = math.sqrt((px - cx)**2 + (py - cy)**2)
                    if abs(dist - r) < 3:
                        count += 1
                if count > max_votes_fine:
                    max_votes_fine = count
                    best_circle_fine = (cx, cy, r)
                    
    print(f"Fine search: cx={best_circle_fine[0]}, cy={best_circle_fine[1]}, r={best_circle_fine[2]} with {max_votes_fine} votes")
