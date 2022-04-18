export const drinkReducer = (
  state = { drinks: [], loading: false },
  action
) => {
  switch (action.type) {
    case 'LOAD_DRINKS':
      return { ...state, drinks: [], loading: true }
    case 'GET_ALL_DRINKS':
      return { ...state, drinks: action.drinks, loading: false }
    case 'GET_SINGLE_DRINK':
      return { state, drink: action.drink, loading: false }
    case 'ADD_DRINK':
      return {...state, drink: action.drink, leading: false}
    default:
      return state
  }
}
