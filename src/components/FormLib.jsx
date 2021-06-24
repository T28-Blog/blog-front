import { useField } from "formik";
import {
  StyledTextInput,
  StyledLabel,
  ErrorMsg,
} from "../styles/SignElements.js";

export const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const {
    isExistingEmail,
    isInvalidEmail,
    isInvalidPassword,
    emailVerified
  } = props;
  return (
    <div>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      {isExistingEmail && <ErrorMsg>이메일이 존재합니다</ErrorMsg>}
      {(emailVerified ==='shown') && <ErrorMsg>이메일 인증이 되지 않았습니다</ErrorMsg>}
      {isInvalidEmail && <ErrorMsg>이메일이 존재하지 않습니다</ErrorMsg>}

      {props.type === "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      {isInvalidPassword && <ErrorMsg>비밀번호가 틀렸습니다</ErrorMsg>}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
      )}
    </div>
  );
};
