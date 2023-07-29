import { Container, Header } from "./styles";
import { Logo } from "../../components/export";

export function Admin() {
  document.title = "Localiza - Administrador";

  return (
    <Container>
      <Header>
        <Logo width={"11rem"} />
      </Header>
    </Container>
  );
}
