import { useState } from "react";
import {
  Container,
  FilterButton,
  SearchInut,
  Filter,
  StateGender,
  StateD,
} from "./styles";
import { FaFilter, FaSearch } from "react-icons/fa";

export function Filters({ search, setSearch, fiterPosts }) {
  const [filterHeight, setFilterHeight] = useState(0);

  const [selectedIem, setSelectedItem] = useState("item1");

  return (
    <Container>
      {/*<section>
        <FilterButton
          onClick={() => setFilterHeight(filterHeight === 0 ? "auto" : 0)}
        >
          <FaFilter />
          <span> Filtros</span>
        </FilterButton>

        <Filter height={filterHeight}>
          <ul>
            <li
              className={selectedIem === "item1" ? "active" : ""}
              onClick={() => {
                fiterPosts("geral");
                setSelectedItem("item1");
              }}
            >
              Geral
            </li>
            <li>Género</li>
            <StateGender>
              <li
                className={selectedIem === "item2" ? "active" : ""}
                onClick={() => {
                  fiterPosts("man");
                  setSelectedItem("item2");
                }}
              >
                Masculino
              </li>
              <li
                className={selectedIem === "item3" ? "active" : ""}
                onClick={() => {
                  fiterPosts("woman");
                  setSelectedItem("item3");
                }}
              >
                Feminino
              </li>
            </StateGender>
            <li>Estado</li>
            <StateD>
              <li
                className={selectedIem === "item4" ? "active" : ""}
                onClick={() => {
                  fiterPosts("desap");
                  setSelectedItem("item4");
                }}
              >
                Desaparecidos
              </li>
              <li
                className={selectedIem === "item5" ? "active" : ""}
                onClick={() => {
                  fiterPosts("finded");
                  setSelectedItem("item5");
                }}
              >
                Encontrados
              </li>
            </StateD>
          </ul>
        </Filter>
      </section> */}

      <SearchInut>
        <FaSearch />
        <input
          type="search"
          placeholder="Buscar no Localiza"
          autoCapitalize="on"
          value={search}
          onInput={({ target }) => setSearch(target.value)}
        />
      </SearchInut>
    </Container>
  );
}
