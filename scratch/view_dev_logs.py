import os

log_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\tasks\task-1714.log"

if os.path.exists(log_path):
    with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()
        print(f"Total lines in dev server log: {len(lines)}")
        print("--- LAST 100 LINES ---")
        for line in lines[-100:]:
            print(line.encode('ascii', 'ignore').decode('ascii'), end="")
else:
    print("Log file not found.")
