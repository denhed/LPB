export default (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
    console.log(action);
      return action.users;
    case 'FIND_ARTIST':
      return { ...state, artist: action.payload };
    case 'RESET_ARTIST':
      return { ...state, artist: null };
    default:
      return state;
  }
};
