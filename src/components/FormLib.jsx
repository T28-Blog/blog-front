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
      {isExistingEmail && <ErrorMsg>Email exists</ErrorMsg>}
      {isInvalidEmail && <ErrorMsg>Email does not exist</ErrorMsg>}

      {props.type === "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      {isInvalidPassword && <ErrorMsg>Password is not valid</ErrorMsg>}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
      )}
    </div>
  );
};
