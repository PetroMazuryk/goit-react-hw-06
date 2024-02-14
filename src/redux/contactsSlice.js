import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../data/initialContacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    prepare(text) {
      return {
        payload: {
          text,
          id: nanoid(),
          completed: false,
        },
      };
    },

    removeContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
