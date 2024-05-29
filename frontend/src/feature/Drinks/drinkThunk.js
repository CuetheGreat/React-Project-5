import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://localhost:3000/api/v1';

const fetchAllDrinks = createAsyncThunk('drinks/fetchAllDrinks', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/drinks`);
    if (!response.ok) {
      throw new Error('Failed to fetch drinks');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const fetchDrinkBySlug = createAsyncThunk('drinks/fetchDrinkBySlug', async (slug, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/drinks/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch drink with slug: ${slug}`);
    }
    const data = await response.json();
    console.log('Async:', data);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const postNewDrink = createAsyncThunk('drinks/postNewDrink', async (reqData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/drinks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    if (!response.ok) {
      throw new Error('Failed to post new drink');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { fetchAllDrinks, fetchDrinkBySlug, postNewDrink };
