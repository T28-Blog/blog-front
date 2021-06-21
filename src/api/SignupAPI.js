import { firebaseInstance } from "fbase/Fbase";
import LoginDB from "./LoginDB";
import store from "store/store";
import { ADD_UID, ADD_NAME } from "action";

const SignupAPI = {
  signup: (email, password, name, history, setIsExistingEmail) => {
    firebaseInstance
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setIsExistingEmail(false);
        const user = firebaseInstance.auth().currentUser;
        const actionCodeSettings = {
          url: "http://localhost:3000/sign-in",
          handleCodeInApp: true,
        };
        firebaseInstance
          .auth()
          .sendSignInLinkToEmail(email, actionCodeSettings)
          .then((res) => {
            console.log("success");
            LoginDB.createUserDB(name, email);
            store.dispatch({
              type: ADD_UID,
              uid: user.uid,
            });
            store.dispatch({
              type: ADD_NAME,
              name
            })
            history.push("/success", { email, name });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
            alert("회원 가입에 실패하였습니다. 잠시 후 다시 시도해주세요.");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") setIsExistingEmail(true);
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
      });
  },
};

export default SignupAPI;
