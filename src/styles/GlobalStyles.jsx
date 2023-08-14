import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }

  html , body , #root {
    font-family: "Raleway", sans-serif;
    font-size: 1.04rem;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.text};
    background-attachment: fixed;
    width: 100%;
    height: 100%;

    @media (max-width: 1080px){
      font-size: 97%;
    }

    @media (max-width: 720px) {
      font-size: 95%;
    }
  }

  textarea {
    resize: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: none;
  }
  
  [disable] {	
	opacity: 0.6;
	cursor: not-allowed;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  .overlay-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);

    position:fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .content-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;
