import React from 'react';
import { Meta } from '@storybook/react';
import { Container } from '../../components/container';
import Roadmap from '../../pages/roadmap';
import { getMethodsMock } from '../../services/cms/mocks/get-methods-mock';

const meta: Meta<typeof Roadmap> = {
  title: 'Pages/Roadmap',
  component: Roadmap,
  args: {
    methods: getMethodsMock,
  },
  decorators: [
    (Story) => (
      <Container overflow="hidden">
        <Story />
      </Container>
    ),
  ],
};

export default meta;

export const Default = {};
