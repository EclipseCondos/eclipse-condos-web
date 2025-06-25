/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Alias para el frontend (@/) - Solo cliente Next.js
      '@': path.resolve(__dirname, './src'),
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
