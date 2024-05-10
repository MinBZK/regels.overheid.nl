'use client';

import { Container } from '@/components/container';
import { getNavbarNodeByUrl } from '@/services/cms/get-navbar-node-by-url';
import { NavbarNode } from '@/services/cms/get-navbar-tree';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, {
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface CrumbProps {
  name: string;
  href?: string;
}

const Crumb: React.FC<CrumbProps> = ({ name, href }) => {
  if (name === 'root') return <Link href="/">Home</Link>;

  if (!href) return <span>{name}</span>;

  return <Link href={href.startsWith('/') ? href : '/' + href}>{name}</Link>;
};

interface MenuBreadcrumbsProps {
  navbar: NavbarNode;
}

export const MenuBreadcrumbs: React.FC<MenuBreadcrumbsProps> = ({ navbar }) => {
  const { additionalCrumbs } = useMenuBreadcrumbs();
  const pathName = usePathname();

  const pathSegments = pathName.split('/');

  const targetNode = pathSegments[1] || '/';

  const node = getNavbarNodeByUrl(navbar, targetNode);

  if (!node) return null;

  const nodes = [node];
  let current = node;

  while (current.parent) {
    current = current.parent;
    nodes.push(current);
  }

  return (
    <div className="bg-primary-lighter">
      <Container component="nav" className="flex h-14 items-center gap-x-4 text-base font-bold text-primary-dark">
        {nodes.toReversed().map((node, i) => {
          return (
            <Fragment key={node.id}>
              {i > 0 && <IconChevronRight size={24} />}
              <Crumb name={node.name} href={node.url} />
            </Fragment>
          );
        })}
        {additionalCrumbs.map((name, i) => {
          return (
            <Fragment key={name}>
              <IconChevronRight size={24} />
              <Crumb name={name} />
            </Fragment>
          );
        })}
      </Container>
    </div>
  );
};

interface Value {
  additionalCrumbs: string[];
  setAdditionalCrumbs: Dispatch<SetStateAction<string[]>>;
}

const context = createContext<Value>({} as Value);

interface MenuBreadcrumbsProvider extends PropsWithChildren {}

export const MenuBreadcrumbsProvider: React.FC<MenuBreadcrumbsProvider> = ({ children }) => {
  const [additionalCrumbs, setAdditionalCrumbs] = useState<string[]>([]);

  return <context.Provider value={{ additionalCrumbs, setAdditionalCrumbs }}>{children}</context.Provider>;
};

const useMenuBreadcrumbs = () => useContext(context);

interface EnhanceMenuBreadcrumbsProps {
  append: string;
}

export const EnhanceMenuBreadcrumbs: React.FC<EnhanceMenuBreadcrumbsProps> = ({ append }) => {
  const { setAdditionalCrumbs } = useMenuBreadcrumbs();

  useEffect(() => {
    setAdditionalCrumbs([append]);

    return () => {
      setAdditionalCrumbs([]);
    };
  }, [append, setAdditionalCrumbs]);

  return null;
};
