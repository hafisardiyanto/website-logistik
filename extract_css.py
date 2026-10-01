import os
import re

vue_dir = 'src/components'
assets_dir = 'src/assets'

# regex to find <style scoped> blocks that contain css (not src)
style_block_re = re.compile(r'<style scoped>\n(.*?)\n</style>', re.DOTALL)
empty_style_re = re.compile(r'<style scoped>\s*</style>', re.DOTALL)

for file in os.listdir(vue_dir):
    if file.endswith('.vue'):
        vue_path = os.path.join(vue_dir, file)
        
        with open(vue_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if it has a style scoped without src
        if '<style scoped>' in content and not content.startswith('<style src='):
            blocks = style_block_re.findall(content)
            
            if blocks:
                css_to_append = "\n".join(blocks).strip()
                if not css_to_append:
                    continue
                
                # Append to corresponding css file
                css_file = file.replace('.vue', '.css')
                css_path = os.path.join(assets_dir, css_file)
                
                if not os.path.exists(css_path):
                    with open(css_path, 'w', encoding='utf-8') as cf:
                        cf.write("/* Extracted styles */\n")
                        
                with open(css_path, 'a', encoding='utf-8') as cf:
                    cf.write("\n" + css_to_append + "\n")
                
                # Remove the generic <style scoped> block from content
                # But leave the ones with src if any exist out of this match
                new_content = style_block_re.sub('', content)
                new_content = empty_style_re.sub('', new_content)
                
                with open(vue_path, 'w', encoding='utf-8') as vf:
                    vf.write(new_content)
                
                print(f"Extracted styles from {file} to {css_file}")

# Do the same for App.vue
app_path = 'src/App.vue'
if os.path.exists(app_path):
    with open(app_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    style_re_app = re.compile(r'<style>\n(.*?)\n</style>', re.DOTALL)
    blocks = style_re_app.findall(content)
    if blocks:
        css = "\n".join(blocks).strip()
        css_path = os.path.join(assets_dir, 'main.css') # or App.css
        with open(css_path, 'a', encoding='utf-8') as cf:
            cf.write("\n/* Extracted from App.vue */\n" + css + "\n")
        new_content = style_re_app.sub('', content)
        with open(app_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Extracted styles from App.vue to main.css")
