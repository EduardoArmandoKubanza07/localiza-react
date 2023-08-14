import styled from "styled-components";

export const Container = styled.div`
  width: 26.5rem;
  height: auto;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  > p {
    font-weight: 600;
    font-size: 1.25rem;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    > p {
      font-weight: 600;
      font-size: 1.1rem;
    }

    > button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1rem;
      font-weight: 500;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;

export const CloseModal = styled.button`
  background-color: transparent;
  font-size: 1.03rem;
  transition: all 0.3s;

  position: absolute;
  top: 1rem;
  right: 1rem;
`;
