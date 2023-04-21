import { Button, Stack, Typography } from '@mui/material';
import { IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Four04IllustrationMobile from './404-illustration-mobile.svg';

export const Four04MessageMobile = () => {
  const router = useRouter();
  return (
    <Stack>
      <Typography fontSize={28} color="primary.main" textAlign="center">
        Fout 404
      </Typography>
      <Image
        src={Four04IllustrationMobile}
        alt="404"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Typography fontSize={34} color="primary.dark" textAlign="center">
        Pagina niet gevonden
      </Typography>
      <Typography fontSize={16} color="common.black" textAlign="center">
        Helaas is dit niet de pagina waarnaar je op zoek was. Ga alsjeblieft door met zoeken binnen de wettelijke
        grenzen.
      </Typography>
      <Button variant="text" onClick={router.back} startIcon={<IconArrowLeft />}>
        Terug
      </Button>
    </Stack>
  );
};
