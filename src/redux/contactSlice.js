import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: contacts,
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
