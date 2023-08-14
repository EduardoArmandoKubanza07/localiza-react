import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  height: auto;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-weight: 700;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 650px) {
    padding: 3rem 1.5rem;
    max-width: 400px;

    > button {
      max-width: 20rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 3rem 1rem;
    max-width: 350px;
  }
`;

export const FirstButtom = styled.button`
  width: 25rem;
  height: 2.8rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
  }
`;

export const SecondButton = styled.button`
  width: 25rem;
  height: 2.8rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Exit = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 1.05rem;
`;
