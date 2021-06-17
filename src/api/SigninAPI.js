import { firebaseInstance } from "fbase/Fbase";
import { ADD_JWT_OWN } from "action";
import store from "store/store";

const SigninAPI = {
  signin: (email, password, history, emailVerified, setEmailVerified, setIsInvalidEmail, setIsInvalidPassword) => {
    firebaseInstance
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (
          firebaseInstance.auth().isSignInWithEmailLink(window.location.href)
        ) {
          setEmailVerified('verified');
          firebaseInstance
            .auth()
            .signInWithEmailLink(email, window.location.href)
            .then((result) => {
              const user = firebaseInstance.auth().currentUser;
              const setPassword = password;
              user
                .updatePassword(setPassword)
                .then(() => console.log("pw is set"))
                .catch((error) => console.log(error));
              const jwt = null;
              const at = null;
              store.dispatch({ type: ADD_JWT_OWN, jwt, at });
              history.push("/");
            })
            .catch((error) => console.log(error));
        } else if (userCredential.user.emailVerified) {
          // var user = userCredential.user;
          const jwt = null;
          const at = null;
          store.dispatch({ type: ADD_JWT_OWN, jwt, at });
          history.push("/");
        } else {
          setEmailVerified('shown');
          console.log("email not verified");
        }
      })
      .catch((error) => {
        setIsInvalidEmail(false);
        setIsInvalidPassword(false);
        if (emailVerified === 'hidden') {
          setEmailVerified('shown');
          return;
        }
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") setIsInvalidEmail(true);
        if (errorCode === "auth/wrong-password") setIsInvalidPassword(true);
        const errorMessage = error.message;
        console.log('here', error, errorCode, errorMessage);
      });
  },
};

export default SigninAPI;
