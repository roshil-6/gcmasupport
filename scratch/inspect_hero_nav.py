with open(r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\components\Hero.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if "<nav" in line or "navClass" in line or "header" in line:
            print(f"Line {i+1}: {line.strip()}")
