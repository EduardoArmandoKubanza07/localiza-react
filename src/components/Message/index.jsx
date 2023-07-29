import { Container, Content } from "./styles";
import { Logo } from "../export";
import { FaTimes } from "react-icons/fa";

export function Message({ isOpen, closeMessage, children }) {
  if (isOpen) {
    return (
      <Container>
        <Content>
          <div>
            <Logo width={"10rem"} />
            <FaTimes title="Fechar" onClick={closeMessage} />
          </div>
          <section>{children}</section>
        </Content>
      </Container>
    );
  }
  return null;
}
