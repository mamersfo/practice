import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Practice from './components/practice'
import Search from './components/search'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

// dit kan ook
// const store = applyMiddleware(thunk)(createStore)(rootReducer)

render(<Provider store={store}><Practice /></Provider>,
       document.getElementById('app'))
