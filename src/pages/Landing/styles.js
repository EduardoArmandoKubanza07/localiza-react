import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  padding: 0 3%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    > a {
      font-size: 1.2rem;
      font-weight: 700;
      transition: all 0.3s;
      border-bottom: 3px solid transparent;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        padding-bottom: 0.4rem;
        border-bottom-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Button = styled.button.attrs({
  type: "button",
})`
  width: 8rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
  }
`;

export const Main = styled.main`
  width: 94%;
  height: auto;
  margin: 4.5rem 3% 2rem 3%;

  display: flex;
  flex-direction: column;
`;

export const Baner = styled.div`
  width: 100%;
  height: 65vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    > h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2.5rem;
    }

    > h2 {
      font-size: 1.55rem;
    }

    > p {
      font-weight: 650;
      font-size: 1.1rem;
    }

    > button {
      width: 20rem;
      height: 2.7rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      font-size: 1.1rem;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      transition: all 0.3s;
      margin-top: 0.5rem;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: #fff;
      }
    }
  }

  > img {
    width: 40%;
    height: 24rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

export const AllPosts = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
`;
