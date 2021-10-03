import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from './Firebase';

const authentication = {
  createUserInFirebaseAuth: async (userEmail, userPassword) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
      const user = userCredential.user;
      return { error: false, user };
    } catch (e) {
      return { error: true, code: e.code, message: e.message };
    }
  },
  logIn: async (userEmail, userPassword) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
      const user = userCredential.user;
      return { error: false, user };
    } catch (e) {
      //auth/user-not-found
      return { error: true, code: e.code, message: e.message };
    }
  },
  sendConfirmEmailToUser: () => {
    /**
     * sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
     */
  },
  updateUserProfile: async (updateInfo) => {
    try {
      await updateProfile(auth.currentUser, updateInfo);
      return { error: false };
    } catch (e) {
      return { error: true, code: e.code, message: e.message };
    }
  },
  logOut: async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  },
};

export default authentication;
