'use client';

import { Breadcrumbs as BreadcrumbsComponent } from '@/components/breadcrumbs';
import { getPages } from '@/services/cms/get-pages';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  pages: Awaited<ReturnType<typeof getPages>>;
}

export const Breadcrumbs: React.FC<Props> = ({ pages }) => {
  const pathName = usePathname();

  const page = pages.find((page) => page.slug && pathName.includes(page.slug));

  return (
    <header>
      <nav>
        <BreadcrumbsComponent>
          <Link href="/">Home</Link>
          {page?.name && <span>{page.name}</span>}
        </BreadcrumbsComponent>
      </nav>
    </header>
  );
};
