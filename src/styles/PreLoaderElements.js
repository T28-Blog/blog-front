import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #77b3d4;
`

export const Loader = styled.div`

`

export const airplane = keyframes`
    from {
        transform: translateY(0px)
    }
    to {
        transform: translateY(50px)
    }
`

export const LoadingPlane = styled.img`
    height: 250px;
    margin-bottom: 50px;

    animation: ${airplane} 1s ease infinite alternate;
`

export const LoadingTitle = styled.h3`
    font-size: 35px;
    color: #fff;
    text-align: center;
`