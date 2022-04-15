export const getCurrentUser = () => {
  const token = sessionStorage.getItem('jwt')

  return dispatch => {
    dispatch({ type: 'AUTHENTICATING_USER' })
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res => res.json()))
      .then(user => {
        dispatch({ type: 'CURRENT_USER', user: user })
      })
  }
}

export const loginUser = data => {
  return dispatch => {
    dispatch({ type: 'AUTHENTICATING_USER' })
    fetch('http://localhost:3000/api/v1/login', {
      'method': 'POST',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'body': JSON.stringify({user:data})
    })
      .then(res => {
      console.log(res)
      return res.json()})
      .then(user => {
        sessionStorage.setItem('jwt', user.jwt)
        dispatch({ type: 'LOGIN_USER', user: user })
      })
  }
}
