import { LOG_IN, LOG_OUT } from '../actions/loginActions';

const userInitialState = {
  isLogged: false,
  user: null,
};

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOG_IN:
      return (state = action.payload);
    case LOG_OUT:
      return (state = action.payload);
    default:
      return state;
  }
}

export default userReducer;
