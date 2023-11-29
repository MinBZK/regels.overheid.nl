import { IconBinaryTree2, IconBrandGithub, IconComponents, IconLicense } from '@tabler/icons-react';

import { IconGavel } from '@tabler/icons-react';

import { Icon } from '@tabler/icons-react';

export type IconCategory = 'devops' | 'linked data' | 'design' | 'content management' | 'legal';

export const roadmapQuarterCardItemIconMap: Record<IconCategory, Icon> = {
  devops: IconBrandGithub,
  'content management': IconLicense,
  'linked data': IconBinaryTree2,
  design: IconComponents,
  legal: IconGavel,
};
