import os
import glob
import time

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
temp_media_dir = os.path.join(brain_dir, ".tempmediaStorage")

def list_recent_files(directory, pattern="*"):
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist")
        return
    print(f"=== Files in {directory} ===")
    files = glob.glob(os.path.join(directory, pattern))
    # Sort by modification time (most recent first)
    files.sort(key=os.path.getmtime, reverse=True)
    for f in files[:10]:
        mtime = time.ctime(os.path.getmtime(f))
        size = os.path.getsize(f)
        print(f" - {os.path.basename(f)}: size={size} bytes, mtime={mtime}")

list_recent_files(brain_dir, "media__*")
list_recent_files(temp_media_dir)
