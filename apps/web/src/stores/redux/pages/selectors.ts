import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';

export const selectPagesSlice = (state: AppState): AppState['pages'] => state.pages;

export const selectPages = createSelector(selectPagesSlice, (state) => state.data);
