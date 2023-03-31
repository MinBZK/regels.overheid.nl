import { Page } from '@/services/cms/get-pages';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import { NavbarDesktop } from './navbar/navbar-desktop';
import { NavbarMobile } from './navbar/navbar-mobile';
import { usePagesContext } from './pages-provider';

export interface SubComponentProps {
  isPageActive: (page: Page) => boolean;
}

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { pages } = usePagesContext();

  const isPageActive = (page: Page) => {
    if (page.attributes.slug === 'home') return router.pathname === '/';

    return router.asPath === `/${page.attributes.slug}`;
  };
  return (
    <>
      <Box display={['block', 'none']}>
        <NavbarMobile isPageActive={isPageActive} />
      </Box>
      <Box display={['none', 'block']}>
        <NavbarDesktop isPageActive={isPageActive} />
      </Box>
    </>
  );
};
