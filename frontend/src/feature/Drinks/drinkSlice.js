import { createSlice } from '@reduxjs/toolkit'
import { fetchAllDrinks, fetchDrinkBySlug, postNewDrink } from './drinkThunk'

const initialState = { drinks: [], currentDrink: {} }

let drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllDrinks.fulfilled]: (state, action) => {
      return { ...state, drinks: action.payload }
    },
    [fetchDrinkBySlug.fulfilled]: (state, action) => {
      return { ...state, currentDrink: action.payload.drinks[0] }
    },
    [postNewDrink.fulfilled]: (state, action) => {
      return { ...state, drinks: state.drinks.concat(action.payload.drinks[0])}
    }

  }
})

export default drinksSlice.reducer
