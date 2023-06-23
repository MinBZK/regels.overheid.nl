import { PublicationCard } from '@/components/card/publication-card';
import { Container } from '@/components/container';
import { Metadata } from 'next';

export default function PublicatiesPage() {
  return (
    <>
      <Container>
        <h1 className="font-bold text-4xl mb-12 text-primary-dark">Publicaties</h1>
        <h2 className="font-bold text-3xl mb-6 text-primary-main">Over alle publicaties</h2>
        <p className="text-base mb-16">
          De ReSpec publicaties bieden inzicht en waardevolle kennis over diverse vakgebieden. Onze publicaties zijn
          geschreven door vooraanstaande experts en dragen bij aan de ontwikkeling en vooruitgang van het bijbehorende
          vakgebied.
        </p>
      </Container>
      <Container bleed>
        <section className="grid md:grid-cols-2 gap-x-6 gap-y-12">
          <PublicationCard
            url="/publicaties/de-legitimaat"
            tag="Algoritme"
            title="De Legitimaat"
            description="Een werkmethode voor het doen van onderzoek door derden naar het gebruik van algoritmen door een overheidsorganisatie."
          />
          <PublicationCard title="DCAT" disabled />
          <PublicationCard title="Harmonisator" disabled />
          <PublicationCard title="Calculemus Protocol" disabled />
        </section>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Publicaties',
};
