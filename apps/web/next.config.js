const path = require('path');
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
};

module.exports = nextConfig;
