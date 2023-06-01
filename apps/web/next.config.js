const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  webpack(config) {
    config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }));

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/publications/:dir/:version',
        destination: '/public/publications/:dir/:version.html',
      },
      {
        source: '/publications/:dir',
        destination: '/public/publications/:dir/latest.html',
      },
    ];
  },
};

module.exports = nextConfig;
