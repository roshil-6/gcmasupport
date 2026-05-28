import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

def find_media_usage(name):
    print(f"\n===== SEARCHING FOR {name} =====")
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            try:
                data = json.loads(line)
                # search in content
                content = data.get("content", "")
                if name in content:
                    print(f"Line {idx} (Step {data.get('step_index')}) - Source: {data.get('source')}, Type: {data.get('type')}")
                    print(f"Content: {content[:1000]}")
                    print("-" * 50)
                # also search in tool_calls
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    tc_str = str(tc)
                    if name in tc_str:
                        print(f"Line {idx} (Step {data.get('step_index')}) - Tool Call: {tc.get('name')}")
                        print(f"Args: {str(tc.get('args'))[:1000]}")
                        print("-" * 50)
            except Exception as e:
                pass

find_media_usage("media__1779474272288")
find_media_usage("media__1779474806240")
find_media_usage("media__1779480722719")
find_media_usage("media__1779485334744")
find_media_usage("media__1779659889479")
