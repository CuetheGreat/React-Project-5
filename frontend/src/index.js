import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { drinkReducer } from './reducers/drinkReducers'

const store = createStore(drinkReducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
