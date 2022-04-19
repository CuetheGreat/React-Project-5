import { combineReducers } from 'redux'
import { drinks, userReducer } from './reducers'

const rootReducer = combineReducers({
  drinks: drinks,
  currentUser: userReducer
})

export default rootReducer
