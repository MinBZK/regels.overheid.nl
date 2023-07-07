'use client';

import { RoadmapQuarterCard } from '@/app/roadmap/roadmap-quarter-card';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { IconChevronLeft, IconChevronRight, IconCircleFilled } from '@tabler/icons-react';
import { getYear } from 'date-fns';
import { useState } from 'react';
import { roadmap2023 } from './roadmap-2023';
import { roadmap2024 } from './roadmap-2024';

const roadMaps = [
  [2023, roadmap2023],
  [2024, roadmap2024],
] as const;

const indexOfCurrentYear = roadMaps.findIndex(([year]) => year === getYear(new Date()));

export const Roadmap: React.FC = () => {
  const [roadmapIndex, setRoadmapIndex] = useState(indexOfCurrentYear);

  return (
    <Container bleed>
      <div className="flex gap-x-2 mb-6">
        <Button
          className="w-10 justify-center !px-0 flex-0"
          onClick={() => setRoadmapIndex((state) => state - 1)}
          disabled={roadMaps[roadmapIndex - 1] === undefined}
        >
          <IconChevronLeft />
        </Button>
        <Button component="div" className="flex-1 justify-center">
          {roadMaps[roadmapIndex]?.[0]}
        </Button>
        <Button
          className="w-10 justify-center !px-0 flex-0"
          onClick={() => setRoadmapIndex((state) => state + 1)}
          disabled={roadMaps[roadmapIndex + 1] === undefined}
        >
          <IconChevronRight />
        </Button>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-start xl:justify-between relative overflow-auto">
        <div className="hidden md:flex h-8 items-center justify-between absolute top-0 left-0 min-w-[1152px] w-full">
          <div className="absolute left-2 right-3 top-0 bottom-0 flex items-center before:h-1 before:bg-warning-dark before:w-full" />
          <IconCircleFilled className="text-warning-dark" />
          <IconChevronRight className="text-warning-dark" size={32} />
        </div>
        {roadMaps[roadmapIndex]?.[1].map((items, index) => (
          <RoadmapQuarterCard key={index} year={roadMaps[roadmapIndex][0]} quarter={index + 1} items={items} />
        ))}
      </div>
    </Container>
  );
};
