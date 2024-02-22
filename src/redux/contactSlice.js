import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contactItems.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contactItems.splice(action.payload, 1);
    },
  },
});

const persContactConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contactItems'],
};

export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = persistReducer(
  persContactConfig,
  contactSlice.reducer
);
