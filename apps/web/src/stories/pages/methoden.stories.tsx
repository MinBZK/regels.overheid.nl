import React from 'react';
import { Meta } from '@storybook/react';
import { Container } from '../../components/container';
import Methoden from '../../pages/methoden';
import { getMethodsMock } from '../../services/cms/mocks/get-methods-mock';

const meta: Meta<typeof Methoden> = {
  title: 'Pages/Methoden',
  component: Methoden,
  args: {
    methods: getMethodsMock,
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;

export const Default = {};
