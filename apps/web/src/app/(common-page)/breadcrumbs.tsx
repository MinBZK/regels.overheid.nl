'use client';

import { Breadcrumbs as BreadcrumbsComponent } from '@/components/breadcrumbs';
import { getPageBySlug } from '@/services/cms/get-page-by-slug';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Breadcrumbs = async () => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const page = selectedLayoutSegment && (await getPageBySlug(selectedLayoutSegment));

  return (
    <BreadcrumbsComponent>
      <Link href="/">Home</Link>
      {/* {selectedLayoutSegment && <span>{page?.data.attributes.name}</span>} */}
    </BreadcrumbsComponent>
  );
};
