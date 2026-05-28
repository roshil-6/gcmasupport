import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

edits = []
with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            tool_calls = data.get("tool_calls", [])
            for tc in tool_calls:
                name = tc.get("name")
                if name in ("replace_file_content", "multi_replace_file_content", "write_to_file"):
                    args = tc.get("arguments", {})
                    target = args.get("TargetFile") or args.get("targetFile")
                    if target and ("Hero" in target or "globals.css" in target):
                        edits.append((data.get("step_index"), name, target, args))
        except Exception:
            pass

print("--- RECENT EDITS ---")
for step, name, target, args in edits[-5:]:
    print(f"Step {step}: {name} on {target}")
    # Print target content or description if any
    desc = args.get("Description") or args.get("description")
    print(f"  Description: {desc}")
    if "ReplacementChunks" in args:
        for chunk in args["ReplacementChunks"]:
            print(f"  Chunk Start: {chunk.get('StartLine')} End: {chunk.get('EndLine')}")
            print(f"    Target: {chunk.get('TargetContent')[:100]}...")
            print(f"    Replacement: {chunk.get('ReplacementContent')[:100]}...")
    elif "TargetContent" in args:
        print(f"  Target: {args.get('TargetContent')[:100]}...")
        print(f"  Replacement: {args.get('ReplacementContent')[:100]}...")
