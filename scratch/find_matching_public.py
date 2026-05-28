import os
import glob
import hashlib

brain_dir = r"C:\Users\Abhinand Antony\.gemini\antigravity\brain\5b09cc32-a542-4cdd-ae91-672e35f96f9c"
target_file = os.path.join(brain_dir, "media__1779906083109.jpg")

if not os.path.exists(target_file):
    print(f"Target file does not exist: {target_file}")
    sys.exit(1)

def file_hash(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        h.update(f.read())
    return h.hexdigest()

target_h = file_hash(target_file)
target_size = os.path.getsize(target_file)
print(f"Target file size: {target_size} bytes, hash: {target_h}")

found = False

# Search in public/ and subdirectories
for root, dirs, files in os.walk(r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"):
    for file in files:
        full_path = os.path.join(root, file)
        size = os.path.getsize(full_path)
        if size == target_size:
            h = file_hash(full_path)
            if h == target_h:
                print(f"Match found! File is already at: public/{os.path.relpath(full_path, r'c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public')}")
                found = True
                break

if not found:
    print("No matching file found in public/ directory by hash. Checking for similar file sizes...")
    for root, dirs, files in os.walk(r"c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public"):
        for file in files:
            full_path = os.path.join(root, file)
            size = os.path.getsize(full_path)
            # If size is within 5% tolerance
            if abs(size - target_size) / target_size < 0.05:
                print(f" - Similar size found: public/{os.path.relpath(full_path, r'c:\Users\Abhinand Antony\Desktop\gcma & social welfare\public')} (size={size})")
