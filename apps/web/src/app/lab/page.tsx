import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Link } from '@/components/link';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { LabItemCard } from './lab-item-card';

export default async function LabPage() {
  return (
    <>
      <Container>
        <Typography variant="h1">Lab</Typography>
        <RemotePage page="lab" />
      </Container>
      <Container bleed className="mt-20 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
      <LabItemCard
          title="Open GDC Regelregister"
          icon="icon-file-database"
          description="De GDC is in essentie een publicatieplatform voor overheden om actieve en passieve openbaarmaking van data, documenten en informatieproducten te ondersteunen. De live demo bevat een prototpe voor Open Regels"
          demo="https://regels.dexcat.nl/"
          docs="http://opengdc.nl"
          repo="https://gitlab.com/xpertselect/portals"
          licenseVariant="MIT License"
          license="https://opensource.org/license/mit"
        />
        <LabItemCard
          method="FLINT"
          title="Norm Editor"
          icon="icon-eye-edit"
          licenseVariant="Apache License 2.0"
          demo="https://regels.overheid.nl/lab/interpretation-editor/"
          repo="https://gitlab.com/normativesystems/ui/interpretation-editor"
          license="https://gitlab.com/normativesystems/ui/interpretation-editor/-/blob/main/LICENSE?ref_type=heads"
          description="Norm Editor is een applicatie, gebouwd met behulp van webgebaseerde technologieën, waarmee een gebruiker op een gebruiksvriendelijke en interactieve manier interpretaties van normen in FLINT kan creëren."
        />
        <LabItemCard
          method="Wetsanalyse_1"
          title="Legal Annotation Tool"
          icon="icon-eye-edit"
          licenseVariant="EU PL 1.2 license"
          demo="https://regels.overheid.nl/lab/legal-annotation-tool"
          docs="http://regels.overheid.nl/docs/lab/legal-annotation-tool/INTRODUCTIE"
          repo="https://github.com/MinBZK/HvA-legal-annotation-tool-gzp"
          license="https://github.com/MinBZK/regels.overheid.nl/blob/main/LICENSE.md"
          description="Voor de opleiding HBO-ICT aan de Hogeschool van Amsterdam is door 5 studententeams in één semester gewerkt aan het bouwen van tooling voor Wetsanalyse. De beschikbaar gestelde applicatie is het eindproduct van het team Galactische Zakenpartners dat zonder nadere kwaliteitsslag en/of gebruikerstesten anderszins hier is deployed."
        />
        <LabItemCard
          method="Wetsanalyse_2"
          title="JAS Annotatie Tool"
          icon="icon-eye-edit"
          licenseVariant="EU PL 1.2 license"
          demo="https://regels.overheid.nl/lab/jas-annotatie-tool/"
          docs="http://regels.overheid.nl/docs/lab/jas-annotatie-tool"
          repo="https://github.com/MinBZK/HvA-legal-annotation-tool-frontend-json"
          license="https://github.com/MinBZK/regels.overheid.nl/blob/main/LICENSE.md"
          description="Voor de opleiding HBO-ICT aan de Hogeschool van Amsterdam is door 5 studententeams in één semester gewerkt aan het bouwen van tooling voor Wetsanalyse. De beschikbaar gestelde applicatie is het eindproduct van het team JSON dat zonder nadere kwaliteitsslag en/of gebruikerstesten anderszins hier is deployed."
        />
        <LabItemCard
          title="Yasgui SPARQL editor"
          icon="icon-api-app"
          description="Apache Jena is een open source semantisch webframework voor Java. Het biedt een API om regelspecificaties te extraheren uit en te schrijven naar RDF-graphs. Yasgui biedt diverse geavanceerde functies voor het maken, delen en visualiseren van SPARQL-query's en hun resultaten."
          demo="https://regels.overheid.nl/lab/sparql/ui/"
          docs="https://docs.triply.cc/yasgui/"
          repo="https://github.com/TriplyDB/Yasgui"
          licenseVariant="MIT License"
          license="https://opensource.org/license/mit"
        />
        <LabItemCard
          variant="coming-soon"
          title="Bold Form Builder"
          icon="icon-forms"
          description="Ontwerp conditionele BOLD formulieren sneller en consistenter"
        />
        <Card className="flex flex-col items-center justify-center">
          <Typography variant="large" className="text-center">
            Wil je jouw eigen tool ook op deze pagina zien?
          </Typography>
          <Typography className="text-center">
            Neem dan contact op met{' '}
            <Link component="a" href="mailto:steven.gort@ictu.nl" className="underline">
              Steven Gort.
            </Link>
          </Typography>
        </Card>
      </Container>
    </>
  );
}

