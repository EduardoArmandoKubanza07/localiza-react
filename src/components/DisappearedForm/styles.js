import styled from "styled-components";

export const Container = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  height: auto;
  width: 45rem;
  max-width: 100%;

  display: none;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  &.active {
    display: flex;
  }

  > section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      > section {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        > span {
          color: red;
          font-size: 0.85rem;
          margin-top: 0.3rem;
          font-weight: 550;
        }
      }
    }
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const File = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background-color: #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 0 1rem;
  height: 2.6rem;
  border: 2px solid #f5f5f5;
  transition: all 0.3s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      cursor: pointer;
      transform: all 0.3s;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > p {
    font-weight: 500;
    color: #868686;
  }

  > input {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.6rem;
  background-color: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 1rem;
  transition: all 0.3s;

  &::placeholder {
    font-size: 0.9rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.textarea`
  width: 100%;
  height: 7rem;
  background-color: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0.6rem 1rem;
  transition: all 0.3s;
  font-family: "Raleway", sans-serif;

  &::placeholder {
    font-size: 0.9rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Gender = styled.select`
  width: 100%;
  height: 2.6rem;
  background-color: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  transition: all 0.3s;
`;

export const AlertInfo = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    > button {
      cursor: pointer;
      transition: all 0.3s;
      width: 50%;
      height: 2.3rem;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      font-size: 1.05rem;
      font-weight: 500;

      &:hover {
        background-color: #fff;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 2.6rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  font-size: 1.04rem;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Sucess = styled.div``;
