import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    height: 100vh;
    flex-direction: column;
    margin: 0 auto;
`

export const SuccessLogo = styled.img`
    width: 300px;
    margin-bottom: 30px;
`

export const SuccessTitle = styled.h3`
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 30px;
`

export const SuccessDesc = styled.p`
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 50px;
`

export const SuccessButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 50px;
    border-radius: 40px;
    background: transparent;
    border: 1px solid #256ce1;
    padding: 5px 22px;
    font-size: 18px;
    color: #256ce1;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 50px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #256ce1;
        color: #fff;
    }
`