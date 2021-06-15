import React from 'react'
import {
    ModalOverlay,
    ModalContainer,
    ModalInfo,
    ModalTitle,
    ModalDesc,
    ModalButtonGroup,
    ModalCancel,
    ModalConfirm
} from 'styles/ModalElements'

const Modal = ( props ) => {

    const { state, closeModal, title, desc} = props;

    return (state ?
        <ModalOverlay onClick={ e => closeModal(e)}>
            <ModalContainer>
                <ModalInfo>알림</ModalInfo>
                <ModalTitle>{title}</ModalTitle>
                <ModalDesc dangerouslySetInnerHTML={ {__html: desc} }></ModalDesc>
                <ModalButtonGroup>
                    <ModalCancel onClick={ e => closeModal(e)} to='/'>홈으로</ModalCancel>
                    <ModalConfirm>재시도</ModalConfirm>
                </ModalButtonGroup>
            </ModalContainer>            
        </ModalOverlay>
    : null)
}

export default Modal
