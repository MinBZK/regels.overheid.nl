import pages from './pages/slice';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () =>
  configureStore({
    reducer: { pages },
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
