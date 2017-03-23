import axios from 'axios';

export function getPostAPISuccess(post) {
  return { type: 'GET_POST_SUCCESS', post };
}

export function getPostsAPISuccess(posts) {
  return { type: 'GET_POSTS_SUCCESS', posts };
}

export function updatePostAPISuccess(post) {
  return { type: 'UPDATE_POST_SUCCESS', post };
}

export function getPostsAPI() {
  return function(dispatch) {
    return axios.get(`http://localhost:3000/posts`)
      .then(posts => {
        dispatch(getPostsAPISuccess(posts.data))}
      )
      .catch(error => { throw(error); });
  };
}

export function getPostAPI(id) {
  return function(dispatch) {
    return axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        dispatch(getPostAPISuccess(response.data))}
      )
      .catch(error => { throw(error); });
  };
}

export function updatePostAPI(post) {
  return function(dispatch) {
    return axios.post('http://localhost:3000/posts', post)
      .then(response => {
        dispatch(updatePostAPISuccess(response.data));
      })
      .catch(error => { throw(error); });
  };
}
