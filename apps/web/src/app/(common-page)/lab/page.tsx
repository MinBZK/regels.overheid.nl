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
          title="Norm Editor"
          icon="icon-eye-edit"
          licenseVariant="Apache License 2.0"
          demo="https://regels.overheid.nl/lab/interpretation-editor/"
          repo="https://gitlab.com/normativesystems/ui/interpretation-editor"
          license="https://gitlab.com/normativesystems/ui/interpretation-editor/-/blob/main/LICENSE?ref_type=heads"
          description="Norm Editor is een applicatie, gebouwd met behulp van webgebaseerde technologieën, waarmee een gebruiker op een gebruiksvriendelijke en interactieve manier interpretaties van normen in FLINT kan creëren."
        />
        <LabItemCard
          title="Apache Jena Fuseki"
          icon="icon-api-app"
          description="Apache Jena is een open source semantisch webframework voor Java. Het biedt een API om regelspecificaties te extraheren uit en te schrijven naar RDF-graphs."
          demo="https://regels.overheid.nl/sparql"
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
