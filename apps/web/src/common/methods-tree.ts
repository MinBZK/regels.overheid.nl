import { PillProps } from '@/components/pill';

export interface MethodTree {
  color: PillProps['variant'];
  docs?: string;
  demo?: string;
  publication?: string;
}

export const methodsTree = {
  'De LegitiMaat': {
    color: 'info',
    docs: '/docs/methods/LEGITIMAAT',
    publication: '/publicaties/legitimaat',
  },
  Flint: {
    color: 'info',
    demo: '/lab/interpretation-editor/',
    docs: '/docs/methods/flint/INTRODUCTIE',
  },
} satisfies Record<string, MethodTree>;
