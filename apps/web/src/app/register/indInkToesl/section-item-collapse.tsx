'use client';

import { Button } from '@/components/button';
import { Collapse } from '@/components/collapse';
import { createContext, useContext, useState } from 'react';

interface Value {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SectionItemCollapseButtonProps {
  href?: string;
}

const context = createContext<Value>(null as any);

export const SectionItemContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(false);

  return <context.Provider value={{ state, setState }}>{children}</context.Provider>;
};

export const SectionItemCollapseButton: React.FC<SectionItemCollapseButtonProps> = ({ href }) => {
  const { setState } = useContext(context);

  return (
    <Button
      component={href ? 'a' : 'button'}
      href={href}
      onClick={
        href
          ? undefined
          : () => {
            setState((state) => !state);
          }
      }
    >
      Toon specificatie
    </Button>
  );
};

export const SectionItemCollapse: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { state } = useContext(context);

  return <Collapse in={state}>{children}</Collapse>;
};
