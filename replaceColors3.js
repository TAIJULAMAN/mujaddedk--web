const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/bg-\[\#3478F6\]/gi, 'bg-primary')
    .replace(/text-\[\#3478F6\]/gi, 'text-primary')
    .replace(/from-\[\#3478F6\]/gi, 'from-primary')
    .replace(/border-\[\#3478F6\]/gi, 'border-primary')
    .replace(/shadow-\[0_0_15px_rgba\(52,120,246,0\.8\)\]/gi, 'shadow-primary/80')
    .replace(/shadow-\[0_10px_20px_rgba\(52,120,246,0\.1\)\]/gi, 'shadow-primary/10')
    .replace(/bg-\[\#FF5DB1\]/gi, 'bg-accent')
    .replace(/from-\[\#FF5DB1\]/gi, 'from-accent')
    .replace(/shadow-\[0_0_15px_rgba\(255,93,177,0\.8\)\]/gi, 'shadow-accent/80')
    .replace(/shadow-\[0_0_8px_\#FF5DB1\]/gi, 'shadow-accent')
    .replace(/text-\[\#080E23\]/gi, 'text-chromeDark')
    .replace(/bg-\[\#080E23\]/gi, 'bg-chromeDark')
    .replace(/bg-\[\#E6F6EC\]\/80/gi, 'bg-surfaceSunken')
    .replace(/text-\[\#0C8052\]/gi, 'text-primary')
    .replace(/border-\[\#0C8052\]\/10/gi, 'border-primary/10')
    .replace(/bg-\[\#FFF3E0\]\/80/gi, 'bg-accent/10')
    .replace(/text-\[\#E67B00\]/gi, 'text-accent')
    .replace(/border-\[\#E67B00\]\/10/gi, 'border-accent/10');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
};

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
      replaceInFile(dirFile);
    }
  });
  return filelist;
};

walkSync(path.join(__dirname, 'components'));
walkSync(path.join(__dirname, 'app'));
