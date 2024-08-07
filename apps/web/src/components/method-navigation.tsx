'use client';

import { MethodTree, getMethodTree } from '@/common/methods-tree';
import { cva, cx } from '@/cva.config';
import slugify from '@sindresorhus/slugify';
import { Icon, IconBook2, IconFileTypeDoc, IconMicroscope, IconPlayerPlay } from '@tabler/icons-react';
import { createContext, useContext } from 'react';
import { Link } from './link';

interface Props {
  method?: string;
  hide?: ItemName;
  className?: string;
  showLabel?: boolean;
  orientation?: 'vertical' | 'horizontal';
  overrideTreeValue?: Partial<MethodTree>;
}

type ItemName = keyof Omit<MethodTree, 'color'> | 'lab';

interface ItemProps {
  name: ItemName;
}

interface ContextValue extends Pick<Props, 'showLabel' | 'hide'> {
  methodTree: MethodTree;
  method: keyof MethodTree;
}

const iconMap: Record<ItemName, Icon> = {
  docs: IconFileTypeDoc,
  demo: IconPlayerPlay,
  lab: IconMicroscope,
  publication: IconBook2,
};

const labelMap: Record<ItemName, string> = {
  docs: 'Naar documentatie',
  demo: 'Naar de demo',
  lab: 'Naar de tool',
  publication: 'Naar publicatie',
};

const listVariants = cva({
  base: 'flex gap-3',
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'items-center',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const linkVariants = cva({
  base: 'flex gap-3',
  variants: {
    color: {
      info: 'text-primary-main',
      warning: 'text-warning-main',
      error: 'text-error-main',
      success: 'text-success-main',
    },
  },
  defaultVariants: {
    color: 'info',
  },
});

const context = createContext<ContextValue>({} as any);

export const MethodNavigation: React.FC<Props> = ({
  method,
  className,
  orientation,
  showLabel,
  hide,
  overrideTreeValue,
}) => {
  const methodTree = getMethodTree(method || '');

  if (!methodTree && !overrideTreeValue) return null;

  return (
    <context.Provider
      value={{
        hide,
        showLabel,
        method: method as keyof MethodTree,
        methodTree: { ...methodTree, ...overrideTreeValue } as MethodTree,
      }}
    >
      <ul className={cx(className, listVariants({ orientation }))}>
        <Item name="docs" />
        <Item name="publication" />
        <Item name="demo" />
        <Item name="lab" />
      </ul>
    </context.Provider>
  );
};

const Item: React.FC<ItemProps> = ({ name }) => {
  const { methodTree, showLabel, hide, method } = useContext(context);

  if (hide === name) return null;

  if (!methodTree.hasOwnProperty(name) && name !== 'lab') return null;

  if (name === 'lab' && !methodTree.hasOwnProperty('demo')) return null;

  const Icon = iconMap[name];

  const getHref = () => {
    if (name === 'lab') return `/lab#${slugify(method, { lowercase: true })}`;

    return methodTree[name]!;
  };

  return (
    <li>
      <Link href={getHref()} className={linkVariants({ color: methodTree.color })}>
        <Icon />
        {showLabel && labelMap[name]}
      </Link>
    </li>
  );
};
