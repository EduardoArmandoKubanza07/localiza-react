import { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { FaArrowUp } from "react-icons/fa";

export function Elevator() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setActive(true) : setActive(false);
    });
  }, []);

  const backTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container
      className={active ? "active" : ""}
      title="Voltar ao topo"
      onClick={backTop}
    >
      <FaArrowUp />
    </Container>
  );
}
