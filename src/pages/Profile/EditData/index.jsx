import {
  Container,
  Title,
  CloseModal,
  Content,
  Input,
  Gender,
  Button,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import api from "../../../services/config";
import { number } from "zod";
import { Loading } from "../../../components/export";

Modal.setAppElement("#root");

export function EditData({ isOpen, setIsOpen, user, setUser }) {
  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(user.location);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  function handleCloseEditDataModal() {
    setIsOpen(false);
    resetForm();
  }

  async function updateUser() {
    setIsLoading(true);
    const year = new Date().getFullYear();

    user.name = name
      .trim()
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase().concat(word.substring(1));
      })
      .join(" ");
    user.location = location.trim();
    user.gender = gender;

    if (age.trim()) {
      user.age = Number(year - age);
    }

    setUser(user);
    sessionStorage.setItem("userValid", JSON.stringify(user));

    await api.put(`users/${user.id}`, user);
  }

  function resetForm() {
    setAge("");
    setGender("");
    setName(user.name);
    setLocation(user.location);
  }

  useEffect(() => {
    if (name.trim() && location.trim()) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [name, location]);

  return (
    <>
      <Modal
        className="content-modal"
        overlayClassName="overlay-modal"
        isOpen={isOpen}
        onRequestClose={handleCloseEditDataModal}
      >
        <Container>
          <Title> Editar Perfil </Title>

          <Content>
            <Input
              type="text"
              placeholder="Nome completo"
              autoComeplete="on"
              value={name}
              onInput={({ target }) => setName(target.value)}
            />
            <Input
              type="text"
              placeholder="Modada"
              autoComeplete="on"
              value={location}
              onInput={({ target }) => setLocation(target.value)}
            />
            <Gender>
              <select
                value={gender}
                onChange={({ target }) => setGender(target.value)}
              >
                <option value=""> Seleccionar género </option>
                <option value="Masculino"> Masculino </option>
                <option value="Feminino"> Feminino </option>
              </select>
            </Gender>

            <Input
              type="number"
              placeholder="Ano de nascimento"
              value={age}
              onChange={({ target }) => setAge(target.value)}
            />
          </Content>
          <Button
            disabled={disabledButton}
            onClick={() => {
              updateUser().then(() => {
                setIsLoading(false);
                handleCloseEditDataModal();
              });
            }}
          >
            Guardar alterações
          </Button>

          <CloseModal title="Fechar" onClick={handleCloseEditDataModal}>
            <FaTimes />
          </CloseModal>
        </Container>
      </Modal>

      {isLoading && <Loading />}
    </>
  );
}
