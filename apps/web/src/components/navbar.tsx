import { Box } from '@mui/material';

import { NavbarDesktop } from './navbar/navbar-desktop';
import { NavbarMobile } from './navbar/navbar-mobile';

export const Navbar: React.FC = () => {
  return (
    <>
      <Box display={['block', 'none']}>
        <NavbarMobile />
      </Box>
      <Box display={['none', 'block']}>
        <NavbarDesktop />
      </Box>
    </>
  );
};
