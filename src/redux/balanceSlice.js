import { createAction, createReducer, createSlice} from '@reduxjs/toolkit';

export const deposit = createAction('balance/deposit');
export const withdraw = createAction('balance/withdraw');

const balanceInititalState = {
  value: 0,
};

export const balanceReducer = createReducer(balanceInititalState, builder =>
  builder
    .addCase(deposit, (state, action) => {
      state.value += action.payload;
    })
    .addCase(withdraw, (state, action) => {
      state.value -= action.payload;
    })
);
