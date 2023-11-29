'use client';

import { Card } from '@/components/card';
import { Collapse } from '@/components/collapse';
import { IconCircleCheckFilled, IconCircleDotted, IconCircleFilled } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { differenceInQuarters, setQuarter, setYear } from 'date-fns';
import { useMemo, useState } from 'react';
import { IconCategory, roadmapQuarterCardItemIconMap } from './roadmap-quarter-card-icon-map';

type BgColorMapKey = 'past' | 'current' | 'future';

export interface RoadmapQuarterCardProps {
  year: number;
  quarter: number;
  items: [icon: IconCategory, content: string | JSX.Element][];
}

const cardColorMap: Record<BgColorMapKey, string> = {
  current: 'bg-primary-main',
  past: 'bg-grey-lighter',
  future: 'bg-primary-light',
};

export const RoadmapQuarterCard: React.FC<RoadmapQuarterCardProps> = ({ quarter, items, year }) => {
  const quarterDate = setQuarter(setYear(new Date(), year), quarter);

  const cardColorMapKey: BgColorMapKey = useMemo(() => {
    const currentDate = new Date();

    if (differenceInQuarters(currentDate, quarterDate) > 0) return 'past';

    if (differenceInQuarters(currentDate, quarterDate) < 0) return 'future';

    return 'current';
  }, [quarterDate]);

  const [isOpen, setIsOpen] = useState(differenceInQuarters(quarterDate, new Date()) === 0);

  const iconComponent = useMemo(() => {
    if (cardColorMapKey === 'past') return <IconCircleCheckFilled className="top-0 z-10 text-success-dark" size={32} />;

    if (cardColorMapKey === 'current') return <IconCircleFilled className="top-0 z-10 text-warning-dark" size={32} />;

    return <IconCircleDotted className="top-0 z-10 text-warning-dark" size={32} />;
  }, [cardColorMapKey]);

  return (
    <div className="relative flex flex-shrink-0 flex-grow-0 flex-col items-center md:w-[270px]">
      <div className="hidden items-center justify-center after:absolute after:h-full after:w-full after:bg-white md:relative md:mb-6 md:flex md:h-8">
        {iconComponent}
      </div>
      <Card
        className={`${cardColorMap[cardColorMapKey]} relative w-full cursor-pointer  border-b-0 border-r-0 md:cursor-default`}
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <h3 className={`text-bold text-center text-3xl text-white ${clsx(isOpen && 'mb-4')} relative md:mb-4`}>
          Q{quarter}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">{iconComponent}</span>
        </h3>
        <Collapse in={isOpen} className="md:block">
          <ul className="space-y-3">
            {items.map(([icon, content], i) => {
              const IconComponent = roadmapQuarterCardItemIconMap[icon];

              return (
                <li key={i} className="flex items-center gap-x-4 rounded bg-white p-4">
                  <IconComponent size={22} className="flex-shrink-0 text-warning-dark" strokeWidth={2} />
                  <span>{content}</span>
                </li>
              );
            })}
          </ul>
        </Collapse>
      </Card>
    </div>
  );
};
