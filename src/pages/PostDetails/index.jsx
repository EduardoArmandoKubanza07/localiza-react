import { useCallback, useEffect, useState } from "react";
import { Container, Image, Content } from "./styles";
import { useParams } from "react-router-dom";
import api from "../../services/config";
import { Loading } from "../../components/export";

export function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPost = useCallback(async () => {
    const response = await api.get(`posts/${id}`);
    return response.data;
  });

  useEffect(() => {
    getPost().then((postData) => {
      setPost(postData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Image src={post.avatarUrl} alt={post.name} />
      <Content>
        {post?.name && <p>Nome : {post.name} </p>}
        {post.age && <p>Idade : {post.age} anos</p>}
        {post?.gender && <p>Sexo : {post.gender} </p>}
        {post?.location && <p> Morada : {post.location} </p>}
        {post?.contacts && <p> Contactos : {post.contacts} </p>}
        {post?.status && <p> Estado : {post.status} </p>}
        {post?.description && <p> Descrição : {post.description} </p>}
      </Content>
    </Container>
  );
}
