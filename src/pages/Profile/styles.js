import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Baner = styled.div`
  width: 100%;
  height: 18rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 3%;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 3%;

  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 600;
  font-size: 1.05rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  height: 2.6rem;
  width: 11rem;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
  height: auto;
`;

export const ProfileInfo = styled.div`
  margin-top: 8.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 25rem;
  height: 8rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
