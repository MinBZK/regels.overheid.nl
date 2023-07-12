import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { Metadata } from 'next';
import { PublicationCard } from './publication-card';

export default function PublicatiesPage() {
  return (
    <main>
      <Container>
        <Typography variant="h1">Publicaties</Typography>
        <RemotePage page="publicaties" />
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
