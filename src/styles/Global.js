import { createGlobalStyle, css } from 'styled-components'

import storeTemplate from './storeTemplate'
import gallery from './gallery'
import header from './header'
import vars from './vars'
import reset from './reset'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cinzel&display=fallback');
  @import url('https://fonts.googleapis.com/css?family=Quattrocento&display=fallback');

  ${reset};
  ${vars};

  body {
    font-family: var(--font-base-family, sans-serif);
    background: var(--color-light);
    color: var(--color-text);
    padding: var(--metric-gutter, 2rem);
  }

  h1 {
    font-family: var(--font-heading-family, sans-serif);
    font-size: 2rem;
    font-weight: 900;
    color: var(--color-primary);
    line-height: 1.1;
  }

  label {
    color: var(--color-primary);
    text-transform: uppercase;
    font-weight: 700;
  }

  input[type],
  button {
    border: none;
    margin: 0;
    font: inherit;
    line-height: 1;
    padding: 0.8rem;
    padding: var(--metric-interaction-padding);
    outline-offset: -1px;
  }

  @media screen and (-ms-high-contrast: active) {
    input[type],
    button {
      border: 1px solid;
    }
  }

  body {
    font-family: 'Cinzel', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--deep);

    p {
      font-family: 'Quattrocento', serif;
    }

    a {
      text-decoration: none;
    }
  }

/* GLOBAL FOCUS
I’ve just targeted all elements by using :focus as the selector. You could add a * if you want, too. 
This is a great way of setting solid, consistent focus styles across the board.  */
  :focus {
    outline: 1px solid var(--color-primary);
  }


  ${header};
  ${gallery};
  ${storeTemplate};
`

export default GlobalStyles
