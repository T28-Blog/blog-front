import axios from "axios";
import config from "../config";
import { firebaseInstance } from "fbase/Fbase";
import store from "store/store";
import { LOG_OUT } from "action";

const API_KEY = config.Kakao_KEY;
const REDIRECT_URI = "http://localhost:3000/sign-in";

const KakaoLogin = {
  getRequestToken: () => {
    const kakaoURL = new URL(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}`
    ); //카카오 소셜 로그인 페이지 URL
    window.location.assign(kakaoURL);
  },
  getAccessToken: (token) => {
    const res = axios({
      method: "post",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      params: {
        grant_type: "authorization_code",
        client_id: `${API_KEY}`,
        redirect_uri: `${REDIRECT_URI}`,
        code: `${token}`,
      },
    }).catch((reject) => alert("로그인 실패"));
    return res;
  },
  getUIDfromDB: async (promise) => {
    //access 토큰 받은 후 서버로 accesstoken 보내고 jwt 받아오기
    const { data } = promise;
    //db에서 해당 user를 찾고 없다면 유저에게 정보 받기
    const res = await axios({
      method: "post",
      url: "http://localhost:4000/kakao/login",
      data: { kakaoLoginData: data },
    });
    return res.data;
  },
  getJWT: (promise) => {
    //user 정보가 없다면 user를 db에 저장하는 api 콜 하나,
    //user가 이미 가입한 적이 있는 경우라면 바로 jwt 받아오기
    let jwt = "abcd";
    const {
      data: { access_token: at },
    } = promise;
    return { jwt, at };
  },
  createUserDB: async (email) => {
    //서버에 유저 생성 요청 call
    const { uid } = store.getState().userInfo;
    let overlap = false;
    //해당 이메일을 사용하는 유저가 있는지 먼저 확인 -> 이메일이 중복되면, 다른 메일 사용 요청(추후 닉네임으로 바뀔 가능성)
    const checkOverlap = await firebaseInstance.database().ref("/users").get();
    await checkOverlap.forEach((data) => {
      if (data.email === email) {
        overlap = true;
      }
    });
    //유저 중복 확인 코드 필요
    /*
    if (overlap) {
      return { isSaved: false, overlap: true };
    }*/

    const res = await axios({
      method: "post",
      url: `http://localhost:4000/users`,
      params: {
        id: uid,
        email,
      },
    });
    return res.data;
  },
  kakaoLogout: () => {
    const kakaoLogout = new URL(
      `https://kauth.kakao.com/oauth/logout?client_id=${API_KEY}&logout_redirect_uri=${REDIRECT_URI}`
    ); //카카오 소셜 로그인 페이지 URL
    window.location.assign(kakaoLogout);
    store.dispatch({ type: LOG_OUT });
  },
};

export default KakaoLogin;
