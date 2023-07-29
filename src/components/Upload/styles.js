import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  width: 100%;
  max-width: 400px;
  height: 9rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;

  > p {
    font-size: 1.09rem;
    font-weight: 700;
    margin-top: 0.5rem;
    color: #868686;
  }
`;
