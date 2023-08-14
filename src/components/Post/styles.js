import styled from "styled-components";

export const Container = styled.div`
  width: 25rem;
  height: auto;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 01rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 18rem;
  border-radius: 0.5rem;
`;

export const Date = styled.p`
  font-size: 0.96rem;
  font-weight: 500;
`;

export const Description = styled.div`
  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    transition: all 0.3s;
    border-bottom: 1px solid transparent;
    margin-left: 0.3rem;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
