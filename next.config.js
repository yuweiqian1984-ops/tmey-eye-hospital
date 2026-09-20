/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
