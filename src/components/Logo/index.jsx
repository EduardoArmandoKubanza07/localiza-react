import { Container } from "./styles";
import logo from "../../assets/logo.png";

export function Logo({ width }) {
  return <Container width={width} src={logo} />;
}
