import { PillProps } from '@/components/pill';

export interface MethodTree {
  color: PillProps['variant'];
  docs?: string;
  demo?: string;
  standard?: string;
}

export const methodsTree = {
  'De LegitiMaat': {
    color: 'info',
    docs: '/docs/methods/LEGITIMAAT',
    standard: '/publicaties/legitimaat',
  },
  FLINT: {
    color: 'info',
    demo: '/lab/interpretation-editor/',
    docs: '/docs/methods/flint/INTRODUCTIE',
  },
  Wetsanalyse_1: {
    color: 'info',
    docs: '/docs/methods/WETSANALYSE',
    standard: '/publicaties/wetsanalyse',
  },
  Wetsanalyse_2: {
    color: 'info',
    demo: '/lab/jas-annotatie-tool/',
    docs: '/docs/methods/WETSANALYSE',
    standard: '/publicaties/wetsanalyse',
  },
} satisfies Record<string, MethodTree>;

export const getMethodTree = (method: string) => {
  const methodKey = Object.keys(methodsTree).find((key) => key.toLowerCase() === method.toLowerCase()) as
    | keyof typeof methodsTree
    | undefined;

  if (!methodKey) return;

  return methodsTree[methodKey];
};
