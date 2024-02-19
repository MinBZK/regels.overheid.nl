import type { Meta } from '@storybook/react';
import React from 'react';
import { Notification, NotificationProps } from './notification';

export const _Notification: React.FC<NotificationProps> = ({ severity = 'info', ...props }) => (
  <Notification {...{ severity, ...props }} />
);

const meta: Meta<typeof _Notification> = {
  title: 'Components/Notification',
  component: _Notification,
  tags: ['autodocs'],
  args: {
    severity: 'info',
    children: 'Hello World!',
  },
};

export default meta;
