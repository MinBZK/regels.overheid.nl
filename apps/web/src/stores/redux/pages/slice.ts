import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { PageListResponse } from '../../../services/cms';

export interface State {
  data: Required<PageListResponse['data']>;
}

const initialState: State = {
  data: [],
};

const slice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages(state, { payload }: PayloadAction<PageListResponse['data']>) {
      state.data = payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.pages,
    }),
  },
});

export const { setPages } = slice.actions;

export default slice.reducer;
