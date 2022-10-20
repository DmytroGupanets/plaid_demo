const withImages = require('next-images')

// if (process.env.PROJECT_ENV === 'DEV')

// if (process.env.PROJECT_ENV === 'STAGE')
//     dotenv.config({
//         path: '.env.stage'
//     });
// if (process.env.PROJECT_ENV === 'PROD')
//     dotenv.config({
//         path: '.env.prod'
//     });

const MS_PER_SECOND = 1000
const SECONDS_PER_DAY = 86400

module.exports = {
  ...withImages(),
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ['static.methodfi.com'],
  },
  reactStrictMode: true,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: SECONDS_PER_DAY * MS_PER_SECOND,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 100,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // Proxy to Backend
      },
    ]
  },
}
