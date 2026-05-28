import os
import json
import re

transcript_path = r"C:\Users\Abhinand Antony\Desktop\gcma & social welfare\.system_generated\logs\transcript.jsonl"
if not os.path.exists(transcript_path):
    # Try parent directory appDataDir style
    transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

print("Scanning transcript for media files...")
media_files = set()
with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        try:
            data = json.loads(line)
            content = str(data)
            matches = re.findall(r'media__[0-9]+(?:\.[a-zA-Z0-9]+)?', content)
            for m in matches:
                media_files.add(m)
        except Exception as e:
            pass

print("Found media files:", sorted(list(media_files)))
