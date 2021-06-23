import KakaoLogIn from "../api/KakaoAPI";
import OauthSignIn from "../api/OauthSignInAPI";
import { ADD_JWT_WITH_KAKAO, ADD_JWT_WITH_GOOGLE, ADD_UID } from "action";
import store from "store/store";

const ConfirmUser = {
  kakao: async (request) => {
    try {
      const access = await KakaoLogIn.getAccessToken(request);

      if (access) {
        const { userData, userID } = await KakaoLogIn.getUIDfromDB(access);

        store.dispatch({
          type: ADD_JWT_WITH_KAKAO,
          at: access.data.access_token,
        }); //수정
        if (!userData) {
          //userData가 null이면 user 정보를 db에 저장하기 위해 사용자로부터 데이터를 전달 받아야 함.
          return { needUserData: true, userID };
        } else {
          return { needUserData: false, userData };
        }
      } else {
        alert("로그인 실패..!");
      }
    } catch (e) {
      alert("로그인 실패..!");
    }
  },
  diff: async (uid, service) => {
    try {
      const { userData, userID } = await OauthSignIn.getUserInfo(uid);

      if (service === "google") {
        store.dispatch({ type: ADD_JWT_WITH_GOOGLE });
      }
      if (!userData) {
        return { needUserData: true, userID };
      } else {
        return { needUserData: false, userData };
      }
    } catch (err) {
      console.log(err);
      alert("로그인 실패..!");
    }
  },
};

export default ConfirmUser;
