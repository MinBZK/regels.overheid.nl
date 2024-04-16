import { Container } from '@/components/container';
import { getNavbarPages } from '@/services/cms/get-navbar-pages';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './logo.png';
import { MenuContext } from './menu-context';
import { MenuDesktop } from './menu-desktop';
import { MenuMobile, MenuToggle } from './menu-mobile';

export interface Page {
  id: number;
  name: string;
  slug: string;
}

export const Header: React.FC = async () => {
  const pages = await getNavbarPages();

  return (
    <header role="banner" className="relative w-full border-b-8 border-primary-light">
      <Container className="flex h-24 items-center justify-between sm:h-auto">
        <Link className="relative aspect-[540/190] w-[170px] sm:w-[300px]" href="/">
          <Image src={Logo} alt="regels.overheid.nl logo" />
        </Link>
        <MenuContext>
          <MenuToggle />
          <MenuMobile pages={pages} />
        </MenuContext>
      </Container>
      <MenuDesktop pages={pages} />
    </header>
  );
};
