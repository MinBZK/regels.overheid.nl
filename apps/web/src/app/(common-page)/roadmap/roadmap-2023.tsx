import { Link } from '@/components/link';
import { RoadmapQuarterCardProps } from './roadmap-quarter-card';

export const roadmap2023: RoadmapQuarterCardProps['items'][] = [
  [
    ['content management', 'Capabilities toets CMS & Next.js / MDX'],
    ['devops', 'CI/CD pipeline & release process irt scrum sprints'],
    ['devops', '100% internet.nl test'],
    [
      'legal',
      <>
        <Link component="a" href="https://xml-annotate.live.wem.io/">
        Low Code Widget voor annotatie
        </Link>{' '}deployed bij UBR
      </>,
    ],
  ],
  [
    ['content management', 'ReSpec documentatie publicatie proces'],
    [
      'content management',
      <>
        Capabilities toets{' '}
        <Link component="a" href="https://regels.dexcat.nl/api">
          Regelregister
        </Link>
      </>,
    ],
  ],
  [
    [
      'devops',
      <>
        Migratie{' '}
        <Link component="a" href="https://regelbeheer.pleio.nl/">
          regelbeheer.pleio.nl
        </Link>
      </>,
    ],
  ],
  [
    ['design', 'Design een Lab-pagina, georganiseerd in kaarten om verschillende tools te presenteren.'],
    ['devops', 'Definitieve cloud architectuur'],
  ],
];
