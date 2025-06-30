/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  
  // Headers optimizados para archivos multimedia
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Alias para el frontend (@/) - Solo cliente Next.js
      '@': path.resolve(__dirname, './'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/styles': path.resolve(__dirname, './styles'),
      '@/public': path.resolve(__dirname, './public'),
      
      // Alias para el origen del monorepo (~/)
      '~': path.resolve(__dirname, '../../'),
      '~/apps': path.resolve(__dirname, '../../apps'),
      '~/backend': path.resolve(__dirname, '../../apps/backend'),
      '~/frontend': path.resolve(__dirname, '../../apps/frontend'),
      '~/docs': path.resolve(__dirname, '../../Docs'),
      '~/infra': path.resolve(__dirname, '../../infra'),
    };
    return config;
  },
}

module.exports = nextConfig
