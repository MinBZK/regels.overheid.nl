import { Meta } from '@storybook/react';
import React from 'react';
import { Container } from '../../components/container';
import Publicaties from '../../pages/publicaties';

const meta: Meta<typeof Publicaties> = {
  title: 'Pages/Publicaties',
  component: Publicaties,
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
