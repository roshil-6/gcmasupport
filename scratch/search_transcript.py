import os
import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

def search_keywords(keywords):
    if not os.path.exists(transcript_path):
        print("Transcript file not found!")
        return

    print(f"Searching for keywords: {keywords}")
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            try:
                data = json.loads(line)
                content = data.get("content", "")
                # check if any keyword is in content
                found = [kw for kw in keywords if kw.lower() in content.lower()]
                if found:
                    print(f"\n--- Line {idx} (found: {found}) ---")
                    print(f"Source: {data.get('source')}, Type: {data.get('type')}")
                    # print content around it
                    print(content[:500] + ("..." if len(content) > 500 else ""))
            except Exception as e:
                pass

search_keywords(["white hero", "poster", "logo_statue", "media__1779474806240"])
