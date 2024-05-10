'use client';

import { useMenuContext } from '@/app/menu-context';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { NavbarNode } from '@/services/cms/get-navbar-tree';
import * as Portal from '@radix-ui/react-portal';
import { Slot } from '@radix-ui/react-slot';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { MenuItem } from './menu-item';

interface Props {
  navbar: NavbarNode;
}

export const MenuMobile: React.FC<Props> = ({ navbar }) => {
  const pathName = usePathname();
  const { isOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (isOpen) toggleMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  if (!isOpen) return null;

  const menuItems: React.JSX.Element[] = [];
  const menuItemsWithChildren: React.JSX.Element[] = [];

  Array.from(navbar.children.values()).forEach((node) => {
    if (node.children.size === 0)
      return menuItems.push(<MenuItem key={node.id} name={node.name} slug={node.url} variant="mobile" />);

    menuItemsWithChildren.push(
      <div key={node.id} className="mb-4">
        <h4 className="flex h-10 items-center px-2 font-bold text-white">{node.name}</h4>
        {Array.from(node.children.values()).map((child) => {
          return <MenuItem key={child.id} name={child.name} slug={child.url} variant="mobile-menu" />;
        })}
      </div>
    );
  });

  return (
    <Portal.Portal className="sm:hidden">
      <RemoveScroll as={Slot} enabled allowPinchZoom className="w-full">
        <div className="fixed bottom-0 left-0 right-0 top-24 z-10 overflow-y-auto bg-primary-main py-3">
          <Container>
            <div className="mb-4">{menuItems}</div>
            {menuItemsWithChildren}
          </Container>
        </div>
      </RemoveScroll>
    </Portal.Portal>
  );
};

export const MenuToggle: React.FC = () => {
  const { toggleMenu } = useMenuContext();

  return (
    <Button color="primary-light" className="sm:hidden" onClick={toggleMenu}>
      Menu
    </Button>
  );
};
