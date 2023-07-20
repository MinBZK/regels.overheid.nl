/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/cms/uploads/**',
      },
      {
        port: '9001',
        protocol: 'http',
        hostname: 'cms',
        pathname: '/uploads/**',
      },
      {
        port: '80',
        protocol: 'https',
        hostname: 'regels.overheid.nl',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'host.docker.internal',
        pathname: '/cms/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
