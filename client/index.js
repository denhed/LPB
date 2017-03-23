/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// import css
import css from './styles/style.styl'

// import components
import App from './components/App'
import UsersIndex from './components/UsersIndex';
import ShowPost from './components/Posts/show';
import EditPost from './components/Posts/edit';

// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UsersIndex} />
        <Route path="edit" component={EditPost} />
        <Route path="show/:id" component={ShowPost} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
