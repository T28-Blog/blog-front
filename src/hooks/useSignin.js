import getUserInfo from "../api/KakaoAPI";
import { ADD_JWT_WITH_KAKAO } from "action";
import store from "store/store";

async function useSignin(request) {
  try {
    const access = await getUserInfo.getAccessToken(request);

    if (access) {
      //jwt 받아와서 유저 정보 저장
      const { jwt, at } = await getUserInfo.getJWT(access); //at가 jwt 내에 들어간다면 store state 및 access_token을 다루는 코드 전체 수정 필요
      store.dispatch({ type: ADD_JWT_WITH_KAKAO, jwt, at });
    } else {
      alert("로그인 실패..!");
    }
  } catch (e) {
    console.log(e);
  }
}

export default useSignin;
