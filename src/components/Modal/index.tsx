import React from "react";

import { Container, Overlay, Box, Close, Title, Content } from "./styles";
import { ModalProps } from "./types";
import { MdClose } from "react-icons/md";

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const overlayRef = React.useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Container>
      <Overlay ref={overlayRef} onClick={handleOverlayClick} />
      <Box>
        <Close onClick={onClose}>
          <MdClose />
        </Close>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Box>
    </Container>
  ) : null;
};

export default Modal;
