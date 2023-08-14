import { Contacts, Container, Header, Image, Description } from "./styles";
import { Name, UserIcon } from "../../export";
import { Details } from "../Details";
import { useState } from "react";

export function Post({ post }) {
  const [openDetailsModaL, setOpenDetailsModal] = useState(false);

  return (
    <Container>
      <Header>
        <div>
          <UserIcon userName={post.posterName} icon={post.posterAvatarUrl} />
          <div>
            <Name fullName={post.posterName} />
            <span> {post.date} </span>
          </div>
        </div>
      </Header>
      <Image src={post.avatarUrl} alt={post.name} />
      <Description>
        {post.description + " "}
        <button onClick={() => setOpenDetailsModal(true)}>Saber mais...</button>
      </Description>

      <Details
        post={post}
        isOpen={openDetailsModaL}
        setIsOpen={setOpenDetailsModal}
      />
    </Container>
  );
}
