import React from 'react';
import { style } from './FormSignUpStyle';
import useForm from 'hooks/useForm';

const FormSignUp = () => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <Formcontent>
      <Form onSubmit={handleSubmit}>
        <h1>Get started with us!</h1>
        <FormInputs>
          <FormLabel htmlFor="username">User Name</FormLabel>
          <TextInput
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
          />
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
          />
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextInput
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="password2">Password2</FormLabel>
          <TextInput
            id="password2"
            type="password"
            name="password2"
            placeholder="password2"
            value={values.password2}
            onChange={handleChange}
          />
        </FormInputs>
        <FormBtn type="submit">Sign Up</FormBtn>
        <ExtraText>
          이미 계정이 있으신가요? <TextLink to="/sign-in">로그인</TextLink>
        </ExtraText>
      </Form>
    </Formcontent>
  );
};

export default FormSignUp;

const {
  Formcontent,
  Form,
  FormInputs,
  FormLabel,
  TextInput,
  FormBtn,
  ExtraText,
  TextLink,
} = style;
