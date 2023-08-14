import styled, { keyframes } from "styled-components";

const visibility = keyframes`
  0% {
    top: 105%;
  }
  100% {
    top: 88%;
  }
`;

export const Container = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  animation: ${visibility} 01s forwards;
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.primary};

  display: none;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 88%;
  right: 3%;

  &.active {
    display: flex;
  }
`;
