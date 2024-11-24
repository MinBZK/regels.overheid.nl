import { Container } from '@/components/container';
import { getNavbarTree } from '@/services/cms/get-navbar-tree';
import Image from 'next/image';
import Link from 'next/link';
import { MenuContext } from './menu-context';
import { MenuDesktop } from './menu-desktop';
import { MenuMobile, MenuToggle } from './menu-mobile';
import { MenuBreadcrumbs } from './menu-breadcrumbs';
import { Logo } from '@/components/logo';

export interface Page {
  id: number;
  name: string;
  slug: string;
}

export const Header: React.FC = async () => {
  const navbar = await getNavbarTree();

  return (
    <header role="banner" className="relative w-full border-b-8 border-primary-light">
      <Container>
        <div className="flex h-24 items-center justify-between sm:h-auto">
          <Link className="`aspect-[540/19`] relative w-[170px] py-5 sm:w-[300px]" href="/">
            <Logo />
          </Link>
          <MenuContext>
            <MenuToggle />
            <MenuMobile navbar={navbar} />
          </MenuContext>
        </div>
      </Container>
      <MenuDesktop navbar={navbar} />
      <MenuBreadcrumbs navbar={navbar} />
    </header>
  );
};
