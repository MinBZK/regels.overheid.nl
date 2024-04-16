'use client';

import { withClassName } from '@/common/with-class-name';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Root = DropdownMenu.Root;

export const Trigger = DropdownMenu.Trigger;

export const Portal = DropdownMenu.Portal;

export const Content = withClassName(DropdownMenu.Content, [
  'z-50 min-w-[8rem] overflow-hidden border bg-white p-1 text-popover-foreground shadow-md',
]);

export const Item = withClassName(
  DropdownMenu.Item,
  'relative flex cursor-pointer items-center hover:outline-none rounded-sm px-2 py-1.5 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
);
