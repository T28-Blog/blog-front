import React from 'react';
import { style } from '../FormStyle';
import useForm from 'hooks/useForm';
import validateInfo from '../ValidateInfo';

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo.signUp,
  );

  return (
    <Formcontent>
      <Form onSubmit={handleSubmit}>
        <h1>Get started with us!</h1>
        <FormInputs>
          <FormLabel htmlFor="username">
            이름<span>*</span>
          </FormLabel>
          <TextInput
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="email">
            이메일<span>*</span>
          </FormLabel>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="password">
            비밀번호<span>*</span>
          </FormLabel>
          <TextInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="password2">
            비밀번호 확인<span>*</span>
          </FormLabel>
          <TextInput
            id="password2"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
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
