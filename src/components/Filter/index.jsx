import { Container, Button, Input } from "./styles";
import { FaFilter, FaSearch } from "react-icons/fa";

export function Filter({
  search,
  setSearch,
  filterPosts,
  filterHeight,
  setFilterHeight,
}) {
  return (
    <Container height={filterHeight}>
      <section>
        <Button
          title="Buscas por filtro"
          onClick={() => setFilterHeight(filterHeight === 0 ? 12.6 : 0)}
        >
          <FaFilter />
          <span> Filtros </span>
        </Button>
        <div>
          <ul>
            <li
              title="Geral"
              onClick={() => {
                filterPosts("geral");
              }}
            >
              Geral
            </li>
            <li
              title="Pessoas desaparecidas"
              onClick={() => {
                filterPosts("disap");
              }}
            >
              Desaparecidos
            </li>
            <li
              title="Pessoas achadas"
              onClick={() => {
                filterPosts("finded");
              }}
            >
              Achado
            </li>
            <li
              title="Homens"
              onClick={() => {
                filterPosts("mans");
              }}
            >
              Homens
            </li>
            <li
              title="Mulheres"
              onClick={() => {
                filterPosts("womans");
              }}
            >
              Mulheres
            </li>
          </ul>
        </div>
      </section>
      <Input>
        <FaSearch />
        <input
          type="search"
          placeholder="Pesquisar no Localiza"
          autoComplete="on"
          value={search}
          onInput={({ target }) => setSearch(target.value)}
        />
      </Input>
    </Container>
  );
}
