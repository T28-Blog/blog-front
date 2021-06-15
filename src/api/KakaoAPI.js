import axios from "axios";
import config from "../config";
import { auth } from "fbase/Fbase";

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
  getJWT: (promise) => {
    //access 토큰 받은 후 서버로 accesstoken 보내고 jwt 받아오기
    try {
      //자체 서버 필요함
      /*
      const {
        data: { access_token },
      } = promise;
      auth
        .signInWithCustomToken(access_token)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((err) => {
          console.log(err);
        });
        */
      let jwt = "";
      //const access = promise;
      //console.log(promise); //이 액세스 토큰을 서버에 보내고 정상 처리 되었다고 가정
      jwt = "abcd";
      const {
        data: { access_token: at },
      } = promise;
      return { jwt, at };
    } catch (e) {
      alert("로그인 실패");
    }
  },
  kakaoLogout: () => {
    const kakaoLogout = new URL(
      `https://kauth.kakao.com/oauth/logout?client_id=${API_KEY}&logout_redirect_uri=${REDIRECT_URI}`
    ); //카카오 소셜 로그인 페이지 URL
    window.location.assign(kakaoLogout);
  },
};

export default KakaoLogin;
