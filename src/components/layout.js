import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'

import SEO from './seo'
import Header from './header'
import Footer from './footer'

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
`

const Site = styled.div`
  min-height: 100vh;

  @media only screen and (max-width: 610px) {
    padding-top: 50px;
  }
`

export default ({ children, title }) => (
  <Site>
    <SEO
      title={title}
      keywords={[
        `about`,
        `woodworking`,
        `jenks`,
        `oklahoma`,
        `fine woodworking`,
        `woodturning`,
        `woodworker`,
        `craftsmanship`,
        `art`,
        `semengted`,
        `wood`,
        `art`,
        `craft`,
        `handmade`,
        `etsy`,
      ]}
    />
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </Site>
)
