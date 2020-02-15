import { createGlobalStyle, css } from 'styled-components'

import storeTemplate from './storeTemplate'
import gallery from './gallery'
import header from './header'
import vars from './vars'
import reset from './reset'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Quattrocento&display=swap');

  ${reset};
  ${vars};

  body {
    font-family: var(--font-base-family, sans-serif);
    background: var(--color-light);
    color: var(--color-text);
    padding: var(--metric-gutter, 2rem);
    font-family: var(--font-heading-family);
    margin: 0;
    padding: 0;
    background-color: var(--deep);

    p {
      font-family: var(--font-base-family);
      line-height: 1.4;
      font-size: 1.25rem;
    }

    a {
      text-decoration: none;
    }
  }

  h1 {
    font-family: var(--font-heading-family, sans-serif);
    font-weight: 900;
    font-size: 2.25rem;
    color: var(--blood);
    line-height: 1.1;
    text-align: center;
  }

  @media screen and (-ms-high-contrast: active) {
    input[type],
    button {
      border: 1px solid;
    }
  }

  ${header};
  ${gallery};
  ${storeTemplate};
`

export default GlobalStyles
