import { Meta } from '@storybook/react';
import Methoden from '../../pages/methoden';
import { getMethodsMock } from '../../services/cms/mocks/get-methods-mock';

const meta: Meta<typeof Methoden> = {
  title: 'Pages/Methoden',
  component: Methoden,
  args: {
    methods: getMethodsMock,
  },
};

export default meta;

export const Default = {};
