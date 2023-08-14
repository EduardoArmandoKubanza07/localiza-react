import { Container, CloseModal, Title, ImageCard, Buttons } from "./styles";
import Modal from "react-modal";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import api from "../../../services/config";
import { Loading } from "../../../components/export";

Modal.setAppElement("#root");

export function EditImage({ isOpen, setIsOpen, setUser, user }) {
  const [selected, setSelected] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleCloseEditImagModal() {
    setIsOpen(false);
    setPreview(null);
    setSelected(false);
  }

  useEffect(() => {
    if (avatar !== null) {
      const reader = new FileReader(avatar);

      reader.onload = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(avatar);

      setSelected(true);
    }
  }, [avatar]);

  async function updateUser() {
    setIsLoading(true);
    user.avatarUrl = preview;
    setUser(user);
    sessionStorage.setItem("userValid", JSON.stringify(user));

    await api.put(`users/${user.id}`, user);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseEditImagModal}
        className="content-modal"
        overlayClassName="overlay-modal"
      >
        <Container>
          <Title> Editar a imagem de perfil </Title>

          <ImageCard>
            {preview ? <img src={preview} alt={user.name} /> : <FaUserCircle />}
          </ImageCard>

          <Buttons>
            <button
              onClick={() => {
                setSelected(false);
                setPreview(null);
              }}
            >
              Cancelar
            </button>
            <input
              type="file"
              id="file"
              onChange={({ target }) => setAvatar(target.files[0])}
            />

            {!selected && (
              <label htmlFor="file">
                <span> Seleccionar imagem </span>
              </label>
            )}
            {selected && (
              <button
                onClick={() => {
                  updateUser().then(() => {
                    setIsLoading(false);
                    handleCloseEditImagModal();
                  });
                }}
              >
                Guardar imagem
              </button>
            )}
          </Buttons>

          <CloseModal title="Fechar" onClick={handleCloseEditImagModal}>
            <FaTimes />
          </CloseModal>
        </Container>
      </Modal>

      {isLoading && <Loading />}
    </>
  );
}
