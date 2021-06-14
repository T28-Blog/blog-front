import { useField } from 'formik'
import {
    StyledTextInput,
    StyledLabel,
    ErrorMsg
} from '../styles/SignElements.js'

export const TextInput = ({...props}) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

            {props.type !== "password" && (
                <StyledTextInput invalid={meta.touched && meta.error}
                    {...field}
                    {...props} 
                />
            )}

            {props.type === "password" && (
                <StyledTextInput invalid={meta.touched && meta.error}
                    {...field}
                    {...props} 
                />
            )}

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ):(
                <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
            )}
        </div>
    )
}