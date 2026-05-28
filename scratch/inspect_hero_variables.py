import subprocess

commits = ["0053bd5", "f31f9a5", "7f0ba62"]

for commit in commits:
    print(f"=== Hero.tsx in {commit} ===")
    cmd = ["git", "show", f"{commit}:components/Hero.tsx"]
    res = subprocess.run(cmd, capture_output=True, text=True, cwd=r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare")
    lines = res.stdout.splitlines()
    # find lines with bgImage or desktopHeroTexture or similar
    for i, line in enumerate(lines):
        if "desktopHeroTexture" in line or "bgImage" in line or "candidates" in line or "const heroImage" in line:
            # print surrounding lines
            start = max(0, i-5)
            end = min(len(lines), i+10)
            for j in range(start, end):
                print(f"  {j+1}: {lines[j]}")
            print("...")
    print("-" * 50)
