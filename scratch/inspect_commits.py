import subprocess

commits = [
    "d9d9a71", "9f028cf", "0f801b1", "8cf8801", "b9c6c77", 
    "622fd9e", "bb183a3", "ff862ec", "f31f9a5", "7f0ba62"
]

for commit in commits:
    print(f"=== Files in Commit {commit} ===")
    cmd = ["git", "show", "--name-only", "--oneline", commit]
    res = subprocess.run(cmd, capture_output=True, text=True, cwd=r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare")
    lines = res.stdout.splitlines()
    if lines:
        print(lines[0]) # Commit message
        for line in lines[1:]:
            if any(ext in line.lower() for ext in [".png", ".jpg", ".jpeg", ".webp"]):
                print(f"  {line}")
    print("-" * 50)
