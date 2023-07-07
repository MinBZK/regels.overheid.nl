'use client';

import { Navbar as NavbarComponent } from '@/components/navbar';
import { getPages } from '@/services/cms/get-pages';
import { usePathname } from 'next/navigation';

export const Navbar = async () => {
  const pathname = usePathname();
  const { data: pages } = await getPages();

  return (
    <NavbarComponent
      activeHref={pathname}
      items={pages.map(({ attributes: { name, slug } }) => ({
        href: slug === 'home' ? '/' : `/${slug}`,
        label: name,
      }))}
    />
  );
};
