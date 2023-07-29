import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  width: 35rem;
  height: auto;
  padding: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-left: -10rem;
  height: 17rem;
  width: 17rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  > p {
    font-size: 1.27rem;
    font-weight: 600;
  }
`;
