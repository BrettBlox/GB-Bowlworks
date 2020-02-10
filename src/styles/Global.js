import styled, { createGlobalStyle } from 'styled-components'

import storeTemplate from './storeTemplate'
import gallery from './gallery'
import header from './header'
import vars from './vars'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Quattrocento&display=swap');
  body {
    font-family: 'Cinzel', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #173e43;

    p {
      font-family: 'Quattrocento', serif;
    }

    a {
      text-decoration: none;
    }

  }
  ${vars}
  ${header}
  ${storeTemplate}
  ${gallery}
`

export default GlobalStyles
