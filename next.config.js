/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './app/image.js',
  },
};

module.exports = nextConfig;
