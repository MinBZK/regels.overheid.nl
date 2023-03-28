import Logo from '@/assets/logo.png';
import { Page } from '@/services/cms/get-pages';
import { MenuIcon } from '@/theme/icons/menu-icon';
import { Button, Modal, Stack, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container } from '../container';
import { usePagesContext } from '../pages-provider';

export const NavbarMobile: React.FC = () => {
  const router = useRouter();
  const { palette } = useTheme();
  const { pages } = usePagesContext();
  const [open, setOpen] = useState(false);

  const isPageActive = (page: Page) => {
    if (page.attributes.slug === 'home') return router.pathname === '/';

    return router.query.slug === page.attributes.slug;
  };

  return (
    <Container borderBottom="8px solid" borderColor="primary.light" pt={0} pb={0} height={94}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" position="relative" component="nav">
        <Image src={Logo} alt="regels.overheid.nl logo" width={170} />
        <Button
          onClick={() => setOpen(!open)}
          variant="outlined"
          startIcon={<MenuIcon stroke={palette.primary.dark} />}
          sx={{
            width: '96px',
            height: '56px',
            color: 'primary.dark',
            borderColor: 'primary.dark',
            backgroundColor: 'primary.light',
          }}
        >
          Menu
        </Button>
        <Modal open={open} hideBackdrop sx={{ top: '94px', overflowY: 'scroll' }}>
          <Stack rowGap={1} minHeight="100%" p={1} bgcolor="primary.main">
            {pages.map((page) => (
              <Typography
                component={Link}
                href={page.attributes.slug === 'home' ? '/' : page.attributes.slug}
                key={page.id}
                color="common.white"
                borderColor="common.black"
                sx={{
                  textDecoration: 'none',
                  ':focus': {
                    outline: 'none',
                    color: 'primary.dark',
                    backgroundColor: 'primary.light',
                  },
                  ...(isPageActive(page) && {
                    border: `1px solid`,
                    color: 'common.black',
                    backgroundColor: 'primary.light',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }),
                }}
              >
                <Container padding={0}>
                  <Box
                    px={2}
                    py={3}
                    fontSize={20}
                    color="common.white"
                    component={Typography}
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {page.attributes.name}
                  </Box>
                </Container>
              </Typography>
            ))}
          </Stack>
        </Modal>
      </Stack>
    </Container>
  );
};
