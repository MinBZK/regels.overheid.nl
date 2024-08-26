'use client';

import { withClassName } from '@/common/with-class-name';
import { NavbarNode } from '@/services/cms/get-navbar-tree';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './menu-desktop.module.scss';
import { MenuItem } from './menu-item';
import { useRef, useState } from 'react';

interface Props {
  navbar: NavbarNode;
}

export const NavigationMenuItem = withClassName(NavigationMenu.Item, 'text-white active:text-white');

export const MenuDesktop: React.FC<Props> = ({ navbar }) => {
  const rootRef = useRef<HTMLElement>(null);
  const [activeItem, setActiveItem] = useState({ left: 0, width: 0, bottom: 0 });

  const onRootValueChange = (value: string) => {
    if (!value || !rootRef.current) return;

    const trigger = rootRef.current?.querySelector(`#${value}`);
    const wrapper = rootRef.current?.firstChild as Element | null;

    if (!wrapper || !trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    setActiveItem({
      left: triggerRect.left - wrapperRect.left + 8,
      width: triggerRect.width,
      bottom: triggerRect.bottom - wrapperRect.top,
    });
  };

  return (
    <div className="hidden bg-primary-main sm:block">
      <NavigationMenu.Root
        ref={rootRef}
        className="container relative flex w-full bg-primary-main px-2 lg:max-w-4xl xl:max-w-5xl"
        delayDuration={0}
        skipDelayDuration={0}
        onValueChange={onRootValueChange}
      >
        <NavigationMenu.List className="flex list-none">
          {Array.from(navbar.children.values()).map((node) => {
            if (!node.children.size)
              return (
                <NavigationMenuItem key={node.id}>
                  <NavigationMenu.Link asChild>
                    <MenuItem name={node.name} slug={node.url} variant="desktop" openInNewTab={node.openInNewTab} />
                  </NavigationMenu.Link>
                </NavigationMenuItem>
              );

            const value = node.id.replace(':', '-');
            // For now only single level of children is supported
            return (
              <NavigationMenuItem key={node.id} value={value} id={value}>
                <NavigationMenu.Trigger className={styles.trigger}>
                  <NavigationMenu.Link asChild className="gap-x-1">
                    <MenuItem
                      omitHover
                      variant="desktop"
                      openInNewTab={node.openInNewTab}
                      name={
                        <>
                          {node.name} <IconChevronDown className={styles.chevron} />
                        </>
                      }
                    />
                  </NavigationMenu.Link>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-auto min-w-full">
                  <div className="absolute left-1/2 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary-main" />
                  <ul className="w-full overflow-hidden bg-primary-light">
                    {Array.from(node.children.values()).map((child) => (
                      <MenuItem
                        key={child.id}
                        name={child.name}
                        slug={child.url}
                        variant="desktop-menu"
                        openInNewTab={child.openInNewTab}
                      />
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenu.List>

        <div
          className="z-50"
          style={
            {
              '--active-item-left': activeItem.left + 'px',
              '--active-item-width': activeItem.width + 'px',
              '--active-item-bottom': activeItem.bottom + 'px',
            } as React.CSSProperties
          }
        >
          <NavigationMenu.Viewport className={styles.viewport} />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};
