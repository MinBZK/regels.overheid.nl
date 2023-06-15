'use client';

import { MethodCard } from '@/components/card/method-card';
import { useState } from 'react';
import { TagFilter } from './tag-filter';
import { Method } from '@/services/cms/get-methods';

export const defaultTag = 'methode';

interface Props {
  methods: Method[];
}

export const MethodCards: React.FC<Props> = ({ methods }) => {
  const [filteredMethods, setFilteredMethods] = useState(methods);

  const uniqueTags = new Set(methods.map(({ attributes }) => attributes.Tag || defaultTag));

  return (
    <>
      <TagFilter filters={Array.from(uniqueTags)} methods={methods} onFilter={(data) => setFilteredMethods(data)} />
      <div className="grid gap-y-4 items-start md:grid-cols-2 md:gap-y-16 md:gap-x-4 lg:grid-cols-1 lg:gap-y-8 xl:grid-cols-3 xl:gap-x-6 2xl:gap-x-14 transition-all">
        {filteredMethods.map((method) => {
          return (
            <MethodCard
              key={method.id}
              href={method.attributes.Href}
              icon={method.attributes.Icon}
              title={method.attributes.Title}
              tag={method.attributes.Tag || defaultTag}
              description={method.attributes.Description}
              date={method.attributes.updatedAt || method.attributes.createdAt}
            />
          );
        })}
      </div>
    </>
  );
};
