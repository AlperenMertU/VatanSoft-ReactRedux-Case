
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
//sayfa yenildendiği zaman istmememeli apş yı bu yüzden true-false değerini local stroge desaklamak gerek 

/*
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
*/
