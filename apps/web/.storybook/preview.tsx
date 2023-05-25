import React from 'react';
import '../src/tailwind.css';
import 'rijksoverheid-fonts/sans';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#fff' }],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <style>
        {`
        :root{ 
          --font-sans: 'Rijksoverheid Sans Web Text';
        }
        `}
      </style>
      <div className="container">
        <Story />
      </div>
    </>
  ),
];
