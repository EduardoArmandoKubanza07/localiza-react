import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  max-width: 94%;
  height: 22rem;
  max-height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  transition: all 0.3s;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 26rem;
    height: auto;
  }
`;

export const LeftCard = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1rem;

  > h1 {
    color: #fff;
    font-size: 1.6rem;
  }

  > p {
    font-size: 1.05rem;
    text-align: center;
    font-weight: 500;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 45%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const SignUpButton = styled.button.attrs({
  type: "button",
})`
  width: 11rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid #fff;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RightCard = styled.div`
  width: 55%;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1rem;

  > h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
    margin-bottom: -0.5rem;
  }

  > p {
    font-size: 1.05rem;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 55%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > section {
    display: flex;
    flex-direction: column;

    > span {
      margin-top: 0.3rem;
      font-size: 0.8rem;
      color: #f00;
      font-weight: 550;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      > label {
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0 1.1rem;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  width: 100%;
  height: 2.7rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  border: 2px solid #f5f5f5;
  transition: all 0.3s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    > svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > svg {
    color: #868686;
    font-size: 1.3rem;
  }

  > input {
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    background-color: transparent;
  }
`;

export const SignInButton = styled(SignUpButton).attrs({
  type: "submit",
})`
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
