/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 需要 basePath，仓库名为 tmey-eye-hospital
  // 部署到 https://yuweiqian1984-ops.github.io/tmey-eye-hospital/
  basePath: process.env.GITHUB_PAGES === 'true' ? '/tmey-eye-hospital' : '',
};

module.exports = nextConfig;
