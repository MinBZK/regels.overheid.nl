'use client';

import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { Card } from '@/components/card';
import { Collapse } from '@/components/collapse';
import { IconCategory } from './roadmap-quarter-card-icon-map';
import { roadmapQuarterCardItemIconMap } from './roadmap-quarter-card-icon-map';

type BgColorMapKey = 'past' | 'current' | 'next' | 'later';

export interface RoadmapQuarterCardProps {
  quarter: number;
  items: [icon: IconCategory, content: string | JSX.Element][];
}

const cardColorMap: Record<BgColorMapKey, string> = {
  current: 'bg-primary-main',
  past: 'bg-grey-lighter',
  next: 'bg-primary-light',
  later: 'bg-primary-lighter',
};

export const RoadmapQuarterCard: React.FC<RoadmapQuarterCardProps> = ({ quarter, items }) => {
  const currentQuarter: number = useMemo(() => {
    const date = new Date();
    const month = date.getMonth() + 1;

    return Math.ceil(month / 3);
  }, []);

  const cardColorMapKey: BgColorMapKey = useMemo(() => {
    if (quarter < currentQuarter) return 'past';

    if (currentQuarter + 1 === quarter) return 'next';

    if (currentQuarter + 2 <= quarter) return 'later';

    return 'current';
  }, [quarter, currentQuarter]);

  const [isOpen, setIsOpen] = useState(currentQuarter === quarter);

  return (
    <Card
      className={`${cardColorMap[cardColorMapKey]} flex-shrink-0 cursor-pointer border-b-0 border-r-0 md:w-[270px] md:cursor-default`}
      onClick={() => {
        setIsOpen((state) => !state);
      }}
    >
      <h3 className={`text-bold text-center text-3xl text-white ${clsx(isOpen && 'mb-4')} md:mb-4`}>Q{quarter}</h3>
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
  );
};
