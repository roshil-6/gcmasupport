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
        if 180 <= step <= 220:
            content = str(data)
            if "177947" in content:
                print(f"=== Step {step} ({data.get('source')}/{data.get('type')}) ===")
                if data.get("content"):
                    print(data.get("content")[:1000])
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    print(f"  Tool Call: {tc.get('name')}")
                    print(f"  Args: {json.dumps(tc.get('args'))[:500]}")
                print("-" * 55)
