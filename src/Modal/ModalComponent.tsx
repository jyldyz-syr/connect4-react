import React, { MouseEvent } from "react";
import styled from "styled-components";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const ModalMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;

  const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  `;

  const ModalBox = styled.div`
    position: relative;
    width: 60%;
    margin: 0 10%;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    cursor: auto;
  `;

  const ModalTitle = styled.div`
    color: #9e25fc;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ModalContent = styled.div`
    margin-top: 30px;
    color: #6b6b6b;
    font-size: 16px;
  `;

  const ModalClose = styled.button`
    background-color: #9e25fc;
    font-size: 30px;
    border-radius: 6px;
    color: white;
    margin-bottom: 5%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  `;

  return isOpen ? (
    <ModalMain>
      <ModalOverlay
        ref={outsideRef}
        className={"modal__overlay"}
        onClick={() => handleCloseOnOverlay}
      />
      <ModalBox>
        <ModalClose onClick={onClose}>Start A New Game</ModalClose>
        <ModalTitle>{title}</ModalTitle>

        <ModalContent className={"modal__content"}>{children}</ModalContent>
      </ModalBox>
    </ModalMain>
  ) : null;
};
