import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% {
        top: 102%;
    }

    100% {
        top: 88%;
    }
`;

export const Container = styled.div`
  position: fixed;
  top: 88%;
  right: 3%;
  z-index: 55;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  animation: ${animate} 1.3s ease-in forwards;

  &.active {
    display: flex;
  }
`;
