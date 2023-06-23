'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { Navbar } from '@/components/navbar';
import { Page } from '@/services/cms/get-pages';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

interface Props {
  pages: Page[];
}

export const Topbar: React.FC<Props> = ({ pages }) => {
  const pathName = usePathname();
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const page = pages.find((page) => page.attributes.slug === selectedLayoutSegment);

  return (
    <>
      <Navbar
        activeHref={pathName}
        items={pages.map(({ attributes: { name, slug } }) => ({
          href: slug === 'home' ? '/' : `/${slug}`,
          label: name,
        }))}
      />
      <Breadcrumbs>
        <Link href="/">Home</Link>
        {selectedLayoutSegment && <span>{page?.attributes.name}</span>}
      </Breadcrumbs>
    </>
  );
};
