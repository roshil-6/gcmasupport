import json
import os
import re

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if "media__" in line or "tempmediaStorage" in line or ".png" in line or ".jpg" in line:
            # Print matching part
            matches = re.findall(r'[\w\\/\.:_ -]+\.(?:png|jpg|jpeg)', line)
            if matches:
                print(f"[{idx}]: {matches}")
