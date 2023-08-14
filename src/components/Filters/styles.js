import styled from "styled-components";

export const Container = styled.div`
  width: 28rem;
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  > section {
    position: relative;
  }
`;

export const FilterButton = styled.button`
  transition: all 0.3s;
  width: 8rem;
  height: 2.6rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
  }
`;

export const SearchInut = styled.div`
  width: 100%;
  height: 2.8rem;
  padding: 0 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 0.5rem;
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
    color: #868686;
    font-size: 0.9rem;
  }

  > input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding-left: 0.5rem;

    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;

export const Filter = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 15rem;
  max-height: ${({ height }) => height};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s;

  position: absolute;
  top: 3rem;
  z-index: 10;

  ul {
    padding: 1rem;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    li {
      &.active {
        border-left-color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        padding-left: 1rem;
      }
    }

    > li {
      width: 100%;
      height: 2.1rem;
      border-radius: 0.3rem;
      transition: all 0.3s;
      border-left: 4px solid transparent;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;

      display: flex;
      align-items: center;

      &:hover {
        border-left-color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        padding-left: 1rem;
      }
    }
  }
`;

export const StateGender = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: -1rem;
  overflow: hidden;

  width: 100%;

  > li {
    width: 100%;
  }
`;

export const StateD = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: -1rem;

  width: 100%;

  > li {
    width: 100%;
  }
`;
