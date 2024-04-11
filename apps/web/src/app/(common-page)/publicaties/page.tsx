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
      <Container className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2">
        <PublicationCard
          title="De Legitimaat"
          tag="Algoritme"
          url="/publicaties/legitimaat"
          description="Een werkmethode voor het doen van onderzoek door derden naar het gebruik van algoritmen door een overheidsorganisatie."
          method="De LegitiMaat"
        />
        <PublicationCard
          title="DCAT"
          tag="Work in progress"
          variant="wip"
          url="/publicaties/dcat-ap-ronl"
          description="DCAT-AP is een Europese specificatie voor het beschrijven van datasets van de publieke sector, gebaseerd op W3C's Data Catalogue Vocabulary (DCAT)."
        />
        <PublicationCard
          title="Wetsanalyse"
          tag="Work in progress"
          variant="wip"
          url="https://minbzk.github.io/wetsanalyse/"
          description="Publicatie van het juridisch analyseschema dat gebruikt wordt bij Wetsanalyse en waarin verschillende juridische elementen die in wetgeving voorkomen in samenhang gerangschikt zijn."
          method="Wetsanalyse"
        />
        <PublicationCard
          title="WetsTaal Handreiking"
          tag="Work in progress"
          variant="wip"
          url="https://diederikd.github.io/wetstaal_1_documentatie/"
          description="De syntax en semantiek van de logisch formele, declaratieve en breed begrijpelijke taal."
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
