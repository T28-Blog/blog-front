import getUserInfo from '../api/kakaoapi';
import { ADD_JWT } from 'action';
import store from 'store/store';

async function useSignin(request) {
  try {
    const access = await getUserInfo.getAccessToken(request);

    if (access) {
      //jwt 받아와서 유저 정보 저장
      const jwt = await getUserInfo.getJWT(access);
      store.dispatch({ type: ADD_JWT, jwt });
    } else {
      alert('로그인 실패..!');
    }
  } catch (e) {
    console.log(e);
  }
}

export default useSignin;
