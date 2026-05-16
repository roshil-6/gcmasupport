/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Avoid Search Console / crawlers hitting a non-canonical path and getting HTML (404 page)
      { source: '/sitemap', destination: '/sitemap.xml', permanent: true },
    ]
  },
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/favicon.svg' }]
  },
  /** Windows: reduce stale HMR / missing chunk+CSS during Fast Refresh */
  webpack: (config, { dev }) => {
    if (dev && process.platform === 'win32') {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  images: {
    // Some environments block Next.js' image optimizer from fetching remote images.
    // Using unoptimized makes the browser load remote images directly, preventing blank images.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
}

module.exports = nextConfig
