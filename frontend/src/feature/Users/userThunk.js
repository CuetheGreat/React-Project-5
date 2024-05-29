import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://127.0.0.1:3000/api/v1';

const token = sessionStorage.getItem('jwt');

const getHeaders = (withAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (withAuth && token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

const signIn = (data) => ({
  method: 'POST',
  headers: {
    ...getHeaders(true),
    Accept: 'application/json',
  },
  body: JSON.stringify(data),
});

const signUp = (data) => ({
  method: 'POST',
  headers: {
    ...getHeaders(),
    Accept: 'application/json',
  },
  body: JSON.stringify(data),
});

const fetchConfig = {
  method: 'GET',
  headers: getHeaders(true),
};

const login = createAsyncThunk('auth/login', async (reqData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, signIn(reqData));
    if (!response.ok) {
      throw new Error('Failed to login');
    }
    const data = await response.json();
    sessionStorage.setItem('jwt', data.jwt);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const currentUser = createAsyncThunk('user/currentUser', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, fetchConfig);
    if (!response.ok) {
      throw new Error('Failed to fetch current user');
    }
    const data = await response.json();
    console.log('Thunk:', data);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const newUser = createAsyncThunk('user/newUser', async (newUserData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, signUp(newUserData));
    if (!response.ok) {
      throw new Error('Failed to sign up');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { login, currentUser, newUser };
