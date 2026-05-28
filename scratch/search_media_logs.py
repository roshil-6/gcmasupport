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
        content = data.get("content", "")
        # search for media or upload references
        if "1779659" in content or "177947" in content or "1779659889479" in content:
            print(f"=== Step {data.get('step_index')} ===")
            print(content[:1000])
            print("-" * 55)
