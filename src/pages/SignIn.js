import FormSignIn from 'components/form/signin/FormSignIn';
import React, { useState } from 'react';
import Main from './Main';
import authentication from '../api/Authentication';

const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(userInfo) {
    const { email, password } = userInfo;
    authentication.logIn(email, password).then(({ error, user, code }) => {
      if (error) {
        //error 발생
      } else {
        setIsSubmitted(true);
      }
    });
  }
  return (
    <>{!isSubmitted ? <FormSignIn submitForm={submitForm} /> : <Main />}</>
  );
};

export default SignIn;
