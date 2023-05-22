import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Notification } from '../../components/notification';
import { NotificationTitle } from '../../components/notification/notification-title';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification ',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    severity: 'info',
    children:
      "This was a triumph! I'm making a note here: HUGE SUCCESS! It's hard to overstate my satisfaction. Regels-Overheid we do what we must because we can. For the good of all of us. Anyway this cake is great...🌀",
  },
};

export const With_title: Story = {
  args: {
    severity: 'success',
    children: (
      <>
        <NotificationTitle>This was a triumph!</NotificationTitle>I&apos;m making a note here:{' '}
        <span className="underline">HUGE SUCCESS!</span> It&apos;s hard to overstate my satisfaction. Regels-Overheid we
        do what we must because we can. For the good of all of us. Anyway this cake is great...🌀
      </>
    ),
  },
};
