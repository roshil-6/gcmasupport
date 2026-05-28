import subprocess
import re

# Get all git commits for components/Hero.tsx
cmd = ["git", "log", "-p", "--", "components/Hero.tsx"]
result = subprocess.run(cmd, capture_output=True, text=True, cwd=r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare")

found_images = set()

# Regex to match image paths (anything starting with / or /home or containing .jpg/.png)
img_regex = re.compile(r"['\"](/[^'\"]+\.(?:jpg|png|jpeg|webp))['\"]", re.IGNORECASE)

for line in result.stdout.splitlines():
    # Find image paths in additions or context lines
    if line.startswith("+") or line.startswith(" ") or "desktopHeroTexture" in line or "bgImage" in line or "candidates" in line:
        matches = img_regex.findall(line)
        for m in matches:
            found_images.add(m)

print("Found image paths in Hero.tsx history:")
for img in sorted(found_images):
    print(f" - {img}")
