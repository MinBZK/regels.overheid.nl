import { Page } from '@/services/cms/get-pages';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import { NavbarDesktop } from './navbar/navbar-desktop';
import { NavbarMobile } from './navbar/navbar-mobile';
import { usePagesContext } from './pages-provider';

export interface SubComponentProps {
  pages: Page[];
  isPageActive: (page: Page) => boolean;
}

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { pages } = usePagesContext();

  const isPageActive = (page: Page) => {
    if (page.attributes.slug === 'home') return router.pathname === '/';

    return router.asPath === `/${page.attributes.slug}`;
  };

  const sortedPages = pages.sort((a, b) => (a.attributes.order || 9000) - (b.attributes.order || 9000));

  return (
    <>
      <Box display={['block', 'none']}>
        <NavbarMobile isPageActive={isPageActive} pages={sortedPages} />
      </Box>
      <Box display={['none', 'block']}>
        <NavbarDesktop isPageActive={isPageActive} pages={sortedPages} />
      </Box>
    </>
  );
};
