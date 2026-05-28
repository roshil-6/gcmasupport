import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

def find_raw_occurrences(name):
    print(f"\n===== RAW SEARCH FOR {name} =====")
    count = 0
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            if name in line:
                # Skip if it is step_index > 5000 (our current work) to find original uploads
                try:
                    data = json.loads(line)
                    step = data.get('step_index', 0)
                    if step > 5000:
                        continue
                    print(f"Line {idx} (Step {step}) - Source: {data.get('source')}, Type: {data.get('type')}")
                    if "content" in data:
                        content = data["content"]
                        print(f"  content: {content[:300]}...")
                    count += 1
                    if count >= 3:
                        break
                except Exception as e:
                    pass

find_raw_occurrences("media__1779474272288")
find_raw_occurrences("media__1779474806240")
find_raw_occurrences("media__1779480272369")
find_raw_occurrences("media__1779480722719")
find_raw_occurrences("media__1779485334744")
find_raw_occurrences("media__1779659889479")
