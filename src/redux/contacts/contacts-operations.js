import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post(`/contacts`, contact);
      thunkAPI.dispatch(fetchContactsThunk());
      console.log(contacts);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (contact, thunkAPI) => {
    try {
      const result = await axios.delete(`/contacts/${contact.id}`);
      thunkAPI.dispatch(fetchContactsThunk());
      console.log(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
