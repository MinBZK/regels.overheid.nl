'use client';

import { Button } from '@/components/button';
import { Typography } from '@/components/typography';
import { cva, cx } from '@/cva.config';
import * as Collapsible from '@radix-ui/react-collapsible';
import { IconCornerLeftUp } from '@tabler/icons-react';
import React, { createContext, useContext, useState } from 'react';
import Style from './card.module.scss';

interface Context {
  open: boolean;
}

const context = createContext<Context>({} as any);

const useCardContext = () => useContext(context);

export const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root asChild open={open} onOpenChange={setOpen}>
      <div
        className={cx(
          'relative grid aspect-square rounded-lg border border-grey-lighter p-6 transition-all duration-300 ease-in-out',
          Style.root,
          open && Style.rootOpen
        )}
      >
        <context.Provider value={{ open }}>{children}</context.Provider>
      </div>
    </Collapsible.Root>
  );
};

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="row-[header] mb-1 flex">{children}</div>;
};

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="h4" component="h3" className="row-[title] mb-6 mt-0">
      {children}
    </Typography>
  );
};

export const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="row-[content] flex flex-col overflow-hidden">{children}</div>;
};

export const Collapse: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Collapsible.Content className="row-[collapse] overflow-hidden" forceMount>
      {children}
    </Collapsible.Content>
  );
};

export const Footer: React.StyleAbleFC<React.PropsWithChildren> = ({ children, className }) => {
  return <div className={cx('mt-auto flex h-min pt-6', className)}>{children}</div>;
};

const collapseButtonIconVariants = cva({
  base: 'transition-transform',
  variants: {
    collapsed: {
      true: '-rotate-90',
      false: 'rotate-0',
    },
  },
});

export const CollapseButton: React.FC = () => {
  const { open } = useCardContext();

  return (
    <Collapsible.Trigger asChild>
      <Button variant="outlined" className="absolute bottom-6 right-6 ml-auto">
        <IconCornerLeftUp className={collapseButtonIconVariants({ collapsed: open })} />
      </Button>
    </Collapsible.Trigger>
  );
};
