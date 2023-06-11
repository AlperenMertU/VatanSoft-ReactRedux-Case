import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: '',
};

const weatherSlice = createSlice({
  name: 'hava',
  initialState,
  reducers: {

    getApi: (state, action) => {
      state.key = action.payload;
    }

  },
  
});

export const { getApi } = weatherSlice.actions;

export default weatherSlice.reducer;
