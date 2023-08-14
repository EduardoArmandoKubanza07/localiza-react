import { Container } from "./styles";
import { useState } from "react";
import { Details } from "../Details";

export function Searched({ post, setResult, setSearch }) {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  return (
    <>
      <Container onClick={() => setOpenDetailsModal(true)}>
        <p> {post.name}</p>
        <img src={post.avatarUrl} alt={post.name} />
      </Container>

      <Details
        isOpen={openDetailsModal}
        setIsOpen={setOpenDetailsModal}
        post={post}
        setResult={setResult}
        setSearch={setSearch}
      />
    </>
  );
}
