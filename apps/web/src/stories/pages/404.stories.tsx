import { Meta } from '@storybook/react';
import { storyLayoutDecorators } from '../../helpers/story-layout-decorator';
import Four04 from '../../pages/404';

const meta: Meta<typeof Four04> = {
  title: 'Pages/404',
  component: Four04,
  decorators: storyLayoutDecorators,
};

export default meta;

export const Default = {};
