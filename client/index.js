/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// import css
import css from './styles/style.styl'

// import components
import App from './components/App'
//import SingleSurvey from './components/SingleSurvey'
import UsersIndex from './components/UsersIndex'

// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UsersIndex} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
//<Route path="survey/:id" component={SingleSurvey} />
