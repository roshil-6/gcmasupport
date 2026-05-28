import json
import os

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if "gcma-hero-latest.png" in line:
            print(f"[{idx}] found: {line[:200]}")
            try:
                data = json.loads(line)
                if data.get("tool_calls"):
                    print(f"    Tool Calls: {data['tool_calls']}")
            except:
                pass
