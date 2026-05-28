import json
import os

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if "gcma-hero-green-clean.png" in line:
            # Let's print the step index and a snippet of the line
            print(f"[{idx}] found: {line[:200]}")
            # If it has a tool call to write_to_file or run_command, print it
            try:
                data = json.loads(line)
                if data.get("tool_calls"):
                    print(f"    Tool Calls: {data['tool_calls']}")
            except:
                pass
