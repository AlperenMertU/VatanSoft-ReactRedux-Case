/*
import { createSlice } from '@reduxjs/toolkit';

const sayfaSlice = createSlice({
  name: 'sayfa',
  initialState: {
    app: true,
  },
  reducers: {
    showSayfa1: (state) => {
     return state.app = false;
    },
  },
});

export const { showSayfa1 } = sayfaSlice.actions;

export default sayfaSlice.reducer;
*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: '12313',
};

const sayfaSlice = createSlice({
  name: 'hide',
  initialState,
  reducers: {

    getHide: (state, action) => {
      state.key = action.payload;
    }

  },
  
});

export const { getHide } = sayfaSlice.actions;

export default sayfaSlice.reducer;
