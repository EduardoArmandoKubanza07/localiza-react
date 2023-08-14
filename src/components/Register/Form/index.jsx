import {
  Container,
  Exit,
  Title,
  Content,
  Description,
  Input,
  Gender,
  File,
  ResetButtom,
  SendtButtom,
  SuccessCard,
  NotSuccesCard,
  Btn,
} from "./styles";
import { FaTimes, FaImage } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import { Loading } from "../../../components/export";
import { v4 as uuid } from "uuid";
import { Info } from "../Info";

export function Form({
  setIsOpen,
  category,
  user,
  handleCloseRegisterModal,
  setGetPost,
  getPost,
}) {
  const { verifyData, createPost, getDateActual } = useContext(PostContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contacts, setContacts] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (
      name.trim() &&
      location.trim() &&
      contacts.trim() &&
      age.trim() &&
      gender.trim() &&
      description.trim() &&
      avatarUrl !== null &&
      Number(age.trim()) >= 1900 &&
      Number(age.trim()) <= 2023
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [name, location, contacts, age, gender, avatarUrl, description]);
  function resetForm() {
    setName("");
    setLocation("");
    setContacts("");
    setAge("");
    setGender("");
    setAvatarUrl(null);
    setDescription("");
  }

  async function handleValidatePost() {
    setIsLoading(true);

    await verifyData(name, gender).then((response) => {
      console.log(response);

      if (response === null) {
        handleAddPost();
      } else {
        setIsLoading(false);
        setSuccess(false);
        setOpenInfoModal(true);
      }
    });
  }

  async function handleAddPost() {
    setIsLoading(true);
    const year = new Date().getFullYear();

    const newPost = {
      id: uuid(),
      category: category,
      name: name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1));
        })
        .join(" "),
      age: Number(year - age),
      location: location.trim(),
      contacts: contacts.trim(),
      gender: gender,
      description: description.trim(),
      posterId: user.id,
      posterName: user.name,
      posterAvatarUrl: user.avatarUrl,
      date: getDateActual(),
    };

    const reader = new FileReader(avatarUrl);

    reader.onload = () => {
      newPost.avatarUrl = reader.result;

      createPost(newPost).then(() => {
        setIsLoading(false);
        setSuccess(true);
        setOpenInfoModal(true);

        setGetPost(getPost === "false" ? "true" : "false");
      });
    };

    reader.readAsDataURL(avatarUrl);
  }

  function visitPosts() {
    setIsOpen(false);
    handleCloseRegisterModal();
  }
  return (
    <>
      <Container>
        <Title> Fazer a divulgação </Title>

        <Content>
          <section>
            <div>
              <Input
                type="text"
                placeholder="Nome completo"
                autoComplete="on"
                value={name}
                onInput={({ target }) => setName(target.value)}
              />
              <Input
                type="text"
                placeholder="Morada"
                autoComplete="on"
                value={location}
                onInput={({ target }) => setLocation(target.value)}
              />
              <Input
                type="text"
                placeholder="Contactos"
                autoComplete="on"
                value={contacts}
                onInput={({ target }) => setContacts(target.value)}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Ano de nascimento"
                autoComplete="on"
                value={age}
                onInput={({ target }) => setAge(target.value)}
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
              <File>
                <p> {avatarUrl ? avatarUrl.name : "Seleccionar imagem"} </p>
                <label htmlFor="file">
                  <FaImage />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={({ target }) => setAvatarUrl(target.files[0])}
                />
              </File>
            </div>
          </section>
          <Description
            placeholder="Detalhes da divulgação..."
            autoComplete="on"
            value={description}
            onInput={({ target }) => setDescription(target.value)}
          />

          <div>
            <ResetButtom onClick={resetForm}> Limpar </ResetButtom>
            <SendtButtom disabled={disabledButton} onClick={handleValidatePost}>
              Divulgar
            </SendtButtom>
          </div>
        </Content>
        <Exit title="Fechar" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </Exit>
      </Container>

      <Info isOpen={openInfoModal} setIsOpen={setOpenInfoModal}>
        {success ? (
          <SuccessCard>
            <p> A sua divulgação foi feita com sucesso. </p>

            <Btn onClick={visitPosts}> Ver as divulgações </Btn>

            <Exit title="Fechar">
              <FaTimes />
            </Exit>
          </SuccessCard>
        ) : (
          <NotSuccesCard>
            <p>
              Foi encontrado alguém cadastrado com características semelhantes ,
              deseja continuar ou visitar as divulgações ?
            </p>

            <div>
              <button onClick={visitPosts}> Visitar </button>
              <button onClick={handleAddPost}> Continuar </button>
            </div>
          </NotSuccesCard>
        )}
      </Info>
      {isLoading && <Loading />}
    </>
  );
}
