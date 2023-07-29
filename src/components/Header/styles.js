import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 4.5rem;
  padding: 0 3%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;

  > div {
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
  }
`;

export const NavLeft = styled.div``;

export const NavRight = styled.div`
  gap: 1rem;
`;
export const MenuBar = styled.div`
  width: 10rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  position: absolute;
  top: 103%;
  right: 3%;
  height: ${({ height }) => height + "rem"};
  overflow: hidden;
  max-height: ${({ height }) => height + "rem"};
  transition: all 0.3s;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    li {
      padding: 0.5rem 1.5rem;
      font-size: 1.09rem;
      font-weight: 700;
      width: 100%;
      cursor: pointer;
      transition: all 0.3s;
      border-left: 3px solid ${({ theme }) => theme.colors.backgroundSecondary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        color: ${({ theme }) => theme.colors.primary};
        padding-left: 0.5rem;
        border-left-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
