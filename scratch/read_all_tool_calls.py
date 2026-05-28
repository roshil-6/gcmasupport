import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            tool_calls = data.get("tool_calls", [])
            # Also check if it's a step with tool calls or if the type is VIEW_FILE or REPLACE_FILE_CONTENT
            if tool_calls or data.get("type") in ("REPLACE_FILE_CONTENT", "WRITE_FILE", "MULTI_REPLACE_FILE_CONTENT"):
                print(f"Step {data.get('step_index')}: Type={data.get('type')}, Status={data.get('status')}")
                if tool_calls:
                    for tc in tool_calls:
                        print(f"  Tool: {tc.get('name')}, Args: {list(tc.get('arguments', {}).keys())}")
                        if "TargetFile" in tc.get("arguments", {}):
                            print(f"    TargetFile: {tc['arguments']['TargetFile']}")
                        if "targetFile" in tc.get("arguments", {}):
                            print(f"    targetFile: {tc['arguments']['targetFile']}")
        except Exception as e:
            pass
