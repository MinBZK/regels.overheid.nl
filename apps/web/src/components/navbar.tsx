import { AppBar, Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import Logo from '../assets/logo.png';
import { selectPages } from '../stores/redux/pages/selectors';
import { Container } from './container';

interface NavbarItemProps extends React.PropsWithChildren {
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, href }) => {
  const { palette } = useTheme();

  return (
    <Box
      ml={-1}
      sx={{
        '&:hover': { background: palette.primary.light, a: { color: palette.common.black } },
        a: { textDecoration: 'none', color: palette.common.white },
      }}
    >
      <Link href={href}>
        <Typography
          px={1}
          fontSize={20}
          height="100%"
          display="flex"
          color="inherit"
          component="span"
          alignItems="center"
        >
          {children}
        </Typography>
      </Link>
    </Box>
  );
};

export const Navbar: React.FC = () => {
  const pages = useSelector(selectPages);

  return (
    <Stack>
      <Container>
        <Image src={Logo} alt="regels.overheid.nl logo" height={100} />
      </Container>
      <AppBar sx={{ position: 'relative' }}>
        <Container flex={1}>
          <Stack direction="row" alignItems="stretch" columnGap={1}>
            {pages?.map(({ attributes, id }) => {
              const href = attributes?.slug === 'home' ? '' : attributes?.slug;

              return (
                <NavbarItem key={id} href={`/${href}`}>
                  {attributes?.name}
                </NavbarItem>
              );
            })}

            <NavbarItem href="/methoden">Methoden</NavbarItem>
          </Stack>
        </Container>
      </AppBar>
    </Stack>
  );
};
