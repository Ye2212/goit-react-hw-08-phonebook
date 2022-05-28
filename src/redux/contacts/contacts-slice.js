import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contacts-operations.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: true,
    error: null,
  },
  reducer: {
    filteredContact: (state, action) => {
      console.log(action);
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsThunk.fulfilled]: (state, action) => {
      // console.log(action);
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [addContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactThunk.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact, filteredContact } =
  contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
