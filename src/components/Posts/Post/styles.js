import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  width: 24.5rem;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-transform: underline;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 18rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
