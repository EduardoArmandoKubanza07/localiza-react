import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";

export function Image({ icon, userName, handleOnClick }) {
  if (icon) {
    return (
      <Container onClick={handleOnClick}>
        <img src={icon} alt={userName} title={userName} />
      </Container>
    );
  } else {
    return (
      <Container onClick={handleOnClick}>
        <FaUserCircle title={userName} />
      </Container>
    );
  }
}
