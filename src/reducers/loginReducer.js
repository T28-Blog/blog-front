import {
  ADD_UID,
  ADD_NAME,
  ADD_JWT,
  ADD_UID_OWN,
  ADD_JWT_WITH_KAKAO,
  REFRESH_PAGE,
  LOG_OUT,
  ADD_JWT_WITH_GOOGLE,
  CHANGE_PROFILE,
} from "../action/index";

const initialState = {
  isLogin: false,
  jwt: null,
  accessToken: null,
  uid: null,
  name: "",
  profile: "",
  oauth: false,
  service: null, //oauth : true인 경우, 소셜 로그인 제공 회사
};
const loginReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_UID_OWN:
      state = {
        ...state,
        name: action.name,
        uid: action.uid,
        isLogin: true,
      };
      break;
    case ADD_UID:
      state = { ...state, uid: action.uid };
      break;
    case ADD_NAME:
      state = { ...state, name: action.name };
      break;
    case ADD_JWT:
      state = { ...state, jwt: action.jwt };
      break;
    case ADD_JWT_WITH_KAKAO:
      state = {
        ...state,
        isLogin: true,
        accessToken: action.at,
        oauth: true,
        service: "kakao",
      };
      break;
    case ADD_JWT_WITH_GOOGLE:
      state = {
        ...state,
        isLogin: true,
        oauth: true,
        service: "google",
      };
      break;
    case REFRESH_PAGE:
      state = {
        ...state,
        isLogin: true,
        uid: action.uid,
        name: action.name,
        jwt: action.jwt,
      };
      break;
    // eslint-disable-next-line no-fallthrough
    case LOG_OUT:
      state = {
        ...state,
        isLogin: false,
        accessToken: null,
        jwt: null,
        oauth: false,
        service: null,
      };
      break;
  }
  return state;
};

export default loginReducer;
