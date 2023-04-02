import React from 'react';
import { Footer } from '@/components/footer';
import { Meta, StoryObj } from '@storybook/react';
import { ApplicationMetadataContext } from '@/components/application-metadata-provider';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ApplicationMetadataContext.Provider value={{ data: { version: '1.0.0', versionUpdatedAt: '2023-01-01' } }}>
        <Story />
      </ApplicationMetadataContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
