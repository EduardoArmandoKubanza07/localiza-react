import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  width: 27rem;
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

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #f5f5f5;
  height: 2.7rem;
  width: 23rem;
  transition: all 0.3s;
  padding: 0 1rem;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    font-size: 0.9rem;
  }
`;

export const Gender = styled.div`
  background-color: #f5f5f5;
  height: 2.7rem;
  width: 23rem;
  transition: all 0.3s;
  padding: 0 1rem;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;

  > select {
    font-size: 0.9rem;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 2.7rem;
  width: 23rem;
  transition: all 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  color: #fff;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
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
