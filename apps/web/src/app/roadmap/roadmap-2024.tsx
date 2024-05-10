import { Link } from '@/components/link';
import { RoadmapQuarterCardProps } from './roadmap-quarter-card';

export const roadmap2024: RoadmapQuarterCardProps['items'][] = [
  [
    ['design', 'Interactive prototype'],
    ['devops', 'Beta navigatie Interactive prototype'],
    ['devops', 'Docusaurus voor interactive protoype'],
    [
      'devops',
      <>
        Onboarding{' '}
        <Link component="a" href="https://digilab.overheid.nl/">
          Digilab
        </Link>
      </>,
    ],
    ['linked data', 'Apache Jena Fuseki SPARQL server'],
    ['devops', 'Selectie van resultaten Wetsanalyse Tooling HvA studenten op Lab'],
    ['user check', 'Documenteren iteraties Bruikbaarheid testen & Inzichten verzamelen'],
    ['devops', 'Multistack website én regelbank obv Gemeenschappelijke DataCatalogus (GDC)'],
  ],
  [
    [
      'devops',
      <>
        Minimal Viable Product ontsluiting regelspecificaties via{' '}
        <Link component="a" href="https://opencatalogi.nl/">
          OpenCatalogi
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
    ['user check', 'Eerste iteratie Bruikbaarheid & Inzichten verzamelen'],
    ['devops', 'Belastingdienst Bold Form Builder op Lab'],
    [
      'linked data',
      <>
        XML import{' '}
        <Link component="a" href="https://linkeddata.overheid.nl/front/portal/">
          LiDO
        </Link>
      </>,
    ],
    ['user check', 'Tweeede iteratie Bruikbaarheid & Inzichten verzamelen'],
  ],
  [
    [
      'content management',
      <>
        Definitieve ontsluiting regelspecificaties via{' '}
        <Link component="a" href="https://opencatalogi.nl/">
          OpenCatalogi
        </Link>
      </>,
    ],
    ['user check', 'Derde iteratie Bruikbaarheid & Inzichten verzamelen'],
    [
      'devops',
      <>
        Doorontwikkeling{' '}
        <Link component="a" href="https://xml-annotate.live.wem.io/">
          Low Code Widget voor annotatie
        </Link>
      </>,
    ],
    ['content management', 'Creatie & publicatie proces'],
    ['user check', 'Vierde iteratie Bruikbaarheid & Inzichten verzamelen'],
    ['content management', 'Inrichten governance structuur'],
  ],
  [
    ['content management', 'Redactie proces op basis van governance structuur'],
    ['user check', 'Vijfde iteratie Bruikbaarheid & Inzichten verzamelen'],
    [
      'devops',
      <>
        Fair Web Analytics obv{' '}
        <Link component="a" href="https://www.offen.dev/">
          offen.dev
        </Link>
      </>,
    ],
    ['user check', 'Zesde iteratie Bruikbaarheid & Inzichten verzamelen'],
  ],
];
