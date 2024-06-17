import { Button } from '@/components/button';
import { Card } from '@/components/card';
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

      <Card className="mt-8">
        <Typography component={NextLink} href="/register/indInkToesl" variant="h3">
          Individuele inkomenstoeslag - regelgroepen in ALEF
        </Typography>
        <Typography variant="p">
          Verzameling regels voor &quot;Individuele inkomenstoeslag&quot; - Gemeente Utrecht Betreft het object:
          &quot;Aanvraag&quot; Drie regelgroepen met in ALEF uitgewerkte HTML pagina&apos;s. Bronnen:{' '}
          <Link href="https://pki.utrecht.nl/Loketproduct/0c17f7cd409dc999eb351883a138ca3d">
            https://pki.utrecht.nl/Loketproduct/0c17f7cd409dc999eb351883a138ca3d
          </Link>{' '}
          Individuele inkomenstoeslag aanvragen{' '}
          <Link href="https://lokaleregelgeving.overheid.nl">https://lokaleregelgeving.overheid.nl</Link> CVDR642743
          Beleidsregel Individuele Inkomenstoeslag gemeente Utrecht
        </Typography>
        <div className="mt-4 flex justify-end">
          <Button component={NextLink} endIcon={<IconArrowRight />} href="/register/indInkToesl">
            Lees meer
          </Button>
        </div>
      </Card>
    </Container>
  );
}
