import { Alert, AlertTitle } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Notification',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    severity: 'success',
    children: 'This is a info message!',
  },
};

export const With_title: Story = {
  args: {
    severity: 'success',
    children: (
      <>
        <AlertTitle>This is a title </AlertTitle>
        This is a success message!
      </>
    ),
  },
};
