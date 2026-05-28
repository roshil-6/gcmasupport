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
        if not content:
            continue
            
        step = data.get("step_index", 0)
        
        # Check if user input contains poster, hero, or image keywords
        if data.get("type") == "USER_INPUT":
            lower_content = content.lower()
            if any(k in lower_content for k in ["poster", "hero", "image", "media__"]):
                print(f"=== Step {step} (USER_INPUT) ===")
                print(content.strip())
                print("-" * 55)
                
        # Let's also look for assistant's plans or decisions mentioning "first poster"
        elif "first poster" in content.lower() or "old white hero" in content.lower():
            print(f"=== Step {step} ({data.get('source')}/{data.get('type')}) ===")
            print(content[:500].strip())
            print("-" * 55)
