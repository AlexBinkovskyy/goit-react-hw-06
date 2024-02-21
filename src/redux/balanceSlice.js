import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const persistBalanceConfig = {
  key: 'balance',
  storage,
}

export const balanceReducer = persistReducer(persistBalanceConfig, balanceSlice.reducer);