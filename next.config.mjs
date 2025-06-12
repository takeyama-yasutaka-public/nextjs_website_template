import 'dotenv/config'

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: isProd ? 'https' : 'http',
        hostname: process.env.IMAGE_HOST,
        port: '',
        pathname: '/storage/images/**',
      },
    ],
  },
}

export default nextConfig
