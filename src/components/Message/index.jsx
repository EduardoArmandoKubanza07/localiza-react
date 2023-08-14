import { Container, CloseModal } from "./styles";
import { FaTimes } from "react-icons/fa";

import Modal from "react-modal";

Modal.setAppElement("#root");

export function Message({ text, isOpen, closeMessage, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeMessage}
      className="content-modal"
      overlayClassName="overlay-modal"
    >
      <Container>
        <CloseModal title="Fechar" onClick={closeMessage}>
          <FaTimes />
        </CloseModal>

        {children}
      </Container>
    </Modal>
  );
}
