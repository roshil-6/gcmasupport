import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get("step_index")
            if step in (1546, 1549, 1557):
                print(f"Step {step} Raw keys:", list(data.keys()))
                print(json.dumps(data, indent=2))
                break
        except Exception:
            pass
