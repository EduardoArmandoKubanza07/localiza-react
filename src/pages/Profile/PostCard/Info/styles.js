import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 30rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  > p {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

export const CloseModal = styled.button`
  background-color: transparent;
  font-size: 1.03rem;
  transition: all 0.3s;

  position: absolute;
  top: 1rem;
  right: 1.5rem;
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1.05rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  height: 2.4rem;
  width: 11rem;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
  }
`;
