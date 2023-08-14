import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;

  width: 100%;
  height: 4.5rem;
  padding: 0 4%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  > section {
    position: relative;
  }
`;

export const SearchBar = styled.div`
  width: 20rem;
  height: 2.6rem;
  background-color: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  padding: 0 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    > svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > svg {
    font-size: 0.95rem;
    color: #868686;
  }

  > input {
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    background-color: transparent;

    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;

export const SearchResult = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 20rem;
  padding: 1rem;
  position: absolute;
  top: 2.57rem;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0, 0.2);

  display: none;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-weight: 600;
    font-size: 1.2rem;
  }

  &.active {
    display: block;
  }
`;

export const MenuBar = styled.div`
  width: 13rem;
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
    gap: 0.3rem;
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
