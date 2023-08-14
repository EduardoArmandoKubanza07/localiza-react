import { Container, Description, Header, Image, Contacts } from "./styles";
import { Name, UserIcon } from "../../../components/export";
import { GrMore } from "react-icons/gr";
import { useState } from "react";
import { Details } from "./Details";
import { Info } from "./Info";

export function PostCard({ post }) {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [contact, setContact] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <>
      <Container>
        <Header>
          <div>
            <UserIcon userName={post.posterName} icon={post.posterAvatarUrl} />
            <div>
              <Name fullName={post.posterName} />
              <span> {post.date} </span>
            </div>
          </div>

          <button
            title="Mais"
            onClick={() => setContact(contact ? false : true)}
          >
            <GrMore />
          </button>
        </Header>
        <Image src={post.avatarUrl} alt={post.name} />

        <Description>
          {post.description + " "}
          <button onClick={() => setOpenDetailsModal(true)}>
            Saber mais...
          </button>
        </Description>

        <Contacts
          className={contact ? "active" : ""}
          onClick={() => setOpenInfo(true)}
        >
          Comunicar o aparecimento
        </Contacts>
      </Container>

      <Details
        isOpen={openDetailsModal}
        setIsOpen={setOpenDetailsModal}
        post={post}
      />

      <Info
        isOpen={openInfo}
        setIsOpen={setOpenInfo}
        setContact={setContact}
        post={post}
      />
    </>
  );
}
