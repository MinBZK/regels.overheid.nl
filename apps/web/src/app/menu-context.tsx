'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface Value {
  isOpen: boolean;
  toggleMenu: () => void;
}

const context = createContext<Value>({} as any);

export const useMenuContext = () => useContext(context);

export const MenuContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return <context.Provider value={{ toggleMenu, isOpen }}>{children}</context.Provider>;
};
