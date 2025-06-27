/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  // Configuración específica para archivos multimedia en Windows
  assetPrefix: '',
  trailingSlash: false,
  
  // Headers específicos para archivos multimedia
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
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },
  
  webpack: (config) => {
    // Configuración para archivos multimedia en Windows
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
        },
      },
    });
    
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
