import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #2A2A2E;
    --white: #FCFCFC;
    --radiativeGreen: #13ff00;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body { 
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-size: 400;
  }

  p, span, legend {
    color: var(--white);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`