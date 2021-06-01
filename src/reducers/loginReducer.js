import { ADD_JWT } from '../action/index';

const initialState = {
  isLogin: false,
  jwt: null,
  id: null,
  password: null,
};
const loginReduer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_JWT:
      state = { ...state, jwt: action.jwt, isLogin: true };
  }
  return state;
};

export default loginReduer;
