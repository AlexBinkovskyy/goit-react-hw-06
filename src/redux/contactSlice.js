import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: contacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.contactItems.unshift(action.payload);
    },
    removeContact: (state, action) => {
      state.contactItems = state.contactItems.filter(
        item => item.id !== action.payload
      );
    },
  },
});

const persContactConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contactItems'],
};

export const { addContact, removeContact, contactFilter } =
  contactSlice.actions;
export const contactReducer = persistReducer(
  persContactConfig,
  contactSlice.reducer
);
