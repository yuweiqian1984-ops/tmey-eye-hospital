const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

function ensureIndexHtml(htmlPath, indexPath) {
  if (fs.existsSync(htmlPath)) {
    const dir = path.dirname(indexPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(htmlPath, indexPath);
    console.log(`Copied ${path.basename(htmlPath)} -> ${path.relative(outDir, indexPath)}`);
  }
}

// Handle top-level pages
ensureIndexHtml(path.join(outDir, 'about.html'), path.join(outDir, 'about', 'index.html'));
ensureIndexHtml(path.join(outDir, 'equipment.html'), path.join(outDir, 'equipment', 'index.html'));
ensureIndexHtml(path.join(outDir, 'team.html'), path.join(outDir, 'team', 'index.html'));
ensureIndexHtml(path.join(outDir, 'admin.html'), path.join(outDir, 'admin', 'index.html'));
ensureIndexHtml(path.join(outDir, 'directions.html'), path.join(outDir, 'directions', 'index.html'));
ensureIndexHtml(path.join(outDir, 'environment.html'), path.join(outDir, 'environment', 'index.html'));
ensureIndexHtml(path.join(outDir, 'tech.html'), path.join(outDir, 'tech', 'index.html'));

// Handle department sub-pages
const departmentsDir = path.join(outDir, 'departments');
if (fs.existsSync(departmentsDir)) {
  const htmlFiles = fs.readdirSync(departmentsDir)
    .filter(f => f.endsWith('.html'))
    .map(f => f.replace('.html', ''));
  htmlFiles.forEach(dept => {
    const htmlPath = path.join(departmentsDir, dept + '.html');
    const indexPath = path.join(departmentsDir, dept, 'index.html');
    ensureIndexHtml(htmlPath, indexPath);
  });
}

console.log('Post-build: All pages converted to directory structure for GitHub Pages');
