const token = sessionStorage.getItem('jwt')

const get = {
  method: 'GET',
  headers: {
    'CONTENT-TYPE': 'application/json',
    Authorization: `Bearer ${token}`
  }
}

const post = data => {
  return {
    method: 'POST',
    headers: {
      'CONTENT-TYPE': 'application/json',
      ACCEPT: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }
}

export const loginUser = data => {
  return dispatch => {
    dispatch({ type: 'LOADING_USER' })
    fetch('http://127.0.0.1:3000/api/v1/login', post(data))
      .then(res => res.json())
      .then(obj => {
        sessionStorage.setItem('jwt', obj.jwt)
        dispatch({ type: 'USER_LOGGED_IN', user: obj.user })
      })
      .catch(error => console.log(error))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_USER' })
    fetch('http://127.0.0.1:3000/api/v1/profile', get)
      .then(res => res.json())
      .then(obj => {
        console.log('User Request:',obj)
        dispatch({ type: 'GET_USER', payload: obj })
      })
  }
}
