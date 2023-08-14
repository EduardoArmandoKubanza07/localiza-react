import { Container, Content, Title } from "./styles";
import { useFetch } from "../../hooks/useFetch";
import { Notification } from "./Notification";

export function NotificationsCard({ user }) {
  const { data } = useFetch("notifications");

  if (!data) return null;
  const filterNotifications = data.filter((notification) => {
    return user.id !== notification.posterId;
  });

  return (
    <Container>
      <Title> Notificações </Title>
      <Content>
        {filterNotifications.length === 0 ? (
          <p> Sem notificações </p>
        ) : (
          filterNotifications
            .toReversed()
            .map((notification) => (
              <Notification key={notification.id} notification={notification} />
            ))
        )}
      </Content>
    </Container>
  );
}
