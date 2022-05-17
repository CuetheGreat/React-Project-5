import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchAllDrinks = createAsyncThunk('drinks/fetchAllDrinks', async () => {
  let res = await fetch('http://localhost:3000/api/v1/drinks').then(data =>
    data.json()
  )
  return res
})

const fetchDrinkBySlug = createAsyncThunk(
  'drinks/fetchDrinkBySlug',
  async (slug) => {

    let res = await fetch(`http://localhost:3000/api/v1/drinks/${slug}`).then( data => data.json())
    console.log('Async:',res)
    return res
  }
)

const postNewDrink = createAsyncThunk('drinks/postNewDrink', async (reqData) => {
  const post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(reqData)
  }

  let res = await fetch('http://localhost:3000/api/v1/drinks', post).then(data => data.json())
  return res
})

export { fetchAllDrinks, fetchDrinkBySlug, postNewDrink }
