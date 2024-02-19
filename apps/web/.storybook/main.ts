import type { StorybookConfig } from '@storybook/nextjs';

import { join, dirname, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [{ from: resolve(__dirname, '../src/app/fonts'), to: 'fonts' }],
  webpackFinal(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias['@'] = resolve(__dirname, '../src');

    return config;
  },
};
export default config;
