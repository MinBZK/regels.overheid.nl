import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { Metadata } from 'next';
import { PublicationCard } from './publication-card';

export default function PublicatiesPage() {
  return (
    <main>
      <Container>
        <Typography variant="h1">Publicaties</Typography>
        <Typography variant="h2">Over alle publicaties</Typography>
        <Typography>
          De ReSpec publicaties bieden inzicht en waardevolle kennis over diverse vakgebieden. Onze publicaties zijn
          geschreven door vooraanstaande experts en dragen bij aan de ontwikkeling en vooruitgang van het bijbehorende
          vakgebied.
        </Typography>
      </Container>
      <Container bleed className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2">
        <PublicationCard
          url="/publicaties/de-legitimaat"
          tag="Algoritme"
          title="De Legitimaat"
          description="Een werkmethode voor het doen van onderzoek door derden naar het gebruik van algoritmen door een overheidsorganisatie."
        />
        <PublicationCard
          title="DCAT"
          variant="wip"
          description="DCAT-AP is een Europese specificatie voor het beschrijven van datasets van de publieke sector, gebaseerd op W3C's Data Catalogue Vocabulary (DCAT)."
        />
        <PublicationCard title="Harmonisator" variant="unavailable" />
        <PublicationCard title="Calculemus Protocol" variant="unavailable" />
      </Container>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Publicaties',
};
