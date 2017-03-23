export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_POST_SUCCESS':
      console.log(action);
      return [ ...state, action.post ];
    case 'GET_POST_SUCCESS':
      console.log('reducer', action.post);
      return state;
    case 'GET_POSTS_SUCCESS':
      console.log('reducer', action.posts);
      return action.posts;
    default:
      return state;
  }
};
