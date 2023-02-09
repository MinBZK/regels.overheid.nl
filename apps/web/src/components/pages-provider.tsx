import { Page } from '@/services/cms/get-pages';
import { createContext, useContext } from 'react';

interface PagesContextValue {
  pages: Page[];
}

export const PagesContext = createContext<PagesContextValue>({
  pages: [],
});

export const usePagesContext = () => useContext(PagesContext);
