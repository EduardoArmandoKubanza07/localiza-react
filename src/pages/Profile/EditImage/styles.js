import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 38rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`;

export const ImageCard = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  border: 3px solid #f5f5f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  > img,
  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: #dddddd;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  width: 100%;

  input {
    display: none;
  }

  button,
  label {
    font-size: 1.03rem;
    font-weight: 600;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    height: 2.5rem;
    padding: 0 1.5rem;
    transition: all 0.3s;
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background-color: #fff;
    }

    > span {
      font-weight: 700;
    }
  }
`;

export const CloseModal = styled.button`
  background-color: transparent;
  font-size: 1.03rem;
  transition: all 0.3s;

  position: absolute;
  top: 1rem;
  right: 1.5rem;
`;
