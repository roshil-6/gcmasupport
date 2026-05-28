import json
import os

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    print(f"Total lines: {len(lines)}")
    for idx in range(max(0, len(lines) - 200), len(lines)):
        try:
            data = json.loads(lines[idx])
            source = data.get("source")
            type_val = data.get("type")
            if source == "MODEL" and type_val == "PLANNER_RESPONSE":
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    name = tc.get("name")
                    if name in ("replace_file_content", "multi_replace_file_content", "write_to_file"):
                        args = tc.get("args", {})
                        target = args.get("TargetFile") or args.get("Target")
                        print(f"[{idx}] Model edited: {target}")
                        print(f"    Instruction/Description: {args.get('Instruction') or args.get('Description')}")
        except Exception as e:
            pass
