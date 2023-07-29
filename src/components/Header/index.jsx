import { Container, NavRight, NavLeft, MenuBar } from "./styles";
import { Logo, UserIcon, UserName, OutInfo } from "../export";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function Header({ user, profile }) {
  const [menuHeight, setMenuHeight] = useState(0);
  const navigate = useNavigate();
  const [openInfoOut, setOpenInfoOut] = useState(false);
  const { signout } = useContext(AuthContext);

  return (
    <Container>
      <OutInfo
        isOpen={openInfoOut}
        handleCancelBtnClick={() => {
          setOpenInfoOut(false);
        }}
        handleConfirmBtnClick={signout}
      />
      <NavLeft>
        <Logo width={"12rem"} />
      </NavLeft>
      <NavRight>
        <UserName name={user?.name ? user.name : "Desconhecido"} />
        <UserIcon
          userName={user.name}
          color={"#98ce00"}
          icon={user.avatarUrl !== "" ? user.avatarUrl : null}
          handleOnClick={() => {
            setMenuHeight(menuHeight === 0 ? 7 : 0);
          }}
        />

        <MenuBar height={menuHeight}>
          {profile ? (
            <ul>
              <li
                title="Ir para o início"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Início
              </li>
              <li
                title="Terminar sessão"
                onClick={() => {
                  setOpenInfoOut(true);
                }}
              >
                Sair
              </li>
            </ul>
          ) : (
            <ul>
              <li
                title="Ir para o perfil"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Perfil
              </li>
              <li
                title="Terminar sessão"
                onClick={() => {
                  setOpenInfoOut(true);
                }}
              >
                Sair
              </li>
            </ul>
          )}
        </MenuBar>
      </NavRight>
    </Container>
  );
}
