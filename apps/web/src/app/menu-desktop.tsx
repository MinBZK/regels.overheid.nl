'use client';

import { getNavbarPages } from '@/services/cms/get-navbar-pages';

import { withClassName } from '@/common/with-class-name';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { MenuItem } from './menu-item';

interface Props {
  pages: Awaited<ReturnType<typeof getNavbarPages>>;
}

export const NavigationMenuItem = withClassName(
  NavigationMenu.Item,
  'text-white hover:bg-primary-light hover:text-primary-main active:text-white'
);

export const NavigationMenuLink = withClassName(NavigationMenu.Link, [
  'px-4 h-16 flex items-center',
  'focus:bg-primary-light focus:text-primary-main',
]);

export const MenuDesktop: React.FC<Props> = ({ pages }) => {
  return (
    <div className="hidden overflow-x-auto bg-primary-main sm:block">
      <NavigationMenu.Root className="container flex w-full bg-primary-main px-2 lg:max-w-4xl xl:max-w-5xl [&>div]:w-full">
        <NavigationMenu.List className="flex list-none">
          {pages.map(({ id, slug, name }) => (
            <NavigationMenuItem key={id}>
              <NavigationMenuLink asChild>
                <MenuItem name={name} slug={slug} variant="desktop" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem className="ml-auto">
            <NavigationMenuLink asChild>
              <MenuItem name="Beta" slug="/docs-beta" variant="desktop" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};
