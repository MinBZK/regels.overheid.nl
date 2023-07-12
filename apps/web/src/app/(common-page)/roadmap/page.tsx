import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { Metadata } from 'next';
import { Roadmap } from './roadmap';
import { IconCategory, roadmapQuarterCardItemIconMap } from './roadmap-quarter-card-icon-map';

const legendOrder: IconCategory[] = ['content management', 'devops', 'design', 'legal', 'linked data'];

export default async function RoadmapPage() {
  return (
    <>
      <Container>
        <Typography variant="h1">Roadmap</Typography>
        <div className="mb-4">
          <div className="xl:w-[440px]">
            <RemotePage page="roadmap" />
          </div>
          <div className="mt-3 grid grid-cols-[auto_auto] gap-4 md:flex xl:mt-auto xl:flex-shrink-0">
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
