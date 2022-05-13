import { combineReducers } from 'redux'
import drinkReducer from '../feature/Drinks/drinkSlice'

const rootReducer = combineReducers({
  drinks: drinkReducer
})

export default rootReducer
