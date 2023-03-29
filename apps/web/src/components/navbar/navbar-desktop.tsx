import Logo from '@/assets/logo.png';
import { Page } from '@/services/cms/get-pages';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../container';
import { usePagesContext } from '../pages-provider';

export const NavbarDesktop: React.FC = () => {
  const { pages } = usePagesContext();
  const router = useRouter();

  const isPageActive = (page: Page) => {
    if (page.attributes.slug === 'home') return router.pathname === '/';

    return router.query.slug === page.attributes.slug;
  };

  return (
    <Stack>
      <Container p={0}>
        <Image src={Logo} alt="regels.overheid.nl logo" width={300} />
      </Container>
      <Box bgcolor="primary.main" height={70} borderBottom="8px solid" borderColor="primary.light">
        <Container p={0} height="100%">
          <Stack direction="row" columnGap={1} alignItems="center">
            {pages.map((page) => (
              <Box
                px={2}
                key={page.id}
                height="100%"
                display="flex"
                component={Link}
                alignItems="center"
                href={page.attributes.slug === 'home' ? '/' : page.attributes.slug}
                sx={{
                  color: 'common.white',
                  textDecoration: 'none',
                  ':hover': {
                    color: 'primary.main',
                    bgcolor: 'primary.light',
                  },
                  ...(isPageActive(page) && {
                    color: 'common.black',
                    backgroundColor: 'primary.light',
                  }),
                }}
              >
                <Typography color="inherit" fontSize={20}>
                  {page.attributes.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};
