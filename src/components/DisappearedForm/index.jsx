import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Container,
  File,
  Input,
  Title,
  Description,
  Gender,
  AlertInfo,
  Button,
  Sucess,
} from "./styles";
import { FaImage } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { Message } from "../Message";
import api from "../../services/config";

export function DisappearedForm({ _class, setSelectedItem }) {
  const [avatarUrl, setAvatarUrl] = useState(undefined);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [contacts, setContacts] = useState("");
  const [gender, setGender] = useState("Masculino");
  const [description, setDescription] = useState("");

  const [user, setUser] = useState({});
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userValid"));
    setUser(userData);
  }, []);

  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  const getPosts = useCallback(async () => {
    const response = await api.get("posts");
    return response.data;
  }, []);

  const setPost = useCallback(async (newPost) => {
    await api.post("posts", newPost);
  }, []);

  async function handleAddPost() {
    const newPost = {
      id: uuid(),
      status: "Desaparecido",
      name: name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1));
        })
        .join(" "),
      age: Number(year - age),
      location: location
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1));
        })
        .join(" "),
      contacts: contacts.trim(),
      gender: gender,
      description: description.trim(),

      posterId: user.id,
      posterName: user.name,
      posterAvatarUrl: user.avatarUrl,
    };

    const reader = new FileReader(avatarUrl);

    reader.onload = () => {
      newPost.avatarUrl = reader.result;

      setPost(newPost).then(() => {
        setSuccess(true);
        setMessageText("");
        setOpenMessage(true);
      });
    };

    reader.readAsDataURL(avatarUrl);
  }

  async function handleCreatePost(event) {
    event.preventDefault();

    if (avatarUrl === undefined) {
      setMessageText(
        "Por-favor, faça a selecção de uma imagem antes de poder continuar."
      );
      setOpenMessage(true);
      return;
    }

    let control = 0;
    await getPosts().then((posts) => {
      posts.forEach((post) => {
        if (post.name === name) control++;
      });
    });

    if (control !== 0) {
      setMessageText("");
      setSuccess(false);
      setOpenMessage(true);
      return;
    }

    handleAddPost();
  }

  function resetForm() {
    setName("");
    setAge("");
    setAvatarUrl(undefined);
    setDescription("");
    setLocation("");
    setContacts("");
    setGender("Masculino");
  }

  return (
    <>
      <Message isOpen={openMessage} closeMessage={() => setOpenMessage(false)}>
        {messageText !== "" ? (
          <p> {messageText} </p>
        ) : success ? (
          <Sucess>
            <p> A sua divulgação foi feita com sucesso. </p>
            <button
              onClick={() => {
                setSelectedItem("item1");
                setOpenMessage(false);
                setMessageText("");
              }}
            >
              Ver as publicações
            </button>
          </Sucess>
        ) : (
          <AlertInfo>
            <p>
              Existe alguém cadastrado com as características semelhantes.
              visite a nossa lista de pessoas desaparecidas ou achadas.
            </p>
            <div>
              <button
                onClick={() => {
                  setSelectedItem("item1");
                  setOpenMessage(false);
                  setMessageText("");
                }}
              >
                Visitar
              </button>
              <button onClick={handleAddPost}> Continuar </button>
            </div>
          </AlertInfo>
        )}
      </Message>
      <Container onSubmit={handleCreatePost} className={_class}>
        <Title> Divulgar um desaparecimento </Title>

        <section>
          <div>
            <section>
              <Input
                type="text"
                placeholder="Nome completo"
                autoComplete="on"
                required={true}
                value={name}
                onInput={({ target }) => setName(target.value)}
              />
            </section>
            <section>
              <Input
                type="number"
                placeholder="Ano de nascimento"
                autoComplete="on"
                min={1900}
                max={year}
                required={true}
                value={age}
                onChange={({ target }) => setAge(target.value)}
              />
            </section>
            <section>
              <Input
                type="text"
                placeholder="Morada"
                autoComplete="on"
                required={true}
                value={location}
                onInput={({ target }) => setLocation(target.value)}
              />
            </section>
            <section>
              <Input
                type="text"
                placeholder="Contactos"
                autoComplete="on"
                required={true}
                value={contacts}
                onInput={({ target }) => setContacts(target.value)}
              />
            </section>
          </div>
          <div>
            <section>
              <File>
                <p>
                  {avatarUrl?.name ? avatarUrl.name : "Seleccione uma imagem"}
                </p>
                <label htmlFor="file">
                  <FaImage />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={({ target }) => setAvatarUrl(target.files[0])}
                />
              </File>
            </section>
            <section>
              <Gender
                value={gender}
                onChange={({ target }) => setGender(target.value)}
              >
                <option value="Masculino"> Masculino </option>
                <option value="Feminino"> Feminino </option>
              </Gender>
            </section>
            <section>
              <Description
                autoComplete="on"
                placeholder="Descrição"
                required={true}
                value={description}
                onInput={({ target }) => setDescription(target.value)}
              />
            </section>
          </div>
        </section>
        <div>
          <Button type="reset" onClick={resetForm}>
            Limpar
          </Button>
          <Button type="submit"> Divulgar </Button>
        </div>
      </Container>
    </>
  );
}
