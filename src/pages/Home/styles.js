import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 6rem 3% 0 3%;

  position: relative;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const SideBar = styled.div`
  width: 20rem;
  position: fixed;
  left: 3%;
  top: 6rem;
  height: auto;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > li {
      font-weight: 650;
      font-size: 1.12rem;
      padding-left: 2rem;
      height: 2.3rem;
      width: 100%;
      cursor: pointer;
      border-left: 4px solid transparent;
      transition: all 0.3s;

      display: flex;
      align-items: center;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        border-left-color: ${({ theme }) => theme.colors.primary};
        padding-left: 0.5rem;
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        border-left-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Content = styled.section`
  width: calc(100% - 27rem);
  height: 100%;
  position: absolute;
  right: 3%;
  top: 6rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
