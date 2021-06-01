import axios from 'axios';
import config from '../config';

const API_KEY = config.Kakao_KEY;

const REDIRECT_URI = 'http://localhost:3000/sign-in';

const getUserInfo = {
  getRequestToken: () => {
    const kakaoURL = new URL(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}`
    ); //카카오 소셜 로그인 페이지 URL
    window.location.assign(kakaoURL);
  },
  getAccessToken: (token) => {
    const res = axios({
      method: 'post',
      url: 'https://kauth.kakao.com/oauth/token',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: {
        grant_type: 'authorization_code',
        client_id: `${API_KEY}`,
        redirect_uri: `${REDIRECT_URI}`,
        code: `${token}`,
      },
    }).catch((reject) => alert('로그인 실패'));
    return res;
  },
  getJWT: (promise) => {
    //access 토큰 받은 후 서버로 accesstoken 보내고 jwt 받아오기
    try {
      let jwt = '';
      //const access = promise;
      //console.log(access); //이 액세스 토큰을 서버에 보냈다고 가정
      jwt = 'abcd';
      return jwt;
    } catch (e) {
      alert('로그인 실패');
    }
  },
};

export default getUserInfo;
