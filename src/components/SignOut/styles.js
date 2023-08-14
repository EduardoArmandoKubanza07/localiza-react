import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: auto;
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

export const ConfirmBtn = styled.button`
  width: 13rem;
  height: 2.6rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Exit = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 1.05rem;
`;
