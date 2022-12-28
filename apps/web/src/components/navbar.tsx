import { AppBar, Box, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { selectPages } from '../stores/redux/pages/selectors';
import { Container } from './container';

interface NavbarItemProps extends React.PropsWithChildren {
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, href }) => {
  const { palette } = useTheme();

  return (
    <Box
      px={1}
      sx={{
        '&:hover': { background: palette.primary.light, a: { color: palette.common.black } },
        a: { textDecoration: 'none', color: palette.common.white },
      }}
    >
      <Link href={href}>
        <Typography component="span" display="flex" alignItems="center" color="inherit" height="100%" fontSize={20}>
          {children}
        </Typography>
      </Link>
    </Box>
  );
};

export const Navbar: React.FC = () => {
  const pages = useSelector(selectPages);

  return (
    <AppBar
      sx={{ mt: '119px' }}
      position="relative
    "
    >
      <Container flex={1}>
        <Box display="flex" alignItems="stretch">
          {pages?.map(({ attributes, id }) => {
            const href = attributes?.slug === 'home' ? '' : attributes?.slug;

            return (
              <NavbarItem key={id} href={`/${href}`}>
                {attributes?.name}
              </NavbarItem>
            );
          })}

          <NavbarItem href="/methoden">Methoden</NavbarItem>
        </Box>
      </Container>
    </AppBar>
  );
};
