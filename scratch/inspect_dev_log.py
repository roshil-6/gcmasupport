import os

log_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\tasks\task-5477.log"

if os.path.exists(log_path):
    with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()
        print("=== Dev Server Log Ends ===")
        for line in lines[-50:]:
            print(line.strip())
else:
    print(f"Log path does not exist: {log_path}")
