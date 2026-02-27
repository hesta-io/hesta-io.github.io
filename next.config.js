/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
