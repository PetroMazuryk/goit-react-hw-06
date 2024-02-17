import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../data/initialContacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    removeContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
    },
    removeAllContact: {
      reducer(state) {
        state.contacts = state.contacts.filter(contact => !contact);
      },
    },
  },
});

export const { addContact, removeContact, removeAllContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
