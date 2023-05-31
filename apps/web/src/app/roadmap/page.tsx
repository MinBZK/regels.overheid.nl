import { RoadmapQuarterCard } from '@/components/card/roadmap-quarter-card';
import { IconCategory, roadmapQuarterCardItemIconMap } from '@/components/card/roadmap-quarter-card-icon-map';
import { roadmapQuarterCardsItems } from '@/components/card/roadmap-quarter-cards-items';
import { Typography } from '@/components/typography';
import { ucfirst } from '@/helpers/ucfirst';
import { Metadata } from 'next';
import Head from 'next/head';

const legendOrder: IconCategory[] = ['content management', 'devops', 'design', 'legal', 'linked data'];

export default function RoadmapPage() {
  return (
    <>
      <Head>
        <title>Regelgeving Centraal - Roadmap</title>
      </Head>
      <Typography variant="page-title">Roadmap</Typography>
      <div className="mb-4 xl:flex xl:justify-between">
        <p className="text-xl mb-3 xl:w-[440px]">
          Verken onze roadmap om een duidelijk inzicht te krijgen in onze strategie voor het centraal vindbaar maken van
          alle regels.
        </p>
        <div className="grid grid-cols-[auto_auto] gap-4  md:flex xl:flex-shrink-0 xl:mt-auto">
          <span className="text-body col-span-2 md:hidden">Roadmap legenda</span>
          {legendOrder.map((label) => {
            const Icon = roadmapQuarterCardItemIconMap[label];

            return (
              <span key={label} className="flex flex-shrink-0 text-primary-dark items-center gap-x-3 whitespace-nowrap">
                <Icon />
                <span>{ucfirst(label)}</span>
              </span>
            );
          })}
        </div>
      </div>
      <div className={`flex flex-col gap-6 overflow-auto md:flex-row md:items-start xl:justify-between`}>
        {roadmapQuarterCardsItems.map((items, index) => (
          <RoadmapQuarterCard key={index} quarter={index + 1} items={items} />
        ))}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Roadmap',
};
