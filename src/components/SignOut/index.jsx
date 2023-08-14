import { ConfirmBtn, Container, Exit } from "./styles";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

Modal.setAppElement("#root");

export function SignOut({ isOpen, setIsOpen, setMenuHeight }) {
  const { signout } = useContext(AuthContext);

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="content-modal"
      overlayClassName="overlay-modal"
      onAfterOpen={() => {
        setMenuHeight(0);
      }}
    >
      <Container>
        <p> Tens a certeza que pretendes sair ? </p>

        <ConfirmBtn onClick={signout}> Confirmar </ConfirmBtn>

        <Exit title="Fechar" onClick={handleCloseModal}>
          <FaTimes />
        </Exit>
      </Container>
    </Modal>
  );
}
