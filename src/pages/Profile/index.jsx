import {
  Container,
  Baner,
  Content,
  EditButton,
  PostsContainer,
  ProfileInfo,
} from "./styles";
import { useState, useEffect } from "react";
import { Loading, Header, Elevator } from "../../components/export";
import { Image } from "./Image";
import { FaEdit } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import { EditImage } from "./EditImage";
import { EditData } from "./EditData";
import { PostCard } from "./PostCard";

export function Profile() {
  document.title = "Localiza - Perfil";

  const [openEditImageModal, setOpenEditImageModal] = useState(false);
  const [openEditDataModal, setOpenEditDataModal] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function getUser() {
      const userData = await JSON.parse(sessionStorage.getItem("userValid"));
      return userData;
    })().then((data) => {
      setUser(data);
    });
  }, []);

  const { data } = useFetch("posts");

  if (user === null || !data) return <Loading />;

  const filterPosts = data.filter((post) => {
    return post.posterId === user.id;
  });

  return (
    <>
      <Container>
        <Header user={user} />
        <Baner>
          <Image
            icon={user.avatarUrl}
            handleOnClick={() => setOpenEditImageModal(true)}
          />
        </Baner>
        <Content>
          <ProfileInfo>
            {user?.name && <p>{user.name} </p>}
            {user?.email && <p> {user.email} </p>}
            {user?.location && <p> {user.location} </p>}
          </ProfileInfo>
          <PostsContainer>
            {filterPosts.toReversed().map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostsContainer>
          <EditButton onClick={() => setOpenEditDataModal(true)}>
            <span>Editar Perfil</span>
            <FaEdit />
          </EditButton>
        </Content>

        <Elevator />
      </Container>

      <EditImage
        isOpen={openEditImageModal}
        setIsOpen={setOpenEditImageModal}
        setUser={setUser}
        user={user}
      />

      <EditData
        isOpen={openEditDataModal}
        setIsOpen={setOpenEditDataModal}
        user={user}
        setUser={setUser}
      />
    </>
  );
}
