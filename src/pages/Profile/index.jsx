import { Container, Main } from "./styles";
import { Header, Loading } from "../../components/export";
import { useState, useLayoutEffect } from "react";

export function Profile() {
  document.title = "Localiza - Perfil";

  // Buscar dados do usuário logado //
  const [user, setUser] = useState(null);
  useLayoutEffect(() => {
    (async function getUserValid() {
      const userData = await JSON.parse(sessionStorage.getItem("userValid"));
      return userData;
    })().then((userData) => setUser(userData));
  }, []);

  if (user === null) return <Loading />;

  return (
    <Container>
      <Header user={user} profile={true} />
      <Main>Perfil </Main>
    </Container>
  );
}
