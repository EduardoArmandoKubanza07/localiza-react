import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 22rem;
  height: auto;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -3.5rem;

    > svg {
      cursor: pointer;
      transition: all 0.3s;
    }
  }

  > section {
    margin-top: -3rem;
    max-width: 18rem;
    height: auto;

    > p {
      font-weight: 700;
      font-size: 1.1rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      > p {
        font-weight: 700;
        font-size: 1.2rem;
      }

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.1rem;
        font-weight: 550;
        transition: all 0.3s;
        border-bottom: 1px solid transparent;
        width: 13rem;
        margin: 0 auto;

        &:hover {
          border-bottom-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
