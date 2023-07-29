import { useCallback } from "react";
import { Container } from "./styles";
import { FaArrowUp } from "react-icons/fa";

export function Elevator() {
  const backTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 9,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container
      className="elevator"
      title="Voltar para o totpo"
      onClick={backTop}
    >
      <FaArrowUp />
    </Container>
  );
}

window.addEventListener("scroll", () => {
  const elevator = document.querySelector(".elevator");
  if (window.pageYOffset > 0) {
    elevator.classList.add("active");
  } else {
    elevator.classList.remove("active");
  }
});
