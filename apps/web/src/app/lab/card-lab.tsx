'use client';

import { methodsTree } from '@/common/methods-tree';
import * as MethodNavigation from '@/components/method-navigation';
import { Typography } from '@/components/typography';
import { IconBrandGithub, IconFileTypeDoc, IconLicense, IconPlayerPlay } from '@tabler/icons-react';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import * as Card from '../../components/card';

interface RootProps extends React.PropsWithChildren {
  title: string;
  method?: keyof typeof methodsTree | (string & {});
}

interface Context {
  items: React.ReactNode[];
  setItems: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
  override?: MethodNavigation.MethodItemsProps['override'];
  setOverride: React.Dispatch<React.SetStateAction<MethodNavigation.MethodItemsProps['override']>>;
}

const rootContext = createContext<Context>({} as any);

export const Root: React.FC<RootProps> = ({ title, children, method }) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [override, setOverride] = useState<MethodNavigation.MethodItemsProps['override']>();

  return (
    <rootContext.Provider value={{ items, setItems, override, setOverride }}>
      <Card.Root>
        <Card.Title>{title}</Card.Title>
        <Card.Content>
          <Typography className="line-clamp-5 overflow-hidden text-ellipsis">{children}</Typography>
          <Card.Footer>
            <InternalMethodNavigation method={method} />
          </Card.Footer>
        </Card.Content>
        <Card.CollapseButton />
        <Card.Collapse>
          <InternalMethodNavigation method={method} orientation="vertical" showLabels />
        </Card.Collapse>
      </Card.Root>
    </rootContext.Provider>
  );
};

interface MethodItemProps extends PropsWithChildren {
  override?: MethodNavigation.MethodItemsProps['override'];
}

export const MethodItems: React.FC<MethodItemProps> = ({ children, override }) => {
  const { setItems, setOverride } = useContext(rootContext);

  useEffect(() => {
    setItems(React.Children.toArray(children));
  }, [children, setItems]);

  useEffect(() => {
    setOverride(override);
  }, [override, setOverride]);

  return null;
};

interface InternalMethodNavigationProps {
  method?: keyof typeof methodsTree | (string & {});
  orientation?: MethodNavigation.RootProps['orientation'];
  showLabels?: boolean;
}

const InternalMethodNavigation: React.FC<InternalMethodNavigationProps> = ({ method, orientation, showLabels }) => {
  const { items, override } = useContext(rootContext);

  return (
    <MethodNavigation.Root method={method} orientation={orientation}>
      <MethodNavigation.MethodItems hide="lab" showLabels={showLabels} override={override}>
        {items}
      </MethodNavigation.MethodItems>
    </MethodNavigation.Root>
  );
};

interface LicenseProps {
  label: string;
  tooltip?: string;
  href: string;
}

export const License: React.FC<LicenseProps> = ({ label, tooltip, href }) => {
  return (
    <MethodNavigation.MethodItem
      href={href}
      label={label}
      icon={IconLicense}
      tooltip={tooltip || `${label} (Licentie)`}
    />
  );
};

interface DemoProps {
  label?: string;
  tooltip?: string;
  href: string;
}

export const Demo: React.FC<DemoProps> = ({ label, tooltip, href }) => {
  return (
    <MethodNavigation.MethodItem
      href={href}
      icon={IconPlayerPlay}
      tooltip={tooltip || 'Probeer demo'}
      label={label || 'Probeer live demo'}
    />
  );
};

interface DocsProps {
  label?: string;
  tooltip?: string;
  href: string;
}

export const Docs: React.FC<DocsProps> = ({ label, tooltip, href }) => {
  return (
    <MethodNavigation.MethodItem
      href={href}
      icon={IconFileTypeDoc}
      label={label || 'Documentatie'}
      tooltip={tooltip || 'Documentatie'}
    />
  );
};

interface RepoProps {
  label?: string;
  tooltip?: string;
  href: string;
}

export const Repo: React.FC<RepoProps> = ({ label, tooltip, href }) => {
  return (
    <MethodNavigation.MethodItem
      href={href}
      icon={IconBrandGithub}
      label={label || 'Git repository'}
      tooltip={tooltip || 'Git repository'}
    />
  );
};
