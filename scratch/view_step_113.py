import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if idx >= 110 and idx <= 118:
            try:
                data = json.loads(line)
                print(f"\n--- Line {idx} (Step {data.get('step_index')}) ---")
                print(json.dumps(data, indent=2))
            except Exception as e:
                pass
