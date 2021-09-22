import React from 'react';
import { style } from '../FormStyle';
import useForm from 'hooks/useForm';
import ValidateInfo from '../ValidateInfo';

const FormSignIn = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    ValidateInfo,
  );
  return (
    <Formcontent>
      <Form onSubmit={handleSubmit}>
        <h1>Get started with us!</h1>
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
        <FormBtn type="submit">Sign In</FormBtn>
        <ExtraText>
          아직 회원이 아니신가요? <TextLink to="/sign-up">회원가입</TextLink>
        </ExtraText>
      </Form>
    </Formcontent>
  );
};

export default FormSignIn;

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
