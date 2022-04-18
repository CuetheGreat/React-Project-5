export const drinkReducer = (state = { drinks: [], loading: false}, action ) => {
  switch(action.type){
    case 'LOAD_DRINKS':
      return {...state, drinks: [], loading: true}
    case 'GET_DRINKS':
      return { ...state, drinks: action.drinks, loading: false }
    default:
      return state
  }
}
