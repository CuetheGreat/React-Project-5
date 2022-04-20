import { combineReducers } from 'redux'
import { drinks, user } from './reducers'

const rootReducer = combineReducers({
  drinks,user
})

export default rootReducer
