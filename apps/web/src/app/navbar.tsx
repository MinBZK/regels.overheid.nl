'use client';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { getNavbarPages } from '@/services/cms/get-navbar-pages';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import Logo from './logo.png';
import { VariantProps, cva, cx } from '@/cva.config';

export interface Page {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  pages: Awaited<ReturnType<typeof getNavbarPages>>;
}

const navbarItemVariants = cva({
  base: 'flex px-4 text-white',
  variants: {
    variant: {
      desktop: 'h-16 items-center  hover:bg-primary-light hover:text-primary-main',
      mobile: 'h-[70px] items-center  text-white',
    },
    isActive: {
      true: 'bg-primary-light text-black',
    },
  },
  compoundVariants: [{ variant: 'mobile', isActive: true, class: 'border border-black bg-primary-light text-black' }],
});

interface NavbarItemProps extends Omit<VariantProps<typeof navbarItemVariants>, 'isActive'> {
  slug: string | null;
  name: string | null;
  className?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ slug: _slug, name, variant, className }) => {
  const pathName = usePathname();

  if (!_slug || !name) return null;

  const Component = _slug.startsWith('http') ? 'a' : Link;
  const Wrapper = variant === 'desktop' ? 'li' : Fragment;

  const isActive = () => {
    if (pathName === '/' && _slug === 'home') return true;

    return pathName.startsWith(`/${_slug}`);
  };

  const slug = () => {
    if (_slug === 'home') return '/';

    if (_slug.startsWith('/') || _slug.startsWith('http')) return _slug;

    return `/${_slug}`;
  };

  return (
    <Wrapper className={className}>
      <Component href={slug()} className={cx(navbarItemVariants({ variant, isActive: isActive() }))}>
        {name}
      </Component>
    </Wrapper>
  );
};

const betaDocsVariants = cva({
  variants: {
    variant: {
      mobile: '',
      desktop: 'absolute right-0 top-0',
    },
  },
});

interface BetaDocsItemProps extends VariantProps<typeof betaDocsVariants> {}

const BetaDocsItem: React.FC<BetaDocsItemProps> = ({ variant }) => {
  return (
    <a href="/docs-beta" className={clsx(navbarItemVariants({ variant }), betaDocsVariants({ variant }))}>
      Beta
    </a>
  );
};

export const Navbar: React.FC<Props> = ({ pages }) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathName]);

  return (
    <header role="banner" className="border-b-8 border-primary-light">
      <nav role="navigation" aria-label="Hoofdnavigatie" className="flex flex-col flex-wrap">
        <Container className="flex h-24 items-center justify-between sm:h-auto">
          <Link className="relative aspect-[540/190] w-[170px] sm:w-[300px]" href="/">
            <Image src={Logo} alt="regels.overheid.nl logo" />
          </Link>
          <Button color="primary-light" className="sm:hidden" onClick={() => setIsOpen((state) => !state)}>
            Menu
          </Button>
        </Container>
        <div className="hidden bg-primary-main sm:block">
          <Container bleed className="relative">
            <Container component="ul" className="flex h-16 items-center">
              {pages.map(({ id, slug, name }) => (
                <NavbarItem key={id} slug={slug} name={name} variant="desktop" />
              ))}
            </Container>
            <BetaDocsItem variant="desktop" />
          </Container>
        </div>
        {isOpen && (
          <div className="fixed bottom-0 left-0 right-0 top-24 z-10 mt-2 bg-primary-main sm:hidden">
            <Container className="flex flex-col gap-y-2 py-3">
              {pages.map(({ id, slug, name }) => (
                <NavbarItem key={id} slug={slug} name={name} variant="mobile" />
              ))}
              <NavbarItem slug="/docs-beta" name="Beta" variant="mobile" />
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
};
