import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

log_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
        except Exception:
            continue
        step = data.get("step_index", 0)
        if step == 22:
            print(json.dumps(data, indent=2))
            break
