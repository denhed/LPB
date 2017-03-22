import axios from 'axios';

export function getUsersAPISuccess(users) {
  return { type: 'GET_USERS_SUCCESS', users };
}

export function getUsersAPI() {
  return function(dispatch) {
    return axios.get(`http://localhost:3000/users`)
      .then(users => {

        console.log(users);
        dispatch(getUsersAPISuccess(users.data))}
      )
      .catch(error => { throw(error); });
  };
}
