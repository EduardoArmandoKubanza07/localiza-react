import { Container, Main, SideBar, Content } from "./styles";
import { useLayoutEffect, useState } from "react";
import {
  Header,
  Loading,
  Posts,
  Notifications,
  DisappearedForm,
  FindedForm,
  Elevator,
} from "../../components/export";

export function Home() {
  document.title = "Localiza - Início ";

  // Busca de dados do usuário logado //
  const [user, setUser] = useState(null);

  const [selectedIem, setSelectedItem] = useState("item1");
  useLayoutEffect(() => {
    (async function getUserValid() {
      const userData = await JSON.parse(sessionStorage.getItem("userValid"));
      return userData;
    })().then((userData) => setUser(userData));
  }, []);

  if (user === null) return <Loading />;

  return (
    <Container>
      <Header user={user} profile={false} />
      <Main>
        <SideBar>
          <ul>
            <li
              className={selectedIem === "item1" ? "active" : ""}
              onClick={() => {
                setSelectedItem("item1");
              }}
            >
              Publicações
            </li>
            <li
              className={selectedIem === "item2" ? "active" : ""}
              onClick={() => {
                setSelectedItem("item2");
              }}
            >
              Divulgar Desaparecidos
            </li>
            <li
              className={selectedIem === "item3" ? "active" : ""}
              onClick={() => {
                setSelectedItem("item3");
              }}
            >
              Divulgar Achados
            </li>
            <li
              className={selectedIem === "item4" ? "active" : ""}
              onClick={() => {
                setSelectedItem("item4");
              }}
            >
              Notificações
            </li>
          </ul>
        </SideBar>
        <Content>
          <Posts _class={selectedIem === "item1" ? "active" : ""} />
          <DisappearedForm
            _class={selectedIem === "item2" ? "active" : ""}
            setSelectedItem={setSelectedItem}
          />
          <FindedForm _class={selectedIem === "item3" ? "active" : ""} />
          <Notifications _class={selectedIem === "item4" ? "active" : ""} />
        </Content>
      </Main>
      <Elevator />
    </Container>
  );
}
