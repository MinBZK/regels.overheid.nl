import React from 'react';
import { Navbar } from '../components/navbar';
import { PagesContext } from '../components/pages-provider';
import { Meta, StoryObj } from '@storybook/react';
import { getPagesMock } from '../services/cms/mocks/get-pages-mock';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,

  decorators: [
    (Story) => (
      <PagesContext.Provider value={{ pages: getPagesMock.data }}>
        <Story />
      </PagesContext.Provider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};
