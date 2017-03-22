import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// import the root reducer
import rootReducer from './reducers/index'

import posts from './data/posts'

// create an object for the default data
const defaultState = { posts }

//
const store = createStore(
  rootReducer,
  //defaultState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

export const history = syncHistoryWithStore(browserHistory, store)

// hot reloading the reducer
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
