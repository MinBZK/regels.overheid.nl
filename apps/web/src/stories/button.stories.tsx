import { Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
};

export const ContainedSecondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};
