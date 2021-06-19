import { firebaseInstance } from "fbase/Fbase";
import { ADD_UID_OWN } from "action";
import store from "store/store";

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
      .then((userCredential) => {
        if (
          firebaseInstance.auth().isSignInWithEmailLink(window.location.href)
        ) {
          setEmailVerified("verified");
          firebaseInstance
            .auth()
            .signInWithEmailLink(email, window.location.href)
            .then((result) => {
              const user = firebaseInstance.auth().currentUser;
              const setPassword = password;
              const name = email.split('').splice(0, email.toString().indexOf('@')).join('');
              user
                .updatePassword(setPassword)
                .then(() => console.log("pw is set"))
                .catch((error) => console.log(error));
              console.log(email);
                store.dispatch({ type: ADD_UID_OWN, uid: user.uid, name});
              history.push("/");
            })
            .catch((error) => console.log(error));
        } else if (userCredential.user.emailVerified) {
          const user = userCredential.user;
          const name = email.split('').splice(0, email.toString().indexOf('@')).join('');
          store.dispatch({ type: ADD_UID_OWN, uid: user.uid, name});
          history.push("/");
        } else {
          setEmailVerified("shown");
          console.log("email not verified");
        }
      })
      .catch((error) => {
        setIsInvalidEmail(false);
        setIsInvalidPassword(false);
        const errorCode = error.code;
        if (
          firebaseInstance.auth().isSignInWithEmailLink(window.location.href)
        ) {
          setEmailVerified("verified");
          if (errorCode === "auth/user-not-found") setIsInvalidEmail(true);
          else if (errorCode === "auth/wrong-password")
            setIsInvalidPassword(true);
        } else {
          if (errorCode === "auth/user-not-found") {
            setIsInvalidEmail(true);
            return;
          }
          if (emailVerified === "hidden") setEmailVerified("shown");
        }
        const errorMessage = error.message;
        console.log("here", error, errorCode, errorMessage);
      });
  },
};

export default SigninAPI;
