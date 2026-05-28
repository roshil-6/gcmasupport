import os
import glob
import hashlib

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
home_dir = r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public\home"

def file_hash(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        h.update(f.read())
    return h.hexdigest()

brain_hashes = {}
for f in glob.glob(os.path.join(brain_dir, "media__*")):
    name = os.path.basename(f)
    brain_hashes[file_hash(f)] = name

home_hashes = {}
for f in glob.glob(os.path.join(home_dir, "*")):
    name = os.path.basename(f)
    if os.path.isfile(f):
        home_hashes[file_hash(f)] = name

print("Matches between public/home/ and brain uploads:")
for h, brain_name in brain_hashes.items():
    if h in home_hashes:
        print(f" - {brain_name} matches public/home/{home_hashes[h]}")
    else:
        # Check if file size matches
        size = os.path.getsize(os.path.join(brain_dir, brain_name))
        print(f" - {brain_name} (size={size}) - no direct hash match in public/home")
