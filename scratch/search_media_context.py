import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

def check_media(names):
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            try:
                data = json.loads(line)
                content = str(data)
                for name in names:
                    if name in content:
                        print(f"\n--- Line {idx} (contains {name}) ---")
                        print(f"Source: {data.get('source')}, Type: {data.get('type')}")
                        if "content" in data:
                            print("Content:", data["content"][:600])
                        if "tool_calls" in data:
                            print("Tool calls:", str(data["tool_calls"])[:600])
            except Exception as e:
                pass

check_media(["media__1779474272288", "media__1779474806240", "media__1779480272369", "media__1779480722719", "media__1779485334744"])
