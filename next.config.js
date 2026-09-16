/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/scicode-nexus' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/scicode-nexus/' : '',
}

module.exports = nextConfig