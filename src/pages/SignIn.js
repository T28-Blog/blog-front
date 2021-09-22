import FormSignIn from 'components/form/signin/FormSignIn';
import React, { useState } from 'react';
import Main from './Main';

const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <FormSignIn submitForm={submitForm} /> : <Main />}</>
  );
};

export default SignIn;
