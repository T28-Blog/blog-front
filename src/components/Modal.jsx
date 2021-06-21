import React, { useState } from "react";
import { FaTruckMonster } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContainer,
  ModalInfo,
  ModalTitle,
  ModalDesc,
  ModalButtonGroup,
  ModalCancel,
  ModalConfirm,
} from "styles/ModalElements";

const Modal = (props) => {
  const { title, desc } = props;
  const [modalState, setModalState] = useState(true);

  const closeModal = () => {
    setModalState(false);
  };

  return modalState ? (
    <ModalOverlay onClick={(e) => closeModal(e)}>
      <ModalContainer>
        <ModalInfo>알림</ModalInfo>
        <ModalTitle>{title}</ModalTitle>
        <ModalDesc dangerouslySetInnerHTML={{ __html: desc }}></ModalDesc>
        <ModalButtonGroup>
          <ModalCancel onClick={(e) => closeModal(e)} to="/sign-in">
            로그인
          </ModalCancel>
          <ModalConfirm>닫기</ModalConfirm>
        </ModalButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default Modal;
