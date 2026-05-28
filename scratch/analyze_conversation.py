import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

history = []
with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get("step_index")
            if step and 1440 <= step <= 1530:
                history.append(data)
        except Exception:
            pass

print("--- CONVERSATION HISTORY ---")
for step_data in history:
    step = step_data.get("step_index")
    source = step_data.get("source")
    type_ = step_data.get("type")
    content = step_data.get("content") or ""
    
    if source == "USER_EXPLICIT" or type_ == "USER_INPUT":
        print(f"\n[Step {step}] USER:")
        print(content.strip())
    elif source == "MODEL" and type_ == "PLANNER_RESPONSE":
        # Check if model did some planning or code edits
        print(f"\n[Step {step}] MODEL PLANNER:")
        lines = content.split("\n")
        # print first 5 lines of model response
        for line in lines[:6]:
            print("  " + line)
        if len(lines) > 6:
            print("  ...")
