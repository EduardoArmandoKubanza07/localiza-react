import styled from "styled-components";

export const Container = styled.img`
  margin-left: -1rem;
  height: 10rem;
  width: ${({ width }) => width + "rem"};
`;
