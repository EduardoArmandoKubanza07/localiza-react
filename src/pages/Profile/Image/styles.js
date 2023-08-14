import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: 11.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  > img,
  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #dddddd;
    transition: all 0.3s;
    border-radius: 50%;
  }
`;
