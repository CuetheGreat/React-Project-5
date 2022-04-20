export const drinks = (
  state = {
    drinks: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case 'DRINKS_LOADING':
      return { ...state, loading: true, drinks: [] }
    case 'GET_DRINKS':
      return { ...state, drinks: action.payload, loading: false }
    case 'ADD_DRINKS':
      return {
        ...state,
        drinks: state.drinks.concat(action.payload),
        loading: false
      }
    case 'DELETE_DRINKS':
      return { ...state, drinks: action.payload }
    default:
      return {...state}
  }
}

export const user = (
  state = {
  user: {},
  loading: false },
  action
) => {
  switch (action.type) {
    case 'USER_LOADING':
      return { ...state, user: {},loading: true }
    case 'CREATE_USER':
      return { ...state, user: action.payload, loading: false }
    case 'GET_USER':
      return { ...state, user: action.payload.user, loading: false }
    default:
      return { ...state }
  }
}
