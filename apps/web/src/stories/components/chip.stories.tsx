import { Chip } from '@/components/chip';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'This is a chip',
  },
};
