import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  max-width: 100%;
  height: auto;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 650px) {
    width: 26rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
    max-width: 23rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  > section {
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 1rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      width: 50%;
    }
  }
  @media screen and (max-width: 650px) {
    > section {
      flex-direction: column;

      > div {
        width: 100%;
      }
    }
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.input`
  width: 100%;
  height: 2.8rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  padding: 0 0.75rem;
  border: 2px solid #f5f5f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &::placeholder {
    font-size: 0.9rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.textarea`
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  width: 100%;
  height: 8rem;
  padding: 0.7rem 1rem;
  font-size: 0.98rem;
  font-family: sans-serif;
  background-color: #f5f5f5;
  transition: all 0.3s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    font-size: 0.98rem;
    font-family: sans-serif;
  }
`;

export const Gender = styled.div`
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  width: 100%;
  height: 2.8rem;
  padding: 0 0.75rem;
  font-size: 0.98rem;
  font-family: sans-serif;
  background-color: #f5f5f5;
  transition: all 0.3s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  > select {
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 0.95rem;

    &:first-child {
      color: #868686;
    }
  }
`;

export const File = styled.div`
  width: 100%;
  height: 2.8rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  padding: 0 0.75rem;
  border: 2px solid #f5f5f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    display: none;
  }

  > label {
    transition: all 0.3s;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 1.5rem;
    }
  }

  > p {
    color: #868686;
    font-weight: 400;
    font-size: 0.98rem;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
export const ResetButtom = styled.button.attrs({
  type: "reset",
})`
  width: 50%;
  height: 2.8rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.04rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;

export const SendtButtom = styled.button.attrs({
  type: "button",
})`
  width: 50%;
  height: 2.8rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.04rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;

export const Exit = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  background-color: transparent;
  font-size: 1.05rem;
`;

export const SuccessCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 35rem;
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const Btn = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.09rem;
  transition: all 0.3s;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  width: 10rem;

  margin: 0 auto;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NotSuccesCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 40rem;
  padding: 2.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  > p {
    font-size: 1.2rem;
    font-weight: 600;
  }

  > div {
    display: flex;
    gap: 1rem;

    margin-top: 1rem;

    > button {
      width: 12rem;
      height: 2.6rem;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 0.5rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) 0.2;
      font-weight: 600;
      font-size: 1.04rem;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: all 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: #fff;
      }
    }
  }
`;
