import { createAsyncThunk } from '@reduxjs/toolkit'

const token = !!sessionStorage.getItem('jwt')
  ? sessionStorage.getItem('jwt')
  : null

const get = {
  method: 'GET',
  headers: {
    'CONTENT-TYPE': 'application/json',
    Authorization: `Bearer ${token}`
  }
}

const signIn = data => {
  return {
    method: 'POST',
    headers: {
      'CONTENT-TYPE': 'application/json',
      ACCEPT: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }
}

const signUp = data => {
  return {
    method: 'POST',
    headers: {
      'CONTENT-TYPE': 'application/json',
      ACCEPT: 'application/json',
    },
    body: JSON.stringify(data)
  }
}

const login = createAsyncThunk('', async reqData => {
  let res = await fetch(
    'http://127.0.0.1:3000/api/v1/login',
    signIn(reqData)
  ).then(data => data.json())
  sessionStorage.setItem('jwt', res.jwt)
  return res
})

const currentUser = createAsyncThunk('', async () => {
  let res = await fetch('http://127.0.0.1:3000/api/v1/profile', get).then(
    data => data.json()
  )
  console.log('Thunk:', res)
  return res
})

const newUser = createAsyncThunk('', async (newUserData) => {
  let res = await fetch('', signUp(newUserData)).then(data => data.json())
  return res
})
export { login, currentUser, newUser }
