const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

const adminHtml = path.join(outDir, 'admin.html');
const adminIndexHtml = path.join(outDir, 'admin', 'index.html');

if (fs.existsSync(adminHtml)) {
  const adminDir = path.dirname(adminIndexHtml);
  if (!fs.existsSync(adminDir)) {
    fs.mkdirSync(adminDir, { recursive: true });
  }
  fs.copyFileSync(adminHtml, adminIndexHtml);
  console.log('Copied admin.html -> admin/index.html');
}
