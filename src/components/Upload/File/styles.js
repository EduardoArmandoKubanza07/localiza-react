import styled from "styled-components";

export const Container = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ddd;
    max-width: 100%;

    a {
      margin-left: 1.5rem;
      font-size: 1.5rem;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 90%;

    span {
      font-size: 0.8rem;
      color: #999;
      margin-top: 0.2rem;

      button {
        background-color: transparent;
        color: #e57878;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 3rem;
  height: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-right: 1rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
