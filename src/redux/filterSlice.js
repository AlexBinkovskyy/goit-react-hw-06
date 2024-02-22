import { createSlice } from '@reduxjs/toolkit';

const filterContact = createSlice({
  name: 'filteredContacts',
  initialState: { name: '' },
  reducers: {
    contactFilter: (state, action) => {
      state.contactItems = state.contactItems.filter(item =>
        item.name.includes(action.payload.toLowerCase())
      );
    },
  },
});

console.log(filterContact);

export const {contactFilter} = filterContact.actions;
export const filterContactReducer = filterContact.reducer;