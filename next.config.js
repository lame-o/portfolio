/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    // Keep root route at "/". Add redirects here if/when needed.
    return []
  },
}

module.exports = nextConfig
