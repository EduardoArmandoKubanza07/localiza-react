import { Container, Header, Image, Date, Description } from "./styles";
import { UserIcon, Name } from "../export";
import { Details } from "./Details";
import { useState } from "react";

export function Post({ post }) {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  return (
    <>
      <Container>
        <Header>
          <UserIcon userName={post.posterName} icon={post.posterAvatarUrl} />
          <div>
            <Name fullName={post.posterName} />
            <Date> {post.date} </Date>
          </div>
        </Header>
        <Image src={post.avatarUrl} />
        <Description>
          {post.description}
          <button onClick={() => setOpenDetailsModal(true)}>
            Saber mais...
          </button>
        </Description>
      </Container>

      <Details
        isOpen={openDetailsModal}
        setIsOpen={setOpenDetailsModal}
        post={post}
      />
    </>
  );
}
