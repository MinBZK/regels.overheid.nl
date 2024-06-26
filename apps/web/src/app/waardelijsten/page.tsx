import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Card } from './card';
import { Typography } from '@/components/typography';

export default function WaardelijstenPage() {
  return (
    <Container>
      <Typography variant="h1">Waardelijsten</Typography>
      <RemotePage page="waardelijsten" />
      <div className="mt-16 grid gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3">
        <Card title="ronl:Analysis" file="ronl:analysis.json">
          Deze taxonomie bevat concepten die de gebruikte (wets)analyse van een ronl:RulesSet beschrijven.
        </Card>
        <Card title="ronl:Method" file="ronl:method.json">
          Deze taxonomie bevat concepten die de gebruikte methode en/of techniek van een ronl:RulesSet beschrijven.
        </Card>
        <Card title="ronl:License" file="ronl:license.json">
          Bevat termen die het type van een ronl:Distribution beschrijven.
        </Card>
        <Card title="ronl:SpecificationType" file="ronl:specification-type.json">
          Bevat termen die het type van een ronl:Distribution beschrijven.
        </Card>
      </div>
    </Container>
  );
}
