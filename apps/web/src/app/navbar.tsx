'use client';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { getPages } from '@/services/cms/get-pages';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './logo.png';

export interface Page {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  pages: Awaited<ReturnType<typeof getPages>>;
}

export const Navbar: React.FC<Props> = ({ pages }) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathName]);

  const slugIsActivePath = (slug: string) => {
    if (pathName === '/' && slug === 'home') return true;

    return pathName.includes(slug);
  };

  return (
    <header role="banner" className="border-b-8 border-primary-light">
      <nav role="navigation" aria-label="Hoofdnavigatie" className="flex flex-col flex-wrap">
        <Container className="flex h-24 items-center justify-between sm:h-auto">
          <Link className="relative aspect-[540/190] w-[170px] sm:w-[300px]" href="/">
            <Image src={Logo} alt="regels.overheid.nl logo" />
          </Link>
          <Button variant="secondary" className="sm:hidden" onClick={() => setIsOpen((state) => !state)}>
            Menu
          </Button>
        </Container>
        <div className="hidden bg-primary-main sm:block">
          <Container component="ul" className="flex h-16 items-center">
            {pages.map(
              ({ id, slug, name }) =>
                slug &&
                name && (
                  <li key={id}>
                    <Link
                      className={clsx(
                        slugIsActivePath(slug) && 'bg-primary-light !text-black',
                        'flex h-16 items-center px-4 text-white hover:bg-primary-light hover:text-primary-main'
                      )}
                      href={slug === 'home' ? '/' : `/${slug}`}
                    >
                      {name}
                    </Link>
                  </li>
                )
            )}
          </Container>
        </div>
        {isOpen && (
          <div className="fixed bottom-0 left-0 right-0 top-24 z-10 mt-2 bg-primary-main sm:hidden">
            <Container className="flex flex-col gap-y-2 py-3">
              {pages.map(
                ({ id, slug, name }) =>
                  name &&
                  slug && (
                    <Link
                      key={id}
                      href={slug === 'home' ? '/' : `/${slug}`}
                      className={clsx(
                        slugIsActivePath(slug) && 'border border-black bg-primary-light text-black',
                        'flex h-[70px] items-center px-4 text-white'
                      )}
                    >
                      {name}
                    </Link>
                  )
              )}
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
};
