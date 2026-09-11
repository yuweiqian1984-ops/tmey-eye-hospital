/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 项目页需要 basePath
  basePath: '/tmey-eye-hospital',
};

module.exports = nextConfig;
