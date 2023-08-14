import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  transition: all 0.3s;
  padding: 0.2rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;

  > p {
    font-size: 1rem;
    font-weight: 500;
    > span {
      font-weight: 600;
      font-size: 1rem;
    }

    > button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: 1px solid transparent;
      transition: all 0.2s;
      font-size: 0.9rem;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;
