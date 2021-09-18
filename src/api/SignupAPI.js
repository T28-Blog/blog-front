import { firebaseInstance } from "fbase/Fbase";
import LoginDB from "./LoginDB";
import config from "../config";

const SignupAPI = {
  signup: (email, password, name, history, setIsExistingEmail) => {
    firebaseInstance
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setIsExistingEmail(false);
        const actionCodeSettings = {
          url: `${config.IP_ADDRESS}:3000/sign-in`,
          handleCodeInApp: true,
        };
        firebaseInstance
          .auth()
          .sendSignInLinkToEmail(email, actionCodeSettings)
          .then((res) => {
            LoginDB.createUserDB(name, email);
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
