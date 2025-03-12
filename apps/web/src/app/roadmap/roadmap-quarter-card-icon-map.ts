import {
  IconBinaryTree2,
  IconBrandGithub,
  IconGavel,
  Icon,
  IconComponents,
  IconLicense,
  IconUserCheck,
  IconSettingsCog,
  IconCertificate,
} from '@tabler/icons-react';

export type IconCategory =
  | 'standardization'
  | 'legal'
  | 'devops'
  | 'linked data'
  | 'content management'
  | 'rule management'
  | 'rule management'
  | 'user check'
  | 'design';

export const roadmapQuarterCardItemIconMap: Record<IconCategory, Icon> = {
  standardization: IconCertificate,
  legal: IconGavel,
  devops: IconBrandGithub,
  'linked data': IconBinaryTree2,
  'content management': IconLicense,
  'rule management': IconSettingsCog,
  'user check': IconUserCheck,
  design: IconComponents,
};
