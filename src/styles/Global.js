import { createGlobalStyle, css } from 'styled-components'

import gallery from './gallery'
import vars from './vars'
import reset from './reset'
import utils from './utils'

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${vars};
  ${utils};

  body {
    font-family: var(--font-base-family, sans-serif);
    background: var(--color-light);
    color: var(--color-text);
    padding: var(--metric-gutter, 2rem);
    font-family: var(--font-heading-family);
    margin: 0;
    padding: 0;
    background-color: var(--deep);
    position: relative;

    p {
      font-family: var(--font-base-family);
      line-height: 1.4;
      font-size: 1.25rem;
    }

    a {
      text-decoration: none;
    }
  }

  h1, h2 {
    font-family: var(--font-heading-family, sans-serif);
    font-weight: 700;
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
  ${gallery};
`

export default GlobalStyles
