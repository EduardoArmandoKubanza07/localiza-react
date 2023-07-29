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
`;
