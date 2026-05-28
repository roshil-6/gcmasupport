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
        if step < 50:
            # print tool calls that write images or code setting images
            tool_calls = data.get("tool_calls", [])
            for tc in tool_calls:
                name = tc.get("name")
                args = tc.get("args", {})
                args_str = json.dumps(args)
                if "png" in args_str or "jpg" in args_str or "jpeg" in args_str:
                    print(f"=== Step {step} ({data.get('source')}/{data.get('type')}) ===")
                    print(f"  Tool Call: {name}")
                    print(f"  Args: {args_str[:500]}")
                    print("-" * 55)
