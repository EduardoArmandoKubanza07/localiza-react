import styled, { keyframes } from "styled-components";

const circular = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const anime = keyframes`
  0% {
    margin-left: 0;
  } 
  25% {
    margin-left: 1.5rem;
  }

  50% {
    margin-left: 0.75rem;
  }
  75% {
    margin-left: 1.5rem
  }

  100% {
    margin-left: 0;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > p {
    font-weight: 700;
    animation: ${anime} 1s linear infinite;
  }
`;

export const Load = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: 4px solid transparent;
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-right-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  animation: ${circular} 0.7s linear infinite;
`;
