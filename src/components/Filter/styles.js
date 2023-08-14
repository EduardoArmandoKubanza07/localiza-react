import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  width: 25rem;

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
`;

export const Button = styled.button`
  width: 6rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.98rem;
  transition: all 0.3s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  > svg {
    font-size: 1.1rem;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 2.6rem;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  padding: 0 1rem;
  transition: all 0.3s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    > svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > svg {
    font-size: 0.9rem;
    color: #868686;
    transition: all 0.2;
  }

  > input {
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;

    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;
