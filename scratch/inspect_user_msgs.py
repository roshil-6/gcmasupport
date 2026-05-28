import json
import os

log_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
        except Exception:
            continue
        
        # Look for user messages or any tool calls uploading media
        if data.get("type") == "USER_INPUT":
            print(f"=== Step {data.get('step_index')} ===")
            print(data.get("content"))
            print("-" * 40)
        
        # Let's also check for file creations of images
        tool_calls = data.get("tool_calls", [])
        if tool_calls:
            for tc in tool_calls:
                if tc.get("name") == "write_to_file":
                    args = tc.get("args", {})
                    tgt = args.get("TargetFile", "")
                    if any(ext in tgt.lower() for ext in [".jpg", ".png", ".webp"]):
                        print(f"File created in step {data.get('step_index')}: {tgt}")
