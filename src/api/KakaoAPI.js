import axios from "axios";
import store from "store/store";
import { LOG_OUT } from "action";
import config from "../config";

const API_KEY = config.Kakao_KEY;
const REDIRECT_URI = "http://13.124.113.101:80/loading";
const LOGOUT_URI = "http://13.124.113.101:80/logout";

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
    const { data } = promise;

    const res = await axios({
      method: "post",
      url: "http://13.124.113.101:4000/login/kakao",
      data: { kakaoLoginData: data },
    });
    return res.data;
  },
  kakaoLogout: () => {
    const kakaoLogout = new URL(
      `https://kauth.kakao.com/oauth/logout?client_id=${API_KEY}&logout_redirect_uri=${LOGOUT_URI}`
    ); //카카오 소셜 로그인 페이지 URL
    window.location.assign(kakaoLogout);
    store.dispatch({ type: LOG_OUT });
  },
};

export default KakaoLogin;
