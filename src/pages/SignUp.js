import FormSignUp from 'components/form/signup/FormSignUp';
import FormSuccess from 'components/form/FormSuccess';
import React, { useState } from 'react';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default SignUp;
