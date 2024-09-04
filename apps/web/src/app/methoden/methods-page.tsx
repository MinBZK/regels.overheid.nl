'use client';

import { Container } from '@/components/container';
import { getMethods } from '@/services/cms/get-methods';
import { useState } from 'react';
import * as CardMethod from './card-method';
import { TagFilter } from './tag-filter';
import { ContainerMethod } from '@/components/container-method';

export const defaultTag = 'methode';

interface Props {
  methods: Awaited<ReturnType<typeof getMethods>>;
}

export const MethodsPage: React.FC<Props> = ({ methods }) => {
  const [filteredMethods, setFilteredMethods] = useState(methods);

  const uniqueTags = new Set(methods.map(({ tag }) => tag || defaultTag));

  return (
    <>
      <Container>
        <TagFilter filters={Array.from(uniqueTags)} methods={methods} onFilter={(data) => setFilteredMethods(data)} />
      </Container>
      <ContainerMethod>
        {filteredMethods.map(
          ({ id, href, title, tag, description, updatedAt, createdAt }) =>
            title &&
            description && (
              <CardMethod.Root key={id} title={title} docsURL={href} tag={tag}>
                {description}
              </CardMethod.Root>
            )
        )}
      </ContainerMethod>
    </>
  );
};
