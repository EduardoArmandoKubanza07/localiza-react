import { Container, Main, NavBar } from "./styles";
import {
  Head,
  Loading,
  Register,
  NotificationsCard,
  Posts,
  Elevator,
} from "../../components/export";
import { useState, useEffect } from "react";
import api from "../../services/config";

export function Home() {
  document.title = "Localiza - Início";

  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [getPost, setGetPost] = useState("false");
  const [isLoading, setIsLoading] = useState(true);
  const [seletedItem, setSelectedItem] = useState("item1");

  useEffect(() => {
    (async function getUser() {
      const userData = JSON.parse(sessionStorage.getItem("userValid"));
      return userData;
    })().then((data) => {
      setUser(data);
    });
  }, []);

  useEffect(() => {
    const filter = posts.filter((post) => {
      return post.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredPosts(filter);
  }, [search]);

  async function getDatas() {
    const response = await api.get("posts");
    return response.data;
  }

  useEffect(() => {
    getDatas().then((data) => {
      setFilteredPosts(data);
      setPosts(data);
      setIsLoading(false);
    });
  }, [getPost]);

  function fiterPosts(type) {
    switch (type) {
      case "geral":
        return setFilteredPosts(posts);
      case "woman":
        const woman = posts.filter((post) => {
          return post.gender === "Feminino";
        });
        return setFilteredPosts(woman);
      case "man":
        const mans = posts.filter((post) => {
          return post.gender === "Masculino";
        });
        return setFilteredPosts(mans);
      case "finded":
        const findeds = posts.filter((post) => {
          return post.category === "Encontrado";
        });
        return setFilteredPosts(findeds);
      case "desap":
        const desaps = posts.filter((post) => {
          return post.category === "Desaparecido";
        });
        return setFilteredPosts(desaps);
      default:
        break;
    }
  }

  if (user === null || isLoading) return <Loading />;

  return (
    <Container>
      <Head user={user} />
      <Main>
        <NavBar>
          <button onClick={() => setOpenRegisterModal(true)}>
            Fazer divulgação
          </button>

          <div>
            <h1> Filtros </h1>

            <button
              className={seletedItem === "item1" ? "active" : ""}
              onClick={() => {
                fiterPosts("geral");
                setSelectedItem("item1");
              }}
            >
              Geral
            </button>

            <button> Categoria </button>
            <ul>
              <li
                className={seletedItem === "item2" ? "active" : ""}
                onClick={() => {
                  fiterPosts("desap");
                  setSelectedItem("item2");
                }}
              >
                Desaparecidos
              </li>
              <li
                className={seletedItem === "item3" ? "active" : ""}
                onClick={() => {
                  fiterPosts("finded");
                  setSelectedItem("item3");
                }}
              >
                Encontrados
              </li>
            </ul>
            <button> Género </button>
            <ul>
              <li
                className={seletedItem === "item4" ? "active" : ""}
                onClick={() => {
                  fiterPosts("man");
                  setSelectedItem("item4");
                }}
              >
                Masculino
              </li>
              <li
                className={seletedItem === "item5" ? "active" : ""}
                onClick={() => {
                  fiterPosts("woman");
                  setSelectedItem("item5");
                }}
              >
                Feminino
              </li>
            </ul>
          </div>
        </NavBar>

        <Posts
          search={search}
          setSearch={setSearch}
          filteredPosts={filteredPosts}
        />
        <NotificationsCard user={user} />
      </Main>
      <Register
        user={user}
        isOpen={openRegisterModal}
        setIsOpen={setOpenRegisterModal}
        getPost={getPost}
        setGetPost={setGetPost}
      />

      <Elevator />
    </Container>
  );
}
