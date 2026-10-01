import fs from 'fs';
import path from 'path';

const vueDir = './src/components';
const assetsDir = './src/assets';

const styleBlockRe = /<style scoped>([\s\S]*?)<\/style>/g;
const emptyStyleRe = /<style scoped>\s*<\/style>/g;

fs.readdirSync(vueDir).forEach(file => {
    if (file.endsWith('.vue')) {
        const vuePath = path.join(vueDir, file);
        let content = fs.readFileSync(vuePath, 'utf8');

        // check if it has <style scoped> blocks (we want everything except the ones with src, actually the regex only catches `<style scoped>`)
        let match;
        let blocks = [];
        let modified = false;

        while ((match = styleBlockRe.exec(content)) !== null) {
            blocks.push(match[1]);
            modified = true;
        }

        if (modified && blocks.length > 0) {
            let cssToAppend = blocks.join('\n').trim();
            if (cssToAppend) {
                const cssFile = file.replace('.vue', '.css');
                const cssPath = path.join(assetsDir, cssFile);

                if (!fs.existsSync(cssPath)) {
                    fs.writeFileSync(cssPath, '/* Extracted styles */\n\n');
                }

                fs.appendFileSync(cssPath, `\n${cssToAppend}\n`);
                console.log(`Extracted styles from ${file} to ${cssFile}`);
            }

            // Remove the exact block
            content = content.replace(styleBlockRe, '');
            content = content.replace(emptyStyleRe, '');
            fs.writeFileSync(vuePath, content, 'utf8');
        }
    }
});

// App.vue
const appPath = './src/App.vue';
if (fs.existsSync(appPath)) {
    let content = fs.readFileSync(appPath, 'utf8');
    const appStyleRe = /<style>([\s\S]*?)<\/style>/g;

    let blocks = [];
    let match;
    while ((match = appStyleRe.exec(content)) !== null) {
        blocks.push(match[1]);
    }

    if (blocks.length > 0) {
        const cssToAppend = blocks.join('\n').trim();
        const cssPath = path.join(assetsDir, 'main.css');
        fs.appendFileSync(cssPath, `\n/* Extracted from App.vue */\n${cssToAppend}\n`);
        content = content.replace(appStyleRe, '');
        fs.writeFileSync(appPath, content, 'utf8');
        console.log("Extracted styles from App.vue to main.css");
    }
}
