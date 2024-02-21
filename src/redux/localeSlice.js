import { createSlice } from '@reduxjs/toolkit';

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'en',
  },
  reducers: {
    langSwitch: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { langSwitch } = localeSlice.actions;
export const localeReducer = localeSlice.reducer;
