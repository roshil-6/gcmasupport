import json
import re

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"

color_patterns = re.compile(r"#[0-9a-fA-F]{6}")

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get("step_index")
            content = data.get("content") or ""
            tool_calls = data.get("tool_calls", [])
            
            # Check content or tool call arguments for hex colors
            matches = color_patterns.findall(content)
            for tc in tool_calls:
                matches.extend(color_patterns.findall(json.dumps(tc)))
                
            if matches:
                # Filter to unique matches to reduce spam
                unique_matches = list(set(matches))
                # Only log steps that modified or checked these color codes
                if any(c in ["#0b2f1f", "#02140a", "#051e11", "#0e3221", "#0f2418", "#123c26"] for c in unique_matches):
                    print(f"Step {step}: type={data.get('type')} colors={unique_matches}")
        except Exception:
            pass
