import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --darkerGrey: #2A2A2E;
    --darkGray: #333333;
    --white: #FCFCFC;
    --radioactiveGreen: #13ff00;
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
    background-color: var(--darkerGrey);
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

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  *::-webkit-scrollbar {
    width: 9px;
    background: rgba(26, 26, 28, 0.5);
    }
  *::-webkit-scrollbar-thumb {
    background: rgba(82, 82, 84, 0.7);
  }
  *::-webkit-scrollbar-thumb:hover {
    background: rgba(82, 82, 84, 0.9)
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }
`