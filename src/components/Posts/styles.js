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
  animation: ${visibility} 1s forwards;
  width: 100%;
  height: 100%;

  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &.active {
    display: flex;
  }
`;

export const Filter = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > section > div {
    position: absolute;
    z-index: 50;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    width: 13rem;
    height: ${(props) => props.height + "rem"};
    margin-top: 0.2rem;
    transition: height 0.4s;
    overflow: hidden;

    > ul {
      padding: 0.7rem 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      > li {
        font-weight: 600;
        font-size: 1.09rem;
        cursor: pointer;
        transition: all 0.3s;
        height: 2rem;
        padding-left: 1.5rem;
        border-left: 3px solid transparent;

        display: flex;
        align-items: center;

        &:hover {
          padding-left: 0.5rem;
          background-color: ${({ theme }) => theme.colors.backgroundPrimary};
          color: ${({ theme }) => theme.colors.primary};
          border-left-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  > section > button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    height: 2.5rem;
    width: 7rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-size: 1.05rem;
    font-weight: 600;

    > svg {
      font-size: 1.1rem;
    }
  }

  > div {
    border: 2px solid #fff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    height: 2.6rem;
    width: 25rem;
    transition: all 0.3s;
    padding: 0 1rem;
    background-color: #fff;

    display: flex;
    align-items: center;

    > svg {
      color: #868686;
      font-size: 0.99rem;
    }

    > input {
      width: 100%;
      height: 100%;
      padding-left: 0.5rem;

      &::placeholder {
        font-size: 0.9rem;
      }
    }

    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary};

      > svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;
