import json

log_file = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c\.system_generated\logs\transcript.jsonl"
out_file = r"C:\Users\Abhinand Antony\Desktop\gcma & social welfare\scratch\step_1544_code.py"

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step = data.get("step_index")
            if step == 1544:
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    if tc.get("name") == "run_command":
                        cmd = tc.get("args", {}).get("CommandLine") or tc.get("args", {}).get("commandLine") or ""
                        # Strip the python -c " ... " wrapper
                        if cmd.startswith("python -c \"") and cmd.endswith("\""):
                            code = cmd[11:-1].replace("\\n", "\n").replace('\\"', '"').replace("\\'", "'")
                        else:
                            code = cmd
                        with open(out_file, "w", encoding="utf-8") as out:
                            out.write(code)
                        print("Saved to", out_file)
        except Exception as e:
            print("Error:", e)
