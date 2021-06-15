import {
  ADD_JWT_OWN,
  ADD_JWT_WITH_KAKAO,
  LOG_OUT,
  ADD_JWT_WITH_GOOGLE,
} from "../action/index";

const initialState = {
  isLogin: false,
  jwt: null,
  accessToken: null,
  uid: null,
  name: "익명", //임시 이름
  oauth: false,
  service: null, //oauth : true인 경우, 소셜 로그인 제공 회사
};
const loginReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_JWT_OWN:
      state = {
        ...state,
        uid: action.uid,
        isLogin: true,
      };
      break;
    case ADD_JWT_WITH_KAKAO:
      state = {
        ...state,
        jwt: action.jwt,
        isLogin: true,
        accessToken: action.at,
        oauth: true,
        service: "kakao",
      };
      break;
    case ADD_JWT_WITH_GOOGLE:
      state = {
        ...state,
        jwt: action.jwt,
        isLogin: true,
        accessToken: action.at,
        oauth: true,
        service: "google",
      };
      break;
    // eslint-disable-next-line no-fallthrough
    case LOG_OUT:
      state = {
        ...state,
        isLogin: false,
        accessToken: null,
        jwt: null, //한 번에 처리하는 게 아니므로 추후 코드 수정
        oauth: false,
        service: null,
      };
      break;
  }
  return state;
};

export default loginReducer;
