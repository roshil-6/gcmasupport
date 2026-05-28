import json

transcript_path = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get('step_index')
            if step is not None and 210 <= step <= 230:
                print(f"Step {step} ({data.get('type')}):")
                print(f"Content: {data.get('content', '')[:1000]}")
                print("="*60)
        except Exception as e:
            pass
