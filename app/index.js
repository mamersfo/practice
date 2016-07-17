import React from 'react'
import { render } from 'react-dom'
import { Router, Route, NotFound, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Practice from './components/practice'
import Exercises from './components/exercises'
import Nav from './components/Nav'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

// dit kan ook
// const store = applyMiddleware(thunk)(createStore)(rootReducer)

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

class App extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Exercises} />
          <Route path='/practice' component={Practice} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }  
}

render(<Provider store={store}><App /></Provider>,
       document.getElementById('app'))
