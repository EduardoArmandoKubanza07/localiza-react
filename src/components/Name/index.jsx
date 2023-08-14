import { Container } from "./styles";

export function Name({ fullName }) {
  const names = fullName.split(" ");
  let abreviatedName = "";

  for (let i = 0; i < names.length; i++) {
    if (i === 0 || i === names.length - 1) {
      abreviatedName += names[i];
    } else {
      abreviatedName += names[i].charAt(0) + ".";
    }

    if (i < names.length - 1) {
      abreviatedName += " ";
    }
  }

  return <Container> {abreviatedName} </Container>;
}
