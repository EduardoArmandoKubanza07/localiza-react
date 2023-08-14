import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 6rem 4% 2rem 4%;

  display: flex;
  justify-content: center;
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 20rem;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  height: auto;
  max-height: 80vh;

  position: fixed;
  top: 6rem;
  left: 4%;

  > button {
    width: 100%;
    height: 2.6rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 1.3rem;
    transition: all 0.3s;
    border-radius: 0.3rem;
    border-left: 3px solid transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundPrimary};
      border-left-color: ${({ theme }) => theme.colors.primary};
      padding: 1rem;
    }

    > svg {
      font-size: 1.3rem;
    }
  }

  > div {
    width: 100%;
    height: auto;
    margin-top: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    > h1 {
      font-size: 1.3rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 0.3rem;
    }

    ul {
      list-style: none;

      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      margin: 0.5rem;

      > li {
        width: 100%;
        height: 2rem;
        font-weight: 500;
        font-size: 1.08rem;
        transition: all 0.3s;
        cursor: pointer;
        border-left: 3px solid transparent;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 0.3rem;
        margin-bottom: 0.1rem;

        &:hover {
          background-color: ${({ theme }) => theme.colors.backgroundPrimary};
          border-left-color: ${({ theme }) => theme.colors.primary};
          padding: 1rem;
        }

        &.active {
          background-color: ${({ theme }) => theme.colors.backgroundPrimary};
          border-left-color: ${({ theme }) => theme.colors.primary};
          padding: 0.5rem;
        }
      }
    }

    > button {
      width: 100%;
      height: 2.1rem;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
      font-size: 1.1rem;
      transition: all 0.3s;
      border-radius: 0.3rem;
      border-left: 3px solid transparent;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.3rem;

      &.active {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        border-left-color: ${({ theme }) => theme.colors.primary};
        padding: 0.5rem;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        border-left-color: ${({ theme }) => theme.colors.primary};
        padding: 1rem;
      }
    }
  }
`;
