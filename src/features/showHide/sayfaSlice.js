
import { createSlice } from '@reduxjs/toolkit';

const sayfaSlice = createSlice({
  name: 'hide',
  initialState: {
    key: false,
  },
  reducers: {
    getHide: (state) => {
      state.key = true;
    },
  },
});

export const { getHide } = sayfaSlice.actions;

export default sayfaSlice.reducer;