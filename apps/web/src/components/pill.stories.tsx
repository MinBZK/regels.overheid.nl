import type { Meta } from '@storybook/react';
import React from 'react';
import { Pill, PillProps } from './pill';

export const _Pill: React.FC<PillProps> = ({ variant = 'info', disabled = false, ...props }) => (
  <Pill {...{ variant, disabled, ...props }} />
);

const meta: Meta<typeof _Pill> = {
  title: 'Components/Pill',
  component: _Pill,
  tags: ['autodocs'],
  args: {
    variant: 'info',
    disabled: false,
    label: 'Hello World!',
  },
};

export default meta;
