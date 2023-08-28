import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --font-family-bold: 'Rubik-bold';
  --font-family-normal: 'Rubik-normal';

  --color-background: #FFFFFF;
  --color-background-searchBox: #F1F1F1;
  --color-hint: #ACACAC;
  --color-text: #48484A;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}

@font-face {
  font-family: 'Rubik-bold';
  src: url('../fonts/Rubik-Bold.woff2') format('woff2'),
    url('../fonts/Rubik-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Rubik-normal';
  src: url('../fonts/Rubik-Regular.woff2') format('woff2'),
    url('../fonts/Rubik-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: var(--font-family-normal), 'sans-serif';
  font-weight: normal;
  background-color: var(--color-background);
}
`

export default GlobalStyle
