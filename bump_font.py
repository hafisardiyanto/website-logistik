import os
import re

dir_path = r"c:\laragon\www\website logistik\src"

def bump_px(match):
    prefix = match.group(1)
    val = int(match.group(2))
    suffix = match.group(3)
    return f"{prefix}{val+4}{suffix}"

# Match font-size: 14px or font-size:14px
pattern1 = re.compile(r'(font-size:\s*)(\d+)(px)')
# Match font: 800 62px or font: 62px or font: italic 400 12px
pattern2 = re.compile(r'(font:\s*(?:[^:;]*?\s+)?)(\d+)(px)')

changed_files = 0

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.vue') or file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            c = pattern1.sub(bump_px, content)
            c = pattern2.sub(bump_px, c)
            
            if c != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(c)
                print(f"Updated font in {file}")
                changed_files += 1

print(f"\nDone. {changed_files} files were updated.")
