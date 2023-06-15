import { Pill } from '@/components/pill';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pill> = {
  title: 'Components/Pill ',
  component: Pill,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: 'This is a little pill',
  },
};
