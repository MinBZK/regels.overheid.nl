'use client';

import { withClassName } from '@/common/with-class-name';
import { NavbarNode } from '@/services/cms/get-navbar-tree';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './menu-desktop.module.css';
import { MenuItem } from './menu-item';

interface Props {
  navbar: NavbarNode;
}

export const NavigationMenuItem = withClassName(NavigationMenu.Item, 'text-white active:text-white');

export const MenuDesktop: React.FC<Props> = ({ navbar }) => {
  return (
    <div className="hidden bg-primary-main sm:block">
      <NavigationMenu.Root
        className="container relative flex w-full bg-primary-main px-2 lg:max-w-4xl xl:max-w-5xl"
        delayDuration={0}
        skipDelayDuration={0}
      >
        <NavigationMenu.List className="flex list-none">
          {Array.from(navbar.children.values()).map((node) => {
            if (!node.children.size)
              return (
                <NavigationMenuItem key={node.id}>
                  <NavigationMenu.Link asChild>
                    <MenuItem name={node.name} slug={node.url} variant="desktop" />
                  </NavigationMenu.Link>
                </NavigationMenuItem>
              );

            // For now only single level of children is supported
            return (
              <NavigationMenuItem key={node.id}>
                <NavigationMenu.Trigger className={styles.trigger}>
                  <NavigationMenu.Link asChild className="gap-x-1">
                    <MenuItem
                      variant="desktop"
                      omitHover
                      name={
                        <>
                          {node.name} <IconChevronDown className={styles.chevron} />
                        </>
                      }
                    />
                  </NavigationMenu.Link>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-auto">
                  <ul className="w-full overflow-hidden bg-primary-light">
                    {Array.from(node.children.values()).map((child) => (
                      <MenuItem key={child.id} name={child.name} slug={child.url} variant="desktop-menu" />
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenu.List>

        <NavigationMenu.Indicator forceMount className={styles.indicator}>
          <div>
            <div className="absolute left-1/2 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary-main" />
            <div className="absolute left-0 top-full flex">
              <NavigationMenu.Viewport
                forceMount
                style={{
                  height: 'var(--radix-navigation-menu-viewport-height)',
                  width: 'var(--radix-navigation-menu-viewport-width)',
                }}
              />
            </div>
          </div>
        </NavigationMenu.Indicator>
      </NavigationMenu.Root>
    </div>
  );
};
