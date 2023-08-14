import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 6rem;
  right: 4%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 20rem;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  height: auto;
  max-width: 80vh;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > p {
    font-weight: 600;
    font-size: 1.06rem;
  }
`;
