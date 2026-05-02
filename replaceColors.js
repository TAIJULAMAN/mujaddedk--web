const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/stripe-purple/g, 'primary')
    .replace(/stripe-dark/g, 'chromeDark')
    .replace(/stripe-slate/g, 'textSecondary')
    .replace(/stripe-light/g, 'accent');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
};

const walkSync = (dir, filelist = []) => {
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
