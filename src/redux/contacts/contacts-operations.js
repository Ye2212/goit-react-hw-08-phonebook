import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
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
      const contacts = await axios.post('/contacts', contact);
      thunkAPI.dispatch(fetchContactsThunk());
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactsThunk',
  async (id, thunkAPI) => {
    // console.log(id);
    try {
      const result = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContactsThunk());
      console.log(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
