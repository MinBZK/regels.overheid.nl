import { Meta } from '@storybook/react';
import { PageTitle } from '../../components/page-title';

const meta: Meta<typeof PageTitle> = {
  title: 'Components/Page title',
  component: PageTitle,
  args: {
    children: 'Page title',
  },
};

export default meta;

export const Default = {};
