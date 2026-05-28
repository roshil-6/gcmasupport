import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

if os.path.exists(transcript_path):
    print("--- User Inputs ---")
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            try:
                data = json.loads(line)
                if data.get("type") == "USER_INPUT":
                    content = data.get("content", "")
                    print(f"\n[Step {data.get('step_index')}]")
                    print(content)
            except Exception as e:
                pass
else:
    print("Transcript not found")
