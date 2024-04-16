'use client';

import { useMenuContext } from '@/app/menu-context';
import { Button } from '@/components/button';
import { getNavbarPages } from '@/services/cms/get-navbar-pages';
import * as Portal from '@radix-ui/react-portal';
import { Slot } from '@radix-ui/react-slot';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { MenuItem } from './menu-item';
import { Container } from '@/components/container';

interface Props {
  pages: Awaited<ReturnType<typeof getNavbarPages>>;
}

export const MenuMobile: React.FC<Props> = ({ pages }) => {
  const pathName = usePathname();
  const { isOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (isOpen) toggleMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  if (!isOpen) return null;

  return (
    <Portal.Portal className="sm:hidden">
      <RemoveScroll as={Slot} enabled allowPinchZoom className="w-full">
        <div className="fixed bottom-0 left-0 right-0 top-24 z-10 overflow-y-auto bg-primary-main py-3">
          <Container>
            {pages.map(({ id, slug, name }) => (
              <MenuItem key={id} name={name} slug={slug} variant="mobile" />
            ))}
            <MenuItem name="Beta" slug="/docs-beta" variant="mobile" />
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
