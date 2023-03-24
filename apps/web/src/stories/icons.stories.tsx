import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const cache: Record<string, any> = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key) => {
    cache[key] = r(key);
  });
}

importAll(require.context('../theme/icons', true, /\.tsx$/));

const component = () => {
  return (
    <Box display="flex" columnGap={1} rowGap={2} flexWrap="wrap">
      {Object.values(cache).map((iconModule) => {
        const [iconName] = Object.keys(iconModule);

        const Icon = iconModule[iconName];

        return (
          <Box
            key={iconName}
            width={150}
            height={150}
            display="flex"
            component={Paper}
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Icon />
            <Typography variant="caption">{iconName}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

const meta: Meta = {
  title: 'Components/Icons',
  component,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
