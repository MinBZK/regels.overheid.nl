import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../components/navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  args: {
    activeHref: '/',
    items: [
      { href: '/', label: 'Home' },
      { href: '/roadmap', label: 'Roadmap' },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};
