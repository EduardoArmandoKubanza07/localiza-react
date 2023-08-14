import { Container, FirstButtom, SecondButton, Exit } from "./styles";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { Form } from "./Form";
import { useState } from "react";

Modal.setAppElement("#root");

export function Register({ isOpen, setIsOpen, user, setGetPost, getPost }) {
  const [openForm, setOpenForm] = useState(false);
  const [category, setCategory] = useState("");

  function handleCloseRegisterModal() {
    setIsOpen(false);
    setOpenForm(false);
  }
  return (
    <Modal
      isOpen={isOpen}
      className="content-modal"
      overlayClassName="overlay-modal"
      onRequestClose={handleCloseRegisterModal}
    >
      {openForm ? (
        <Form
          user={user}
          setIsOpen={setOpenForm}
          category={category}
          handleCloseRegisterModal={handleCloseRegisterModal}
          setGetPost={setGetPost}
          getPost={getPost}
        />
      ) : (
        <Container>
          <FirstButtom
            onClick={() => {
              setOpenForm(true);
              setCategory("Desaparecido");
            }}
          >
            Estás a procura de alguém ?
          </FirstButtom>
          <p> ou </p>
          <SecondButton
            onClick={() => {
              setOpenForm(true);
              setCategory("Encontrado");
            }}
          >
            Encontraste alguém ?
          </SecondButton>

          <Exit title="Fechar" onClick={handleCloseRegisterModal}>
            <FaTimes />
          </Exit>
        </Container>
      )}
    </Modal>
  );
}
