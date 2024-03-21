'use client';

import { cx } from '@/cva.config';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

type ComponentType<P = {}> = React.ComponentType<P & { className?: string }>;

const addClassNameToComponent = <P extends {}>(Component: ComponentType<P>, className: string | string[]) => {
  const clone = forwardRef((props: P & { className?: string }, ref) => {
    return <Component ref={ref} {...props} className={cx(className, props.className)} />;
  });

  if (Component.displayName) clone.displayName = Component.displayName;

  return clone;
};

export const Root = DropdownMenu.Root;

export const Trigger = DropdownMenu.Trigger;

export const Portal = DropdownMenu.Portal;

export const Content = addClassNameToComponent(DropdownMenu.Content, [
  'z-50 min-w-[8rem] overflow-hidden border bg-white p-1 text-popover-foreground shadow-md',
]);

export const Item = addClassNameToComponent(
  DropdownMenu.Item,
  'relative flex cursor-pointer items-center hover:outline-none rounded-sm px-2 py-1.5 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
);
