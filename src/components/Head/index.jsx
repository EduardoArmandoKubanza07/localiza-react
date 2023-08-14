import { Container, NavRight, MenuBar } from "./styles";
import { Logo, UserIcon, Name, SignOut } from "../export";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Head({ user, profile }) {
  const [menuHeight, setMenuHeight] = useState(0);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Logo width={12} />

        <NavRight>
          <Name fullName={user.name ? user.name : ""} />
          <UserIcon
            icon={user.avatarUrl}
            userName={user.name}
            color="#98ce00"
            handleOnClick={() => setMenuHeight(menuHeight === 0 ? 6.5 : 0)}
          />
        </NavRight>

        <MenuBar height={menuHeight}>
          <ul>
            {profile ? (
              <li onClick={() => navigate("/home")}> Início </li>
            ) : (
              <li onClick={() => navigate("/profile")}> Perfil </li>
            )}
            <li title="Sair" onClick={() => setOpenSignOutModal(true)}>
              Terminar sessão
            </li>
          </ul>
        </MenuBar>
      </Container>

      <SignOut
        setIsOpen={setOpenSignOutModal}
        isOpen={openSignOutModal}
        setMenuHeight={setMenuHeight}
      />
    </>
  );
}
