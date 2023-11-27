import { Link } from '@/components/link';
import { RoadmapQuarterCardProps } from './roadmap-quarter-card';

export const roadmap2024: RoadmapQuarterCardProps['items'][] = [
  [
    ['design', 'Uitwerking Design System met design tokens & annotaties'],
    ['design', 'Interactive prototype'],
    ['linked data', 'Apache Jena Fuseki SPARQL server'],
    ['devops', 'Multistack website én regelbank obv Gemeenschappelijke datacatalogus (GDC)'],
  ],
  [
    [
      'devops',
      <>
        Doorontwikkeling{' '}
        <Link component="a" href="https://xml-annotate.live.wem.io/">
          Low Code Widget voor annotatie
        </Link>
      </>,
    ],
    [
      'content management',
      <>
        Eerste versie{' '}
        <Link component="a" href="https://minbzk.github.io/dcat-ap-ronl/">
          applicatie profiel
        </Link>{' '}
        van de{' '}
        <Link
          component="a"
          href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/211"
        >
          Europese DCAT-AP standaard
        </Link>{' '}
        voor uitwisseling met regels.overheid.nl
      </>,
    ],
    ['design', 'Validatie (Testen)'],
    ['devops', 'Minimum viable product'],
    [
      'linked data',
      <>
        XML import{' '}
        <Link component="a" href="https://linkeddata.overheid.nl/front/portal/">
          LiDO
        </Link>
      </>,
    ],
  ],
  [
    [
      'devops',
      <>
        Fair Web Analytics obv{' '}
        <Link component="a" href="https://www.offen.dev/">
          offen.dev
        </Link>
      </>,
    ],
    ['content management', 'Creatie & publicatie proces'],
    ['content management', 'Inrichten governance structuur'],
  ],
  [['content management', 'Redactie proces op basis van governance structuur']],
];
