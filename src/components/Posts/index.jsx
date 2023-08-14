import { Container, Content } from "./styles";
import { Post } from "./Post";
import { Filters } from "../../components/export";

export function Posts({ search, setSearch, filteredPosts }) {
  return (
    <Container>
      <Filters search={search} setSearch={setSearch} />
      <Content>
        {filteredPosts.toReversed().map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Content>
    </Container>
  );
}
