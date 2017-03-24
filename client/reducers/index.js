import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import post from './postReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  post,
  posts
})

export default rootReducer
