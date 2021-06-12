import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const ErrorImg = styled.img`
    width: 600px;
    margin-bottom: 80px;
`

export const ErrorTitle = styled.h2`
    font-size: 32px;
    color: blue;
    margin-bottom: 30px;
`

export const ErrorDesc = styled.p`
    font-size: 20px;
    text-align: center;
    line-height: 30px;
`

export const ErrorButton = styled(Link)`
    display: flex;
    align-items: center;
    border-radius: 40px;
    background: transparent;
    border: 1px solid #256ce1;
    padding: 5px 22px;
    color: #256ce1;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    margin-left: 24px;
    margin-top: 20px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #256ce1;
        color: #fff;
    }
`