import styled, { css, keyframes } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const anime = keyframes`
  0% {
    transform : scale(1)
  }

  100% {
    transform : scale(1.01)
  }
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 2px dashed #ddd;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: height 0.2s ease;

  padding: 1rem;
  width: 100%;
  max-width: 100%;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};

  &:hover {
    animation: ${anime} 1.5s linear infinite;
  }
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  sucess: "#78e5d5",
};
export const UploadMessage = styled.p`
  display: flex;
  font-size: 1.08rem;
  color: ${(props) => messageColors[props.type ?? "default"]};
  justify-content: center;
  align-items: center;
`;
