import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background: #fff;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  label {
    display: inline-inline-block;
    font-size: 12px;
    color: #6c757d;
  }
  input {
    display: flex;
    width: 250px;
    margin-bottom: 1rem;
    padding-left: 10px;
    font-size: 16px;
  }
  .photo {
    padding-left: 0;
    margin-bottom: 50px;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
