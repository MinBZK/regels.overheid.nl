import type { Meta } from '@storybook/react';
import React from 'react';
import { Chip, ChipProps } from './chip';

export const _Chip: React.FC<ChipProps> = ({ variant = 'filled', disabled = false, ...props }) => (
  <Chip {...{ variant, disabled, ...props }} />
);

const meta: Meta<typeof _Chip> = {
  title: 'Components/Chip',
  component: _Chip,
  tags: ['autodocs'],
  args: {
    variant: 'filled',
    disabled: false,
    label: 'Hello World!',
  },
};

export default meta;
