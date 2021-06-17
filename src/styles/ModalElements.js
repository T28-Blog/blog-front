import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ModalOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
`

export const ModalContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    background: #fff;
    margin-top: 15%;
`

export const ModalInfo = styled.p`
    width: 100%;
    font-size: 18px;
    margin: 0;
    padding: 20px 0 20px 20px;
    border-bottom: 1px solid gray;
`

export const ModalTitle = styled.h3`
    width: 100%;
    font-size: 30px;
    margin: 0;
    text-align: center;
    padding: 30px 0 50px;
`

export const ModalDesc = styled.p`
    width: 100%;
    font-size: 16px;
    margin: 0;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid gray;
`

export const ModalButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 10px;
`

export const ModalCancel = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border: 1px solid #256ce1;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    color: #256ce1;
    text-decoration: none;
`

export const ModalConfirm = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #256ce1;
    cursor: pointer;
    color: #fff;
`