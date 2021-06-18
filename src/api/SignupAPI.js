import { firebaseInstance } from "fbase/Fbase";
import LoginDB from './LoginDB';

const SignupAPI = {
  signup: (email, password, history, setIsExistingEmail) => {
    firebaseInstance
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setIsExistingEmail(false);

        LoginDB.createUserDB(email);

        const actionCodeSettings = {
          url: "http://localhost:3000/sign-in",
          handleCodeInApp: true,
        };
        firebaseInstance
          .auth()
          .sendSignInLinkToEmail(email, actionCodeSettings)
          .then(() => {
            console.log("success");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
          });
        history.push("/success");
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
