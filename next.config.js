/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/RAW',
  assetPrefix: '/RAW/',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
