import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const colors = {
    primary: "#fff",
    theme: "#256ce1",
    light1: "#f3f4f6",
    light2: "#e5e7eb",
    dark1: "#1f2937",
    dark2: "#4b5563",
    dark3: "#9ca3af",
    red: "#dc2626",
    black: "#000"
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`

export const Avatar = styled.div`
    width: 200px;
    height: 80px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: 0 auto;
`

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`

export const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`

export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 30px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.light2};
    border: 1px solid ${colors.black};
    outline: 0;
    display: block;
    margin: 5px auto 20px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const StyledFormArea = styled.div`
    max-width: 375px;
    background-color: ${props => props.bg || colors.primary};
    text-align: center;
    padding: 45px 50px;
    margin: 50px auto 0 auto;
    box-shadow: 8px 8px 20px 8px ${colors.light2};

    @media screen and (max-width: 768px){
        width: 100%;
        height: 100vh;
        margin-top: 0;
    }
`

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover {
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer;
    }
`