import { Link } from '@/components/link';
import { RoadmapQuarterCardProps } from './roadmap-quarter-card';

export const roadmap2025: RoadmapQuarterCardProps['items'][] = [
  [
    ['standardization', 'Baseline Core Public Service Vocabulary Application Profile (CPSV-AP) voor RONL v1'],
    ['standardization', 'Baseline Core Public Rule Management Vocabulary (CPRMV) v1'],
    ['legal', 'geen'],
    ['devops', 'Tooling en infrastructuur vaststellen'],
    ['linked data', 'Voorbeelden Terse RDF Triple Language (Turtle) in SPARQL'],
    [
      'content management',
      <>
        Minimal Viable Product ontsluiting regelspecificaties via{' '}
        <Link component="a" href="https://opencatalogi.nl/">
          OpenCatalogi
        </Link>
      </>,
    ],
    ['rule management', 'geen'],
    ['user check', 'geen'],
    ['design', 'geen'],
  ],
  [
    ['standardization', 'Baseline Core Public Service Vocabulary Application Profile (CPSV-AP) voor RONL v2'],
    ['standardization', 'Baseline Core Public Rule Management Vocabulary (CPRMV) v2'],
    ['legal', 'Doorontwikkeling Regeleditor (TNO)'],
    ['legal', 'Wetsanalyse HDAB ondersteunen'],
    ['devops', 'Inrichten tooling en infrastructuur'],
    ['linked data', 'Ontwikkelen alternatief voor normenbrief(pdf) SZW'],
    [
      'content management',
      <>
        Protoptype ontsluiting regelspecificaties via{' '}
        <Link component="a" href="https://opencatalogi.nl/">
          OpenCatalogi
        </Link>
      </>,
    ],
    ['rule management', 'Generieke functie voor aanvraag Heusdenpas met de app FP'],
    ['user check', 'Implementatie Heusdenpas'],
    ['user check', 'Show case high validity data set(s) ontsluiting icm regels iov Rotterdam'],
    ['design', 'UX Design forum.regels.overheid.nl'],
  ],
  [
    ['standardization', 'Baseline Core Public Service Vocabulary Application Profile (CPSV-AP) voor RONL v3'],
    ['standardization', 'Baseline Core Public Rule Management Vocabulary (CPRMV) v4'],
    ['legal', 'iKnow cognitatie inzetten in portfolio ICTU'],
    ['devops', 'Realiseren MVP obv Figma prototype Digitale Vertalingen'],
    ['devops', 'iKnow cognitatie FOSS maken tbv inzet in het publieke domein (fase 1)'],
    ['linked data', 'geen'],
    [
      'content management',
      <>
        Definitieve ontsluiting regelspecificaties via{' '}
        <Link component="a" href="https://opencatalogi.nl/">
          OpenCatalogi
        </Link>
      </>,
    ],
    ['content management', 'Inrichten redactie op content, inhoud en relevantie'],
    ['rule management', 'Generieke functies voor aanvragen inkomensondersteuning'],
    ['user check', 'Showcase Loonaangifteketen'],
    ['design', 'UX Design zoeken en presenteren regelspecificatie sets én implementatie(s)'],
  ],
  [
    ['standardization', 'Baseline Core Public Service Vocabulary Application Profile (CPSV-AP) voor RONL v4'],
    ['standardization', 'Baseline Core Public Rule Management Vocabulary (CPRMV) v4'],
    ['legal', 'Strategische positionering Wetsanalyse en regelbeheer'],
    ['devops', 'iKnow cognitatie FOSS maken tbv inzet in het publieke domein (fase 2)'],
    ['devops', 'Realiseren forum.regels.overheid.nl'],
    [
      'devops',
      <>
        Fair Web Analytics obv{' '}
        <Link component="a" href="https://www.offen.dev/">
          offen.dev
        </Link>
      </>,
    ],
    [
      'linked data',
      <>
        Testen regels import{' '}
        <Link component="a" href="https://linkeddata.overheid.nl/front/portal/">
          LiDO
        </Link>
      </>,
    ],
    ['content management', 'Redactieraad ingericht'],
    ['rule management', 'Eerste selectie kandidaten methoden regelbeheer'],
    ['user check', 'Show case(s) ntb'],
    ['design', 'geen'],
  ],
];
