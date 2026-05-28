import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get("step_index")
            if step and step >= 1540:
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    name = tc.get("name")
                    if name in ("replace_file_content", "multi_replace_file_content", "write_to_file"):
                        print(f"\n--- Step {step} Tool: {name} ---")
                        args = tc.get("args", {})
                        for k, v in args.items():
                            if k in ("TargetFile", "TargetContent", "ReplacementContent", "ReplacementChunks", "CodeContent", "Instruction", "Description"):
                                print(f"  {k}: {repr(v)[:150]}")
        except Exception as e:
            pass
