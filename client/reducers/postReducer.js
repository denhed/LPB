export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST_SUCCESS':
      console.log('reducer', action.post);
      return action.post;
    default:
      return state;
  }
};
