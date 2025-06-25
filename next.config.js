/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurar paths para el monorepo
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig

