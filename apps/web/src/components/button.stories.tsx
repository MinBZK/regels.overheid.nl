import type { Meta } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './button';

export const _Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary-dark',
  disabled = false,
  ...props
}) => <Button {...{ variant, disabled, ...props }} />;

const meta: Meta<typeof _Button> = {
  title: 'Components/Button',
  component: _Button,
  tags: ['autodocs'],
  args: {
    disabled: false,
    variant: 'contained',
    color: 'primary-dark',
    children: 'Hello World!',
  },
};

export default meta;
