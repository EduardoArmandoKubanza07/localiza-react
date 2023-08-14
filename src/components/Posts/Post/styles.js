import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem;
  width: 28rem;
  max-width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;

      > span {
        font-weight: 600;
      }
    }
  }

  > button {
    background-color: transparent;
    font-size: 1.5rem;
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Contacts = styled.button`
  position: absolute;
  right: 1rem;
  top: 3rem;

  font-weight: 600;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 0.6rem 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.primary};

  display: none;

  &.active {
    display: block;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 23rem;
  border-radius: 0.5rem;
`;

export const Description = styled.p`
  font-weight: 600;

  > button {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    font-size: 1rem;
    transition: all 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
