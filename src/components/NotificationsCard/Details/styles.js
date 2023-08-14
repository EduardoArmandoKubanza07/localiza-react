import styled from "styled-components";

export const Container = styled.div`
  width: 37rem;
  height: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  gap: 1.5rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 18rem;
  height: 18rem;
  margin-left: -9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  > p {
    font-weight: 600;
    font-size: 1.2rem;
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
