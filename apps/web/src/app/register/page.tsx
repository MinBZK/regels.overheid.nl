import { Button } from '@/components/button';
import { CardLegacy } from '@/components/card-legacy';
import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { IconArrowRight } from '@tabler/icons-react';
import NextLink from 'next/link';

export default function RegisterPage() {
  return (
    <Container className="mb-16">
      <Typography variant="h1">Register</Typography>
      <RemotePage page="register" />

      <CardLegacy className="mt-8">
        <Typography component={NextLink} href="/register/indInkToesl" variant="h3">
          Individuele inkomenstoeslag - regelgroepen in ALEF
        </Typography>
        <Typography variant="p">
          Verzameling regels voor &quot;Individuele inkomenstoeslag&quot; - Gemeente Utrecht Betreft het object:
          &quot;Aanvraag&quot; Drie regelgroepen met in ALEF uitgewerkte HTML pagina&apos;s. Bronnen:{' '}
          <Link href="https://loket.digitaal.utrecht.nl/nl/form/individuele-inkomenstoeslag-aanvragen/startpagina">
            https://loket.digitaal.utrecht.nl/nl/form/individuele-inkomenstoeslag-aanvragen/startpagina
          </Link>{' '}
          Individuele inkomenstoeslag aanvragen{' '}
          <Link href="http://lokaleregelgeving.overheid.nl/CVDR642743">
            http://lokaleregelgeving.overheid.nl/CVDR642743
          </Link>
          Beleidsregel Individuele Inkomenstoeslag gemeente Utrecht
        </Typography>
        <div className="mt-4 flex justify-end">
          <Button component={NextLink} endIcon={<IconArrowRight />} href="/register/indInkToesl">
            Lees meer
          </Button>
        </div>
      </CardLegacy>
    </Container>
  );
}
