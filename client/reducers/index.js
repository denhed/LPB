import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './usersReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  posts
})

export default rootReducer
