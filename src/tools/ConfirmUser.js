import getUserInfo from "../api/KakaoAPI";
import { ADD_JWT_WITH_KAKAO } from "action";
import store from "store/store";

async function confirmUser(request) {
  try {
    const access = await getUserInfo.getAccessToken(request);

    if (access) {
      const { userData, userID } = await getUserInfo.getUIDfromDB(access);

      //임시로 로그아웃 진입점 만들기 위해 가짜 jwt로 데이터 추가
      const { jwt, at } = await getUserInfo.getJWT(access); //수정
      store.dispatch({ type: ADD_JWT_WITH_KAKAO, jwt, at }); //수정
      if (!userData) {
        //userData가 null이면 user 정보를 db에 저장하기 위해 사용자로부터 데이터를 전달 받아야 함.
        return { needUserData: true, userID };
      } else {
        //jwt 받아오는 코드 작성 예정
        /*const { jwt, at } = await getUserInfo.getJWT(access);
        store.dispatch({ type: ADD_JWT_WITH_KAKAO, jwt, at });*/
        return { needUserData: false, userData };
      }
    } else {
      alert("로그인 실패..!");
    }
  } catch (e) {
    alert("로그인 실패..!");
  }
}

export default confirmUser;
