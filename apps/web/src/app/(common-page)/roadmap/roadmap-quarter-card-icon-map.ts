import { IconBinaryTree2, IconBrandGithub, IconGavel, Icon, IconComponents, IconLicense, IconUserCheck} from '@tabler/icons-react';

export type IconCategory = 'user check' | 'devops' | 'linked data' | 'design' | 'content management' | 'legal';

export const roadmapQuarterCardItemIconMap: Record<IconCategory, Icon> = {
  'user check': IconUserCheck,
  devops: IconBrandGithub,
  'content management': IconLicense,
  'linked data': IconBinaryTree2,
  design: IconComponents,
  legal: IconGavel,
};
