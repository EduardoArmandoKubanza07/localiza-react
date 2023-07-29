import styled from "styled-components";

export const Container = styled.img.attrs({
  alt: "Localiza",
})`
  margin-left: -1rem;
  height: 9.5rem;
  width: ${(props) => props.width};
`;
