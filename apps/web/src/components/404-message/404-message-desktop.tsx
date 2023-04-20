import { Button, Stack, Typography } from '@mui/material';
import { IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Four04IllustrationDesktop from './404-illustration-desktop.svg';

export const Four04MessageDesktop = () => {
  const router = useRouter();

  return (
    <Stack direction="row" columnGap={10} justifyContent="center" height="100%" pt={10}>
      <Image
        src={Four04IllustrationDesktop}
        alt="404"
        sizes="100vw"
        style={{
          width: '33%',
          height: 'auto',
        }}
      />
      <Stack justifyContent="center" spacing={3}>
        <Typography fontSize={32} color="primary.main" textAlign="center">
          Fout 404
        </Typography>

        <Typography fontSize={62} color="primary.dark" textAlign="center">
          Pagina niet gevonden
        </Typography>
        <Typography fontSize={20} color="common.black" textAlign="center">
          Helaas is dit niet de pagina waarnaar je op zoek was. Ga alsjeblieft door met zoeken binnen de wettelijke
          grenzen.
        </Typography>
        <Button variant="text" onClick={router.back} startIcon={<IconArrowLeft />}>
          Terug
        </Button>
      </Stack>
    </Stack>
  );
};
