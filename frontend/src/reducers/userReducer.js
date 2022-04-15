export const userReducer = (state = { user: {}, loading: false }, action) => {
  switch(action.type){
    case "AUTHENTICATING_USER":
    return { ...state, loading: true }
    case 'LOGIN_USER':
      return {...state, user: action.user, loading: false }
    case "CURRENT_USER":
      return {...state, user: action.user, loading: false}
    default:
      return state
  }
}
