import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  }
  > p {
    font-weight: 600;
    font-size: 1.09rem;
  }

  > img {
    width: 2.9rem;
    height: 2.8em;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 00, 0.2);
  }
`;
