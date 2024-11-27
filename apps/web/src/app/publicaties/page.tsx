import { defaultMetaData } from '@/common/default-metadata';
import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import * as CardPublication from './card-publication';
import { ContainerMethod } from '@/components/container-method';

export default function PublicatiesPage() {
  return (
    <main>
      <Container>
        <Typography variant="h1">Publicaties</Typography>
        <RemotePage page="publicaties" />
      </Container>
      <ContainerMethod>
        <CardPublication.Root title="Wetsanalyse" method="Wetsanalyse_1">
          Specificatie van het <b>juridisch analyseschema</b> (JAS) dat gebruikt wordt bij Wetsanalyse en waarin
          verschillende juridische elementen die in wetgeving voorkomen in samenhang gerangschikt zijn.
        </CardPublication.Root>
        <CardPublication.Root
          title="Wetsuitvoering"
          variant="work-in-progress"
          url="https://minbzk.github.io/wetsuitvoering/"
        >
          Specificatie van het <b>juridisch referentiemodel</b> (JRM) dat met scenario&apos;s beschrijft hoe een burger
          of bedrijf een bepaald stuk wet- en regelgeving ervaart of doorloopt in de wetsuitvoering.
        </CardPublication.Root>
        <CardPublication.Root title="DCAT" variant="work-in-progress" url="/publicaties/dcat-ap-ronl">
          DCAT-AP is een Europese specificatie voor het beschrijven van datasets van de publieke sector, gebaseerd op
          W3C&apos;s Data Catalogue Vocabulary (DCAT).
        </CardPublication.Root>
        <CardPublication.Root title="De Legitimaat" method="De LegitiMaat">
          Een werkmethode voor het doen van onderzoek door derden naar het gebruik van algoritmen door een
          overheidsorganisatie.
        </CardPublication.Root>
        <CardPublication.Root
          title="Algoritmes Publicatiestandaard"
          url="/publicaties/algoritmeregister-publicatiestandaard"
        >
          Bevat de publicatiestandaard van het Algoritmeregister. Het is bedoeld om overheidsorganisaties te helpen bij
          het invullen.
        </CardPublication.Root>
        <CardPublication.Root
          variant="work-in-progress"
          title="Levensgebeurtenissen SIVI AFS"
          url="/publicaties/levensgebeurtenissen-sivi-afs"
        >
          Bevat de standaardisatie van levensgebeurtenissen en signalen in de SIVI All Finance Standaard (SIVI AFS)
        </CardPublication.Root>
        <CardPublication.Root
          variant="work-in-progress"
          title="WetsTaal Handreiking"
          url="https://minbzk.github.io/wetstaal/"
        >
          De syntax en semantiek van de logisch formele, declaratieve en breed begrijpelijke taal
        </CardPublication.Root>
        <CardPublication.Root title="Harmonisator" variant="unavailable" />
        <CardPublication.Root title="FLINT" variant="unavailable" />
      </ContainerMethod>
    </main>
  );
}

export const generateMetadata = defaultMetaData('publicaties');
