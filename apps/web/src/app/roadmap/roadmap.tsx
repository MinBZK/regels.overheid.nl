'use client';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { IconChevronLeft, IconChevronRight, IconCircleFilled } from '@tabler/icons-react';
import { getYear } from 'date-fns';
import { useState } from 'react';
import { roadmap2023 } from './roadmap-2023';
import { roadmap2024 } from './roadmap-2024';
import { roadmap2025 } from './roadmap-2025';
import { RoadmapQuarterCard } from './roadmap-quarter-card';

const roadMaps = [
  [2023, roadmap2023],
  [2024, roadmap2024],
  [2025, roadmap2025],
] as const;

const indexOfCurrentYear = roadMaps.findIndex(([year]) => year === getYear(new Date()));

export const Roadmap: React.FC = () => {
  const [roadmapIndex, setRoadmapIndex] = useState(indexOfCurrentYear);

  return (
    <Container bleed>
      <div className="mb-6 flex gap-x-2">
        <Button
          className="flex-0 w-10 justify-center !px-0"
          onClick={() => setRoadmapIndex((state) => state - 1)}
          disabled={roadMaps[roadmapIndex - 1] === undefined}
        >
          <IconChevronLeft />
        </Button>
        <Button component="div" className="flex-1 justify-center">
          {roadMaps[roadmapIndex]?.[0]}
        </Button>
        <Button
          className="flex-0 w-10 justify-center !px-0"
          onClick={() => setRoadmapIndex((state) => state + 1)}
          disabled={roadMaps[roadmapIndex + 1] === undefined}
        >
          <IconChevronRight />
        </Button>
      </div>

      <div className="relative flex flex-col gap-6 overflow-auto md:flex-row md:items-start xl:justify-between">
        <div className="absolute left-0 top-0 hidden h-8 w-full min-w-[1152px] items-center justify-between md:flex">
          <div className="absolute bottom-0 left-2 right-3 top-0 flex items-center before:h-1 before:w-full before:bg-warning-dark" />
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
