import os
import glob
from datetime import datetime

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
files = glob.glob(os.path.join(brain_dir, "*"))

print("Files in brain directory:")
for f in files:
    if os.path.isfile(f):
        mtime = os.path.getmtime(f)
        dt = datetime.fromtimestamp(mtime)
        print(f"  {os.path.basename(f)} - {os.path.getsize(f)} bytes - {dt.isoformat()}")

temp_dir = os.path.join(brain_dir, ".tempmediaStorage")
if os.path.exists(temp_dir):
    print("Files in .tempmediaStorage:")
    for f in glob.glob(os.path.join(temp_dir, "*")):
        mtime = os.path.getmtime(f)
        dt = datetime.fromtimestamp(mtime)
        print(f"  {os.path.basename(f)} - {os.path.getsize(f)} bytes - {dt.isoformat()}")
