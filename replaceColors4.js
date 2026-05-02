const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/text-slate-600/g, 'text-textSecondary')
    .replace(/text-slate-500/g, 'text-textSecondary')
    .replace(/text-slate-400/g, 'text-textTertiary')
    .replace(/text-slate-700/g, 'text-textPrimary')
    .replace(/text-slate-900/g, 'text-textPrimary')
    .replace(/bg-slate-100/g, 'bg-surfaceSunken')
    .replace(/border-slate-100/g, 'border-divider')
    .replace(/border-slate-200/g, 'border-divider')
    .replace(/border-slate-300/g, 'border-divider')
    .replace(/bg-slate-50/g, 'bg-surfaceSunken')
    .replace(/text-black/g, 'text-textPrimary');

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
