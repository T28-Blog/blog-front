import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = styled.div`
    width: 100%;
    padding: 20px 0;
    background-color: #555;

    @media screen and (max-width: 768px){
        position: absolute;
        bottom: 0;
    }

    @media screen and (max-width: 375px){
        position: static;
        padding: 20px 20px;
    }
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

    @media screen and (max-width: 375px){
        width: 335px;
    }
`

export const FooterTitle = styled.p`
    font-size: 14px;
    margin: 10px 80px 10px 0;

    &:last-child{
        margin-right: 0;
    }

    @media screen and (max-width: 375px){
        margin: 10px 45px 10px 0;
    }
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #fff;

    &:hover {
        color: #0d6efd;
    }
`

export const CopyRight = styled.p`
    font-size: 14px;
    color: #999;
    margin: 0 auto;
`