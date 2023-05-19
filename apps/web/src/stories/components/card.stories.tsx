import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/card';
import { PublicationCard as PublicationCardComponent } from '../../components/card/publication-card';

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

export const PublicationCard: Story = {
  render: () => (
    <PublicationCardComponent
      title="Title of the publication"
      description="Short description regarding the publication"
      tag="A Tag"
      url="#"
    />
  ),
};
