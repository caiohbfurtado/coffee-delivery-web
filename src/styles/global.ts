import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.branding['purple-medium']};
  }

  body {
    background: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.fontFamily.text};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`
