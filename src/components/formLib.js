import { useField } from 'formik'
import {
    StyledTextInput,
    StyledLabel
} from '../styles/signElements.js'

export const TextInput = ({...props}) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            <StyledTextInput
                {...field}
                {...props}
            />
        </div>
    )
}