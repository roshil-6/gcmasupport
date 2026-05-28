import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

if os.path.exists(transcript_path):
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx in range(200):
            try:
                line = f.readline()
                data = json.loads(line)
                source = data.get("source")
                type_ = data.get("type")
                if source == "USER_EXPLICIT" or (source == "MODEL" and type_ == "PLANNER_RESPONSE"):
                    print(f"Line {idx} (Step {data.get('step_index')}) - Source: {source}, Type: {type_}")
                    print(f"  content: {data.get('content')}")
            except Exception as e:
                pass
