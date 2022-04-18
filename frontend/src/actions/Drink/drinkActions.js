export const fetchDrinks = () => {
  return dispatch => {
    dispatch({ type: 'LOAD_DRINKS' })
    fetch('http://localhost:3000/api/v1/drinks')
      .then(res => res.json())
      .then(drinks => dispatch({ type: 'GET_DRINKS', drinks: drinks }))
  }
}
