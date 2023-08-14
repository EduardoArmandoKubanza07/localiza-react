import { Container, Image, Content, CloseModal } from "./styles";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

Modal.setAppElement("#root");

export function Details({ isOpen, setIsOpen, post }) {
  function handleCloseDetailsModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseDetailsModal}
      className="content-modal"
      overlayClassName="overlay-modal"
    >
      <Container>
        <Image src={post.avatarUrl} />

        <Content>
          {post?.name && <p> Nome : {post.name} </p>}
          {post?.age && <p> Idade : {post.age} anos </p>}
          {post?.gender && <p> Género : {post.gender} </p>}
          {post?.location && <p> Morada : {post.location} </p>}
          {post?.contacts && <p> Contactos : {post.contacts} </p>}
          {post?.category && <p> Categoria : {post.category} </p>}
          {post?.date && <p> Divulgado aos {post.date} </p>}
          {post?.description && <p> Descrição : {post.description} </p>}
        </Content>

        <CloseModal title="Fechar" onClick={handleCloseDetailsModal}>
          <FaTimes />
        </CloseModal>
      </Container>
    </Modal>
  );
}
