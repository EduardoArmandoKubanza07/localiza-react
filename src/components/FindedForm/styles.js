import styled, { keyframes } from "styled-components";

const visibility = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
  display: none;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  animation: ${visibility} 1s forwards;
  width: 100%;
  height: 100%;

  &.active {
    display: flex;
  }

  > div {
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

    > h1 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
