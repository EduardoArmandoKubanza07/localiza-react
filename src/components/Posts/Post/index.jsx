import { Container, Header, Image } from "./styles";
import { UserIcon, UserName } from "../../export";
import { Link } from "react-router-dom";

export function Post({ post }) {
  const date = new Date();
  let month = date.getMonth();
  month = getMonth(month);
  const day = date.getDate();
  const year = date.getFullYear();

  function getMonth(month) {
    switch (month) {
      case 0:
        return "Janeiro";
      case 1:
        return "Fevereiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outubro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro";
      default:
        return;
    }
  }

  return (
    <Container>
      <Header>
        <UserIcon userName={post.posterName} icon={post.posterAvatarUrl} />
        <div>
          <UserName name={post.posterName} />
          <p> {` ${day} de ${month} de ${year} `}</p>
        </div>
      </Header>
      <Image src={post.avatarUrl} alt={post.name} />
      <Link to={`/post/${post.id}`}> Saber mais </Link>
    </Container>
  );
}
