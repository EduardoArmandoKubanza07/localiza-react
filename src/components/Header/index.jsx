import { Container, Nav, SearchBar, SearchResult, MenuBar } from "./styles";
import { Logo, UserIcon, SignOut } from "../export";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Searched } from "./Searched";
import api from "../../services/config";
import { useNavigate } from "react-router-dom";

export function Header({ user }) {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const [result, setResult] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async function getPost() {
      const response = await api.get("posts");
      return response.data;
    })().then((data) => {
      setPosts(data);
    });
  }, []);

  // Função Pesquisar //
  useEffect(() => {
    if (search.trim()) {
      setResult(true);

      const searchResult = posts.filter((post) => {
        return post.name.toLowerCase().includes(search.toLowerCase());
      });

      setResultSearch(searchResult);
    } else {
      setResult(false);
    }
  }, [search]);

  return (
    <>
      <Container>
        <Logo width={12} />

        <Nav>
          <section>
            <SearchBar>
              <FaSearch />
              <input
                type="search"
                placeholder="Buscar no Localiza"
                autoComplete="on"
                value={search}
                onInput={({ target }) => setSearch(target.value)}
              />
            </SearchBar>
            <SearchResult className={result ? "active" : ""}>
              {resultSearch.length === 0 ? (
                <p> Pesquisa não encontrada </p>
              ) : (
                resultSearch.map((item) => (
                  <Searched
                    key={item.id}
                    post={item}
                    setResult={setResult}
                    setSearch={setSearch}
                  />
                ))
              )}
            </SearchResult>
          </section>

          <UserIcon
            icon={user.avatarUrl}
            userName={user.name}
            color="#98ce00"
            handleOnClick={() => setMenuHeight(menuHeight === 0 ? 6.5 : 0)}
          />

          <MenuBar height={menuHeight}>
            <ul>
              <li onClick={() => navigate("/home")}> Início </li>

              <li title="Sair" onClick={() => setOpenSignOutModal(true)}>
                Terminar sessão
              </li>
            </ul>
          </MenuBar>
        </Nav>
      </Container>

      <SignOut
        isOpen={openSignOutModal}
        setIsOpen={setOpenSignOutModal}
        setMenuHeight={setMenuHeight}
      />
    </>
  );
}
