'use client';

import { IconCircleCheckFilled, IconCircleDotted, IconCircleFilled } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { differenceInQuarters, setQuarter, setYear } from 'date-fns';
import { useMemo, useState } from 'react';
import { Card } from '../../components/card';
import { IconCategory, roadmapQuarterCardItemIconMap } from './roadmap-quarter-card-icon-map';
import { Collapse } from '../../components/collapse';

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
    if (cardColorMapKey === 'past') return <IconCircleCheckFilled className="top-0 text-success-dark z-10" size={32} />;

    if (cardColorMapKey === 'current') return <IconCircleFilled className="top-0 text-warning-dark z-10" size={32} />;

    return <IconCircleDotted className="top-0 text-warning-dark z-10" size={32} />;
  }, [cardColorMapKey]);

  return (
    <div className="flex flex-col flex-grow-0 flex-shrink-0 md:w-[270px] items-center relative">
      <div className="hidden md:h-8 md:mb-6 md:flex items-center justify-center md:relative after:bg-white after:absolute after:w-full after:h-full">
        {iconComponent}
      </div>
      <Card
        className={`${cardColorMap[cardColorMapKey]} border-b-0 border-r-0 cursor-pointer  md:cursor-default relative w-full`}
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <h3 className={`text-3xl text-bold text-white text-center ${clsx(isOpen && 'mb-4')} md:mb-4 relative`}>
          Q{quarter}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">{iconComponent}</span>
        </h3>
        <Collapse in={isOpen} className="md:block">
          <ul className="space-y-3">
            {items.map(([icon, content], i) => {
              const IconComponent = roadmapQuarterCardItemIconMap[icon];

              return (
                <li key={i} className="bg-white p-4 rounded flex gap-x-4 items-center">
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
