import { firebaseInstance } from "fbase/Fbase";
import store from "store/store";
import { ADD_NAME, CHANGE_PROFILE, CHANGE_THUMBNAIL } from "action";

const ProfileDB = {
  getUserProfile: async () => {
    const { uid } = store.getState().userInfo;

    try {
      const res = await firebaseInstance
        .database()
        .ref(`/users/user_${uid}`)
        .get();
      return { error: false, user: { ...res.val() } };
    } catch (e) {
      if (!uid) {
        return { error: true, message: "user id가 없습니다." };
      }
      return { error: true, message: "user 정보를 불러오는 데 실패했습니다." };
    }
  },
  createProfileDB: async ({ username, say }, thumbnail, userInfo) => {
    try {
      const { uid } = store.getState().userInfo;

      if (!Object.keys(userInfo).length) {
        const res = await firebaseInstance
          .database()
          .ref(`/users/user_${uid}`)
          .get();
        userInfo = { ...res.val() };
      }

      if (username && userInfo["name"] !== username) {
        userInfo["name"] = username;
      }
      if (say) {
        userInfo["say"] = say;
      }
      if (thumbnail) {
        userInfo["thumbnail"] = thumbnail;
      }

      return firebaseInstance
        .database()
        .ref(`/users/user_${uid}`)
        .set(userInfo, (error) => {
          if (error) {
            //데이터 저장 실패 콜백 실행
          } else {
            //데이터 저장 성공 시, 전역 state 변경
            store.dispatch({ type: ADD_NAME, name: username });
            if (say) {
              store.dispatch({ type: CHANGE_PROFILE, say });
            }
            if (thumbnail) {
              store.dispatch({ type: CHANGE_THUMBNAIL, thumbnail });
            }
          }
        });
    } catch (e) {
      console.log(e);
    }
  },
};

export default ProfileDB;
