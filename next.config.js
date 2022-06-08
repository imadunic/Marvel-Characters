/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.annihil.us"],
  },
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
