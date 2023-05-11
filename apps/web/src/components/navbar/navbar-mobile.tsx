import Logo from '@/assets/logo.png';
import { Button, Modal, Stack, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { IconMenu2 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from '../container';
import { SubComponentProps } from '../navbar';

export const NavbarMobile: React.FC<SubComponentProps> = ({ pages, isPageActive }) => {
  const { palette } = useTheme();
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [asPath]);

  return (
    <Container borderBottom="8px solid" borderColor="primary.light" pt={0} pb={0} height={94}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" position="relative" component="nav">
        <Image src={Logo} alt="regels.overheid.nl logo" width={170} />
        <Button
          onClick={() => setOpen(!open)}
          variant="outlined"
          startIcon={<IconMenu2 color={palette.primary.dark} />}
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
