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

export const getDrinks = () => {
  return dispatch => {
    dispatch({ type: 'DRINKS_LOADING' })
    fetch('http://localhost:3000/api/v1/drinks')
      .then(res => res.json())
      .then(obj =>{
      console.log('Object:',obj)
      dispatch({ type: 'GET_DRINKS', payload: obj })})
  }
}

export const addDrink = data => {
  return dispatch => {
    dispatch({ type: 'DRINKS_LOADING' })
    fetch('http://localhost:3000/api/v1/drinks', post(data))
      .then(res => res.json())
      .then(drink => dispatch({ type: 'ADD_DRINKS', drink: drink }))
  }
}
