import { createSlice } from '@reduxjs/toolkit';
import { fetchAllDrinks, fetchDrinkBySlug, postNewDrink } from './drinkThunk';

const initialState = {
  drinks: [],
  currentDrink: {},
  loading: false,
  error: null,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDrinks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDrinks.fulfilled, (state, action) => {
        state.loading = false;
        state.drinks = action.payload;
      })
      .addCase(fetchAllDrinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDrinkBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrinkBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.currentDrink = action.payload.drinks[0];
      })
      .addCase(fetchDrinkBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postNewDrink.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postNewDrink.fulfilled, (state, action) => {
        state.loading = false;
        state.drinks = state.drinks.concat(action.payload.drinks[0]);
      })
      .addCase(postNewDrink.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default drinksSlice.reducer;
