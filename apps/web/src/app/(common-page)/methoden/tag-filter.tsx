'use client';

import { Chip } from '@/components/chip';
import { arrayWithout } from '@/helpers/array-without';
import { Method } from '@/services/cms/get-methods';
import { IconFilter } from '@tabler/icons-react';
import { useState } from 'react';
import { defaultTag } from './method-cards';

interface Props {
  filters: string[];
  methods: Method[];
  onFilter: (methods: Method[]) => void;
}

export const TagFilter: React.FC<Props> = ({ filters, onFilter, methods }) => {
  const [activeFilters, setActiveFilter] = useState<string[]>([]);

  const updateActiveFilters = (newActiveFilters: string[]) => {
    setActiveFilter(newActiveFilters);

    onFilter(
      newActiveFilters.length > 0
        ? methods.filter((method) => newActiveFilters.includes(method.attributes.Tag || defaultTag))
        : methods
    );
  };

  const handleChipClick = (filter: string) => () => {
    if (activeFilters.includes(filter)) return updateActiveFilters(arrayWithout(activeFilters, filter));

    updateActiveFilters([...activeFilters, filter]);
  };

  return (
    <div className="flex gap-4 items-center py-4 border-b border-primary-dark mb-6">
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
