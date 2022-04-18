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

export const fetchAllDrinks = () => {
  return dispatch => {
    dispatch({ type: 'LOAD_DRINKS' })
    fetch('http://localhost:3000/api/v1/drinks')
      .then(res => res.json())
      .then(drinks => dispatch({ type: 'GET_ALL_DRINKS', drinks: drinks }))
  }
}
export const fetchSingleDrink = slug => {
  return dispatch => {
    dispatch({ type: 'LOAD_DRINKS' })
    fetch(`http://localhost:3000/api/v1/drinks/${slug}`, get)
      .then(res => res.json())
      .then(drink => dispatch({ type: 'GET_SINGLE_DRINK', drink: drink }))
  }
}

export const fetchAddDrink = data => {
  return dispatch => {
    dispatch({ type: 'LOAD_DRINKS' })
    fetch('http://localhost:3000/api/v1/drinks', post(data))
      .then(res => res.json())
      .then(drink => dispatch({ type: 'ADD_DRINK', drink: drink }))
  }
}
