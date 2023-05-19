import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card',
  },
};

