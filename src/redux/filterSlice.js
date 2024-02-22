import { createSlice } from '@reduxjs/toolkit';

const filterContact = createSlice({
  name: 'filteredContacts',
  initialState: { contactItems: [] },
  reducers: {
    contactFilter: (state, action) => {
      state.contactItems = state.contactItems.filter(item =>
        item.name.includes(action.payload.toLowerCase())
      );
    },
  },
});


export const {contactFilter} = filterContact.actions;
export const filterContactReducer = filterContact.reducer;