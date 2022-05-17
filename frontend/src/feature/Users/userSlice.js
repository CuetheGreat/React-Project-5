import { createSlice } from '@reduxjs/toolkit'
import { currentUser, login } from './userThunk'

const initialState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      sessionStorage.clear()
      return { ...state, user: null }
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      return { ...state, user: action.payload.user }
    },
    [currentUser.fulfilled]: (state, action) => {
      console.log('Payload:',action.payload.user)
      return { ...state, user: action.payload.user }
    }
  }
})

export default userSlice.reducer
export const { logout } = userSlice.actions
