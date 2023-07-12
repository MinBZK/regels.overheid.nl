'use client';

import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { methods } from '@prisma/client';
import { useState } from 'react';
import { MethodCard } from './method-card';
import { TagFilter } from './tag-filter';

export const defaultTag = 'methode';

interface Props {
  methods: methods[];
}

export const MethodsPage: React.FC<Props> = ({ methods }) => {
  const [filteredMethods, setFilteredMethods] = useState(methods);

  const uniqueTags = new Set(methods.map(({ tag }) => tag || defaultTag));

  return (
    <main>
      <Container>
        <TagFilter filters={Array.from(uniqueTags)} methods={methods} onFilter={(data) => setFilteredMethods(data)} />
      </Container>
      <Container bleed>
        <div className="grid items-start gap-y-4 transition-all md:grid-cols-2 md:gap-x-4 md:gap-y-16 lg:grid-cols-1 lg:gap-y-8 xl:grid-cols-3 xl:gap-x-6 2xl:gap-x-14">
          {filteredMethods.map(({ id, href, icon, title, tag, description, updated_at, created_at }) => {
            return (
              <MethodCard
                key={id}
                href={href}
                icon={icon}
                title={title}
                tag={tag || defaultTag}
                description={description}
                date={updated_at || created_at!}
              />
            );
          })}
        </div>
      </Container>
    </main>
  );
};
