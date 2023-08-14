import {
  Container,
  Header,
  Button,
  Main,
  Baner,
  Content,
  Filter,
  AllPosts,
} from "./styles";
import { useCallback, useEffect, useState } from "react";
import { Logo, Elevator, Loading, Post } from "../../components/export";
import { Link, useNavigate } from "react-router-dom";
import gps from "../../assets/gps.png";
import { FaSearch, FaFilter } from "react-icons/fa";
import api from "../../services/config";

export function Landing() {
  document.title = "Localiza - Apresentação";

  const [search, setSearch] = useState("");
  const [filterHeight, setFilterHeight] = useState(0);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(async () => {
    const response = await api.get("posts");
    return response.data;
  }, []);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setFilters(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilters(filteredPosts);
  }, [search]);

  function filterPosts(type) {
    switch (type) {
      case "geral":
        return setFilters(posts);
      case "mans":
        const mans = posts.filter((post) => {
          return post.gender === "Masculino";
        });

        return setFilters(mans);
      case "womans":
        const womans = posts.filter((post) => {
          return post.gender === "Feminino";
        });

        return setFilters(womans);
      case "finded":
        const findeds = posts.filter((post) => {
          return post.status === "Achado";
        });

        return setFilters(findeds);
      case "disap":
        const disap = posts.filter((post) => {
          return post.status === "Desaparecido";
        });

        return setFilters(disap);
      default:
        return;
    }
  }
  if (isLoading) return <Loading />;

  return (
    <Container>
      <Header>
        <Logo width={"12rem"} />
        <div>
          <Link to="/signup"> Criar Conta </Link>
          <Button
            onClick={() => {
              navigate("/signin");
            }}
          >
            Entrar
          </Button>
        </div>
      </Header>
      <Elevator />
      <Main>
        <Baner>
          <section>
            <h1> Bem - Vindo ao Localiza </h1>
            <h2> A melhor plataforma para localização de desaparecidos </h2>
            <p>
              A nossa plataforma ajuda você a localizar os seus amigos e
              familiares que se encontram desaparecidos de forma rápida e
              eficiente.
            </p>
            <button
              onClick={() => {
                navigate("/signin");
              }}
            >
              Divulgar um desaparecmento
            </button>
          </section>
          <img src={gps} alt="Localiza" />
        </Baner>

        <Content>
          <Filter height={filterHeight}>
            <div>
              <FaSearch />
              <input
                type="search"
                placeholder="Pesquisar no Localiza"
                autoComplete="on"
                value={search}
                onInput={({ target }) => setSearch(target.value)}
              />
            </div>
          </Filter>
          <AllPosts>
            {filters.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </AllPosts>
        </Content>
      </Main>
    </Container>
  );
}
