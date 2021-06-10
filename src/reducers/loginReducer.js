import { ADD_JWT, LOG_OUT } from '../action/index';

const initialState = {
  isLogin: false,
  jwt: null,
  accessToken: null,
  id: null,
  password: null,
};
const loginReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_JWT:
      state = {
        ...state,
        jwt: action.jwt,
        isLogin: true,
        accessToken: action.at,
      };
      break;
    // eslint-disable-next-line no-fallthrough
    case LOG_OUT:
      state = {
        ...state,
        isLogin: false,
        accessToken: null,
        jwt: null, //한 번에 처리하는 게 아니므로 추후 코드 수정
      };
      break;
  }
  return state;
};

export default loginReducer;
