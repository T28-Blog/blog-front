import { firebaseInstance } from "fbase/Fbase";
import store from "store/store";
import { ADD_UID_OWN } from "action/index";

const SigninAPI = {
  signin: (
    email,
    password,
    history,
    emailVerified,
    setEmailVerified,
    setIsInvalidEmail,
    setIsInvalidPassword
  ) => {
    firebaseInstance
      .auth()
      .signInWithEmailAndPassword(email, password)
      // 로그인 성공적
      .then(async (userCredential) => {
        // 링크로 로그인
        if (
          firebaseInstance.auth().isSignInWithEmailLink(window.location.href)
        ) {
          firebaseInstance
            .auth()
            .signInWithEmailLink(email, window.location.href)
            .then(async (result) => {
              setEmailVerified("verified");
              const user = firebaseInstance.auth().currentUser;
              const setPassword = password;
              user
                .updatePassword(setPassword)
                .then(() => console.log("pw is set"))
                .catch((error) => console.log(error));
                const uid = firebaseInstance.auth().currentUser.uid;
                let name = '';
                // realtime database에서 정보 fetch 해오기
                const ref = await firebaseInstance.database().ref(`/users/user_${uid}`);
                ref.on('value', (snapshot) => {
                  name = snapshot.val().name;
                }, (errorObject) => {
                  console.log('The read failed: ' + errorObject.name);
                });
              store.dispatch({ type: ADD_UID_OWN, name, uid });
              // store.dispatch({ type: ADD_EMAIL_OAUTH });
              history.push("/");
            })
            .catch((error) => console.log(error));
        }
        // 로그인 성공적, 재로그인
        else if (userCredential.user.emailVerified) {
          const uid = firebaseInstance.auth().currentUser.uid;
          let name = '';
          // realtime database에서 정보 fetch 해오기
          const ref = await firebaseInstance.database().ref(`/users/user_${uid}`);
          ref.on('value', (snapshot) => {
            name = snapshot.val().name;
          }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          });
          store.dispatch({ type: ADD_UID_OWN, name, uid });
          history.push("/");
          // 이메일 인증 안 함
        } else {
          setEmailVerified("shown");
          console.log("email not verified");
        }
      })
      .catch((error) => {
        console.log("is email auth", store.getState().emailInfo.isEmailAuth)
        const errorCode = error.code;
        setEmailVerified(false);
        setIsInvalidEmail(false);
        setIsInvalidPassword(false);
        console.log(errorCode);
        if (errorCode === "auth/user-not-found") setIsInvalidEmail(true);
        // 링크로 인증할 때 비밀번호가 틀리면 비밀번호가 틀렸다고 표시하기
        else if (
          errorCode === "auth/wrong-password" &&
          firebaseInstance.auth().isSignInWithEmailLink(window.location.href)
        ) {
          setIsInvalidPassword(true);
        }
        // 이미 로그인을 했었을 때 비밀번호가 틀리면 표시하기
        else if (
          errorCode === "auth/wrong-password" &&
          store.getState().emailInfo.isEmailAuth
        ) {
          setIsInvalidPassword(true);
        }
        // 메일이 인증되지 않았을 때는 비밀번호 인증이 아니라 링크 인증이 안 되었다고 표기
        else if (emailVerified !== "verified") {
          setEmailVerified("shown");
        } else {
          if (
            firebaseInstance.auth().isSignInWithEmailLink(window.location.href)
          ) {
            alert("이미 인증한 이메일입니다.");
          } else {
            if (errorCode === "auth/user-not-found") setIsInvalidEmail(true);
            else if (errorCode === "auth/wrong-password")
              setIsInvalidPassword(true);
          }
        }
      });
  },
};

export default SigninAPI;
