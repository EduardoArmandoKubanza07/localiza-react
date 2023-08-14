import { Container, CloseModal, Button } from "./styles";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { Loading } from "../../../../components/export";
import api from "../../../../services/config";
import { useState } from "react";

Modal.setAppElement("#root");

export function Info({ isOpen, setIsOpen, setContact, post }) {
  const [isLoading, setIsLoading] = useState(false);
  function handleCloseModal() {
    setIsOpen(false);
  }

  async function deletePost(id) {
    setIsLoading(true);
    await api.delete(`posts/${id}`);
    await api.delete(`notifications/${id}`);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="content-modal"
        overlayClassName="overlay-modal"
        onAfterOpen={() => setContact(false)}
      >
        <Container>
          <p>
            Tens a certeza que pretendes anunciar o aparecimento de {post.name}?
          </p>
          <Button
            onClick={() => {
              deletePost(post.id).then(() => {
                setIsLoading(false);
                handleCloseModal();
              });
            }}
          >
            Confirmar
          </Button>
        </Container>

        <CloseModal title="Fechar" onClick={handleCloseModal}>
          <FaTimes />
        </CloseModal>
      </Modal>

      {isLoading && <Loading />}
    </>
  );
}
