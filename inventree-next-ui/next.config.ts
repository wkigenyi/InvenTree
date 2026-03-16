import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow images from InvenTree server and common CDNs
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000'
      },
      {
        protocol: 'https',
        hostname: 'demo.inventree.org'
      }
    ]
  },

  // Expose the API base URL to the client via environment variables
  env: {
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:8000'
  }
};

export default nextConfig;
