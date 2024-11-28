'use client';

import { getMethodTree, methodsTree, MethodTree } from '@/common/methods-tree';
import { cva, VariantProps } from '@/cva.config';
import slugify from '@sindresorhus/slugify';
import { Icon, IconBook2, IconFileTypeDoc, IconMicroscope, IconPlayerPlay } from '@tabler/icons-react';
import { createContext, forwardRef, PropsWithChildren, useContext } from 'react';
import { Link } from './link';
import * as Tooltip from './tooltip';

interface RootContext {
  method?: keyof typeof methodsTree | (string & {});
  methodTree?: MethodTree;
}

const rootContext = createContext<RootContext>({} as any);

export const useMethodNavigation = () => useContext(rootContext);

export interface RootProps extends PropsWithChildren, VariantProps<typeof rootVariants> {
  method?: keyof typeof methodsTree | (string & {});
}

export type ItemName = keyof Omit<MethodTree, 'color'> | 'lab';

const rootVariants = cva({
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

export const Root = forwardRef<HTMLUListElement, RootProps>(({ children, method, orientation }, ref) => {
  const methodTree = method && getMethodTree(method);

  return (
    <rootContext.Provider value={{ method, methodTree }}>
      <ul ref={ref} className={rootVariants({ orientation })}>
        {children}
      </ul>
    </rootContext.Provider>
  );
});

Root.displayName = 'Root';

interface MethodItemsContext {
  hide?: ItemName;
  showLabels?: boolean;
  methodTree: Partial<MethodTree>;
}

export const methodItemsContext = createContext<MethodItemsContext>({} as any);

export interface MethodItemsProps extends React.PropsWithChildren {
  hide?: ItemName;
  showLabels?: boolean;
  override?: Partial<MethodTree>;
}

export const MethodItems: React.FC<MethodItemsProps> = ({ override, showLabels, children, hide }) => {
  const { methodTree } = useMethodNavigation();

  return (
    <methodItemsContext.Provider value={{ methodTree: { ...methodTree, ...override }, showLabels, hide }}>
      <MethodItem name="docs" tooltip="Documentatie" label="Naar documentatie" icon={IconFileTypeDoc} />
      <MethodItem name="standard" tooltip="Publicatie" label="Naar standaard" icon={IconBook2} />
      <MethodItem name="demo" tooltip="Demo" label="Naar de demo" icon={IconPlayerPlay} />
      <MethodItem name="lab" tooltip="Lab" label="Naar de tool" icon={IconMicroscope} />
      {children}
    </methodItemsContext.Provider>
  );
};

type MethodItemProps = { tooltip: string; label: string; icon: Icon } & ({ name: ItemName } | { href: string });

function itemInMethodTree(item: string, methodTree: Partial<MethodTree>): item is keyof MethodTree {
  return methodTree.hasOwnProperty(item);
}

export const MethodItem: React.FC<MethodItemProps> = (props) => {
  const { tooltip, icon: Icon, label } = props;
  const { method } = useMethodNavigation();
  const { methodTree, showLabels, hide } = useContext(methodItemsContext);

  const url = (() => {
    if ('href' in props) return props.href;

    const { name } = props;

    if (hide === name || !methodTree) return null;

    if (!methodTree.hasOwnProperty(name) && name !== 'lab') return null;

    if (name === 'lab' && !methodTree.hasOwnProperty('demo')) return null;

    if (name === 'lab' && method) return `/lab#${slugify(method, { lowercase: true })}`;

    if (itemInMethodTree(name, methodTree)) return methodTree[name];

    return '#';
  })();

  if (!url) return null;

  if (showLabels)
    return (
      <li>
        <Link href={url} className="flex gap-3 text-primary-main">
          <Icon />
          {showLabels && label}
        </Link>
      </li>
    );

  return (
    <Item tooltip={tooltip}>
      <Link href={url} className="flex gap-3 text-primary-main">
        <Icon />
        {showLabels && label}
      </Link>
    </Item>
  );
};

interface ItemProps extends React.PropsWithChildren {
  tooltip: string;
}

export const Item: React.FC<ItemProps> = ({ tooltip, children }) => {
  return (
    <li>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content sideOffset={5}>
              {tooltip}
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </li>
  );
};
