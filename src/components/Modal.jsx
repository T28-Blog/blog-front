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
  const { title, desc, reopenFn } = props; //reopenFn : 댓글창 여러 번 선택 시 계속 팝업이 뜨도록 하기 위한 useState 콜백함수
  const [modalState, setModalState] = useState(true);

  const closeModal = () => {
    setModalState(false);
    if (reopenFn) {
      reopenFn(false);
    }
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
