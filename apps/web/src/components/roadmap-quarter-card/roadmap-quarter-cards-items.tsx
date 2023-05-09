import { RoadmapQuarterCardProps } from '../roadmap-quarter-card';

export const roadmapQuarterCardsItems: RoadmapQuarterCardProps['items'][] = [
  [
    ['content management', 'Capabilities toets CMS & Next.js / MDX'],
    ['content management', 'ReSpec documentatie publicatie proces'],
    ['devops', 'CI/CD pipeline & release process irt scrum sprints'],
    ['devops', '100% internet.nl test'],
    ['legal', 'Low Code Widget voor annotatie deployed bij UBR'],
  ],
  [
    [
      'content management',
      <>
        Capabilities toets <a href="https://regels.dexcat.nl/api">Regelregister</a>
      </>,
    ],
    ['design', 'Uitwerking Design System met design tokens & annotaties'],
    [
      'linked data',
      <>
        XML import <a href="https://linkeddata.overheid.nl/front/portal/">LiDO</a>
      </>,
    ],
    ['devops', 'Multistack website én regelbank obv Gemeenschappelijke datacatalogus (GDC)'],
    ['devops', 'Definitieve cloud architectuur'],
    [
      'devops',
      <>
        Fair Web Analytics obv <a href="https://www.offen.dev/">offen.dev</a>
      </>,
    ],
    [
      'devops',
      <>
        Doorontwikkeling <a href="https://xml-annotate.live.wem.io/">Low Code Widget voor annotatie</a>
      </>,
    ],
  ],
  [
    ['linked data', 'Apache Jena Fuseki SPARQL server'],
    [
      'content management',
      <>
        Eerste versie <a href="https://minbzk.github.io/dcat-ap-ronl/">applicatie profiel</a> van de{' '}
        <a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/211">
          Europese DCAT-AP standaard
        </a>{' '}
        voor uitwisseling met regels.overheid.nl
      </>,
    ],
    ['content management', 'Creatie & publicatie proces'],
    ['content management', 'Inrichten governance structuur'],
    ['design', 'Interactive prototype'],
    ['design', 'Validatie (Testen)'],
    [
      'devops',
      <>
        Migratie <a href="https://regelbeheer.pleio.nl/">regelbeheer.pleio.nl</a>
      </>,
    ],
  ],
  [
    ['content management', 'Redactie proces op basis van governance structuur'],
    ['devops', 'Minimum viable product'],
  ],
];
