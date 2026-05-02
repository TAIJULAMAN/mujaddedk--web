const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/bg-\[\#534AB7\]/gi, 'bg-primary')
    .replace(/text-\[\#534AB7\]/gi, 'text-primary')
    .replace(/border-\[\#534AB7\]/gi, 'border-primary')
    .replace(/ring-\[\#534AB7\]/gi, 'ring-primary')
    .replace(/from-\[\#534AB7\]/gi, 'from-primary')
    .replace(/to-\[\#534AB7\]/gi, 'to-primary')
    .replace(/bg-\[\#3C3489\]/gi, 'bg-chromeDark')
    .replace(/text-\[\#0A2540\]/gi, 'text-chromeDark')
    .replace(/bg-\[\#0A2540\]/gi, 'bg-chromeDark')
    .replace(/bg-slate-50/g, 'bg-surfaceSunken')
    .replace(/border-slate-200/g, 'border-divider')
    .replace(/border-slate-100/g, 'border-divider')
    .replace(/83,74,183/g, '59,88,118') // rgba shadow replacement
    .replace(/bg-\[\#EEEDFE\]/gi, 'bg-primary/20')
    .replace(/text-\[\#EEEDFE\]/gi, 'text-primary/20')
    // Stripe specific remaining replacements if any
    .replace(/stripe-purple/g, 'primary')
    .replace(/stripe-dark/g, 'chromeDark')
    .replace(/stripe-slate/g, 'textSecondary')
    .replace(/stripe-light/g, 'accent')
    .replace(/\[\#635bff\]/gi, 'primary')
    .replace(/\[\#ad6bff\]/gi, 'accent');

  // Let's also check if they used hardcoded #534AB7 in any style object
  newContent = newContent.replace(/"#534AB7"/gi, '"var(--color-primary)"');
  newContent = newContent.replace(/'#534AB7'/gi, "'var(--color-primary)'");
  
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
