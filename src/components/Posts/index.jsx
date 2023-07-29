import { Container, Filter, Content } from "./styles";
import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import { Post } from "./Post";

export function Posts({ _class }) {
  const [filterHeight, setFilterHeight] = useState(0);
  const [posts, setPosts] = useState([]);

  const { data } = useFetch("posts");

  if (!data) return null;

  return (
    <Container className={_class}>
      <Filter height={filterHeight}>
        <section>
          <button
            title="Buscas por filtro"
            onClick={() => {
              setFilterHeight(filterHeight === 0 ? 10 : 0);
            }}
          >
            <FaFilter />
            Filtros
          </button>
          <div>
            <ul>
              <li title="Pessoas desaparecidas"> Desaparecidos </li>
              <li title="Pessoas achadas"> Achados </li>
              <li title="Homens"> Homens </li>
              <li title="Mulheres"> Mulheres </li>
            </ul>
          </div>
        </section>
        <div>
          <FaSearch />
          <input
            type="search"
            placeholder="Pesquisar no Localiza"
            autoComplete="on"
          />
        </div>
      </Filter>

      <Content>
        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Content>
    </Container>
  );
}
