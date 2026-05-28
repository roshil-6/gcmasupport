with open(r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\app\globals.css", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find background colors, body styles, or hero-related classes
lines = content.splitlines()
for i, line in enumerate(lines):
    if "background" in line.lower() or "body" in line.lower() or "hero" in line.lower() or "#f9" in line.lower() or "#fff" in line.lower():
        print(f"Line {i+1}: {line.strip()}")
