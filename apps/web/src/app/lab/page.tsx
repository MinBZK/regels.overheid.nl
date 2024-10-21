import { defaultMetaData } from '@/common/default-metadata';
import { Container } from '@/components/container';
import { ContainerMethod } from '@/components/container-method';
import { Link } from '@/components/link';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import * as Card from '../../components/card';
import * as CardLab from './card-lab';

export default async function LabPage() {
  return (
    <>
      <Container>
        <Typography variant="h1">Lab</Typography>
        <RemotePage page="lab" />
      </Container>
      <ContainerMethod>
        <CardLab.Root title="Yasgui SPARQL editor">
          Apache Jena is een open source semantisch webframework voor Java. Het biedt een API om regelspecificaties te
          extraheren uit en te schrijven naar RDF-graphs. Yasgui biedt diverse geavanceerde functies voor het maken,
          delen en visualiseren van SPARQL-query&apos;s en hun resultaten.
          <CardLab.MethodItems>
            <CardLab.License label="MIT License" href="https://opensource.org/license/mit" />
            <CardLab.Repo href="https://github.com/TriplyDB/Yasgui" />
            <CardLab.Docs href="https://docs.triply.cc/yasgui/" />
            <CardLab.Demo href="https://regels.overheid.nl/lab/sparql/ui/" />
          </CardLab.MethodItems>
        </CardLab.Root>
        <CardLab.Root title="AOW microservice">
          De AOW leeftijd, wanneer ga je met pensioen, is van belang voor arbeidsrecht in de ketenregeling. Met deze
          microservice illustreren we een landelijke service voor de bepaling van de AOW leeftijd.
          <CardLab.MethodItems>
            <CardLab.License label="MIT License" href="https://opensource.org/license/mit" />
            <CardLab.Demo href="https://regels.overheid.nl/lab/aow-leeftijd/resultaat" />
            <CardLab.Repo href="https://github.com/MinBZK/regels.overheid.nl/blob/main/apps/register/concordialegal/AOW/FlaskAOW.py" />
            <CardLab.Docs href="https://regels.overheid.nl/docs/lab/AOW" />
          </CardLab.MethodItems>
        </CardLab.Root>
        <CardLab.Root title="Open GDC Regelregister">
          De GDC is in essentie een publicatieplatform voor overheden om actieve en passieve openbaarmaking van data,
          documenten en informatieproducten te ondersteunen. De live demo bevat een prototpe voor Open Regels
          <CardLab.MethodItems>
            <CardLab.License label="MIT License" href="https://opensource.org/license/mit" />
            <CardLab.Demo href="https://regels.dexcat.nl/" />
            <CardLab.Repo href="https://gitlab.com/xpertselect/portals" />
            <CardLab.Docs href="http://opengdc.nl" />
          </CardLab.MethodItems>
        </CardLab.Root>
        <CardLab.Root title="Norm Editor" method="FLINT">
          Norm Editor is een applicatie, gebouwd met behulp van webgebaseerde technologieën, waarmee een gebruiker op
          een gebruiksvriendelijke en interactieve manier interpretaties van normen in FLINT kan creëren.
          <CardLab.MethodItems>
            <CardLab.License
              label="Apache License 2.0"
              href="https://gitlab.com/normativesystems/ui/interpretation-editor/-/blob/main/LICENSE?ref_type=heads"
            />
            <CardLab.Repo href="https://gitlab.com/normativesystems/ui/interpretation-editor" />
          </CardLab.MethodItems>
        </CardLab.Root>
        <CardLab.Root title="Legal Annotation Tool" method="Wetsanalyse_1">
          Voor de opleiding HBO-ICT aan de Hogeschool van Amsterdam is door studententeams tooling voor Wetsanalyse
          gebouwd. Er is een Responsible Disclosure Melding ontvangen die in onderzoek is. Als gevolg daarvan is de tool
          offline gehaald totdat een patch beschikbaar is.
          <CardLab.MethodItems
            override={{
              docs: '/docs/lab/legal-annotation-tool/INTRODUCTIE',
            }}
          >
            <CardLab.License
              label="EU PL 1.2 license"
              href="https://github.com/MinBZK/regels.overheid.nl/blob/main/LICENSE.md"
            />
            <CardLab.Repo href="https://github.com/MinBZK/HvA-legal-annotation-tool-gzp" />
          </CardLab.MethodItems>
        </CardLab.Root>
        <CardLab.Root title="JAS Annotatie Tool" method="Wetsanalyse_2">
          Voor de opleiding HBO-ICT aan de Hogeschool van Amsterdam is door studententeams tooling voor Wetsanalyse
          gebouwd. De beschikbaar gestelde applicatie is het eindproduct van het team JSON dat zonder nadere
          kwaliteitsslag hier is deployed.
          <CardLab.MethodItems
            override={{
              demo: 'https://regels.overheid.nl/lab/jas-annotatie-tool/',
              docs: '/docs/lab/jas-annotatie-tool',
            }}
          >
            <CardLab.License
              label="EU PL 1.2 license"
              href="https://github.com/MinBZK/regels.overheid.nl/blob/main/LICENSE.md"
            />
            <CardLab.Repo href="https://github.com/MinBZK/HvA-legal-annotation-tool-frontend-json" />
          </CardLab.MethodItems>
        </CardLab.Root>
        <Card.Root>
          <Card.Title>Form Builder</Card.Title>
          <Card.Content>
            <Typography>Ontwerp conditionele BOLD formulieren sneller en consistenter</Typography>
            <Card.Footer>Binnenkort beschikbaar</Card.Footer>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Title>Wil je jouw eigen tool ook op deze pagina zien?</Card.Title>
          <Card.Content>
            <Typography>
              Neem dan contact op met{' '}
              <Link component="a" href="mailto:steven.gort@ictu.nl" className="underline">
                Steven Gort.
              </Link>
            </Typography>
          </Card.Content>
        </Card.Root>
      </ContainerMethod>
    </>
  );
}

export const generateMetadata = defaultMetaData('lab');
