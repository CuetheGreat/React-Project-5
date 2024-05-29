import { combineReducers } from 'redux';
import drinkReducer from '../feature/Drinks/drinkSlice';
import userReducer from '../feature/Users/userSlice';

const rootReducer = combineReducers({
  drinks: drinkReducer,
  user: userReducer,
});

export default rootReducer;
