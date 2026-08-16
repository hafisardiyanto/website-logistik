const fs = require('fs');
const path = require('path');

const dirPath = 'C:\\laragon\\www\\website logistik\\src';

const pattern1 = /(font-size:\s*)(\d+)(px)/g;
const pattern2 = /(font:\s*(?:[^:;]*?\s+)?)(\d+)(px)/g;

function bumpPx(match, prefix, val, suffix) {
    let newVal = parseInt(val, 10) + 4;
    return `${prefix}${newVal}${suffix}`;
}

let changedFiles = 0;

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.vue') || file.endsWith('.css')) {
            const content = fs.readFileSync(filePath, 'utf-8');
            let c = content.replace(pattern1, bumpPx);
            c = c.replace(pattern2, bumpPx);

            if (c !== content) {
                fs.writeFileSync(filePath, c, 'utf-8');
                console.log(`Updated font in ${file}`);
                changedFiles++;
            }
        }
    }
}

walk(dirPath);
console.log(`Done. ${changedFiles} files were updated.`);
