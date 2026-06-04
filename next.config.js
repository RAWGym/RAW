/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

// PWA wrapper — uncomment after: npm install @ducanh2912/next-pwa
// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
//   cacheOnFrontEndNav: true,
//   reloadOnOnline: true,
//   disable: process.env.NODE_ENV === "development",
// });
// module.exports = withPWA(nextConfig);

module.exports = nextConfig;
