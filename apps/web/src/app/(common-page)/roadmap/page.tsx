import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { Metadata } from 'next';
import { Roadmap } from './roadmap';
import { IconCategory, roadmapQuarterCardItemIconMap } from './roadmap-quarter-card-icon-map';

const legendOrder: IconCategory[] = ['content management', 'devops', 'design', 'legal', 'linked data'];

export default function RoadmapPage() {
  return (
    <>
      <Container>
        <Typography variant="page-title">Roadmap</Typography>
        <div className="mb-4">
          <p className="mb-3 text-xl xl:w-[440px]">
            Verken onze roadmap om een duidelijk inzicht te krijgen in onze strategie voor het centraal vindbaar maken
            van alle regels.
          </p>
          <div className="grid grid-cols-[auto_auto] gap-4 md:flex xl:mt-auto xl:flex-shrink-0">
            <span className="text-body col-span-2 md:hidden">Roadmap legenda</span>
            {legendOrder.map((label) => {
              const Icon = roadmapQuarterCardItemIconMap[label];

              return (
                <span
                  key={label}
                  className="flex flex-shrink-0 items-center gap-x-3 whitespace-nowrap text-primary-dark"
                >
                  <Icon />
                  <span className="capitalize">{label}</span>
                </span>
              );
            })}
          </div>
        </div>
      </Container>
      <Roadmap />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Roadmap',
};
