import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get("step_index")
            content = data.get("content") or ""
            # Check if interactive or click is in content
            if "interactive" in content.lower() or "interact" in content.lower() or "click" in content.lower():
                print(f"Step {step}: type={data.get('type')}, source={data.get('source')}")
                print(f"  Content snippet: {content[:200].strip()}")
        except Exception:
            pass
