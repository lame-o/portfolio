/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Next 16 treats quality as an allowlist and silently falls back to 75 for
    // anything unlisted. Book covers request 90 — the default visibly softens
    // cover type at the size they render. Book covers are checked into
    // public/images/books, so no remotePatterns are needed; see lib/books.ts.
    qualities: [75, 90],
  },
}

module.exports = nextConfig
