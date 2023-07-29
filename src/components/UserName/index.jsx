import { Container } from "./styles";
import { useCallback } from "react";

export function UserName({ name }) {
  const abreviateName = useCallback(() => {
    const names = name.split(" ");

    if (names.length > 2) {
      const newName = names[0] + " " + names[names.length - 1];
      return newName;
    } else {
      return name;
    }
  }, []);

  return <Container> {abreviateName()} </Container>;
}
