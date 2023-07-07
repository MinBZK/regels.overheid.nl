const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }));

    return config;
  },
  images: {
    remotePatterns: [
      {
        port: '80',
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
        pathname: 'cms/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
