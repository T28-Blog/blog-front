import FormSignUp from 'components/form/signup/FormSignUp';
import FormSuccess from 'components/form/FormSuccess';
import React, { useState } from 'react';
import authentication from 'api/Authentication';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(userInfo) {
    const { username, email, password } = userInfo;
    const { createUserInFirebaseAuth, updateUserProfile } = authentication;
    createUserInFirebaseAuth(email, password).then(({ error, user, code }) => {
      if (error) {
        //error 발생
      } else {
        updateUserProfile({ displayName: username }).then(({ error }) => {
          if (error) {
          } else {
            setIsSubmitted(true);
          }
        });
      }
    });
  }

  return (
    <>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default SignUp;
