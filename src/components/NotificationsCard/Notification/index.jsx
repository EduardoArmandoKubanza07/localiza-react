import { Container } from "./styles";
import { useState } from "react";
import { Details } from "../Details";

export function Notification({ notification }) {
  const [openDetailsModaL, setOpenDetailsModal] = useState(false);

  if (notification.category === "post") {
    return (
      <>
        <Container>
          <p>
            <span> {notification.posterName} </span> fez uma divulgação
            recentemente{" "}
            <button onClick={() => setOpenDetailsModal(true)}>
              saber mais ...
            </button>
          </p>
          <img src={notification.avatarUrl} alt={notification.name} />
        </Container>

        <Details
          post={notification}
          isOpen={openDetailsModaL}
          setIsOpen={setOpenDetailsModal}
        />
      </>
    );
  }
}
