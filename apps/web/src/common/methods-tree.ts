interface MethodsTree {
  [method: string]: {
    docs?: string;
    demo?: string;
    publication?: string;
  };
}

export const methodsTree: MethodsTree = {
  'De LegitiMaat': {
    publication: '/publicaties/legitimaat',
  },
  Flint: {
    demo: '/lab/interpretation-editor/',
    docs: '/docs/methods/flint/INTRODUCTIE',
  },
};
