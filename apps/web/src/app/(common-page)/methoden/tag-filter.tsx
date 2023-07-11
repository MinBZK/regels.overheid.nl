'use client';

import { arrayWithout } from '@/common/array-without';
import { Chip } from '@/components/chip';
import { methods } from '@prisma/client';
import { IconFilter } from '@tabler/icons-react';
import { useState } from 'react';
import { defaultTag } from './methods-page';

interface Props {
  filters: string[];
  methods: methods[];
  onFilter: (methods: methods[]) => void;
}

export const TagFilter: React.FC<Props> = ({ filters, onFilter, methods }) => {
  const [activeFilters, setActiveFilter] = useState<string[]>([]);

  const updateActiveFilters = (newActiveFilters: string[]) => {
    setActiveFilter(newActiveFilters);

    onFilter(
      newActiveFilters.length > 0
        ? methods.filter((method) => newActiveFilters.includes(method.tag || defaultTag))
        : methods
    );
  };

  const handleChipClick = (filter: string) => () => {
    if (activeFilters.includes(filter)) return updateActiveFilters(arrayWithout(activeFilters, filter));

    updateActiveFilters([...activeFilters, filter]);
  };

  return (
    <div className="mb-6 flex items-center gap-4 border-b border-primary-dark py-4">
      <span className="text-2xl">Filter</span>
      <IconFilter className="mr-4" />
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          className="capitalize"
          onClick={handleChipClick(filter)}
          variant={activeFilters.includes(filter) ? 'filled' : 'outline'}
        />
      ))}
    </div>
  );
};
