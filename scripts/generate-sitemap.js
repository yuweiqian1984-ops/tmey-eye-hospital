const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://yuweiqian1984-ops.github.io/tmey-eye-hospital';

const pages = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/about', changefreq: 'weekly', priority: '0.8' },
  { loc: '/departments/refractive', changefreq: 'weekly', priority: '0.9' },
  { loc: '/departments/cataract', changefreq: 'weekly', priority: '0.9' },
  { loc: '/departments/glaucoma', changefreq: 'weekly', priority: '0.9' },
  { loc: '/departments/pediatric', changefreq: 'weekly', priority: '0.9' },
  { loc: '/departments/fundus', changefreq: 'weekly', priority: '0.9' },
  { loc: '/departments/dry-eye', changefreq: 'weekly', priority: '0.9' },
  { loc: '/departments/optometry', changefreq: 'weekly', priority: '0.9' },
  { loc: '/team', changefreq: 'weekly', priority: '0.8' },
  { loc: '/equipment', changefreq: 'weekly', priority: '0.8' },
  { loc: '/environment', changefreq: 'weekly', priority: '0.7' },
  { loc: '/directions', changefreq: 'monthly', priority: '0.7' },
  { loc: '/tech', changefreq: 'weekly', priority: '0.8' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${BASE_URL}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated!');
