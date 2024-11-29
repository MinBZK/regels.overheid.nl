import { defaultMetaData } from '@/common/default-metadata';
import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import * as CardStandard from './card-standard';
import { ContainerMethod } from '@/components/container-method';

export default function StandaardenPage() {
  return (
    <main>
      <Container>
        <Typography variant="h1">Standaarden</Typography>
        <RemotePage page="standaarden" />
      </Container>
      <ContainerMethod>
        <CardStandard.Root title="Wetsanalyse" method="Wetsanalyse_1">
          Specificatie van het <b>juridisch analyseschema</b> (JAS) dat gebruikt wordt bij Wetsanalyse en waarin
          verschillende juridische elementen die in wetgeving voorkomen in samenhang gerangschikt zijn.
        </CardStandard.Root>
        <CardStandard.Root
          title="Wetsuitvoering"
          variant="work-in-progress"
          url="/standaarden/wetsuitvoering"
        >
          Specificatie van het <b>juridisch referentiemodel</b> (JRM) dat met scenario&apos;s beschrijft hoe een burger
          of bedrijf een bepaald stuk wet- en regelgeving ervaart of doorloopt in de wetsuitvoering.
        </CardStandard.Root>
        <CardStandard.Root title="DCAT" variant="work-in-progress" url="/standaarden/dcat-ap-ronl">
          DCAT-AP is een Europese specificatie voor het beschrijven van datasets van de publieke sector, gebaseerd op
          W3C&apos;s Data Catalogue Vocabulary (DCAT).
        </CardStandard.Root>
        <CardStandard.Root title="De Legitimaat" method="De LegitiMaat">
          Een werkmethode voor het doen van onderzoek door derden naar het gebruik van algoritmen door een
          overheidsorganisatie.
        </CardStandard.Root>
        <CardStandard.Root
          title="Algoritmes Publicatiestandaard"
          url="/standaarden/algoritmeregister-publicatiestandaard"
        >
          Bevat de publicatiestandaard van het Algoritmeregister. Het is bedoeld om overheidsorganisaties te helpen bij
          het invullen.
        </CardStandard.Root>
        <CardStandard.Root
          variant="work-in-progress"
          title="Levensgebeurtenissen SIVI AFS"
          url="/standaarden/levensgebeurtenissen-sivi-afs"
        >
          Bevat de standaardisatie van levensgebeurtenissen en signalen in de SIVI All Finance Standaard (SIVI AFS)
        </CardStandard.Root>
        <CardStandard.Root
          variant="work-in-progress"
          title="WetsTaal Handreiking"
          url="/standaarden/wetstaal"
        >
          De syntax en semantiek van de logisch formele, declaratieve en breed begrijpelijke taal
        </CardStandard.Root>
        <CardStandard.Root title="Harmonisator" variant="unavailable" />
        <CardStandard.Root title="FLINT" variant="unavailable" />
      </ContainerMethod>
    </main>
  );
}

export const generateMetadata = defaultMetaData('publicaties');
