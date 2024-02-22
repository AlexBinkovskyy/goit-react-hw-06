import { createSlice } from '@reduxjs/toolkit';

const filterContact = createSlice({
  name: 'filteredContacts',
  initialState: {
    contactItems: [{ id: 'id-5', name: 'Alex', number: '321-321-321' }],
  },
  reducers: {
    contactFilter: (state, action) => {
      state.filteredContacts = state.contactItems.filter(item =>
        item.name.includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { contactFilter } = filterContact.actions;
export const filterContactReducer = filterContact.reducer;
