import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 0 3%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;
`;
