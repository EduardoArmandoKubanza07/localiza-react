import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  > section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    width: 23rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > p {
      font-size: 1.19rem;
      font-weight: 700;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > button {
        transition: all 0.3s;
        width: 48%;
        border-radius: 0.5rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        color: #fff;
        background-color: ${({ theme }) => theme.colors.primary};
        height: 2.2rem;
        border: 1px solid ${({ theme }) => theme.colors.primary};

        font-weight: 600;
        font-size: 1.05rem;

        &:hover {
          background-color: #fff;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
