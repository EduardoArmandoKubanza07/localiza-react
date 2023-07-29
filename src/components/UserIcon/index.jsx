import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";

export function UserIcon({ icon, userName, handleOnClick, color }) {
  if (icon) {
    return (
      <Container title={userName} onClick={handleOnClick} color={color}>
        <img src={userName} alt={alt} />
      </Container>
    );
  }

  return (
    <Container title={userName} onClick={handleOnClick} color={color}>
      <FaUserCircle />
    </Container>
  );
}
