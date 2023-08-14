import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";

export function UserIcon({ icon, userName, handleOnClick, color }) {
  if (icon) {
    return (
      <Container onClick={handleOnClick} color={color}>
        <img src={icon} alt={userName} title={userName} />
      </Container>
    );
  } else {
    return (
      <Container onClick={handleOnClick} color={color}>
        <FaUserCircle title={userName} />
      </Container>
    );
  }
}
