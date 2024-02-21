import { balanceReducer } from './balanceSlice';
import { localeReducer } from './localeSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  }
});
