import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

def find_raw_occurrences(name):
    print(f"\n===== RAW SEARCH FOR {name} =====")
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            if name in line:
                try:
                    data = json.loads(line)
                    print(f"Line {idx} (Step {data.get('step_index')}) - Source: {data.get('source')}, Type: {data.get('type')}")
                    # Print keys and first level values
                    for k, v in data.items():
                        if k != "content" and k != "tool_calls":
                            print(f"  {k}: {v}")
                    if "content" in data:
                        # Print if it contains the name, otherwise first 100 chars
                        content = data["content"]
                        if name in content:
                            print(f"  content: {content}")
                        else:
                            print(f"  content (truncated): {content[:150]}")
                except Exception as e:
                    print(f"Line {idx}: raw contains name but failed to parse: {e}")

find_raw_occurrences("media__1779474272288")
find_raw_occurrences("media__1779474806240")
find_raw_occurrences("media__1779480722719")
find_raw_occurrences("media__1779485334744")
find_raw_occurrences("media__1779659889479")
