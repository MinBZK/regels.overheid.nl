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
  FLINT: {
    color: 'info',
    demo: '/lab/interpretation-editor/',
    docs: '/docs/methods/flint/INTRODUCTIE',
  },
  Wetsanalyse: {
    color: 'info',
    demo: '/lab/legal-annotation-tool',
    docs: '/docs/methods/WETSANALYSE',
  },
} satisfies Record<string, MethodTree>;
